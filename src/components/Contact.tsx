"use client";

import React, { useState, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, Phone, Send, CheckCircle, AlertTriangle, X, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

interface ToastState {
  type: "success" | "error";
  message: string;
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  
  // Form values state
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Validation errors state
  const [errors, setErrors] = useState<FormErrors>({});

  // Submission loading state
  const [isSending, setIsSending] = useState(false);

  // Success / Error Toast notification state
  const [toast, setToast] = useState<ToastState | null>(null);

  // Input change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear validation error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Form Validation logic
  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    // Name Validation
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Phone Validation
    const phoneRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/; // Bangladesh phone validation format
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone.replace(/[\s-]/g, ""))) {
      tempErrors.phone = "Please enter a valid phone number (e.g. 01XXXXXXXXX)";
      isValid = false;
    }

    // Message Validation
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Send Email handler using EmailJS
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setToast({
        type: "error",
        message: "Please fix the validation errors in the form.",
      });
      setTimeout(() => setToast(null), 5000);
      return;
    }

    setIsSending(true);

    try {
      // Configuration parameters (User should configure these in their environment variables or dashboard)
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID|| "service_default"; 
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_default";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY_HERE";

      // Form validation details to pass to template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.phone,
        message: formData.message,
        to_name: "Khaled Mahmud",
      };

      if (publicKey === "YOUR_PUBLIC_KEY_HERE") {
        throw new Error("EmailJS Public Key is not configured yet. Please configure NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.");
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setToast({
        type: "success",
        message: "Message sent successfully! I will get back to you soon.",
      });

      // Clear toast after 5 seconds
      setTimeout(() => setToast(null), 5000);

    } catch (error: any) {
      console.error("EmailJS Error:", error);
      setToast({
        type: "error",
        message: error.message || "Failed to send message. Please try again later or email me directly.",
      });
      setTimeout(() => setToast(null), 6000);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-[#0B0F1A] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-[0.3em] text-blue-500 font-bold">Contact</h2>
              <h3 className="text-4xl md:text-7xl font-bold text-white">
                Let&apos;s build something <span className="text-blue-500">extraordinary</span>.
              </h3>
            </div>
            
            <p className="text-xl text-gray-400 max-w-md">
              Have a project in mind? Let&apos;s discuss how we can bring your ideas to life.
            </p>

            <div className="space-y-6 pt-8">
              {[
                { icon: Mail, label: "Email", value: "khaledmahmud8520@gmail.com" },
                { icon: Phone, label: "Phone", value: "+8801785724218" },
                { icon: MessageSquare, label: "LinkedIn", value: "Khaled Mahmud" },
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
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white ml-1">Name</label>
                  <div className={`relative p-[1px] rounded-2xl transition-all duration-300 ${
                    errors.name ? "bg-red-500" : "bg-gradient-to-r from-blue-500 to-red-500"
                  }`}>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name" 
                      className="w-full px-6 py-4 rounded-[15px] bg-[#0F172A] text-white focus:outline-none placeholder:text-gray-600" 
                    />
                  </div>
                  {errors.name && (
                    <p className="text-xs text-red-500 font-medium ml-1 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white ml-1">Email</label>
                  <div className={`relative p-[1px] rounded-2xl transition-all duration-300 ${
                    errors.email ? "bg-red-500" : "bg-gradient-to-r from-blue-500 to-red-500"
                  }`}>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email" 
                      className="w-full px-6 py-4 rounded-[15px] bg-[#0F172A] text-white focus:outline-none placeholder:text-gray-600" 
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-500 font-medium ml-1 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Input */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white ml-1">Phone</label>
                  <div className={`relative p-[1px] rounded-2xl transition-all duration-300 ${
                    errors.phone ? "bg-red-500" : "bg-gradient-to-r from-blue-500 to-red-500"
                  }`}>
                    <input 
                      type="text" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 01785724218" 
                      className="w-full px-6 py-4 rounded-[15px] bg-[#0F172A] text-white focus:outline-none placeholder:text-gray-600" 
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-500 font-medium ml-1 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5" /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white ml-1">Message</label>
                  <div className={`relative p-[1px] rounded-[25px] transition-all duration-300 ${
                    errors.message ? "bg-red-500" : "bg-gradient-to-r from-blue-500 to-red-500"
                  }`}>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4} 
                      placeholder="Please type your message here..." 
                      className="w-full px-6 py-4 rounded-[24px] bg-[#0F172A] text-white focus:outline-none placeholder:text-gray-600 resize-none" 
                    />
                  </div>
                  {errors.message && (
                    <p className="text-xs text-red-500 font-medium ml-1 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5" /> {errors.message}
                    </p>
                  )}
                </div>
                
                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={isSending}
                  className="w-full py-5 rounded-full font-bold text-white shadow-lg bg-gradient-to-r from-[#3b82f6] via-[#a855f7] to-[#ef4444] hover:scale-[1.02] active:scale-95 disabled:scale-100 disabled:opacity-70 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Animated Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl border shadow-2xl ${
              toast.type === "success"
                ? "bg-[#0B2F22] border-emerald-500/30 text-emerald-400"
                : "bg-[#331114] border-rose-500/30 text-rose-400"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle className="w-5 h-5 text-emerald-400 animate-bounce" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-rose-400 animate-pulse" />
            )}
            <span className="font-semibold text-sm">{toast.message}</span>
            <button 
              onClick={() => setToast(null)} 
              className="ml-4 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}