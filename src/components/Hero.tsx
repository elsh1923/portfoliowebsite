"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import MagneticButton from "./MagneticButton";
import { useScroll, useTransform } from "framer-motion";

// Pre-generate stable random shapes to avoid hydration mismatch
function generateShapes() {
  return Array.from({ length: 10 }, (_, i) => ({
    id: i,
    initialX: Math.random() * 100 - 50 + "%",
    initialY: Math.random() * 100 - 50 + "%",
    animateX: [
      Math.random() * 100 - 50 + "%",
      Math.random() * 100 - 50 + "%",
      Math.random() * 100 - 50 + "%",
    ],
    animateY: [
      Math.random() * 100 - 50 + "%",
      Math.random() * 100 - 50 + "%",
      Math.random() * 100 - 50 + "%",
    ],
    duration: 15 + Math.random() * 25,
    width: 300 + Math.random() * 400 + "px",
    height: 300 + Math.random() * 400 + "px",
    left: Math.random() * 100 + "%",
    top: Math.random() * 100 + "%",
  }));
}

export default function Hero() {
  const [shapes, setShapes] = useState<ReturnType<typeof generateShapes>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    setShapes(generateShapes());
  }, []);

  const headline = "I Architect & Engineer Digital Solutions".split(" ");

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Animated Shapes (Cinematic Blobs) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[100px] z-10 pointer-events-none" />
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            initial={{
              x: shape.initialX,
              y: shape.initialY,
              opacity: 0,
            }}
            animate={{
              x: shape.animateX,
              y: shape.animateY,
              opacity: [0.15, 0.4, 0.15],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-gradient-to-tr from-accent-purple/30 to-accent-gold/20 mix-blend-screen"
            style={{
              width: shape.width,
              height: shape.height,
              left: shape.left,
              top: shape.top,
              filter: "blur(60px)",
            }}
          />
        ))}
      </div>

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
            className="text-accent-gold font-semibold uppercase mb-6 block text-sm md:text-base"
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
                className={word === "Engineer" ? "bg-gradient-to-r from-accent-gold via-white to-accent-purple bg-clip-text text-transparent inline-block" : "inline-block"}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.5 }}
            className="text-xl md:text-3xl text-white/50 max-w-3xl mx-auto mb-12 font-light tracking-wide font-body"
          >
            Next.js Full-Stack Developer
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
                className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-accent-gold text-white font-bold rounded-full flex items-center justify-center group transition-all hover:bg-yellow-500 hover:shadow-[0_0_30px_rgba(249,168,38,0.5)]"
              >
                View Portfolio
                <div className="ml-3 overflow-hidden relative w-5 h-5">
                  <motion.div 
                    className="absolute flex items-center"
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    transition={{ ease: "easeOut", duration: 0.3 }}
                  >
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </motion.div>
                </div>
              </a>
            </MagneticButton>
            
            <MagneticButton>
              <a
                href="/Elshaday-Dagne-Demessie-websiteCvFeb2026.pdf"
                target="_blank"
                download="Elshaday-Dagne-Demessie-websiteCvFeb2026.pdf"
                className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 border border-white/20 text-white font-bold rounded-full flex items-center justify-center transition-all hover:border-white hover:bg-white/5"
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
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-white/50">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" 
        />
      </motion.div>
    </section>
  );
}
