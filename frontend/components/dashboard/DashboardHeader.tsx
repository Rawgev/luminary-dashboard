"use client";

import { motion } from "framer-motion";
import { Bell, Search } from "lucide-react";
import { useState } from "react";
import { cn } from "@/frontend/lib/utils";

export function DashboardHeader() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex items-center justify-between gap-4 mb-6 md:mb-8"
    >
      {/* Left: Title */}
      <div className="flex items-center gap-3">
        <div>
          <p className="text-xs text-text-muted font-mono uppercase tracking-widest hidden sm:block">
            Overview
          </p>
          <h2 className="text-base font-display font-bold text-text-primary leading-tight">
            Dashboard
          </h2>
        </div>
      </div>

      {/* Right: Search + Notifications */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <motion.div
          className={cn(
            "hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-200",
            searchFocused
              ? "border-accent-cyan/30 bg-bg-elevated w-48"
              : "border-bg-border bg-bg-elevated w-36"
          )}
          initial={false}
        >
          <Search size={13} className={searchFocused ? "text-accent-cyan" : "text-text-muted"} />
          <input
            type="text"
            placeholder="Search..."
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="bg-transparent text-xs text-text-primary placeholder:text-text-muted outline-none w-full"
          />
        </motion.div>

        {/* Notifications */}
        <button
          aria-label="View notifications"
          className="relative p-2 rounded-xl bg-bg-elevated border border-bg-border text-text-secondary hover:text-text-primary transition-colors"
        >
          <Bell size={15} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
        </button>
      </div>
    </motion.header>
  );
}
