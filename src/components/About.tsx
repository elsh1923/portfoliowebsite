"use client";

import { motion } from "framer-motion";
import { User, Code, Video, Layout } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Graduation Year", value: "2025", icon: User },
    { label: "Projects Built", value: "4+", icon: Layout },
    { label: "Tech Stack", value: "Next.js", icon: Code },
    { label: "Location", value: "Addis Ababa", icon: Layout },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent-gold to-accent-purple rounded-2xl blur-2xl opacity-20" />
              <div className="relative bg-primary border border-white/10 p-2 rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-square relative overflow-hidden rounded-xl">
                  <img 
                    src="/profile.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-accent-gold font-bold tracking-widest uppercase mb-4 block underline decoration-accent-purple/50 underline-offset-8">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 leading-tight">
              Crafting Digital Excellence with <span className="text-accent-purple">Passion</span>
            </h2>
            <p className="text-lg text-white/70 mb-8 font-body leading-relaxed">
              Hello! I'm Elshaday Dagne Demessie, a passionate Fullstack Developer with a strong foundation in building modern, responsive, and scalable web applications. Currently studying Computer Science at Addis Ababa University, I specialize in transforming complex problems into simple, user-friendly solutions using the Next.js ecosystem.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex flex-col"
                >
                  <span className="text-3xl font-heading font-extrabold text-white mb-1">
                    {stat.value}
                  </span>
                  <span className="text-white/40 font-medium uppercase tracking-wider text-sm">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
