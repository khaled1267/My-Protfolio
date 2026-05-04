"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-[0.3em] text-blue-500 font-bold">Contact</h2>
              <h3 className="text-4xl md:text-7xl font-bold text-white">Let&apos;s build something <span className="text-blue-500">extraordinary</span>.</h3>
            </div>
            
            <p className="text-xl text-gray-400 max-w-md">
              Have a project in mind? Let&apos;s discuss how we can bring your ideas to life.
            </p>

            <div className="space-y-6 pt-8">
              {[
                { icon: Mail, label: "Email", value: "khaledkhan1267@gmail.com" },
                { icon: Phone, label: "Phone", value: "+880 01785724218" },
                { icon: MessageSquare, label: "Linkdin", value: "khaled1267" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all">
                    <item.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">{item.label}</div>
                    <div className="text-lg font-medium text-white">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-[2px] rounded-[40px] overflow-hidden"
          >
            {/* Outer Box Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-500/20 to-red-600 opacity-50" />
            
            <div className="relative p-8 md:p-12 rounded-[38px] bg-[#0F172A] z-10">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Input */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-white ml-1">Name</label>
                    <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 to-red-500">
                      <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-[15px] bg-[#0F172A] text-white focus:outline-none placeholder:text-gray-600" />
                    </div>
                  </div>
                  {/* Email Input */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-white ml-1">Email</label>
                    <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 to-red-500">
                      <input type="email" placeholder="Your Email" className="w-full px-6 py-4 rounded-[15px] bg-[#0F172A] text-white focus:outline-none placeholder:text-gray-600" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Phone Input */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-white ml-1">Phone</label>
                    <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 to-red-500">
                      <input type="text" placeholder="01XXXXXXXXX" className="w-full px-6 py-4 rounded-[15px] bg-[#0F172A] text-white focus:outline-none placeholder:text-gray-600" />
                    </div>
                  </div>
                  {/* Company Input */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-white ml-1">Company</label>
                    <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 to-red-500">
                      <input type="text" placeholder="Your Company" className="w-full px-6 py-4 rounded-[15px] bg-[#0F172A] text-white focus:outline-none placeholder:text-gray-600" />
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-white ml-1">Message</label>
                  <div className="relative p-[1px] rounded-[25px] bg-gradient-to-r from-blue-500 to-red-500">
                    <textarea rows={4} placeholder="Please type your message here..." className="w-full px-6 py-4 rounded-[24px] bg-[#0F172A] text-white focus:outline-none placeholder:text-gray-600 resize-none" />
                  </div>
                </div>
                
                {/* Submit Button with Gradient Background */}
                <button className="w-full py-5 rounded-full font-bold text-white shadow-lg bg-gradient-to-r from-[#3b82f6] via-[#a855f7] to-[#ef4444] hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3">
                  Send message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}