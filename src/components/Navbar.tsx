"use client";

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useMagnetic } from "@/hooks/useMagnetic";

const Navbar = () => {
  const magneticHireRef = useMagnetic();
  const [activeItem, setActiveItem] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  // স্ক্রল করলে নেভবারের ব্যাকগ্রাউন্ড ডার্ক করার জন্য
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      <nav className={`w-full px-6 md:px-12 py-4 flex justify-between items-center transition-all ${scrolled ? 'bg-[#0B0F1A]/90 backdrop-blur-md shadow-2xl' : 'bg-[#0B0F1A]'}`}>
        
        {/* Logo Section - Image style */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl font-bold tracking-tight flex items-center gap-2 cursor-pointer"
        >
          <span className="text-blue-500">MERN</span>
          <span className="text-gray-400">Stack</span>
          <span className="text-red-500">Developer</span>
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
          {navItems.map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              onClick={() => setActiveItem(item)}
              className={`transition-all duration-300 relative group ${activeItem === item ? 'text-blue-500' : 'text-gray-400 hover:text-white'}`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button - Exact Gradient from Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          ref={magneticHireRef as any}
        >
          <button className="relative group px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
            {/* Gradient Border/Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-red-500 p-[1.5px] rounded-full">
               <div className="h-full w-full bg-[#161B2D] rounded-full group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            
            <span className="relative z-10 flex items-center gap-2 text-white text-sm font-bold">
              <Sparkles className="w-4 h-4 text-blue-400" />
              Hire Me
            </span>
          </button>
        </motion.div>
      </nav>

      {/* Bottom Gradient Line (HR) - Exactly as in the image */}
      <div className="h-[1px] w-full bg-gradient-to-r from-red-500/40 via-blue-500/40 to-blue-500/40 opacity-50" />
    </header>
  );
};

export default Navbar;