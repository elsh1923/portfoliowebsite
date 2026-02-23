"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useState, useEffect } from "react";

// Pre-generate stable random shapes to avoid hydration mismatch
function generateShapes() {
  return Array.from({ length: 15 }, (_, i) => ({
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
    duration: 10 + Math.random() * 20,
    width: 200 + Math.random() * 300 + "px",
    height: 200 + Math.random() * 300 + "px",
    left: Math.random() * 100 + "%",
    top: Math.random() * 100 + "%",
  }));
}

export default function Hero() {
  const [shapes, setShapes] = useState<ReturnType<typeof generateShapes>>([]);

  useEffect(() => {
    setShapes(generateShapes());
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Animated Shapes */}
      <div className="absolute inset-0 z-0">
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
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute rounded-full bg-accent-purple/20 blur-3xl"
            style={{
              width: shape.width,
              height: shape.height,
              left: shape.left,
              top: shape.top,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-accent-gold font-semibold tracking-widest uppercase mb-4 block"
          >
            Welcome to my creative universe
          </motion.span>
          <h1 className="text-5xl md:text-8xl font-heading font-extrabold mb-6 leading-tight">
            I Architect & <span className="bg-gradient-to-r from-accent-gold to-accent-purple bg-clip-text text-transparent">Engineer</span> Digital Solutions
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed font-body">
            Next.js Full-Stack Developer
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent-gold text-primary font-bold rounded-full flex items-center group transition-all hover:shadow-[0_0_20px_rgba(249,168,38,0.4)]"
            >
              View Portfolio
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </motion.a>
            <motion.a
              href="/Elshaday-Dagne-Demessie-websiteCvFeb2026.pdf"
              target="_blank"
              whileHover={{ scale: 1.05, borderColor: "#F9A826", color: "#F9A826" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-full flex items-center transition-all"
            >
              Download CV
              <Download className="ml-2" size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Hero Overlay */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-accent-gold to-transparent" />
      </div>
    </section>
  );
}
