// The opening "story" sequence: an AI-generated clip (oven -> pizza -> croissant
// -> savory pastry) exported as a frame sequence and scrubbed by scroll
// position. Three beats carry text: an intro brand moment, a mid-transform
// variety line, and a closing moment tied to the real "baked goods" category
// (the closest real category to what the final frames show).

import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { LinkButton } from "../ui/LinkButton";
import { businessInfo } from "../../data/businessInfo";
import { categories } from "../../data/categories";
import { ROUTES } from "../../lib/constants";
import { useScrollFrameSequence } from "../../hooks/useScrollFrameSequence";
import { usePrefersReducedMotion, useIsSmallScreen } from "../../hooks/useMediaQuery";

const FRAME_COUNT = 60;
// Two separately-shot/exported sequences: a landscape framing for desktop and
// a portrait (9:16) framing for mobile, so the subject isn't cropped oddly.
const FRAMES_BASE_PATH_DESKTOP = "/video/frames/frame-";
const FRAMES_BASE_PATH_MOBILE = "/video/frames-mobile/frame-";

export function VideoScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isSmallScreen = useIsSmallScreen();
  const bakedGoods = categories.find((c) => c.slug === "baked-goods");
  const framesBasePath = isSmallScreen ? FRAMES_BASE_PATH_MOBILE : FRAMES_BASE_PATH_DESKTOP;

  const { scrollYProgress } = useScrollFrameSequence({
    frameCount: FRAME_COUNT,
    basePath: framesBasePath,
    containerRef,
    canvasRef,
  });

  // Beat 1 (0-32%): oven + flames + plain pizza -> brand intro text.
  const introOpacity = useTransform(scrollYProgress, [0, 0.2, 0.32], [1, 1, 0]);
  // Beat 2 (36-68%): the transformation itself -> a line about variety, one oven.
  const transformOpacity = useTransform(scrollYProgress, [0.36, 0.44, 0.6, 0.68], [0, 1, 1, 0]);
  // Beat 3 (72-100%): final pastry revealed -> real "baked goods" CTA.
  const finalOpacity = useTransform(scrollYProgress, [0.72, 0.85, 1], [0, 1, 1]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  if (prefersReducedMotion) {
    return (
      <section className="relative flex h-[70vh] items-center justify-center overflow-hidden bg-black text-center text-white">
        <img
          src={`${framesBasePath}060.jpg`}
          alt="לחם האופים - מאפים ישר מהתנור"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6">
          <h1 className="mb-4 font-display text-4xl md:text-5xl">{businessInfo.businessNameHe}</h1>
          <p className="mb-6 text-lg">{businessInfo.kashrut.statementHe} · מאפים טריים ישר מהתנור</p>
          {bakedGoods && (
            <LinkButton to={ROUTES.menuCategory(bakedGoods.slug)}>לתפריט המאפים</LinkButton>
          )}
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative h-[300vh] md:h-[350vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="לחם האופים - מהטאבון אליכם"
          className="absolute inset-0 h-full w-full"
        />

        {/* Legibility gradients - the bottom one also covers the source clip's AI-tool watermark. */}
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 to-transparent" />

        <motion.div
          style={{ opacity: introOpacity }}
          className="absolute inset-x-0 top-1/4 px-6 text-center text-white"
        >
          <p className="mb-3 text-sm font-semibold tracking-wide text-crust-200">
            {businessInfo.kashrut.statementHe} · {businessInfo.address.city}
          </p>
          <h1 className="font-display text-4xl drop-shadow-lg md:text-6xl">
            {businessInfo.businessNameHe}
          </h1>
          <p className="mt-3 text-lg text-crust-100">ישר מהטאבון אליכם</p>
        </motion.div>

        <motion.div
          style={{ opacity: transformOpacity }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 text-center text-white"
        >
          <h2 className="font-display text-3xl drop-shadow-lg md:text-5xl">
            כל מאפה שאתם אוהבים,
            <br />
            יוצא מאותו תנור
          </h2>
        </motion.div>

        <motion.div
          style={{ opacity: finalOpacity }}
          className="absolute inset-x-0 bottom-16 px-6 text-center text-white md:bottom-20"
        >
          <h2 className="mb-4 font-display text-3xl drop-shadow-lg md:text-4xl">
            מאפים טריים, ישר מהתנור
          </h2>
          {bakedGoods && (
            <LinkButton to={ROUTES.menuCategory(bakedGoods.slug)}>לתפריט המאפים</LinkButton>
          )}
        </motion.div>

        <motion.div
          style={{ opacity: scrollHintOpacity }}
          className="absolute inset-x-0 bottom-6 flex justify-center text-white"
        >
          <span className="animate-bounce text-sm">גללו למטה ↓</span>
        </motion.div>
      </div>
    </section>
  );
}
