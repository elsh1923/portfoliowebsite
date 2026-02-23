"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-gold font-bold tracking-widest uppercase mb-4 block underline decoration-accent-purple/50 underline-offset-8">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 leading-tight">
              Let's Create Something <span className="text-accent-gold">Extraordinary</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 font-body leading-relaxed">
              Whether you have a groundbreaking project in mind or just want to say hello, my inbox is always open. Let's explore how we can work together to bring your ideas to life.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-accent-purple/10 rounded-2xl flex items-center justify-center text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Email Me</p>
                  <p className="text-xl font-heading font-semibold">elshadaydagne480@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-accent-gold/10 rounded-2xl flex items-center justify-center text-accent-gold group-hover:bg-accent-gold group-hover:text-primary transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Call Me</p>
                  <p className="text-xl font-heading font-semibold">+251927617474</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/60 group-hover:bg-white group-hover:text-primary transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Location</p>
                  <p className="text-xl font-heading font-semibold">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary/50 backdrop-blur-md p-10 rounded-3xl border border-white/5 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 uppercase tracking-widest ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-secondary/50 border border-white/10 rounded-xl focus:border-accent-gold outline-none transition-all placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 uppercase tracking-widest ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-secondary/50 border border-white/10 rounded-xl focus:border-accent-gold outline-none transition-all placeholder:text-white/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/60 uppercase tracking-widest ml-1">Subject</label>
                <input
                  type="text"
                  placeholder="Project Enquiry"
                  className="w-full px-6 py-4 bg-secondary/50 border border-white/10 rounded-xl focus:border-accent-gold outline-none transition-all placeholder:text-white/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/60 uppercase tracking-widest ml-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-secondary/50 border border-white/10 rounded-xl focus:border-accent-gold outline-none transition-all placeholder:text-white/20 resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-accent-gold to-accent-purple text-primary font-bold rounded-xl flex items-center justify-center gap-3 transition-all hover:shadow-[0_0_30px_rgba(108,99,255,0.3)] shadow-xl"
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
