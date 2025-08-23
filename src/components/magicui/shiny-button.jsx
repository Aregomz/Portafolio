"use client";;
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },

  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  }
};

export const ShinyButton = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      className={cn(
        "relative cursor-pointer rounded-lg px-6 py-2 font-medium backdrop-blur-xl border border-white/20 transition-shadow duration-300 ease-in-out hover:shadow-lg bg-[rgb(var(--accent))] hover:bg-[rgb(var(--accent))/90]",
        className
      )}
      {...animationProps}
      {...props}>
      <span
        className="relative block size-full text-sm uppercase tracking-wide text-white font-medium"
        style={{
          maskImage:
            "linear-gradient(-75deg,rgb(var(--accent)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),rgb(var(--accent)) calc(var(--x) + 100%))",
        }}>
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          WebkitMask:
            "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          backgroundImage:
            "linear-gradient(-75deg,rgb(var(--accent))/30% calc(var(--x)+20%),rgb(var(--accent))/60% calc(var(--x)+25%),rgb(var(--accent))/30% calc(var(--x)+100%))",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] p-px" />
    </motion.button>
  );
});

ShinyButton.displayName = "ShinyButton";
