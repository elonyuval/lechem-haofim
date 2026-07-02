// Maps scroll progress across a tall container to a frame index in a
// pre-rendered image sequence (extracted from a source video via ffmpeg),
// giving an Apple-style "scroll scrubs the video" effect without needing
// to seek an actual <video> element.
//
// Frames are drawn onto a <canvas> imperatively (via refs), NOT through
// React state - scroll fires this many times per second, and routing that
// through setState/re-render was what made the effect feel choppy.

import { useCallback, useEffect, useRef, type RefObject } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

interface Options {
  frameCount: number;
  basePath: string;
  extension?: string;
  padLength?: number;
  containerRef: RefObject<HTMLElement>;
  canvasRef: RefObject<HTMLCanvasElement>;
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
  canvasRef,
}: Options) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentIndexRef = useRef(0);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const targetWidth = Math.round(canvas.clientWidth * dpr);
    const targetHeight = Math.round(canvas.clientHeight * dpr);
    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    }
  }, [canvasRef]);

  const drawFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      const img = imagesRef.current[index];
      if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      resizeCanvas();
      const canvasW = canvas.width;
      const canvasH = canvas.height;
      const imgW = img.naturalWidth;
      const imgH = img.naturalHeight;
      const canvasAspect = canvasW / canvasH;
      const imgAspect = imgW / imgH;

      // object-fit: cover, implemented as a source crop rectangle.
      let sx: number, sy: number, sw: number, sh: number;
      if (imgAspect > canvasAspect) {
        sh = imgH;
        sw = imgH * canvasAspect;
        sx = (imgW - sw) / 2;
        sy = 0;
      } else {
        sw = imgW;
        sh = imgW / canvasAspect;
        sx = 0;
        sy = (imgH - sh) / 2;
      }
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvasW, canvasH);
    },
    [canvasRef, resizeCanvas],
  );

  useEffect(() => {
    let cancelled = false;
    imagesRef.current = Array.from({ length: frameCount }, (_, i) => {
      const img = new Image();
      img.decoding = "async";
      img.src = frameSrc(basePath, i, padLength, extension);
      if (i === 0) {
        img.onload = () => {
          if (!cancelled) drawFrame(0);
        };
      }
      return img;
    });
    return () => {
      cancelled = true;
    };
  }, [frameCount, basePath, extension, padLength, drawFrame]);

  useEffect(() => {
    const onResize = () => drawFrame(currentIndexRef.current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [drawFrame]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const nextIndex = Math.min(frameCount - 1, Math.max(0, Math.round(value * (frameCount - 1))));
    currentIndexRef.current = nextIndex;
    drawFrame(nextIndex);
  });

  return { scrollYProgress };
}
