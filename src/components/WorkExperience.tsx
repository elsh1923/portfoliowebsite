"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Sisay Begena Musical Instruments Training Institute",
    location: "Addis Ababa, Ethiopia",
    period: "2024",
    type: "Freelance",
    description:
      "Designed and implemented a responsive, user-friendly About page for the institute's public-facing website. Focused on delivering a clean, modern interface that authentically reflects the institute's cultural identity and mission.",
    highlights: [
      "Built responsive, accessible UI with React.js & Tailwind CSS",
      "Implemented bilingual layout supporting Amharic and English content",
      "Optimized page performance and cross-browser compatibility",
    ],
    color: "#F9A826",
  },
];

export default function WorkExperience() {
  return (
    <section id="experience" className="py-32 bg-primary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent-purple/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-8 bg-accent-purple" />
            <span className="text-accent-purple font-bold tracking-[0.2em] uppercase text-sm">
              Career
            </span>
            <div className="h-[1px] w-8 bg-accent-purple" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight"
          >
            Work <span className="text-accent-gold italic pr-2">Experience</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-gold/60 via-accent-purple/30 to-transparent hidden md:block" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative group md:pl-24 mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div
                className="hidden md:flex absolute left-0 top-6 w-16 h-16 rounded-full items-center justify-center border-2 z-10 transition-all duration-500 group-hover:scale-110 shadow-lg"
                style={{
                  borderColor: exp.color,
                  backgroundColor: `${exp.color}15`,
                  boxShadow: `0 0 20px ${exp.color}30`,
                }}
              >
                <Briefcase size={22} style={{ color: exp.color }} strokeWidth={1.5} />
              </div>

              {/* Card */}
              <div className="relative bg-white/[0.03] border border-white/8 hover:border-white/15 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl backdrop-blur-sm overflow-hidden">
                {/* Glow on hover */}
                <div
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                  style={{ backgroundColor: exp.color }}
                />

                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 relative z-10">
                  <div>
                    <span
                      className="text-xs font-bold uppercase tracking-[0.2em] mb-2 block"
                      style={{ color: exp.color }}
                    >
                      {exp.type}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-white group-hover:text-accent-gold transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-white/60 mt-1 text-base font-medium">{exp.company}</p>
                  </div>

                  <div className="flex flex-col gap-2 shrink-0 text-sm text-white/40">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/55 leading-relaxed mb-8 relative z-10">{exp.description}</p>

                {/* Highlights */}
                <div className="relative z-10 space-y-3">
                  {exp.highlights.map((h, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div
                        className="mt-[6px] w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: exp.color }}
                      />
                      <span className="text-white/60 text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
