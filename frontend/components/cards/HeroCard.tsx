"use client";

import { motion } from "framer-motion";
import { Flame, Zap, Clock, Award } from "lucide-react";
import { cardVariants, cardHoverScale, springSnappy } from "@/frontend/animations/variants";
import type { StatsData } from "@/shared/types";

const STATS_CONFIG = [
  { key: "currentStreak" as const, label: "Day Streak", icon: Flame, color: "text-amber-400" },
  { key: "hoursLearned" as const, label: "Hours Learned", icon: Clock, color: "text-accent-cyan" },
  { key: "certificatesEarned" as const, label: "Certificates", icon: Award, color: "text-accent-purple" },
];

interface HeroCardProps {
  stats: StatsData;
}

export function HeroCard({ stats }: HeroCardProps) {
  const greeting = "Good to see you";

  return (
    <motion.article
      variants={cardVariants}
      whileHover={cardHoverScale}
      transition={springSnappy}
      className="relative rounded-2xl overflow-hidden border border-bg-border-bright col-span-full lg:col-span-2 row-span-1"
    >
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-bg-elevated" />
      <div className="absolute inset-0 bg-mesh-1 opacity-70" />

      {/* Animated glow orb */}
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.12) 0%, rgba(168,85,247,0.06) 50%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <div
          className="absolute inset-x-0 h-px bg-white"
          style={{ animation: "scan 6s linear infinite" }}
        />
      </div>

      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.04]">
        <div className="absolute top-4 right-4 w-full h-full border-t-2 border-r-2 border-accent-cyan rounded-tr-2xl" />
        <div className="absolute top-8 right-8 w-3/4 h-3/4 border-t border-r border-accent-cyan/60 rounded-tr-xl" />
      </div>

      <div className="relative z-10 p-6 md:p-7">
        {/* Greeting line */}
        <div className="flex items-center gap-2 mb-3">
          <motion.div
            animate={{ rotate: [0, 15, -10, 15, 0] }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            <Zap size={14} className="text-accent-cyan" />
          </motion.div>
          <span className="text-xs font-mono text-text-muted uppercase tracking-widest">
            {greeting}
          </span>
        </div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-1.5 tracking-tight"
        >
          Welcome back,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">
            Raghav 
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-sm text-text-secondary mb-6"
        >
          You have{" "}
          <span className="text-text-primary font-medium">3 lessons</span> due
          today. Keep the streak alive!
        </motion.p>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          {STATS_CONFIG.map(({ key, label, icon: Icon, color }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="flex flex-col gap-1 p-3 rounded-xl bg-bg-surface/60 border border-bg-border backdrop-blur-sm"
            >
              <Icon size={14} className={color} />
              <p className="text-xl font-display font-bold text-text-primary leading-none">
                {stats[key]}
                {key === "currentStreak" && (
                  <span className="text-xs font-mono text-text-muted ml-0.5">d</span>
                )}
              </p>
              <p className="text-[10px] text-text-muted font-medium leading-none">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
