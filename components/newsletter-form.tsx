'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface NewsletterFormProps {
  variant?: 'sidebar' | 'footer' | 'section';
}

export function NewsletterForm({ variant = 'section' }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate an API call for now, since it's a newsletter
    // If the user has a specific webhook for newsletter, we could add it here
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      router.push('/obrigado');
    }, 1000);
  };

  if (variant === 'sidebar') {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          required
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-secondary transition-colors"
        />
        <button 
          disabled={status === 'loading'}
          className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg text-sm hover:bg-slate-800 transition-all disabled:opacity-50"
        >
          {status === 'loading' ? 'Enviando...' : 'Inscrever-se'}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      <input
        type="email"
        required
        placeholder="Seu melhor e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-grow bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-secondary transition-colors placeholder:text-slate-500"
      />
      <button 
        disabled={status === 'loading'}
        className="bg-secondary hover:bg-yellow-600 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg shadow-secondary/20 disabled:opacity-50"
      >
        {status === 'loading' ? 'Enviando...' : 'Inscrever-se'}
      </button>
    </form>
  );
}
