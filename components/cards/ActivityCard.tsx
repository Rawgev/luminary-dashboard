"use client";

import { motion } from "framer-motion";
import { Flame, TrendingUp, CalendarDays } from "lucide-react";
import { cardVariants, springSnappy } from "@/animations/variants";
import { generateActivityData, getStreakData } from "@/lib/activity";
import { cn } from "@/lib/utils";
import type { ActivityDay } from "@/types";

const LEVEL_COLORS = [
  "bg-bg-border",
  "bg-accent-cyan/25",
  "bg-accent-cyan/45",
  "bg-accent-cyan/70",
  "bg-accent-cyan",
];

function ActivityCell({ day, index }: { day: ActivityDay; index: number }) {
  return (
    <motion.div
      key={day.date}
      title={`${day.date}: ${day.count} activities`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.02 + index * 0.003,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{ scale: 1.6, zIndex: 10 }}
      className={cn(
        "w-2.5 h-2.5 rounded-sm cursor-pointer transition-shadow duration-150",
        LEVEL_COLORS[day.level],
        day.level > 0 && "hover:shadow-[0_0_6px_rgba(0,212,255,0.7)]"
      )}
    />
  );
}

export function ActivityCard() {
  const days = generateActivityData(15);
  const streak = getStreakData();

  // Split into weeks of 7
  const weeks: ActivityDay[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  const monthLabels = ["Sep", "Oct", "Nov", "Dec", "Jan"];

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ scale: 1.008 }}
      transition={springSnappy}
      className="relative rounded-2xl overflow-hidden border border-bg-border bg-bg-elevated col-span-full lg:col-span-2"
    >
      <div className="absolute inset-0 bg-mesh-3 opacity-30" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="relative z-10 p-5 md:p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-sm font-semibold text-text-primary flex items-center gap-2">
              <CalendarDays size={14} className="text-accent-cyan" />
              Learning Activity
            </h2>
            <p className="text-xs text-text-muted mt-0.5">Past 15 weeks</p>
          </div>

          {/* Streak badges */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              <Flame size={12} className="text-amber-400" />
              <span className="text-xs font-bold text-amber-400">{streak.current}d</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20">
              <TrendingUp size={12} className="text-accent-cyan" />
              <span className="text-xs font-bold text-accent-cyan">Best: {streak.longest}d</span>
            </div>
          </div>
        </div>

        {/* Month labels */}
        <div className="flex gap-1 mb-1.5 overflow-x-auto">
          {monthLabels.map((m) => (
            <span
              key={m}
              className="text-[9px] font-mono text-text-muted w-16 flex-shrink-0 first:ml-6"
            >
              {m}
            </span>
          ))}
        </div>

        {/* Contribution grid */}
        <div className="flex gap-1 overflow-x-auto pb-1">
          {/* Day-of-week labels */}
          <div className="flex flex-col gap-1 mr-1 mt-0.5 flex-shrink-0">
            {["M", "", "W", "", "F", "", "S"].map((d, i) => (
              <div key={i} className="w-2.5 h-2.5 flex items-center justify-end">
                <span className="text-[8px] text-text-muted font-mono">{d}</span>
              </div>
            ))}
          </div>

          {/* Weeks */}
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1 flex-shrink-0">
              {week.map((day, di) => (
                <ActivityCell key={day.date} day={day} index={wi * 7 + di} />
              ))}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-1.5 mt-3">
          <span className="text-[10px] text-text-muted mr-1">Less</span>
          {LEVEL_COLORS.map((cls, i) => (
            <div key={i} className={cn("w-2.5 h-2.5 rounded-sm", cls)} />
          ))}
          <span className="text-[10px] text-text-muted ml-1">More</span>
        </div>
      </div>
    </motion.article>
  );
}
