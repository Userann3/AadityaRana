import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Track cursor position
    window.addEventListener("mousemove", moveCursor);
    
    // Track click state
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Track hover state on interactive elements
    document.querySelectorAll("a, button, input, textarea").forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      
      document.querySelectorAll("a, button, input, textarea").forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: cursorPosition.x - 12,
          y: cursorPosition.y - 12,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", mass: 0.1 }}
      >
        <div className={`w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-300 shadow-lg ${
          isHovering ? "backdrop-blur-sm" : ""
        }`}></div>
      </motion.div>

      {/* Cursor Follower */}
      <motion.div
        className="fixed pointer-events-none z-[9998] mix-blend-difference"
        animate={{
          x: cursorPosition.x - 16,
          y: cursorPosition.y - 16,
          opacity: isHovering ? 0.4 : 0.2,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: "spring", mass: 0.3, damping: 10 }}
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 backdrop-blur-sm"></div>
      </motion.div>

      {/* Click Ripple Effect */}
      {isClicking && (
        <motion.div
          className="fixed pointer-events-none z-[9997] mix-blend-difference"
          initial={{ opacity: 0.8, scale: 0.5 }}
          animate={{ opacity: 0, scale: 2 }}
          transition={{ duration: 0.5 }}
          style={{
            left: cursorPosition.x - 20,
            top: cursorPosition.y - 20,
          }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-300 to-pink-200"></div>
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;