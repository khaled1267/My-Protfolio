"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Sparkles, Code2, Globe, Cpu, Layout, Smartphone } from "lucide-react";
import { useMagnetic } from "@/hooks/useMagnetic";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  
  const magneticViewRef = useMagnetic();
  const magneticCollabRef = useMagnetic();

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial entry animations
    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })
    .from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.6")
    .from(imageRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
    }, "-=0.8");

    // Floating Icons animation
    const icons = iconsRef.current?.children;
    if (icons) {
      Array.from(icons).forEach((icon, index) => {
        gsap.to(icon, {
          y: "random(-18, 18)",
          x: "random(-18, 18)",
          duration: "random(3, 6)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        });
      });
    }
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-brand-dark px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Text Content */}
        <div className="space-y-8">
          <div className="space-y-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-blue-400 font-medium tracking-wider uppercase text-sm"
            >
              <Sparkles className="w-4 h-4" />
              Available for new projects
            </motion.div>
            <h1 ref={titleRef} className="text-6xl md:text-8xl font-black leading-tight text-white">
              Hi, I&apos;m <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">Khaled Mahmud</span>
            </h1>
          </div> 

          <p ref={subtitleRef} className="text-gray-400 text-xl md:text-2xl max-w-xl leading-relaxed">
            Specializing in building high-performance, visually stunning frontend interfaces that bring creative designs to life with seamless user experiences.
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            <div ref={magneticViewRef as any}>
              <button className="relative group px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <span className="relative z-10">View Projects</span>
              </button>
            </div>
            <div ref={magneticCollabRef as any}>
              <button className="px-8 py-4 rounded-full border border-white/10 text-white font-bold flex items-center gap-2 hover:bg-white/5 transition-all duration-300">
                Contact Me <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Visual Content */}
        <div className="relative flex justify-center items-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-blue-500/20 animate-[spin_15s_linear_infinite]" />
            <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-purple-500/10 animate-[spin_25s_linear_infinite_reverse]" />
          </div>

          <div ref={imageRef} className="relative z-10 w-[280px] h-[280px] md:w-[420px] md:h-[420px]">
            <div className="absolute inset-[-20px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            
            <div className="absolute inset-0 p-[2px] rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-red-500 animate-[spin_8s_linear_infinite]">
              <div className="h-full w-full bg-brand-dark rounded-full" />
            </div>

            <div className="absolute inset-[6px] rounded-full overflow-hidden border-4 border-white/5">
              <Image 
                src="/profile.png" 
                alt="Sajid Yaqub" 
                fill
                sizes="(max-width: 768px) 280px, 420px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent" />
            </div>

            {/* Floating Icons (Using Lucide-React) */}
            <div ref={iconsRef} className="absolute inset-[-40px] pointer-events-none">
              
              {/* Icon 1: Code */}
              <div className="absolute top-[10%] right-[0%] p-4 bg-slate-900/90 border border-white/10 backdrop-blur-md rounded-2xl shadow-2xl z-20">
                <Code2 className="w-7 h-7 text-blue-400" />
              </div>

              {/* Icon 2: Globe */}
              <div className="absolute top-[50%] -right-[15%] p-4 bg-slate-900/90 border border-white/10 backdrop-blur-md rounded-2xl shadow-2xl z-20">
                <Globe className="w-7 h-7 text-purple-400" />
              </div>

              {/* Icon 3: Smartphone */}
              <div className="absolute bottom-[10%] right-[5%] p-4 bg-slate-900/90 border border-white/10 backdrop-blur-md rounded-2xl shadow-2xl z-20">
                <Smartphone className="w-7 h-7 text-green-400" />
              </div>

              {/* Icon 4: Layout */}
              <div className="absolute top-[40%] -left-[15%] p-4 bg-slate-900/90 border border-white/10 backdrop-blur-md rounded-2xl shadow-2xl z-20">
                <Layout className="w-7 h-7 text-red-400" />
              </div>

              {/* Icon 5: CPU */}
              <div className="absolute top-[5%] left-[5%] p-4 bg-slate-900/90 border border-white/10 backdrop-blur-md rounded-2xl shadow-2xl z-20">
                <Cpu className="w-7 h-7 text-yellow-400" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}