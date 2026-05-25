"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { ColorAccent } from "@/shared/types";

interface ProgressBarProps {
  value: number;
  color?: ColorAccent;
  height?: "sm" | "md";
  showLabel?: boolean;
  delay?: number;
}

const gradientMap: Record<ColorAccent, string> = {
  cyan: "from-cyan-500 to-blue-500",
  purple: "from-purple-500 to-violet-500",
  blue: "from-blue-500 to-cyan-500",
  green: "from-emerald-500 to-teal-400",
  amber: "from-amber-500 to-orange-400",
  pink: "from-pink-500 to-rose-400",
};

const glowMap: Record<ColorAccent, string> = {
  cyan: "shadow-[0_0_12px_rgba(0,212,255,0.6)]",
  purple: "shadow-[0_0_12px_rgba(168,85,247,0.6)]",
  blue: "shadow-[0_0_12px_rgba(59,130,246,0.6)]",
  green: "shadow-[0_0_12px_rgba(16,212,160,0.6)]",
  amber: "shadow-[0_0_12px_rgba(245,158,11,0.6)]",
  pink: "shadow-[0_0_12px_rgba(236,72,153,0.6)]",
};

export function ProgressBar({
  value,
  color = "cyan",
  height = "sm",
  showLabel = false,
  delay = 0,
}: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  const h = height === "sm" ? "h-1.5" : "h-2";
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div ref={ref} className="w-full">
      {showLabel && (
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs text-text-muted font-mono">Progress</span>
          <span className="text-xs font-mono text-text-secondary">{clamped}%</span>
        </div>
      )}
      <div className={`w-full ${h} bg-bg-border rounded-full overflow-hidden`}>
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${gradientMap[color]} ${glowMap[color]}`}
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: clamped / 100 } : { scaleX: 0 }}
          transition={{
            type: "spring",
            stiffness: 55,
            damping: 14,
            delay: delay + 0.2,
          }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </div>
  );
}
