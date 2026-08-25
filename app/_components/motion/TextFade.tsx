'use client';

import { HTMLMotionProps, motion, Variants } from 'motion/react';
import React from 'react';

interface Props extends HTMLMotionProps<'div'> {
  direction?: 'up' | 'down';
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delay?: number;
}

export default function TextFade({
  direction = 'up',
  children,
  className = '',
  staggerChildren = 0.1,
  delay = 0,
  ...props
}: Props) {
  const FADE_DOWN: Variants = {
    hidden: {
      opacity: 0,
      y: direction === 'down' ? -18 : 18,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.4, ease: 'easeIn' },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren,
            delayChildren: delay,
          },
        },
      }}
      className={className}
      {...props}
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
