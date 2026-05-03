"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "MERN Todo App (2025)",
    description: "A fully functional Todo application with authentication, CRUD operations, and a clean, responsive UI.",
    category: "Full Stack",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    links: { github: "#", demo: "#" }
  },
  {
    title: "E-Commerce Demo (2025)",
    description: "A demo e-commerce platform featuring product listing, cart system, and checkout flow.",
    category: "Web App",
    tags: ["React", "Node.js", "Express.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
    links: { github: "#", demo: "#" }
  },
  {
    title: "Aura Creative",
    description: "A visually stunning branding agency website with smooth GSAP animations and 3D elements.",
    category: "Branding",
    tags: ["Next.js", "GSAP", "Framer Motion", "Three.js"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    links: { github: "#", demo: "#" }
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-[0.3em] text-blue-500 font-bold">Selected Work</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white">Featured Projects</h3>
          </div>
          <button className="group text-white/70 hover:text-white transition-colors text-sm uppercase tracking-widest flex items-center gap-2 border-b border-white/10 pb-2">
            View All Projects <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-[32px] overflow-hidden aspect-[4/5] bg-[#0F172A] border border-white/5"
            >
              {/* Main Image */}
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60"
              />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-[#0B0F1A]/80 to-transparent p-8 flex flex-col justify-end">
                <div className="space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs uppercase tracking-[0.2em] text-blue-400 font-bold">
                    {project.category}
                  </span>
                  
                  {/* Title (As per Image) */}
                  <h4 className="text-2xl font-bold text-white">
                    {project.title}
                  </h4>

                  {/* Description (As per Image) */}
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags (As per Image) */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-300 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <a 
                      href={project.links.github}
                      className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-all"
                    >
                     Github 
                    </a>
                    
                    <a 
                      href={project.links.demo}
                      className="flex items-center gap-2 px-5 py-2 rounded-full font-bold text-white shadow-lg bg-gradient-to-r from-[#3b82f6] via-[#a855f7] to-[#ef4444] hover:scale-105 transition-transform"
                    >
                      Live Demo <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}