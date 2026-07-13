"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import MagneticButton from "./MagneticButton";
import { useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const headline = "Engineering Culturally Intelligent Tech for Ethiopia".split(" ");

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background text-foreground"
    >
      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
            className="text-muted font-semibold uppercase mb-6 block text-sm md:text-base"
          >
            Welcome to my creative universe
          </motion.span>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-heading font-extrabold mb-6 md:mb-8 leading-[1.1] tracking-tight max-w-5xl mx-auto flex flex-wrap justify-center gap-x-3 gap-y-2">
            {headline.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.1 + 0.2, 
                  ease: [0.2, 0.65, 0.3, 0.9] 
                }}
                className={word === "Ethiopia" ? "text-accent-gold inline-block" : "inline-block"}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.5 }}
            className="text-xl md:text-2xl text-muted max-w-3xl mx-auto mb-12 font-light tracking-wide font-body leading-relaxed"
          >
            Developing Ge'ez learning platforms, Amharic AI tools, and immersive historical experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full px-4"
          >
            <MagneticButton>
              <a
                href="#portfolio"
                className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-accent-gold text-background font-bold rounded-full flex items-center justify-center group transition-colors hover:bg-accent-gold/90"
              >
                View Portfolio
                <div className="ml-3 overflow-hidden relative w-5 h-5">
                  <motion.div 
                    className="absolute flex items-center"
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    transition={{ ease: "easeOut", duration: 0.3 }}
                  >
                    <ArrowRight className="group-hover:translate-x-1 transition-transform text-background" size={20} />
                  </motion.div>
                </div>
              </a>
            </MagneticButton>
            
            <MagneticButton>
              <a
                href="/Elshaday-Dagne-Demessie-websiteCvFeb2026.pdf"
                target="_blank"
                download="Elshaday-Dagne-Demessie-websiteCvFeb2026.pdf"
                className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 border border-white/10 text-foreground font-bold rounded-full flex items-center justify-center transition-colors hover:bg-white/5"
              >
                Download CV
                <Download className="ml-3" size={20} />
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-muted">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-white/20" 
        />
      </motion.div>
    </section>
  );
}
