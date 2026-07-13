"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Wegie ወጌ - AI",
    category: "AI",
    image: "/wegie-thumb.png",
    description: "An AI-powered tool that automatically generates accurate Amharic subtitles for videos and audio in seconds.",
    problem: "Traditional tools lack support for Amharic's complex script, making manual transcription slow and error-prone.",
    tags: ["Next.js", "Python", "AI", "Amharic", "Full-Stack"],
    link: "https://wegie-ai-fz1a.vercel.app/",
    type: "Full-Stack",
    featured: true,
  },
  {
    id: 8,
    title: "Adwa AI Assistant",
    category: "AI",
    image: "/image_2026-03-16_04-25-20.png",
    description: "A state-of-the-art educational platform that brings the Battle of Adwa to life using RAG-powered AI. Chat with Emperor Menelik II, Empress Taytu Betul, and other historical leaders, explore AI-driven story modes, and test knowledge through dynamic quizzes.",
    problem: "The Battle of Adwa — Africa's greatest military victory — lacked a modern, immersive digital experience. There was no platform where learners could converse with historical figures, explore tactical strategies, and engage with the full depth of Ethiopian history through AI.",
    tags: ["React", "TypeScript", "Node.js", "Groq AI", "RAG", "Full-Stack"],
    link: "https://adwa-gamma.vercel.app/",
    type: "Full-Stack",
    featured: true,
  },
  {
    id: 3,
    title: "Agazian Geʽez Learning",
    category: "Full-Stack",
    image: "/agazian-thumb.png",
    description: "A Geʽez learning platform with an interactive quiz system and admin dashboard.",
    problem: "Ge'ez, an ancient liturgical language, had very few digital platforms for interactive and remote learning.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    link: "https://geez-learning.vercel.app/",
    type: "Full-Stack",
    featured: true,
  },
  {
    id: 2,
    title: "NextJemari",
    category: "Full-Stack",
    image: "/nextjemari-thumb-v2.png",
    description: "A full-stack knowledge-sharing platform where users can create and manage MDX-based technical articles.",
    problem: "Developers often struggle to find a centralized, SEO-friendly space for sharing deep technical content with MDX.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
    link: "https://next-jemari-sl3l.vercel.app/",
    type: "Full-Stack",
    featured: false,
  },
  {
    id: 4,
    title: "eBook Library",
    category: "Full-Stack",
    image: "/ebook-library-thumb.png",
    description: "A modern eBook platform for reading and managing digital books online with SSR optimization.",
    problem: "Online reading experiences are often cluttered; this project focuses on a clean, performance-first minimalist UI.",
    tags: ["Next.js", "SSR", "Performance"],
    link: "https://ebook-axds.vercel.app/",
    type: "Full-Stack",
    featured: false,
  },
  {
    id: 5,
    title: "Sisay Begena",
    category: "Frontend",
    image: "/sisay-begena-thumb.png",
    description: "Responsive and user-friendly About page for a renowned musical instrument training institute.",
    problem: "The institute needed a modern digital bridge to attract younger students interested in traditional music.",
    tags: ["React.js", "Tailwind CSS"],
    link: "https://sisaybegenaethiopia.com/am/about",
    type: "Frontend",
    featured: false,
  },
  {
    id: 6,
    title: "Canaan Hub",
    category: "Full-Stack",
    image: "/canaan-thumb.png",
    description: "A faith learning hub featuring structured video lessons, digital books, and a community Q&A system.",
    problem: "Access to high-quality, structured religious education materials in a modern mobile-friendly format was limited.",
    tags: ["Next.js", "Video Streaming", "Q&A System"],
    link: "https://kenean-2pmd.vercel.app/",
    type: "Full-Stack",
    featured: false,
  },
  {
    id: 7,
    title: "Enese Trading",
    category: "Frontend",
    image: "/enese-trading-thumb.jpg",
    description: "Professional business website featuring modern UI design and optimized SEO performance.",
    problem: "Traditional trading businesses lacked a professional digital storefront to compete in the modern market.",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
    link: "https://enese-trading.vercel.app/",
    type: "Frontend",
    featured: false,
  },
];

const categories = ["All", "AI", "Full-Stack", "Frontend"];

function ProjectCard({ project, compact = false }: { project: typeof projects[0]; compact?: boolean }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="group relative cursor-pointer rounded-[2rem] bg-card border border-white/10 hover:border-white/20 overflow-hidden block"
    >
      <div className={`relative ${compact ? "aspect-[16/9]" : "aspect-[16/10]"} overflow-hidden rounded-t-[2rem]`}>
        <Image
          src={project.image}
          alt=""
          aria-hidden="true"
          width={800}
          height={500}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <div className="w-16 h-16 rounded-full bg-accent-gold text-background flex items-center justify-center">
            <ExternalLink size={24} className="ml-1" />
          </div>
        </div>
      </div>

      <div className={`${compact ? "p-6" : "p-8"} relative z-10`}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-muted text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
              {project.category}
            </span>
            <h3 className={`${compact ? "text-xl" : "text-2xl"} font-heading font-extrabold text-foreground group-hover:text-accent-gold transition-colors duration-300`}>
              {project.title}
            </h3>
          </div>
        </div>

        <p className="text-muted text-sm mb-6 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {!compact && (
          <div className="mb-8 p-4 bg-background rounded-2xl border border-white/5">
            <h4 className="text-muted text-[10px] font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
              Problem Solved
            </h4>
            <p className="text-muted text-xs leading-relaxed italic">
              &quot;{project.problem}&quot;
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-muted rounded-full text-xs font-semibold">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const featuredProjects = projects.filter((p) => p.featured);
  const moreProjects = projects.filter((p) => !p.featured);

  const filteredFeatured = featuredProjects.filter(
    (p) => filter === "All" || p.type === filter || p.category === filter
  );
  const filteredMore = moreProjects.filter(
    (p) => filter === "All" || p.type === filter || p.category === filter
  );

  return (
    <section id="portfolio" className="py-32 bg-background relative overflow-hidden text-foreground">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-8 bg-accent-gold" />
              <span className="text-accent-gold font-bold tracking-[0.2em] uppercase text-sm">
                Selected Work
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-7xl font-heading font-extrabold tracking-tight"
            >
              Creative <span className="text-muted italic font-light">Showcase</span>
            </motion.h2>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 bg-card p-2 rounded-full border border-white/10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                  filter === cat
                    ? "bg-accent-gold text-background"
                    : "text-muted hover:text-foreground hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Featured Projects */}
        {filteredFeatured.length > 0 && (
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-foreground">Featured</span>
              <div className="flex-1 h-[1px] bg-white/8" />
            </motion.div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredFeatured.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* More Work */}
        {filteredMore.length > 0 && (
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted">More Work</span>
              <div className="flex-1 h-[1px] bg-white/8" />
            </motion.div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatePresence>
                {filteredMore.map((project) => (
                  <ProjectCard key={project.id} project={project} compact />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {filteredFeatured.length === 0 && filteredMore.length === 0 && (
          <p className="text-muted text-center py-20">No projects match this filter.</p>
        )}
      </div>
    </section>
  );
}
