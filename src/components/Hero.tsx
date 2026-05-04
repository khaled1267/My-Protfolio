"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

export default function Hero() {
  // TypeScript generics যোগ করা হয়েছে যাতে 'never' টাইপ এরর না আসে
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const iconsRef = useRef<HTMLDivElement | null>(null);

  const magneticViewRef = useMagnetic();
  const magneticCollabRef = useMagnetic();

  useEffect(() => {
    const tl = gsap.timeline();

    // Safety check: titleRef.current আছে কিনা নিশ্চিত করা
    if (titleRef.current) {
      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });
    }

    if (subtitleRef.current) {
      tl.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6");
    }

    if (imageRef.current) {
      tl.from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
      }, "-=0.8");
    }

    // আইকন অ্যানিমেশন ফিক্স
    // iconsRef.current?.children এখন TypeScript চিনতে পারবে কারণ টাইপ HTMLDivElement দেয়া হয়েছে
    const icons = iconsRef.current?.children;
    if (icons) {
      Array.from(icons).forEach((icon, index) => {
        gsap.to(icon, {
          y: "random(-15, 15)",
          x: "random(-10, 10)",
          duration: Number(`random(3, 5)`), // GSAP random syntax works fine
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        });
      });
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0B0F1A] px-4 sm:px-8 pt-24 pb-12 overflow-hidden">
      
      {/* Background Decorative Circles */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1 space-y-6 sm:space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] sm:text-xs md:text-sm font-medium tracking-widest uppercase"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            Available for Projects
          </motion.div>

          <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.1]">
            Hi, I&apos;m <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-transparent bg-clip-text">
              Khaled Mahmud
            </span>
          </h1>

          <p ref={subtitleRef} className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Crafting high-performance, visually stunning MERN stack applications 
            with smooth animations and exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-4">
            <div ref={magneticViewRef as any} className="w-full sm:w-auto">
              <button 
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all active:scale-95 shadow-lg shadow-white/5"
              >
                View Projects
              </button>
            </div>

            <div ref={magneticCollabRef as any} className="w-full sm:w-auto">
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 text-white font-bold flex justify-center items-center gap-2 hover:bg-white/5 transition-all active:scale-95"
              >
                Contact Me <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="order-1 lg:order-2 relative flex justify-center items-center">
          <div ref={imageRef} className="relative w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]">
            
            <div className="absolute inset-0 p-[2px] sm:p-[3px] rounded-full bg-gradient-to-tr from-blue-500 via-transparent to-red-500 animate-[spin_8s_linear_infinite]">
              <div className="w-full h-full bg-[#0B0F1A] rounded-full" />
            </div>

            <div className="absolute inset-[10px] sm:inset-[20px] rounded-full overflow-hidden border border-white/5 bg-[#111625] shadow-2xl">
              <Image
                src="/protfoliopro.png"
                alt="Profile"
                fill
                className="object-cover scale-105"
                priority
              />
            </div>

            {/* FLOATING ICONS CONTAINER */}
            <div ref={iconsRef} className="absolute inset-[-30px] sm:inset-[-50px] md:inset-[-60px] pointer-events-none">
              
              <div className="absolute top-[5%] right-[5%] z-10">
                <div className="p-2 sm:p-4 bg-[#111625]/90 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/5 shadow-xl">
                  <FaReact className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 text-[#61DAFB]" />
                </div>
              </div>

              <div className="absolute top-[20%] -left-[5%] z-10">
                <div className="p-2 sm:p-4 bg-[#111625]/90 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/5 shadow-xl">
                  <RiNextjsFill className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white" />
                </div>
              </div>

              <div className="absolute bottom-[25%] -left-[10%] z-10">
                <div className="p-2 sm:p-4 bg-[#111625]/90 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/5 shadow-xl">
                  <RiTailwindCssFill className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 text-[#38BDF8]" />
                </div>
              </div>

              <div className="absolute -bottom-[5%] left-[30%] z-10">
                <div className="p-2 sm:p-4 bg-[#111625]/90 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/5 shadow-xl">
                  <SiMongodb className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 text-[#47A248]" />
                </div>
              </div>

              <div className="absolute bottom-[10%] right-[10%] z-10">
                <div className="p-2 sm:p-4 bg-[#111625]/90 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/5 shadow-xl">
                  <FaHtml5 className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 text-[#E34F26]" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}