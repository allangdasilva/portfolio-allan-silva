'use client';

import useLoader from '@/app/_hooks/useLoader';
import logo from '@/app/_images/logo.svg';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const { setIsLoaderDone } = useLoader();

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isLoading);

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isLoading]);

  if (isLoading) {
    return (
      <motion.div
        initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
        animate={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' }}
        transition={{ duration: 0.8, delay: 1.2, ease: 'circIn' }}
        onAnimationComplete={() => {
          setIsLoading(false);
          setIsLoaderDone(true);
        }}
        aria-hidden="true"
        className="p-base bg-primary fixed inset-0 z-50 flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <Image
            src={logo}
            alt=" "
            width={160}
            height={218}
            className="h-auto w-full max-w-40"
          />
        </motion.div>
      </motion.div>
    );
  }
}
