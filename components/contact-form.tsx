'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://evolution-n8n.ctscwo.easypanel.host/webhook/site', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Landing Page MShift',
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '' });
        router.push('/obrigado');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 bg-surface-dark p-8 rounded-2xl border border-slate-700 shadow-2xl">
      <div>
        <label className="sr-only" htmlFor="name">Nome Completo</label>
        <input 
          className="w-full bg-background-dark border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors" 
          id="name" 
          name="name" 
          placeholder="Nome Completo" 
          type="text" 
          required
          value={formData.name}
          onChange={handleChange}
          disabled={status === 'loading'}
        />
      </div>
      <div>
        <label className="sr-only" htmlFor="email">E-mail Corporativo</label>
        <input 
          className="w-full bg-background-dark border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors" 
          id="email" 
          name="email" 
          placeholder="E-mail Corporativo" 
          type="email" 
          required
          value={formData.email}
          onChange={handleChange}
          disabled={status === 'loading'}
        />
      </div>
      <div>
        <label className="sr-only" htmlFor="phone">WhatsApp</label>
        <input 
          className="w-full bg-background-dark border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors" 
          id="phone" 
          name="phone" 
          placeholder="WhatsApp (com DDD)" 
          type="tel" 
          required
          value={formData.phone}
          onChange={handleChange}
          disabled={status === 'loading'}
        />
      </div>
      <button 
        className="w-full bg-gradient-gold hover:brightness-110 text-background-dark font-bold text-lg py-3 rounded-lg shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" 
        type="submit"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Enviando...' : 'Solicitar Aplicação'}
      </button>

      {status === 'success' && (
        <p className="text-green-500 text-sm mt-4 font-medium animate-fade-in">
          Aplicação enviada com sucesso! Entraremos em contato em breve.
        </p>
      )}

      {status === 'error' && (
        <p className="text-red-500 text-sm mt-4 font-medium animate-fade-in">
          Ocorreu um erro ao enviar sua aplicação. Por favor, tente novamente.
        </p>
      )}

      <p className="text-xs text-slate-500 mt-4">
        *Vagas limitadas.
      </p>
    </form>
  );
}
