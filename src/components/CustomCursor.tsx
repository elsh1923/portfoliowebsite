"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  // Use motion values for better performance (avoids re-rendering component on every mousemove)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for different layers
  const springConfigDot = { damping: 28, stiffness: 1000, mass: 0.1 };
  const springConfigRing = { damping: 20, stiffness: 200, mass: 0.5 };
  const springConfigGlow = { damping: 40, stiffness: 60, mass: 2 }; // Lagging magical glow
  const springConfigText = { damping: 30, stiffness: 120, mass: 1 }; // Text springs

  const dotX = useSpring(mouseX, springConfigDot);
  const dotY = useSpring(mouseY, springConfigDot);
  
  const ringX = useSpring(mouseX, springConfigRing);
  const ringY = useSpring(mouseY, springConfigRing);

  const glowX = useSpring(mouseX, springConfigGlow);
  const glowY = useSpring(mouseY, springConfigGlow);

  const textX = useSpring(mouseX, springConfigText);
  const textY = useSpring(mouseY, springConfigText);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the target is clickable (a, button, or has cursor-pointer)
      const isClickable =
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button");
        
      setIsHovering(Boolean(isClickable));
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Gemini Style Glow / Aura */}
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent-purple/40 via-accent-gold/20 to-blue-500/30 rounded-full blur-[100px] pointer-events-none z-[9997] hidden md:block"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.2 : 1,
          opacity: isHovering ? 0.2 : 0.6,
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Watermark Text */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:flex whitespace-nowrap"
        style={{
          x: textX,
          y: textY,
          translateX: "30px", // Offset from cursor center
          translateY: "-50%",
        }}
        animate={{
          opacity: isHovering ? 0 : 0.8, // Show always when not hovering
        }}
        transition={{ duration: 0.4 }}
      >
        <div className="bg-secondary/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/5 shadow-2xl">
          <span className="bg-gradient-to-r from-accent-gold via-[#ffb94f] to-accent-purple bg-clip-text text-transparent font-heading font-extrabold tracking-[0.15em] uppercase text-[10px] md:text-xs">
            Let's work together
          </span>
        </div>
      </motion.div>

      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-accent-gold rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: 1,
        }}
      />
      
      {/* Outer Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[9998] mix-blend-difference hidden md:flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
          borderWidth: isHovering ? "0px" : "1px",
        }}
      />
    </>
  );
}
