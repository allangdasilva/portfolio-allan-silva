'use client';

import { HTMLMotionProps, motion, Variants } from 'motion/react';

export function HoverUnderline({ className }: HTMLMotionProps<'span'>) {
  const lineVariants: Variants = {
    initial: { scaleX: 0, originX: 0 }, // Começa invisível, ancorado na esquerda
    hover: {
      scaleX: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <motion.span
      variants={lineVariants}
      className={`bg-primary absolute -bottom-0.5 left-0 h-0.5 w-full ${className}`}
    />
  );
}
