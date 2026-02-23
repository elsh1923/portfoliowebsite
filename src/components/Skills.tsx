"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Next.js (SSR/SSG)", level: 95, color: "#FFFFFF" },
  { name: "React.js", level: 92, color: "#61DAFB" },
  { name: "TypeScript", level: 90, color: "#3178C6" },
  { name: "Node.js", level: 85, color: "#339933" },
  { name: "PostgreSQL", level: 88, color: "#4169E1" },
  { name: "MongoDB", level: 85, color: "#47A248" },
  { name: "Prisma ORM", level: 82, color: "#2D3748" },
  { name: "Tailwind CSS", level: 95, color: "#38BDF8" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-gold/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent-purple/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent-gold font-bold tracking-widest uppercase mb-4 block"
          >
            Technical Stack
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-extrabold"
          >
            Expertise & <span className="text-accent-gold">Skills</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-heading font-semibold text-white group-hover:text-accent-gold transition-colors">
                  {skill.name}
                </span>
                <span className="text-white/40 text-sm font-body">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                  className="h-full rounded-full bg-gradient-to-r from-accent-gold to-accent-purple"
                  style={{
                    boxShadow: "0 0 10px rgba(249, 168, 38, 0.3)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Icons Background (Optional/Decorative) */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-20">
          {/* We can add logos here or just keep it clean */}
        </div>
      </div>
    </section>
  );
}
