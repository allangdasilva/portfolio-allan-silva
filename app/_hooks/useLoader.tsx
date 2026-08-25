import { useContext } from 'react';
import { LoaderContext } from '../_context/LoaderContext';

export default function useLoader() {
  const context = useContext(LoaderContext);

  if (context === undefined) {
    throw new Error('useLoader deve ser usado dentro de um LoaderProvider');
  }

  return context;
}
