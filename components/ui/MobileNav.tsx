"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Trophy,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { mobileNavVariants, springSnappy } from "@/animations/variants";

const tabs = [
  { id: "dashboard", label: "Home", icon: LayoutDashboard, href: "/" },
  { id: "courses", label: "Courses", icon: BookOpen, href: "/courses" },
  { id: "progress", label: "Progress", icon: BarChart2, href: "/progress" },
  { id: "achievements", label: "Awards", icon: Trophy, href: "/achievements" },
  { id: "settings", label: "Settings", icon: Settings, href: "/settings" },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <motion.div
      variants={mobileNavVariants}
      initial="hidden"
      animate="show"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
    >
      <nav className="bg-bg-surface/90 backdrop-blur-xl border-t border-bg-border">
        <div className="flex items-center">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            const Icon = tab.icon;

            return (
              <Link
                key={tab.id}
                href={tab.href}
                aria-label={tab.label}
                className="flex-1 flex flex-col items-center gap-1 py-3 px-1"
              >
                <motion.div
                  className={cn(
                    "relative flex items-center justify-center w-8 h-8 rounded-xl transition-colors",
                    isActive ? "text-accent-cyan" : "text-text-muted"
                  )}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={springSnappy}
                >
                  {isActive && (
                    <motion.div
                      layoutId="mobile-active"
                      className="absolute inset-0 rounded-xl bg-accent-cyan/10"
                      transition={springSnappy}
                    />
                  )}
                  <Icon size={18} className="relative z-10" />
                </motion.div>
                <span
                  className={cn(
                    "text-[10px] font-medium transition-colors",
                    isActive ? "text-accent-cyan" : "text-text-muted"
                  )}
                >
                  {tab.label}
                </span>
              </Link>
            );
          })}
        </div>
        {/* Safe area spacer for iOS */}
        <div className="h-safe-area-inset-bottom" />
      </nav>
    </motion.div>
  );
}
