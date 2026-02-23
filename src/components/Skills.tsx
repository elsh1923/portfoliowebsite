"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Next.js (SSR/SSG)", level: 95, color: "#FFFFFF" },
  { name: "React.js", level: 92, color: "#61DAFB" },
  { name: "TypeScript", level: 90, color: "#3178C6" },
  { name: "Node.js", level: 85, color: "#339933" },
  { name: "PostgreSQL", level: 88, color: "#4169E1" },
  { name: "MongoDB", level: 85, color: "#47A248" },
  { name: "Tailwind CSS", level: 95, color: "#38BDF8" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-secondary/10">
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-accent-purple/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-8 bg-accent-gold" />
            <span className="text-accent-gold font-bold tracking-[0.2em] uppercase text-sm">
              Technical Stack
            </span>
            <div className="h-[1px] w-8 bg-accent-gold" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight"
          >
            Expertise & <span className="bg-gradient-to-r from-accent-purple to-accent-gold bg-clip-text text-transparent italic pr-2">Skills</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div 
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                style={{ backgroundColor: `${skill.color}15` }}
              />
              <div className="relative h-full bg-white/[0.02] backdrop-blur-sm border border-white/5 group-hover:border-white/20 p-8 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 group-hover:shadow-2xl">
                
                {/* Decorative glowing orb in corner */}
                <div 
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"
                  style={{ backgroundColor: skill.color }}
                />

                <div className="flex flex-col h-full justify-between relative z-10">
                  <div className="mb-8">
                    <span 
                      className="text-2xl font-heading font-bold text-white transition-colors duration-500"
                      style={{ textShadow: `0 0 20px ${skill.color}00` }}
                    >
                      {skill.name}
                    </span>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-end mb-3">
                      <span className="text-white/40 text-xs font-bold uppercase tracking-wider">Proficiency</span>
                      <span 
                        className="text-2xl font-body font-light"
                        style={{ color: skill.color }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 + (i * 0.1) }}
                        className="h-full rounded-full"
                        style={{
                          backgroundColor: skill.color,
                          boxShadow: `0 0 10px ${skill.color}80`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
