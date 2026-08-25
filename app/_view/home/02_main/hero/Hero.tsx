'use client';

import useLoader from '@/app/_hooks/useLoader';
import { motion, useMotionValueEvent, useScroll, Variants } from 'motion/react';
import { useState } from 'react';
import HeroBanner from './HeroBanner';

export default function Hero() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();

  const { isLoaderDone } = useLoader();

  const FADE_TEXT: Variants = {
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    hidden: (y: number) => ({
      opacity: 0,
      y,
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

  const currentAnimationState = !isLoaderDone
    ? 'hidden'
    : hasScrolled
      ? 'hidden'
      : 'show';

  return (
    <section className="text-primary p-base bg-tertiary sticky top-0 flex min-h-dvh">
      {/* wrapper max-w */}
      <div className="max-w-component relative flex w-full flex-1 flex-col justify-between">
        {/* header */}
        <header className="relative z-10">
          <motion.h1
            variants={FADE_TEXT}
            initial={'show'}
            animate={currentAnimationState}
            custom={-18}
            className="type-xl flex flex-col gap-y-1 lg:gap-y-2"
          >
            <span>Allan Silva</span>
            <span>Front end & UI/UX</span>
          </motion.h1>
        </header>

        {/* banner */}
        <div className="pointer-events-none absolute inset-0 top-1/2 z-0 h-full -translate-y-1/2 overflow-hidden">
          <HeroBanner hasScrolled={hasScrolled} />
        </div>

        {/* high-light */}
        <div className="relative z-10">
          <motion.p
            variants={FADE_TEXT}
            initial={'show'}
            animate={currentAnimationState}
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
