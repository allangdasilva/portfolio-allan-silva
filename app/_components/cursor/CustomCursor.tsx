'use client';

import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 22, stiffness: 600, mass: 0.2 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: coarse)').matches
  ) {
    return null;
  }

  return (
    <motion.div
      className="border-primary z-9999 pointer-events-none fixed left-0 top-0 h-8 w-8 rounded-full border-2 mix-blend-difference"
      style={{
        x: smoothX,
        y: smoothY,
      }}
      animate={{
        scale: isHovered ? 1.5 : 1,
        backgroundColor: isHovered ? '#FFFFFF' : '#FFFFFF00',
      }}
      transition={{ duration: 0.2 }}
    />
  );
}
