'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import bannerAllan from '@/app/images/banner-allan-coding.svg';

const BANNER_WIDTH = 1689;
const GAP_WIDTH = 64;
const TOTAL_UNIT_WIDTH = BANNER_WIDTH + GAP_WIDTH;

export default function Banner() {
  const [bannerCopies, setBannerCopies] = useState(2);

  useEffect(() => {
    const updateBannerCopies = () => {
      setBannerCopies(Math.ceil(window.innerWidth / TOTAL_UNIT_WIDTH) + 2);
    };

    updateBannerCopies();
    window.addEventListener('resize', updateBannerCopies);

    return () => window.removeEventListener('resize', updateBannerCopies);
  }, []);

  return (
    <div
      className="bg-primary relative overflow-hidden py-4 lg:py-6"
      aria-hidden="true"
    >
      <motion.div
        className="flex w-max gap-16"
        initial={{ x: 0 }}
        animate={{ x: -TOTAL_UNIT_WIDTH }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {Array.from({ length: bannerCopies }, (_, index) => (
          <Image
            key={index}
            src={bannerAllan}
            alt=""
            width={BANNER_WIDTH}
            height={328}
            className="max-h-82 h-auto shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
}
