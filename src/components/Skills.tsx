"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Atom, 
  Code2, 
  Server, 
  Database, 
  Layout, 
  Terminal
} from "lucide-react";

const skillGroups = [
  {
    group: "Frontend",
    skills: [
      { name: "Next.js (SSR/SSG)", icon: Globe },
      { name: "React.js", icon: Atom },
      { name: "TypeScript", icon: Code2 },
      { name: "Tailwind CSS", icon: Layout },
    ],
  },
  {
    group: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Python", icon: Terminal },
    ],
  },
  {
    group: "Database",
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
    ],
  },
];

export default function Skills() {
  let globalIndex = 0;

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-background text-foreground">
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
            Expertise &amp; <span className="text-accent-gold italic pr-2">Skills</span>
          </motion.h2>
        </div>

        <div className="space-y-16 max-w-7xl mx-auto">
          {skillGroups.map((group) => (
            <div key={group.group}>
              {/* Group header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-8"
              >
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted">
                  {group.group}
                </span>
                <div className="flex-1 h-[1px] bg-white/8" />
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {group.skills.map((skill) => {
                  const i = globalIndex++;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                      className="group relative"
                    >
                      <div className="relative h-full bg-card border border-white/10 group-hover:border-white/20 p-8 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center">
                        <div className="relative z-10 flex flex-col items-center">
                          <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/10 group-hover:border-white/20 text-foreground">
                            <skill.icon size={32} strokeWidth={1.5} />
                          </div>
                          <h3 className="text-lg md:text-xl font-heading font-bold text-foreground transition-colors duration-500">
                            {skill.name}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
