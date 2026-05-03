"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  Database, 
  Terminal 
} from "lucide-react";

const skills = [
  { 
    name: "Tailwind CSS", 
    icon: Layers, 
    desc: "Creating responsive, modern, and clean layouts quickly using utility-first styling.",
    color: "text-sky-400" 
  },
  { 
    name: "JavaScript", 
    icon: Code2, 
    desc: "Writing efficient, modern, and optimized code for both frontend and backend logic.",
    color: "text-yellow-400"
  },
  { 
    name: "React", 
    icon: Cpu, 
    desc: "Building fast, interactive, and component-based UIs with clean state management.",
    color: "text-blue-400"
  },
  { 
    name: "Node.js", 
    icon: Terminal, 
    desc: "Developing scalable backend logic and high-performance server-side applications.",
    color: "text-green-500"
  },
  { 
    name: "MongoDB", 
    icon: Database, 
    desc: "Managing NoSQL databases with flexible schemas for high-performance data storage.",
    color: "text-emerald-500"
  },
  { 
    name: "HTML", 
    icon: Globe, 
    desc: "Creating clean, well-structured page layouts with semantic markup for better accessibility.",
    color: "text-orange-500"
  },
];

export default function Skills() {
  return (
    <section id="services" className="py-32 px-6 bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-sm uppercase tracking-[0.3em] text-blue-500 font-bold">Skills & Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Technical Expertise</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-[1px] rounded-2xl overflow-hidden group"
            >
              {/* Border Gradient (Image_f08a9e স্টাইল) */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-red-500/20 group-hover:from-blue-500/40 group-hover:to-red-500/40 transition-all duration-500" />
              
               {/* Card Content */}
              <div className="relative h-full bg-[#0F172A] p-10 rounded-2xl flex flex-col items-center text-center space-y-6">
                {/* Icon Container */}
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-slate-900/50 border border-white/5 transition-transform duration-500 group-hover:scale-110 group-hover:border-blue-500/30">
                  <skill.icon className={`w-10 h-10 ${skill.color}`} />
                </div>
                
                <h4 className="text-2xl font-bold text-white tracking-tight">
                  {skill.name}
                </h4>
                
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {skill.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}