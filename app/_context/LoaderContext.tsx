'use client';

import { createContext } from 'react';

interface LoaderContextValue {
  isLoaderDone: boolean;
  setIsLoaderDone: (value: boolean) => void;
}

export const LoaderContext = createContext<LoaderContextValue | undefined>(
  undefined,
);
