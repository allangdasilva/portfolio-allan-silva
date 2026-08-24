'use client';

import { HTMLMotionProps, motion, useInView, Variants } from 'motion/react';
import React, { useRef } from 'react';

interface Props extends HTMLMotionProps<'div'> {
  direction: 'up' | 'down';
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delay?: number;
}

export default function TextFade({
  direction,
  children,
  className = '',
  staggerChildren = 0.1,
  delay = 0,
}: Props) {
  const FADE_DOWN: Variants = {
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut', delay: delay },
    },
    hidden: { opacity: 0, y: direction === 'down' ? -18 : 18 },
    exit: {
      opacity: 0,
      y: direction === 'down' ? -18 : 18,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      exit="exit"
      animate={isInView ? 'show' : ''}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerChildren,
          },
        },
        exit: {},
      }}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={FADE_DOWN}>{child}</motion.div>
        ) : (
          child
        ),
      )}
    </motion.div>
  );
}
