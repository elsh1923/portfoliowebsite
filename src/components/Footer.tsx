"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { useEffect, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Africa/Addis_Ababa", // Ethiopia Time
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-primary pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="col-span-1 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="text-3xl font-heading font-extrabold tracking-tighter">
                ELSHADAY<span className="text-accent-gold">.</span>
              </span>
            </motion.div>
            <p className="text-white/50 max-w-sm font-body font-light leading-relaxed mb-8">
              A passionate Full-Stack Developer specializing in crafting immersive, high-performance digital experiences. 
            </p>
            
            <div className="flex items-center gap-4 text-white/40 text-sm font-medium tracking-widest uppercase">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-gold"></span>
              </span>
              Based in Addis Ababa — {time || "Loading..."} EAT
            </div>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-[0.2em] text-sm font-bold mb-6">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "About", "Skills", "Portfolio"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/60 hover:text-accent-gold transition-colors block w-fit">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-[0.2em] text-sm font-bold mb-6">Socials</h4>
            <ul className="space-y-4">
              {[
                { name: "GitHub", href: "https://github.com/elsh1923", icon: Github },
                { name: "LinkedIn", href: "https://www.linkedin.com/in/elshaday-dagne-b4a6b1238/", icon: Linkedin },
              ].map((social) => (
                <li key={social.name}>
                  <a 
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-accent-gold transition-colors flex items-center gap-3 w-fit group"
                  >
                    <social.icon size={16} className="group-hover:-translate-y-1 transition-transform" />
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
          <div className="text-white/40 text-sm font-medium">
            &copy; {currentYear} Elshaday Dagne Demessie. All rights reserved.
          </div>
          
          <MagneticButton>
            <button 
              onClick={scrollToTop}
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:bg-accent-gold hover:border-accent-gold transition-all group"
            >
              <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
}
