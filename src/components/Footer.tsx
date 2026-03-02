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
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-white/40 text-xs sm:text-sm font-medium tracking-widest uppercase">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-gold"></span>
                </span>
                <span>Based in Addis Ababa</span>
              </div>
              <span className="hidden sm:inline">—</span>
              <span>{time || "Loading..."} EAT</span>
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
              <li>
                <a
                  href="https://t.me/YeEl1221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-accent-gold transition-colors flex items-center gap-3 w-fit group"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="group-hover:-translate-y-1 transition-transform shrink-0"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Telegram
                </a>
              </li>
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
