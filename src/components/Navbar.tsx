"use client";

import { motion } from "framer-motion";
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Twitter,
  Home,
  User,
  Code2,
  Briefcase,
  Mail
} from "lucide-react";
import { useState, useEffect } from "react";
import MagneticButton from "./MagneticButton";

const navLinks = [
  { name: "Home", href: "#about", icon: Home },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Portfolio", href: "#portfolio", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
];

const TelegramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const socialLinks = [
  { icon: Github, href: "https://github.com/elsh1923", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/elshaday-dagne-b4a6b1238/", label: "LinkedIn" },
  { icon: TelegramIcon, href: "https://t.me/YeEl1221", label: "Telegram" },
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
                className="text-white/80 hover:text-accent-gold font-medium transition-colors px-4 py-2 flex items-center gap-2"
              >
                <link.icon size={18} />
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
                className="text-xl font-heading text-white/80 hover:text-accent-gold flex items-center gap-4"
              >
                <link.icon size={24} className="text-accent-gold" />
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
