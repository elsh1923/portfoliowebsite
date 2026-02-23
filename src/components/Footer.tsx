"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-primary border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-heading font-extrabold bg-gradient-to-r from-accent-gold to-accent-purple bg-clip-text text-transparent"
          >
            PORTFOLIO<span className="text-white">.</span>
          </motion.div>

          <div className="text-white/40 text-sm font-medium">
            &copy; {currentYear} Personal Portfolio. Crafted with ❤️ and Next.js.
          </div>

          <div className="flex items-center gap-6">
             {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
               <motion.a
                key={i}
                href="#"
                whileHover={{ y: -5, color: "#F9A826" }}
                className="text-white/60 transition-colors"
               >
                 <Icon size={24} />
               </motion.a>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
