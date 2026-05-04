"use client";

import Link from "next/link";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebook />, href: "#" },
    { icon: <FaLinkedin />, href: "#" },
    { icon: <FaInstagramSquare />, href: "#" },
    { icon: <FaSquareGithub />, href: "https://github.com/khaled1267" },
  ];

  return (
    <footer className="bg-[#0B0F1A] pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-gray-400"> Frontend </span>
            <span className="text-red-500">Developer</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-gray-400 font-medium">
            <Link href="#home" className="hover:text-white transition-colors">Home</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </nav>

          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <a 
                key={i}
                href={social.href}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500 text-white hover:scale-110 hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 text-xl"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="h-[1px] w-full bg-gradient-to-r from-red-500/50 via-blue-500/50 to-blue-500/50 mb-8" />

        <div className="text-center text-gray-500 text-sm md:text-base tracking-wide">
          Copyright © {currentYear} Khaled Mahmud | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}