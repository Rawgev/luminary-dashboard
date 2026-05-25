"use client";

import { motion } from "framer-motion";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

type Accent = "cyan" | "purple" | "blue" | "green" | "amber" | "pink";

interface MetricItem {
  label: string;
  value: string;
  detail: string;
}

interface FeatureItem {
  title: string;
  description: string;
  iconName: string;
  accent: Accent;
}

interface RoutePageShellProps {
  eyebrow: string;
  title: string;
  description: string;
  iconName: string;
  accent: Accent;
  metrics: MetricItem[];
  features: FeatureItem[];
}

const accentMap: Record<Accent, { text: string; border: string; bg: string; glow: string; mesh: string }> = {
  cyan: {
    text: "text-accent-cyan",
    border: "border-accent-cyan/25",
    bg: "bg-accent-cyan/10",
    glow: "shadow-glow-cyan",
    mesh: "bg-mesh-1",
  },
  purple: {
    text: "text-accent-purple",
    border: "border-accent-purple/25",
    bg: "bg-accent-purple/10",
    glow: "shadow-glow-purple",
    mesh: "bg-mesh-2",
  },
  blue: {
    text: "text-accent-blue",
    border: "border-accent-blue/25",
    bg: "bg-accent-blue/10",
    glow: "shadow-glow-blue",
    mesh: "bg-mesh-1",
  },
  green: {
    text: "text-accent-green",
    border: "border-accent-green/25",
    bg: "bg-accent-green/10",
    glow: "shadow-glow-green",
    mesh: "bg-mesh-3",
  },
  amber: {
    text: "text-accent-amber",
    border: "border-accent-amber/25",
    bg: "bg-accent-amber/10",
    glow: "shadow-[0_0_20px_rgba(245,158,11,0.15)]",
    mesh: "bg-mesh-4",
  },
  pink: {
    text: "text-accent-pink",
    border: "border-accent-pink/25",
    bg: "bg-accent-pink/10",
    glow: "shadow-[0_0_20px_rgba(236,72,153,0.15)]",
    mesh: "bg-mesh-2",
  },
};

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

export function RoutePageShell({
  eyebrow,
  title,
  description,
  iconName,
  accent,
  metrics,
  features,
}: RoutePageShellProps) {
  const Icon = getIcon(iconName);
  const accentConfig = accentMap[accent];

  return (
    <motion.main
      variants={pageVariants}
      initial="hidden"
      animate="show"
      className="p-5 sm:p-6 md:p-8 max-w-7xl mx-auto"
    >
      <motion.header
        variants={itemVariants}
        className={cn(
          "relative overflow-hidden rounded-3xl border bg-bg-surface p-5 sm:p-7 md:p-8",
          accentConfig.border,
          accentConfig.glow
        )}
      >
        <div className={cn("absolute inset-0 opacity-60", accentConfig.mesh)} />
        <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-white/5 blur-3xl" />
        <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <div className={cn("rounded-2xl border p-3", accentConfig.bg, accentConfig.border)}>
                <Icon className={accentConfig.text} size={22} strokeWidth={1.8} />
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-text-muted">
                {eyebrow}
              </p>
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-text-secondary sm:text-base">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:min-w-[360px]">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-bg-border bg-bg-base/45 p-3 backdrop-blur-sm"
              >
                <p className="font-display text-xl font-bold leading-none text-text-primary">
                  {metric.value}
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-text-muted">
                  {metric.label}
                </p>
                <p className="mt-1 hidden text-[10px] text-text-secondary sm:block">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.header>

      <section className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => {
          const FeatureIcon = getIcon(feature.iconName);
          const featureAccent = accentMap[feature.accent];

          return (
            <motion.article
              key={feature.title}
              variants={itemVariants}
              whileHover={{ scale: 1.015, y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className={cn(
                "relative min-h-[180px] overflow-hidden rounded-2xl border bg-bg-elevated p-5",
                "transition-colors duration-200 hover:border-bg-border-bright",
                featureAccent.border
              )}
            >
              <div className={cn("absolute inset-0 opacity-30", featureAccent.mesh)} />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="relative z-10">
                <div className={cn("mb-5 inline-flex rounded-xl border p-2.5", featureAccent.bg, featureAccent.border)}>
                  <FeatureIcon className={featureAccent.text} size={18} strokeWidth={1.8} />
                </div>
                <h2 className="text-base font-semibold text-text-primary">{feature.title}</h2>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{feature.description}</p>
              </div>
            </motion.article>
          );
        })}
      </section>
    </motion.main>
  );
}
