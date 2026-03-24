"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

type FadeInSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
} & Omit<
  HTMLMotionProps<"section">,
  "children" | "initial" | "whileInView" | "viewport" | "transition" | "className"
>;

export function FadeInSection({
  children,
  className,
  delay = 0,
  ...props
}: FadeInSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}
