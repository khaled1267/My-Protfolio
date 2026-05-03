"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    })
    .to(progressRef.current, {
      width: "100%",
      duration: 1.5,
      ease: "power2.inOut",
    }, "-=0.5")
    .to(containerRef.current, {
      y: "-100%",
      duration: 1,
      ease: "power4.inOut",
      delay: 0.5,
    });
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-brand-dark flex flex-col items-center justify-center"
    >
      <div className="relative overflow-hidden mb-4">
        <h1
          ref={textRef}
          className="text-4xl md:text-6xl font-bold text-white opacity-0 translate-y-10"
        >
          Khaled Mahmud 
        </h1>
      </div>
      <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="h-full w-0 bg-blue-500"
        />
      </div>
    </div>
  );
}
