"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use motion values for better performance
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for different layers
  const springConfigDot = { damping: 28, stiffness: 1000, mass: 0.1 };
  const springConfigRing = { damping: 20, stiffness: 200, mass: 0.5 };
  const springConfigGlow = { damping: 40, stiffness: 60, mass: 2 };
  const springConfigText = { damping: 30, stiffness: 120, mass: 1 };

  const dotX = useSpring(mouseX, springConfigDot);
  const dotY = useSpring(mouseY, springConfigDot);
  
  const ringX = useSpring(mouseX, springConfigRing);
  const ringY = useSpring(mouseY, springConfigRing);

  const textX = useSpring(mouseX, springConfigText);
  const textY = useSpring(mouseY, springConfigText);

  useEffect(() => {
    const updateMousePosition = (e: PointerEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button");
        
      setIsHovering(Boolean(isClickable));
    };

    window.addEventListener("pointermove", updateMousePosition as EventListener);
    window.addEventListener("pointerover", handleMouseOver as EventListener);

    return () => {
      window.removeEventListener("pointermove", updateMousePosition as EventListener);
      window.removeEventListener("pointerover", handleMouseOver as EventListener);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <>
      {/* Watermark Text */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex whitespace-nowrap"
        style={{
          x: textX,
          y: textY,
          translateX: "30px",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? (isHovering ? 0 : 0.8) : 0,
        }}
        transition={{ duration: 0.4 }}
      >
        <div className="bg-secondary/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/5 shadow-2xl">
          <span className="bg-gradient-to-r from-accent-gold via-[#ffb94f] to-accent-purple bg-clip-text text-transparent font-heading font-extrabold tracking-[0.15em] uppercase text-xs md:text-sm">
            Let's work together
          </span>
        </div>
      </motion.div>

      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-accent-gold rounded-full pointer-events-none z-[9999] mix-blend-difference block"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isVisible ? 1 : 0,
        }}
      />
      
      {/* Outer Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[9998] mix-blend-difference flex items-center justify-center"
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
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}
