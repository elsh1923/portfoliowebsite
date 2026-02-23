"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "NextJemari",
    category: "Knowledge Hub Platform",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    description: "A full-stack knowledge-sharing platform where users can create, publish, and manage MDX-based technical articles. Features authentication, user profiles, and full-text search.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "TypeScript", "NextAuth.js"],
  },
  {
    id: 2,
    title: "Agazian Geʽez Learning",
    category: "Educational Platform",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800",
    description: "Built a Geʽez learning platform with authentication, admin dashboard, and quiz system. Implemented user roles for managing courses.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "GlaserMorphism"],
  },
  {
    id: 3,
    title: "eBook Library",
    category: "Online Book Platform",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=800",
    description: "A modern eBook platform for reading and managing digital books online. Optimized performance using server-side rendering and lazy loading.",
    tags: ["Next.js", "SSR", "Performance", "Lazy Loading"],
  },
  {
    id: 4,
    title: "Sisay Begena",
    category: "Frontend Development",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
    description: "Designed and implemented a responsive, user-friendly About page for Sisay Begena Musical Instruments Training Institute.",
    tags: ["React.js", "Tailwind CSS", "Ethiopian Heritage"],
  },
  {
    id: 5,
    title: "Canaan Learning Hub",
    category: "Fullstack Platform",
    image: "/canaan-thumb.png",
    description: "An Orthodox Christian faith learning hub featuring structured video lessons, digital books, and a community Q&A system. Built with Next.js and high-performance backend.",
    tags: ["Next.js", "Video Streaming", "Q&A System", "Full-Stack"],
  },
  {
    id: 6,
    title: "Enese Trading",
    category: "Business Website",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    description: "A professional business website for Enese Trading company, featuring modern UI design, responsive layouts, and optimized SEO performance.",
    tags: ["Next.js", "Tailwind CSS", "Business", "SEO"],
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-primary relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent-gold font-bold tracking-widest uppercase mb-4 block"
            >
              Recent Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-heading font-extrabold"
            >
              Creative <span className="text-accent-purple">Showcase</span>
            </motion.h2>
          </div>
          <div className="flex gap-4">
             <button className="px-6 py-2 rounded-full border border-white/10 text-white/60 hover:border-accent-gold hover:text-white transition-all">All</button>
             <button className="px-6 py-2 rounded-full border border-white/10 text-white/60 hover:border-accent-gold hover:text-white transition-all">Full-Stack</button>
             <button className="px-6 py-2 rounded-full border border-white/10 text-white/60 hover:border-accent-gold hover:text-white transition-all">Architecture</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-secondary/20 rounded-3xl overflow-hidden border border-white/5 hover:border-accent-gold/30 transition-all shadow-2xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                   <div className="flex gap-4">
                      <span className="p-3 bg-accent-gold rounded-full text-primary"><ExternalLink size={20} /></span>
                      <span className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white"><Github size={20} /></span>
                   </div>
                </div>
              </div>
              <div className="p-8">
                <span className="text-accent-gold/80 text-sm font-bold uppercase tracking-widest mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-heading font-extrabold mb-4 group-hover:text-accent-gold transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/5 text-white/40 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-primary/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="bg-secondary p-8 rounded-3xl max-w-4xl w-full border border-white/10 shadow-[0_0_50px_rgba(108,99,255,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-4xl font-heading font-extrabold mb-2">{selectedProject.title}</h2>
                  <p className="text-accent-gold font-bold uppercase tracking-widest">{selectedProject.category}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={32} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="text-white/60 uppercase tracking-widest text-sm font-bold mb-4">Project Overview</h4>
                    <p className="text-lg text-white/80 leading-relaxed font-body mb-8">
                      {selectedProject.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 bg-primary/50 text-accent-purple border border-accent-purple/30 rounded-full text-sm font-bold italic">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4 pt-10">
                    <button className="flex-1 py-4 bg-accent-gold text-primary font-bold rounded-xl hover:shadow-[0_0_20px_rgba(249,168,38,0.4)] transition-all">Launch Project</button>
                    <button className="px-6 py-4 border border-white/20 text-white rounded-xl hover:bg-white/5 transition-all"><Github /></button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
