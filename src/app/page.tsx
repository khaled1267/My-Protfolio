"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/footer";
import Qualification from "@/components/Qualification";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className="relative min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Qualification />
        <Projects />
        <Contact />
        <Footer /> 
        
        
      </div>
    </>
  );
}
