"use client";

import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import MagneticButton from "./MagneticButton";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/elsh1923", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/elshaday-dagne-b4a6b1238/", label: "LinkedIn" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/80 backdrop-blur-md py-4 shadow-xl border-b border-white/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-center items-center relative">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <MagneticButton key={link.name}>
              <motion.a
                href={link.href}
                whileHover={{ color: "#F9A826" }}
                className="text-white/80 hover:text-accent-gold font-medium transition-colors px-4 py-2"
              >
                {link.name}
              </motion.a>
            </MagneticButton>
          ))}
          <div className="flex items-center space-x-2 border-l border-white/10 pl-6 ml-4">
            {socialLinks.map((social) => (
              <MagneticButton key={social.label}>
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ color: "#F9A826" }}
                  className="text-white/60 hover:text-accent-gold transition-colors p-2"
                >
                  <social.icon size={20} />
                </motion.a>
              </MagneticButton>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden absolute right-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-accent-gold transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-primary/95 backdrop-blur-xl border-b border-white/5"
        >
          <div className="px-6 py-8 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-heading text-white/80 hover:text-accent-gold"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-6 pt-4 border-t border-white/5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-white/60"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
