"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  Database, 
  Terminal,
  Flame, // Firebase এর জন্য
  Zap,    // Next.js এর জন্য
  Server
} from "lucide-react";

const skills = [
  { 
    name: "Next.js", 
    icon: Zap, 
    desc: "Building SEO-friendly, blazing fast React applications with SSR and Static Generation.", 
    color: "text-white",
    glowColor: "group-hover:shadow-white/20"
  },
  
  { 
    name: "JavaScript", 
    icon: Code2, 
    desc: "Writing efficient, modern, and optimized code for both frontend and backend logic.", 
    color: "text-yellow-400",
    glowColor: "group-hover:shadow-yellow-400/40"
  },
  {
  name: "TypeScript",
  icon: Code2,
  desc: "Writing type-safe, maintainable, and scalable JavaScript applications with strong typing.",
  color: "text-blue-400",
  glowColor: "group-hover:shadow-blue-400/40"
},
  { 
    name: "React", 
    icon: Cpu, 
    desc: "Building fast, interactive, and component-based UIs with clean state management.", 
    color: "text-blue-400",
    glowColor: "group-hover:shadow-blue-400/40"
  },
  { 
    name: "Node.js", 
    icon: Terminal, 
    desc: "Developing scalable backend logic and high-performance server-side applications.", 
    color: "text-green-500",
    glowColor: "group-hover:shadow-green-500/40"
  },
  { name: "Express.js", icon: Server, desc: "Building fast, scalable, and secure backend APIs and web applications with Node.js.", color: "text-green-400", glowColor: "group-hover:shadow-green-400/40" },
  { 
    name: "MongoDB", 
    icon: Database, 
    desc: "Managing NoSQL databases with flexible schemas for high-performance data storage.", 
    color: "text-emerald-500",
    glowColor: "group-hover:shadow-emerald-500/40"
  },
  {
  name: "Prisma",
  icon: Database,
  desc: "Managing databases efficiently with a modern, type-safe ORM for Node.js and TypeScript.",
  color: "text-indigo-400",
  glowColor: "group-hover:shadow-indigo-400/40"
},
{
  name: "PostgreSQL",
  icon: Database,
  desc: "Working with powerful relational databases to build reliable and scalable applications.",
  color: "text-blue-500",
  glowColor: "group-hover:shadow-blue-500/40"
},
  { 
    name: "HTML", 
    icon: Globe, 
    desc: "Creating clean, well-structured page layouts with semantic markup for accessibility.", 
    color: "text-orange-600",
    glowColor: "group-hover:shadow-orange-600/40"
  },
  
  { 
    name: "Tailwind CSS", 
    icon: Layers, 
    desc: "Creating responsive, modern, and clean layouts quickly using utility-first styling.", 
    color: "text-sky-400",
    glowColor: "group-hover:shadow-sky-400/40"
  },
];

export default function Skills() {
  return (
    <section id="services" className="py-32 px-6 bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-[0.4em] text-blue-500 font-bold"
          >
            Skills & Services
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white"
          >
            Technical Expertise
          </motion.h3>
        </div>

        {/* Skills Grid */}
        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative group p-[4px] rounded-[35px] overflow-hidden transition-all duration-500 ${skill.glowColor} hover:shadow-2xl`}
            >
              {/* 
                  EXTRA THICK PREMIUM BORDER 
                  p-[4px] এবং শক্তিশালী Conic Gradient ব্যবহার করা হয়েছে
              */}
              <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0B0F1A_0%,#3B82F6_30%,#9333EA_60%,#3B82F6_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* CARD CONTENT */}
              <div className="relative h-full bg-[#111827] p-8 rounded-[32px] flex flex-col items-center text-center z-10 border border-white/5">
                
                {/* ICON BOX WITH GLOW */}
                <div className="relative w-20 h-20 mb-6 flex items-center justify-center rounded-2xl bg-slate-900 border border-white/10 group-hover:border-blue-500/50 transition-all duration-500 shadow-2xl">
                  <skill.icon className={`w-10 h-10 ${skill.color} filter drop-shadow-[0_0_12px_rgba(59,130,246,0.6)] group-hover:scale-110 transition-transform duration-500`} />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                  {skill.name}
                </h4>
                
                <p className="text-gray-400 leading-relaxed text-xs md:text-sm font-medium">
                  {skill.desc}
                </p>

                {/* BOTTOM GLOW LINE */}
                <div className="absolute bottom-0 left-0 w-full h-[5px] bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}