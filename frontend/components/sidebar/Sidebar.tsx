"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Trophy,
  Settings,
  ChevronLeft,
  Sparkles,
  Bell,
  User,
} from "lucide-react";
import { cn } from "@/frontend/lib/utils";
import { sidebarVariants, tooltipVariants, springSnappy } from "@/frontend/animations/variants";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
  badge?: number;
}

const navItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { id: "courses", label: "Courses", icon: BookOpen, href: "/courses", badge: 4 },
  { id: "progress", label: "Progress", icon: BarChart2, href: "/progress" },
  { id: "achievements", label: "Achievements", icon: Trophy, href: "/achievements" },
];

const bottomItems: NavItem[] = [
  { id: "notifications", label: "Notifications", icon: Bell, href: "/notifications", badge: 3 },
  { id: "settings", label: "Settings", icon: Settings, href: "/settings" },
];

function NavItemButton({
  item,
  isActive,
  isCollapsed,
}: {
  item: NavItem;
  isActive: boolean;
  isCollapsed: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <Link href={item.href} className="relative block" aria-label={item.label}>
      <motion.div
        className={cn(
          "relative flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer",
          "transition-colors duration-150",
          isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
        )}
        initial={false}
        whileHover={{ x: isCollapsed ? 0 : 3 }}
        transition={springSnappy}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {/* Active background pill */}
        {isActive && (
          <motion.div
            layoutId="sidebar-active"
            className="absolute inset-0 rounded-xl bg-bg-overlay border border-bg-border-bright"
            transition={springSnappy}
          />
        )}

        {/* Hover background */}
        {!isActive && hovered && (
          <motion.div
            className="absolute inset-0 rounded-xl bg-bg-elevated"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          />
        )}

        {/* Icon */}
        <div className="relative z-10 flex-shrink-0">
          <Icon
            size={18}
            className={cn(
              "transition-colors duration-150",
              isActive ? "text-accent-cyan" : ""
            )}
          />
        </div>

        {/* Label */}
        <AnimatePresence>
          {!isCollapsed && (
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="relative z-10 hidden text-sm font-medium whitespace-nowrap lg:inline"
            >
              {item.label}
            </motion.span>
          )}
        </AnimatePresence>

        {/* Badge */}
        {item.badge && (
          <AnimatePresence>
            {!isCollapsed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="relative z-10 ml-auto hidden lg:block"
              >
                <span className="flex items-center justify-center w-5 h-5 text-[10px] font-bold rounded-full bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30">
                  {item.badge}
                </span>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan z-20"
              />
            )}
          </AnimatePresence>
        )}
      </motion.div>

      {/* Tooltip for collapsed state */}
      <AnimatePresence>
        {isCollapsed && hovered && (
          <motion.div
            variants={tooltipVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2.5 py-1.5 rounded-lg bg-bg-overlay border border-bg-border text-sm font-medium text-text-primary whitespace-nowrap z-50 pointer-events-none"
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
}

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <motion.nav
      variants={sidebarVariants}
      initial={false}
      animate={isCollapsed ? "collapsed" : "expanded"}
      className={cn(
        "hidden md:flex flex-col h-screen sticky top-0",
        "bg-bg-surface border-r border-bg-border",
        "overflow-visible flex-shrink-0 z-30 transition-[width] duration-200 ease-out",
        isCollapsed ? "w-16" : "w-16 lg:w-60"
      )}
    >
      {/* Logo / Brand */}
      <div className="flex items-center gap-2.5 px-4 py-5 border-b border-bg-border">
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
          <Sparkles size={14} className="text-white" />
        </div>
        <AnimatePresence>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block"
            >
              <p className="text-sm font-bold text-text-primary tracking-tight">Luminary</p>
              <p className="text-[10px] text-text-muted">Learning Platform</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Nav */}
      <div className="flex-1 px-2 py-4 space-y-0.5 overflow-y-auto">
        <AnimatePresence>
          {!isCollapsed && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="hidden px-3 mb-2 text-[10px] font-semibold uppercase tracking-widest text-text-muted lg:block"
            >
              Menu
            </motion.p>
          )}
        </AnimatePresence>

        {navItems.map((item) => (
          <NavItemButton
            key={item.id}
            item={item}
            isActive={pathname === item.href}
            isCollapsed={isCollapsed}
          />
        ))}
      </div>

      {/* Bottom Nav */}
      <div className="px-2 py-4 border-t border-bg-border space-y-0.5">
        {bottomItems.map((item) => (
          <NavItemButton
            key={item.id}
            item={item}
            isActive={pathname === item.href}
            isCollapsed={isCollapsed}
          />
        ))}

        {/* User avatar */}
        <div className="flex items-center gap-3 px-3 py-2.5 mt-2 rounded-xl">
          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center">
            <User size={13} className="text-white" />
          </div>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="hidden overflow-hidden lg:block"
              >
                <p className="text-xs font-semibold text-text-primary leading-none">Raghav Chauhan</p>
                <p className="text-[10px] text-text-muted mt-0.5">Pro Member</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Collapse toggle */}
      <button
        onClick={() => setIsCollapsed((p) => !p)}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        className={cn(
          "absolute top-6 -right-4 z-50 hidden lg:flex",
          "h-8 w-8 items-center justify-center rounded-full",
          "border border-accent-cyan/40 bg-bg-overlay/95 text-accent-cyan",
          "shadow-[0_0_0_3px_rgba(5,5,8,0.95),0_0_18px_rgba(0,212,255,0.22)] backdrop-blur-md",
          "transition-all duration-150 hover:scale-105 hover:border-accent-cyan/70 hover:bg-bg-elevated hover:text-white hover:shadow-[0_0_0_3px_rgba(5,5,8,0.95),0_0_26px_rgba(0,212,255,0.34)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
        )}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isCollapsed ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronLeft size={13} />
        </motion.div>
      </button>
    </motion.nav>
  );
}
