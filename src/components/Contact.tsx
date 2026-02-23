"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-primary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-gold/5 lg:from-accent-gold/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-purple/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-accent-purple" />
              <span className="text-accent-purple font-bold tracking-[0.2em] uppercase text-sm">
                Get In Touch
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-7xl font-heading font-extrabold mb-6 md:mb-8 leading-[1.1] tracking-tight">
              Let's Create <br/> Something <span className="text-accent-gold italic font-light font-body">Extraordinary.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/50 mb-12 font-body leading-relaxed font-light max-w-lg">
              Whether you have a groundbreaking project in mind or just want to explore opportunities, my inbox is always open. 
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email Me", value: "elshadaydagne480@gmail.com", color: "from-accent-gold to-accent-purple" },
                { icon: Phone, label: "Call Me", value: "+251927617474", color: "from-accent-purple to-accent-gold" },
                { icon: MapPin, label: "Location", value: "Addis Ababa, Ethiopia", color: "from-white/20 to-white/5" }
              ].map((item, i) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/30 transition-colors duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    <item.icon size={24} className="text-white/70 group-hover:text-white transition-colors duration-500 relative z-10" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-1">{item.label}</p>
                    <p className="text-xl font-heading font-semibold text-white group-hover:text-accent-gold transition-colors duration-300">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/10 to-accent-gold/10 rounded-[2rem] blur-2xl transform scale-110 -z-10" />
            <div className="bg-secondary/40 backdrop-blur-2xl p-10 md:p-12 rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-3 group/input">
                    <label className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] ml-2 group-focus-within/input:text-accent-gold transition-colors">Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-white/[0.03] border-b-2 border-transparent focus:border-accent-gold focus:bg-white/[0.05] rounded-xl outline-none transition-all placeholder:text-white/20 font-body text-white"
                    />
                  </div>
                  <div className="space-y-3 group/input">
                    <label className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] ml-2 group-focus-within/input:text-accent-gold transition-colors">Email</label>
                    <input
                      type="email"
                      placeholder="hello@example.com"
                      className="w-full px-6 py-4 bg-white/[0.03] border-b-2 border-transparent focus:border-accent-gold focus:bg-white/[0.05] rounded-xl outline-none transition-all placeholder:text-white/20 font-body text-white"
                    />
                  </div>
                </div>
                <div className="space-y-3 group/input">
                  <label className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] ml-2 group-focus-within/input:text-accent-gold transition-colors">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full px-6 py-4 bg-white/[0.03] border-b-2 border-transparent focus:border-accent-gold focus:bg-white/[0.05] rounded-xl outline-none transition-all placeholder:text-white/20 font-body text-white"
                  />
                </div>
                <div className="space-y-3 group/input">
                  <label className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] ml-2 group-focus-within/input:text-accent-gold transition-colors">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your vision..."
                    className="w-full px-6 py-4 bg-white/[0.03] border-b-2 border-transparent focus:border-accent-gold focus:bg-white/[0.05] rounded-xl outline-none transition-all placeholder:text-white/20 resize-none font-body text-white"
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#fff", color: "#0A0B10" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-gradient-to-r from-accent-gold to-accent-purple text-primary font-bold tracking-wide uppercase rounded-xl flex items-center justify-center gap-3 transition-all shadow-[0_10px_40px_rgba(249,168,38,0.3)] hover:shadow-[0_10px_60px_rgba(249,168,38,0.5)] border border-transparent hover:border-white relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
}
