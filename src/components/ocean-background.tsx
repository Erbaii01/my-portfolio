"use client";

import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

const floatingObjects = [
  { left: "8%", top: "14%", size: 180, delay: 0.1, duration: 11 },
  { left: "76%", top: "10%", size: 140, delay: 0.8, duration: 10.5 },
  { left: "62%", top: "38%", size: 120, delay: 0.4, duration: 12 },
  { left: "14%", top: "42%", size: 110, delay: 0.6, duration: 9.8 },
  { left: "38%", top: "24%", size: 90, delay: 1.1, duration: 10.8 },
];

const bubbles = [
  { left: "6%", size: 12, delay: 0.2, duration: 12.5 },
  { left: "12%", size: 8, delay: 0.7, duration: 11.3 },
  { left: "21%", size: 10, delay: 1.2, duration: 12.1 },
  { left: "33%", size: 14, delay: 0.1, duration: 13.2 },
  { left: "45%", size: 9, delay: 1.6, duration: 10.8 },
  { left: "57%", size: 11, delay: 0.4, duration: 11.6 },
  { left: "68%", size: 7, delay: 1.9, duration: 10.9 },
  { left: "78%", size: 13, delay: 0.9, duration: 12.8 },
  { left: "88%", size: 8, delay: 1.3, duration: 11.4 },
  { left: "95%", size: 12, delay: 0.5, duration: 13.4 },
];

export function OceanBackground() {
  const { scrollYProgress } = useScroll();
  const fadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const blurOut = useTransform(scrollYProgress, [0, 0.5], [0, 10]);
  const blurFilter = useMotionTemplate`blur(${blurOut}px)`;

  return (
    <motion.div
      aria-hidden
      style={{ opacity: fadeOut, filter: blurFilter }}
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(67,118,255,0.34),transparent_36%),radial-gradient(circle_at_80%_4%,rgba(31,99,255,0.26),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(20,56,138,0.52),transparent_70%)]" />

      {floatingObjects.map((obj, index) => (
        <motion.div
          key={`float-${index}`}
          initial={{ y: 0, rotate: 0 }}
          animate={{ y: [0, -18, 0, 12, 0], rotate: [0, 2.2, 0, -1.4, 0] }}
          transition={{
            duration: obj.duration,
            delay: obj.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute rounded-[36%] border border-blue-300/35 bg-gradient-to-b from-blue-300/28 via-blue-500/14 to-transparent shadow-[0_0_48px_rgba(59,130,246,0.32)]"
          style={{
            left: obj.left,
            top: obj.top,
            width: obj.size,
            height: obj.size,
            transform: "translate3d(0,0,0)",
          }}
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 top-1/3">
        {bubbles.map((bubble, index) => (
          <span
            key={`bubble-${index}`}
            className="ocean-bubble absolute bottom-[-6%] rounded-full border border-blue-200/45 bg-blue-100/15"
            style={{
              left: bubble.left,
              width: bubble.size,
              height: bubble.size,
              animationDuration: `${bubble.duration}s`,
              animationDelay: `${bubble.delay}s`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
