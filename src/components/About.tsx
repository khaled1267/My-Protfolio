"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download } from "lucide-react"; // আইকন ব্যবহারের জন্য

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    gsap.fromTo(el.children, 
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 px-6 bg-brand-dark/50">
      <div className="max-w-4xl mx-auto">
        <div ref={textRef} className="space-y-8">
          <h2 className="text-3xl uppercase tracking-[0.3em] text-blue-500 font-bold">About Me</h2>
          
          <p className="text-3xl md:text-5xl font-medium leading-tight text-white">
            I am a passionate <span className="text-blue-400">Frontend Developer</span> with a focus on creating immersive digital experiences.
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
            Specializing in building high-performance, visually stunning frontend interfaces that bring creative designs to life with seamless user experiences.
          </p>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-6">
            {[
              { label: "Experience", value: "3+ Years" },
              { label: "Projects", value: "20+" },
              { label: "Clients", value: "10+" },
              { label: "Coffee", value: "∞" },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Resume Download Button */}
          <div className="pt-8">
  <a 
    href="/my-resume.pdf" 
    download="Sajid_Yaqub_Resume.pdf" 
    className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/20 hover:scale-105 bg-gradient-to-r from-[#3b82f6] via-[#a855f7] to-[#ef4444]"
  >
    Download Resume
    <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
  </a>
</div>

        </div>
      </div>
    </section>
  );
}