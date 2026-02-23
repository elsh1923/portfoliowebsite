"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { User, Code, Layout } from "lucide-react";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const stats = [
    { label: "Graduation Year", value: "2025", icon: User },
    { label: "Projects Built", value: "4+", icon: Layout },
    { label: "Tech Stack", value: "Next.js", icon: Code },
    { label: "Location", value: "Addis Ababa", icon: Layout },
  ];

  return (
    <section id="about" ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-accent-purple/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-accent-gold/5 to-transparent blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Image Side with Parallax */}
          <motion.div
            style={{ y: y1 }}
            className="lg:w-1/2 w-full max-w-md mx-auto relative perspective-[1000px]"
          >
            <motion.div
              initial={{ opacity: 0, rotateY: 15, scale: 0.9 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group preserve-3d"
            >
              <div className="absolute -inset-8 bg-gradient-to-tr from-accent-gold to-accent-purple rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 p-4 rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:rotate-y-[5deg] hover:rotate-x-[5deg]">
                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl bg-primary/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent z-10" />
                  <img 
                    src="/profile.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Floating Elements on Image */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 -right-4 w-24 h-24 bg-accent-gold/20 rounded-full blur-xl z-20"
                  />
                  <motion.div 
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-20 -left-6 w-32 h-32 bg-accent-purple/20 rounded-full blur-xl z-20"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side with Parallax */}
          <motion.div
            style={{ y: y2 }}
            className="lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-accent-gold" />
                <span className="text-accent-gold font-bold tracking-[0.2em] uppercase text-sm">
                  About Me
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-8 leading-[1.1]">
                Crafting Digital <br/>
                <span className="bg-gradient-to-r from-accent-purple to-accent-gold bg-clip-text text-transparent italic pr-4">Excellence</span>
              </h2>
              
              <p className="text-xl text-white/60 mb-12 font-body leading-relaxed max-w-xl font-light">
                Hello! I'm Elshaday Dagne Demessie, a passionate Full-Stack Developer with a strong foundation in building modern, responsive, and scalable web applications. Currently studying Computer Science at Addis Ababa University.
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col relative group"
                  >
                    <div className="absolute -left-4 top-0 w-1 h-full bg-white/5 group-hover:bg-accent-gold transition-colors duration-500 rounded-full origin-bottom scale-y-0 group-hover:scale-y-100" />
                    
                    <span className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-2 tracking-tight group-hover:text-accent-gold transition-colors duration-500">
                      {stat.value}
                    </span>
                    <span className="text-white/40 font-medium uppercase tracking-[0.15em] text-xs">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
