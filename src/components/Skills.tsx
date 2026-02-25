"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Atom, 
  Code2, 
  Server, 
  Database, 
  Layout, 
  Cpu
} from "lucide-react";

const skills = [
  { name: "Next.js (SSR/SSG)", icon: Globe, color: "#FFFFFF" },
  { name: "React.js", icon: Atom, color: "#61DAFB" },
  { name: "TypeScript", icon: Code2, color: "#3178C6" },
  { name: "Node.js", icon: Server, color: "#339933" },
  { name: "PostgreSQL", icon: Database, color: "#4169E1" },
  { name: "MongoDB", icon: Database, color: "#47A248" },
  { name: "Tailwind CSS", icon: Layout, color: "#38BDF8" },
  { name: "Full-Stack Dev", icon: Cpu, color: "#A855F7" },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
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
              <div className="relative h-full bg-white/[0.02] backdrop-blur-sm border border-white/5 group-hover:border-white/20 p-8 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 group-hover:shadow-2xl flex flex-col items-center text-center">
                
                {/* Decorative glowing orb in corner */}
                <div 
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"
                  style={{ backgroundColor: skill.color }}
                />

                <div className="relative z-10 flex flex-col items-center">
                  <div 
                    className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/10 group-hover:border-white/20 shadow-inner"
                    style={{ color: skill.color }}
                  >
                    <skill.icon size={32} strokeWidth={1.5} />
                  </div>
                  
                  <h3 
                    className="text-lg md:text-xl font-heading font-bold text-white transition-colors duration-500 group-hover:text-accent-gold"
                  >
                    {skill.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
