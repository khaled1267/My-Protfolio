"use client";

import React, { useState, useEffect, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X } from "lucide-react";
import { useMagnetic } from "@/hooks/useMagnetic";

const Navbar = () => {
  const magneticHireRef = useMagnetic();
  const [activeItem, setActiveItem] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Services", "Projects", "Contact"];

  // স্ক্রল হ্যান্ডলার ফাংশন (সেকশন আইডি অনুযায়ী স্ক্রল করবে)
  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, item: string) => {
    setActiveItem(item);
    setMenuOpen(false);

    if (item === "Home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState("", "", "/");
    } else {
      e.preventDefault();
      // আইটেমের নাম ছোট হাতের অক্ষরে কনভার্ট করে আইডি হিসেবে ব্যবহার করছি (উদা: skill)
      const targetId = item.toLowerCase();
      const element = document.getElementById(targetId);
      
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // URL-এ হ্যাশ আপডেট করা (ঐচ্ছিক)
        window.history.pushState("", "", `#${targetId}`);
      }
    }
  };

  return (
    <header className="fixed top-0 w-full z-50">
      <nav
        className={`w-full px-6 md:px-12 py-4 flex justify-between items-center transition-all ${
          scrolled
            ? "bg-[#0B0F1A]/90 backdrop-blur-md shadow-2xl"
            : "bg-[#0B0F1A]"
        }`}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl font-bold flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-gray-400">Full Stack </span>
          <span className="text-red-500">Developer</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item)}
              className={`transition-all duration-300 ${
                activeItem === item
                  ? "text-blue-500"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <motion.div
            ref={magneticHireRef as any}
            className="hidden md:block"
          >
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative px-6 py-2.5 rounded-full hover:scale-105 active:scale-95 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-red-500 p-[1.5px] rounded-full">
                <div className="h-full w-full bg-[#161B2D] rounded-full transition-colors group-hover:bg-transparent"></div>
              </div>

              <span className="relative z-10 flex items-center gap-2 text-white text-sm font-bold">
                <p className="w-4 h-4 text-blue-400"><Sparkles/></p>
                Hire Me
              </span>
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#0B0F1A] px-6 py-6 space-y-5 border-b border-gray-800"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                // @ts-ignore
                onClick={(e) => handleNavClick(e, item)}
                className={`block transition-colors ${
                  activeItem === item ? "text-blue-500" : "text-gray-300 hover:text-white"
                }`}
              >
                {item}
              </a>
            ))}

            <button 
              onClick={() => {
                setMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full mt-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-red-500 text-white font-bold flex justify-center items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-[1px] w-full bg-gradient-to-r from-red-500/40 via-blue-500/40 to-blue-500/40 opacity-50" />
    </header>
  );
};

export default Navbar;