// Maps scroll progress across a tall container to a frame index in a
// pre-rendered image sequence (extracted from a source video via ffmpeg),
// giving an Apple-style "scroll scrubs the video" effect without needing
// to seek an actual <video> element.

import { useEffect, useRef, useState, type RefObject } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

interface Options {
  frameCount: number;
  basePath: string;
  extension?: string;
  padLength?: number;
  containerRef: RefObject<HTMLElement>;
}

function frameSrc(basePath: string, index: number, padLength: number, extension: string) {
  return `${basePath}${String(index + 1).padStart(padLength, "0")}.${extension}`;
}

export function useScrollFrameSequence({
  frameCount,
  basePath,
  extension = "jpg",
  padLength = 3,
  containerRef,
}: Options) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const [frameIndex, setFrameIndex] = useState(0);
  const preloadedRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    preloadedRef.current = Array.from({ length: frameCount }, (_, i) => {
      const img = new Image();
      img.src = frameSrc(basePath, i, padLength, extension);
      return img;
    });
  }, [frameCount, basePath, extension, padLength]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const nextIndex = Math.min(frameCount - 1, Math.max(0, Math.round(value * (frameCount - 1))));
    setFrameIndex(nextIndex);
  });

  return {
    scrollYProgress,
    currentSrc: frameSrc(basePath, frameIndex, padLength, extension),
  };
}
