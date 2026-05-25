"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { cardVariants, springSnappy } from "@/animations/variants";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  iconName: string;
  trend?: number;
  color?: "cyan" | "purple" | "green" | "amber";
}

const colorMap = {
  cyan: {
    icon: "text-accent-cyan",
    bg: "bg-accent-cyan/10",
    border: "border-accent-cyan/20",
    glow: "hover:shadow-glow-cyan hover:border-accent-cyan/30",
  },
  purple: {
    icon: "text-accent-purple",
    bg: "bg-accent-purple/10",
    border: "border-accent-purple/20",
    glow: "hover:shadow-glow-purple hover:border-accent-purple/30",
  },
  green: {
    icon: "text-accent-green",
    bg: "bg-accent-green/10",
    border: "border-accent-green/20",
    glow: "hover:shadow-glow-green hover:border-accent-green/30",
  },
  amber: {
    icon: "text-accent-amber",
    bg: "bg-accent-amber/10",
    border: "border-amber-500/20",
    glow: "hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] hover:border-amber-500/30",
  },
};

export function StatsCard({
  title,
  value,
  subtitle,
  iconName,
  trend,
  color = "cyan",
}: StatsCardProps) {
  const cfg = colorMap[color];
  const Icon = getIcon(iconName);

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.025, y: -2 }}
      transition={springSnappy}
      className={cn(
        "relative rounded-2xl border bg-bg-elevated p-4 overflow-hidden",
        "transition-all duration-300 cursor-default",
        cfg.border,
        cfg.glow
      )}
    >
      <div className="absolute inset-0 bg-mesh-1 opacity-25" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <div className={cn("p-2 rounded-lg border", cfg.bg, cfg.border)}>
            <Icon size={15} className={cfg.icon} strokeWidth={1.8} />
          </div>
          {trend !== undefined && (
            <div
              className={cn(
                "flex items-center gap-0.5 text-[10px] font-medium",
                trend >= 0 ? "text-accent-green" : "text-rose-400"
              )}
            >
              <TrendingUp size={10} className={trend < 0 ? "rotate-180" : ""} />
              {Math.abs(trend)}%
            </div>
          )}
        </div>
        <p className="text-2xl font-display font-bold text-text-primary leading-none mb-1">
          {value}
        </p>
        <p className="text-xs font-medium text-text-secondary">{title}</p>
        {subtitle && <p className="text-[10px] text-text-muted mt-0.5">{subtitle}</p>}
      </div>
    </motion.div>
  );
}
