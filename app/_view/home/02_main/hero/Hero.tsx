'use client';

import { motion, useMotionValueEvent, useScroll, Variants } from 'motion/react';
import { useState } from 'react';

export default function Hero() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();

  const FADE_UP: Variants = {
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    hidden: (direction: number) => ({
      opacity: 0,
      y: direction,
      transition: { duration: 0.5, ease: 'easeIn' },
    }),
  };

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 1 && !hasScrolled) {
      setHasScrolled(true);
    } else if (latest <= 1 && hasScrolled) {
      setHasScrolled(false);
    }
  });

  return (
    <section className="bg-tertiary text-primary p-base sticky top-0 flex min-h-dvh">
      {/* wrapper max-w */}
      <div className="max-w-component relative flex w-full flex-1 flex-col justify-between">
        {/* header */}
        <header className="z-1 relative">
          <motion.h1
            variants={FADE_UP}
            initial={'show'}
            animate={hasScrolled ? 'hidden' : 'show'}
            custom={-18}
            className="type-xl flex flex-col gap-y-1 lg:gap-y-2"
          >
            <span>Allan Silva</span>
            <span>Front end & UI/UX</span>
          </motion.h1>
        </header>

        {/* banner */}
        <div className="absolute top-1/2 z-0 grid w-full -translate-y-1/2">
          <div className="max-w-133.5 h-75 w-full place-self-center bg-red-500 "></div>
        </div>

        {/* high-light */}
        <div className="z-1 relative">
          <motion.p
            variants={FADE_UP}
            initial={'show'}
            animate={hasScrolled ? 'hidden' : 'show'}
            custom={18}
            className="type-3xl uppercase [text-align-last:justify]"
          >
            THE ART OF CODING
          </motion.p>
        </div>
      </div>
    </section>
  );
}
