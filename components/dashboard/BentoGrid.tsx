"use client";

import { motion } from "framer-motion";
import { containerVariants } from "@/animations/variants";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={cn(
        "grid gap-4",
        "grid-cols-1",
        "sm:grid-cols-2",
        "lg:grid-cols-3",
        "xl:grid-cols-4",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
