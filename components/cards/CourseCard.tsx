"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { getIcon } from "@/lib/icons";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { cardVariants, springSnappy } from "@/animations/variants";
import { cn } from "@/lib/utils";
import type { Course, ColorAccent } from "@/types";

interface CourseCardProps {
  course: Course;
  index?: number;
}

const colorConfig: Record<
  ColorAccent,
  {
    icon: string;
    badge: string;
    glow: string;
    border: string;
    mesh: string;
  }
> = {
  cyan: {
    icon: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20",
    badge: "text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20",
    glow: "hover:shadow-glow-cyan",
    border: "hover:border-accent-cyan/30",
    mesh: "bg-mesh-1",
  },
  purple: {
    icon: "bg-accent-purple/10 text-accent-purple border-accent-purple/20",
    badge: "text-accent-purple bg-accent-purple/10 border-accent-purple/20",
    glow: "hover:shadow-glow-purple",
    border: "hover:border-accent-purple/30",
    mesh: "bg-mesh-2",
  },
  green: {
    icon: "bg-accent-green/10 text-accent-green border-accent-green/20",
    badge: "text-accent-green bg-accent-green/10 border-accent-green/20",
    glow: "hover:shadow-glow-green",
    border: "hover:border-accent-green/30",
    mesh: "bg-mesh-3",
  },
  amber: {
    icon: "bg-accent-amber/10 text-accent-amber border-accent-amber/20",
    badge: "text-accent-amber bg-accent-amber/10 border-accent-amber/20",
    glow: "hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]",
    border: "hover:border-amber-500/30",
    mesh: "bg-mesh-4",
  },
  blue: {
    icon: "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
    badge: "text-accent-blue bg-accent-blue/10 border-accent-blue/20",
    glow: "hover:shadow-glow-blue",
    border: "hover:border-accent-blue/30",
    mesh: "bg-mesh-1",
  },
  pink: {
    icon: "bg-accent-pink/10 text-accent-pink border-accent-pink/20",
    badge: "text-accent-pink bg-accent-pink/10 border-accent-pink/20",
    glow: "hover:shadow-[0_0_20px_rgba(236,72,153,0.15)]",
    border: "hover:border-pink-500/30",
    mesh: "bg-mesh-2",
  },
};

export function CourseCard({ course, index = 0 }: CourseCardProps) {
  const [hovered, setHovered] = useState(false);
  const Icon = getIcon(course.icon_name);
  const color = (course.color as ColorAccent) ?? "cyan";
  const cfg = colorConfig[color];
  const isComplete = course.progress >= 100;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ scale: 1.018, y: -2 }}
      transition={springSnappy}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={cn(
        "relative rounded-2xl overflow-hidden cursor-pointer group",
        "border border-bg-border bg-bg-elevated",
        "transition-all duration-300",
        cfg.glow,
        cfg.border
      )}
    >
      {/* Mesh gradient */}
      <div className={cn("absolute inset-0 opacity-40 transition-opacity duration-300", cfg.mesh, hovered && "opacity-70")} />

      {/* Hover shimmer edge */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 60%)",
        }}
      />

      {/* Top border glow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={cn("p-2.5 rounded-xl border", cfg.icon)}>
            <Icon size={18} strokeWidth={1.8} />
          </div>

          <div className="flex items-center gap-2">
            {isComplete ? (
              <span className={cn("flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full border", cfg.badge)}>
                <CheckCircle2 size={11} />
                Done
              </span>
            ) : (
              <span className={cn("text-xs font-mono font-bold px-2 py-1 rounded-full border", cfg.badge)}>
                {course.progress}%
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-text-primary mb-1 leading-snug line-clamp-2 group-hover:text-white transition-colors duration-150">
          {course.title}
        </h3>

        <p className="text-xs text-text-muted mb-4">
          {isComplete
            ? "Course completed 🎉"
            : `${100 - course.progress}% remaining`}
        </p>

        {/* Progress bar */}
        <ProgressBar value={course.progress} color={color} delay={index * 0.08} />

        {/* Footer CTA */}
        <motion.div
          className="flex items-center gap-1 mt-4 text-xs font-medium"
          animate={{ opacity: hovered ? 1 : 0.5, x: hovered ? 2 : 0 }}
          transition={springSnappy}
        >
          <span className={cn("transition-colors", hovered ? "text-text-primary" : "text-text-muted")}>
            {isComplete ? "Review course" : "Continue learning"}
          </span>
          <ChevronRight size={12} className={cn(hovered ? "text-text-primary" : "text-text-muted")} />
        </motion.div>
      </div>
    </motion.article>
  );
}
