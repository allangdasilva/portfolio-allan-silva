import bustBlur from '@/app/images/bust-blur-noise.webp';
import bust from '@/app/images/bust-noise.webp';
import { motion, Variants } from 'motion/react';
import Image from 'next/image';
import React from 'react';

interface PropsBanner {
  hasScrolled: boolean;
}

interface IFADE_BUST {
  initial: number;
  animate: number;
}

export default function HeroBanner({ hasScrolled }: PropsBanner) {
  const FADE_BUST: Variants = {
    initial: (custom: IFADE_BUST) => ({
      opacity: custom.initial,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeInOut' },
    }),
    animate: (custom: IFADE_BUST) => ({
      opacity: custom.animate,
      y: -12,
      scale: 1.1,
      transition: { duration: 0.6, ease: 'easeInOut' },
    }),
  };

  return (
    <React.Fragment>
      <motion.div
        variants={FADE_BUST}
        initial={'initial'}
        animate={hasScrolled ? 'animate' : 'initial'}
        custom={{ initial: 0, animate: 1 }}
        className="absolute inset-0 flex items-center justify-center py-12"
      >
        <Image
          alt="David Bust"
          src={bust}
          width={1080}
          height={1080}
          priority
          className="h-full w-full object-contain"
        />
      </motion.div>
      <motion.div
        variants={FADE_BUST}
        initial={'initial'}
        animate={hasScrolled ? 'animate' : 'initial'}
        custom={{ initial: 1, animate: 0 }}
        className="absolute inset-0 flex items-center justify-center py-12"
      >
        <Image
          alt="David Bust com efeito de blur"
          src={bustBlur}
          width={1080}
          height={1080}
          priority
          className="h-full w-full object-contain"
        />
      </motion.div>
    </React.Fragment>
  );
}
