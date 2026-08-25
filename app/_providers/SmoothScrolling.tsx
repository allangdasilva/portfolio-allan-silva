'use client';

import { ReactLenis } from 'lenis/react';
import { PropsWithChildren } from 'react';

export default function SmoothScrolling({ children }: PropsWithChildren) {
  // Configuração otimizada para performance e naturalidade
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.2,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
