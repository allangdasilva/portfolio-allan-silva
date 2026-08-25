'use client';

import { PropsWithChildren, useState } from 'react';
import { LoaderContext } from './LoaderContext';

export function LoaderProvider({ children }: PropsWithChildren) {
  const [isLoaderDone, setIsLoaderDone] = useState(false);

  return (
    <LoaderContext.Provider value={{ isLoaderDone, setIsLoaderDone }}>
      {children}
    </LoaderContext.Provider>
  );
}
