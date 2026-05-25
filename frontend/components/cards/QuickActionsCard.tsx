"use client";

import { motion } from "framer-motion";
import { Play, Search, BookMarked, GraduationCap } from "lucide-react";
import { cardVariants, springSnappy } from "@/frontend/animations/variants";
import { cn } from "@/frontend/lib/utils";

const actions = [
  { id: "resume", label: "Resume Learning", icon: Play, primary: true },
  { id: "explore", label: "Explore Courses", icon: Search, primary: false },
  { id: "saved", label: "Saved Items", icon: BookMarked, primary: false },
  { id: "paths", label: "Learning Paths", icon: GraduationCap, primary: false },
];

export function QuickActionsCard() {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.01 }}
      transition={springSnappy}
      className="relative rounded-2xl border border-bg-border bg-bg-elevated overflow-hidden"
    >
      <div className="absolute inset-0 bg-mesh-2 opacity-25" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="relative z-10 p-5">
        <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">
          Quick Actions
        </p>

        <div className="space-y-2">
          {actions.map((action, i) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={action.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.06, type: "spring", stiffness: 300, damping: 22 }}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150",
                  action.primary
                    ? "bg-accent-cyan/10 border border-accent-cyan/25 text-accent-cyan hover:bg-accent-cyan/15 hover:border-accent-cyan/40"
                    : "bg-bg-surface/50 border border-bg-border text-text-secondary hover:text-text-primary hover:bg-bg-overlay hover:border-bg-border-bright"
                )}
              >
                <Icon size={14} strokeWidth={action.primary ? 2 : 1.8} />
                {action.label}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
