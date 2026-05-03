"use client";

import { motion } from "framer-motion";
import React from "react";

interface TechIconProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function TechIcon({ children, className, delay = 0 }: TechIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -10, 0]
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay
        }
      }}
      className={`absolute w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-slate-900/90 border border-brand-blue/40 text-white z-10 shadow-[0_0_15px_rgba(59,130,246,0.3)] backdrop-blur-sm ${className}`}
    >
      <div className="flex items-center justify-center w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}
