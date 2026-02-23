"use client";

import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";
import { useState, MouseEvent } from "react";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "NextJemari",
    category: "Knowledge Hub",
    image: "/nextjemari-thumb.png",
    description: "A full-stack knowledge-sharing platform where users can create, publish, and manage MDX-based technical articles. Features authentication, user profiles, and full-text search.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
    link: "https://next-jemari-sl3l.vercel.app/",
    type: "Full-Stack"
  },
  {
    id: 2,
    title: "Agazian Geʽez Learning",
    category: "Educational",
    image: "/agazian-thumb.png",
    description: "Built a Geʽez learning platform with authentication, admin dashboard, and quiz system. Implemented user roles for managing courses.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    link: "https://geez-learning.vercel.app/",
    type: "Full-Stack"
  },
  {
    id: 3,
    title: "eBook Library",
    category: "Online Library",
    image: "/ebook-library-thumb.png",
    description: "A modern eBook platform for reading and managing digital books online. Optimized performance using server-side rendering and lazy loading.",
    tags: ["Next.js", "SSR", "Performance"],
    link: "https://ebook-axds.vercel.app/",
    type: "Full-Stack"
  },
  {
    id: 4,
    title: "Sisay Begena",
    category: "Frontend Dev",
    image: "/sisay-begena-thumb.png",
    description: "Designed and implemented a responsive, user-friendly About page for Sisay Begena Musical Instruments Training Institute.",
    tags: ["React.js", "Tailwind CSS"],
    link: "https://sisaybegenaethiopia.com/am/about",
    type: "Frontend"
  },
  {
    id: 5,
    title: "Canaan Hub",
    category: "Faith Platform",
    image: "/canaan-thumb.png",
    description: "An Orthodox Christian faith learning hub featuring structured video lessons, digital books, and a community Q&A system. Built with Next.js and high-performance backend.",
    tags: ["Next.js", "Video Streaming", "Q&A System"],
    link: "https://kenean-2pmd.vercel.app/",
    type: "Full-Stack"
  },
  {
    id: 6,
    title: "Enese Trading",
    category: "Business Site",
    image: "/enese-trading-thumb.jpg",
    description: "A professional business website for Enese Trading company, featuring modern UI design, responsive layouts, and optimized SEO performance.",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
    link: "https://enese-trading.vercel.app/",
    type: "Frontend"
  },
];

const categories = ["All", "Full-Stack", "Frontend"];

function ProjectCard({ project, onClick }: { project: typeof projects[0], onClick: () => void }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className="group relative cursor-pointer rounded-[2rem] bg-secondary/30 border border-white/5 hover:border-white/10 overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(249, 168, 38, 0.1),
              transparent 40%
            )
          `,
        }}
      />
      
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-[2rem]">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
        
        {/* Hover Action Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <div className="w-16 h-16 rounded-full bg-accent-gold/90 text-primary flex items-center justify-center shadow-[0_0_30px_rgba(249,168,38,0.5)] backdrop-blur-md">
            <ExternalLink size={24} className="ml-1" />
          </div>
        </div>
      </div>
      
      <div className="p-8 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-accent-gold/80 text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
              {project.category}
            </span>
            <h3 className="text-2xl font-heading font-extrabold text-white group-hover:text-accent-gold transition-colors duration-300">
              {project.title}
            </h3>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-white/50 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(p => filter === "All" || p.type === filter);

  return (
    <section id="portfolio" className="py-32 bg-primary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-accent-gold/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-8 bg-accent-purple" />
              <span className="text-accent-purple font-bold tracking-[0.2em] uppercase text-sm">
                Selected Work
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold tracking-tight"
            >
              Creative <span className="text-white/40 italic font-light">Showcase</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 bg-white/5 p-2 rounded-full border border-white/10 backdrop-blur-md"
          >
             {categories.map(cat => (
               <button 
                 key={cat}
                 onClick={() => setFilter(cat)}
                 className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                   filter === cat 
                    ? "bg-accent-gold text-primary shadow-[0_0_20px_rgba(249,168,38,0.3)]" 
                    : "text-white/50 hover:text-white hover:bg-white/10"
                 }`}
               >
                 {cat}
               </button>
             ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => setSelectedProject(project)} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Premium Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-primary/80 backdrop-blur-2xl"
              onClick={() => setSelectedProject(null)}
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-secondary/80 border border-white/10 rounded-[2rem] max-w-6xl w-full max-h-[90vh] overflow-y-auto overflow-hidden shadow-[0_0_100px_rgba(108,99,255,0.15)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 right-0 z-50 flex justify-end p-6 pointer-events-none">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all text-white pointer-events-auto shadow-2xl hover:scale-110 hover:rotate-90"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-8 md:p-12 pt-0 md:pt-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  
                  {/* Left: Image */}
                  <div className="rounded-[2rem] overflow-hidden shadow-2xl relative group max-h-[60vh]">
                    <div className="absolute inset-0 bg-accent-purple/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10" />
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-1000" 
                    />
                  </div>

                  {/* Right: Content */}
                  <div className="flex flex-col justify-center">
                    <motion.span 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-accent-gold font-bold uppercase tracking-[0.2em] mb-4 block"
                    >
                      {selectedProject.category}
                    </motion.span>
                    
                    <motion.h2 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-8 leading-tight"
                    >
                      {selectedProject.title}
                    </motion.h2>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h4 className="text-white/40 uppercase tracking-widest text-xs font-bold mb-4 flex items-center gap-4">
                        <div className="h-[1px] flex-1 bg-white/10" />
                        Project Overview
                        <div className="h-[1px] flex-1 bg-white/10" />
                      </h4>
                      <p className="text-xl text-white/70 leading-relaxed font-body font-light mb-10">
                        {selectedProject.description}
                      </p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-wrap gap-3 mb-12"
                    >
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-5 py-2.5 bg-white/5 border border-white/10 text-white/50 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex flex-col sm:flex-row gap-6 mt-auto"
                    >
                      <a 
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-5 bg-accent-gold text-primary text-center font-bold rounded-full hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3 group"
                      >
                        Visit Live Site
                        <ExternalLink size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
