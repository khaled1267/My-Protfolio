"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink,  X, Code2, Rocket, Lightbulb } from "lucide-react";
import { GiThunderBlade } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";

// ১. প্রজেক্ট ডেটা (সব রিকয়ারমেন্ট সহ)
const projects = [
  {
    id: 1,
    title: "Qorbani Animal Hat",
    description: "A specialized e-commerce platform for buying and selling sacrificial animals with a focus on ease of use and secure listings.",
    category: "Frontend",
    stack: "React, Next.js, HTML, Tailwind CSS, Framer Motion",
    tags: ["React", "Next.js", "Html", "Css"],
    image: "https://6a62565f2c9be6b62f96223b.imgix.net/sandbox/Screenshot%202026-07-24%20000028.png",
    liveLink: "https://qurbani-hat-iota.vercel.app/",
    githubLink: "https://github.com/khaled1267/QurbaniHat",
    challenges:
  "The main challenge was implementing dynamic animal category filtering and optimizing images to improve performance and reduce page load times.",

futurePlans:
  "Future plans include integrating a secure payment gateway and adding a real-time chat system for sellers and buyers to enhance communication and user experience."
  },
  {   
    id: 2,
    title: "Pixzen (AI Image)",
    description: "An AI-powered image generation and management tool that helps users create and organize visual content efficiently.",
    category: "Pixzer Image",
    stack: "React, Next.js, HTML, Tailwind CSS, Framer Motion",
    tags: ["React", "Next.js", "Html", "Css"],
    image: "https://6a62565f2c9be6b62f96223b.imgix.net/sandbox/Screenshot%202026-07-23%20224434.png",
    liveLink: "https://pixgen-khaled-one.vercel.app/",
    githubLink: "https://github.com/khaled1267/pixgen-nextjs",
    challenges:
  "Handling large AI-generated images from the API and ensuring secure user authentication were the main challenges.",

futurePlans:
  "Future plans include adding custom image editing tools for users and integrating social sharing options for generated images."
  },
  {
    id: 3,
    title: "KinKeeper",
    description: "A high-end branding agency website featuring complex animations and a futuristic user experience.",
    category: "KinKeeper",
    stack: "React, Next.js, HTML, Tailwind CSS, Framer Motion",
    tags: ["React", "Next.js", "Html", "Css"],
    image: "https://6a62565f2c9be6b62f96223b.imgix.net/sandbox/Screenshot%202026-07-24%20000220.png",
    liveLink: "https://my-kinkeeper-project-nextjs.vercel.app/",
    githubLink: "https://github.com/khaled1267/A7-KinKeeper-next-js-project",
    challenges:
  "Maintaining performance while using GSAP and Framer Motion together, and ensuring smooth scroll-triggered animations, was quite challenging.",

futurePlans:
  "Future plans include adding more interactive 3D models and implementing customizable dark/light mode options."
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-32 px-6 bg-[#0B0F1A] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-[0.3em] text-blue-500 font-bold">Selected Work</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white">Featured Projects</h3>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-[32px] overflow-hidden aspect-[4/5] bg-[#0F172A] border border-white/5"
            >
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-[#0B0F1A]/80 to-transparent p-8 flex flex-col justify-end">
                <div className="space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs uppercase tracking-[0.2em] text-blue-400 font-bold">{project.category}</span>
                  <h4 className="text-2xl font-bold text-white">{project.title}</h4>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-300 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-white/10 hover:bg-white hover:text-black backdrop-blur-md transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal - প্রজেক্ট ডিটেইলস পেজ */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#0F172A] border border-white/10 rounded-[32px] w-full max-w-3xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Banner */}
              <div className="relative h-64 w-full">
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-red-500 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                  <div className="flex items-center gap-2 mt-2 text-blue-400">
                    <Code2 className="w-4 h-4" />
                    <span className="text-sm font-medium">{selectedProject.stack}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-gray-400 leading-relaxed">{selectedProject.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                  <div className="space-y-2">
                    <h4 className="flex items-center gap-2 text-white font-bold">
                      <Rocket className="w-4 h-4 text-orange-500" /> Challenges
                    </h4>
                    <p className="text-sm text-gray-400">{selectedProject.challenges}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="flex items-center gap-2 text-white font-bold">
                      <Lightbulb className="w-4 h-4 text-yellow-500" /> Future Plans
                    </h4>
                    <p className="text-sm text-gray-400">{selectedProject.futurePlans}</p>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex flex-wrap gap-4 pt-6">
                  <a 
                    href={selectedProject.liveLink} 
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all"
                  >
                    Live Project <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href={selectedProject.githubLink} 
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 text-white border border-white/10 font-bold hover:bg-white/10 transition-all"
                  >
                    <FaGithub  className="w-4 h-4" /> GitHub (Client)
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}