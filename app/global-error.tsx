'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error caught:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-background-dark text-white p-4">
          <div className="max-w-xl w-full bg-surface-dark border border-red-500/30 rounded-xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Algo deu errado!</h2>
            <div className="bg-black/50 p-4 rounded-lg overflow-auto mb-6">
              <p className="text-red-400 font-mono text-sm break-words">
                {error.message || 'Erro desconhecido'}
              </p>
              {error.stack && (
                <pre className="text-slate-500 font-mono text-xs mt-4 whitespace-pre-wrap">
                  {error.stack}
                </pre>
              )}
            </div>
            <button
              onClick={() => reset()}
              className="w-full bg-secondary hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Tentar novamente
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
