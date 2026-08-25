'use client';

import TextBody from '@/app/_components/common/TextBody';
import TextFade from '@/app/_components/motion/TextFade';
import { ImageProps } from '@/app/_data/portfolio';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import React, { useRef } from 'react';

interface Props {
  card: {
    id: number;
    title: string;
    href: string;
    description: string;
    stack: string[];
    image: ImageProps;
  };
  isLast: boolean;
}

export default function PortfolioCard({ card, isLast }: Props) {
  const {
    title,
    href,
    description,
    stack,
    image: { src, alt, width, height },
  } = card;

  // Ref agora aponta para o nosso elemento "fantasma" de rastreio
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const opacityOverlay = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <React.Fragment>
      {/* target */}
      <div
        ref={targetRef}
        className="pointer-events-none invisible mb-[-100svh] min-h-svh w-full"
        aria-hidden="true"
      ></div>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="px-base sticky top-0 block min-h-svh w-full py-12"
      >
        {/* background */}
        <div className="absolute inset-0 z-10">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="bg-secondary/70 absolute inset-0"></div>
        </div>

        {/* overlay */}
        {!isLast && (
          <motion.div
            style={{ opacity: opacityOverlay }}
            className="bg-secondary absolute inset-0 z-30"
          ></motion.div>
        )}

        {/* wrapper max-w */}
        <motion.div
          style={{ opacity: !isLast ? opacityText : '' }}
          className="max-w-component relative z-20 flex flex-col gap-y-4 lg:gap-y-6"
        >
          {/* card title/description */}
          <div className="gap-x-base grid grid-cols-4 gap-y-2 lg:grid-cols-12 lg:gap-y-3">
            <TextFade
              direction="up"
              className="col-span-full grid gap-y-2 lg:col-end-8 lg:gap-y-3"
            >
              <h3 className="type-xl text-primary">{title}</h3>
              <TextBody className="text-primary">{description}</TextBody>
            </TextFade>
          </div>

          {/* stacks */}
          <div className="gap-x-base grid grid-cols-4 lg:grid-cols-12">
            <TextFade
              direction="up"
              className="col-span-full flex flex-wrap gap-x-1 gap-y-2 lg:col-end-8 lg:gap-x-2 lg:gap-y-3"
            >
              {stack.map((current, index) => (
                <span
                  key={index}
                  className="type-sm border-primary text-primary whitespace-nowrap rounded-full border px-2 py-0.5"
                >
                  {current}
                </span>
              ))}
            </TextFade>
          </div>
        </motion.div>
      </a>
    </React.Fragment>
  );
}
