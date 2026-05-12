'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white  text-slate-900  px-4">
      <h2 className="text-4xl font-serif font-bold mb-4">Algo deu errado!</h2>
      <p className="text-slate-600  mb-8">
        Ocorreu um erro inesperado.
      </p>
      <button
        onClick={() => reset()}
        className="bg-secondary hover:bg-yellow-600 text-white  font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg"
      >
        Tentar novamente
      </button>
    </div>
  );
}
