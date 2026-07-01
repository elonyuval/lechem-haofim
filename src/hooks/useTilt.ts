// Mouse-position-driven 3D tilt, shared by the Hero banner and ProductCard.
// Disabled on small screens (no hover) and when the user prefers reduced motion.

import { useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import type { MouseEvent } from "react";
import { useIsSmallScreen, usePrefersReducedMotion } from "./useMediaQuery";

export interface TiltHandlers {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  onMouseMove: (e: MouseEvent<HTMLElement>) => void;
  onMouseLeave: () => void;
  enabled: boolean;
}

export function useTilt(maxDegrees = 10): TiltHandlers {
  const isSmallScreen = useIsSmallScreen();
  const prefersReducedMotion = usePrefersReducedMotion();
  const enabled = !isSmallScreen && !prefersReducedMotion;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxDegrees, -maxDegrees]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxDegrees, maxDegrees]), {
    stiffness: 200,
    damping: 20,
  });

  function onMouseMove(e: MouseEvent<HTMLElement>) {
    if (!enabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return { rotateX, rotateY, onMouseMove, onMouseLeave, enabled };
}
