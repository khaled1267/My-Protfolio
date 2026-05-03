"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Spotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      gsap.to(spotlight, {
        x: clientX,
        y: clientY,
        duration: 1.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="fixed top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen"
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
}
