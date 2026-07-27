'use client';

import React, { useState } from 'react';
import { Loader2, X } from 'lucide-react';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    gtag?: (...args: any[]) => void;
    dataLayer?: Record<string, any>[];
  }
}

interface JoinGroupFormModalProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export function JoinGroupFormModal({
  href,
  className,
  children,
}: JoinGroupFormModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // 1. Enviar para o Webhook
      await fetch('https://evolution-n8n.ctscwo.easypanel.host/webhook/webnario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          whatsapp,
          source: window.location.href,
        }),
      });

      // 2. Disparar eventos de conversão (mantendo o tracking atual)
      if (typeof window !== 'undefined') {
        const eventId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

        if (typeof window.fbq === 'function') {
          window.fbq(
            'track',
            'Lead',
            {
              content_name: 'Aula Usinagem WhatsApp Group',
              content_category: 'Aula Usinagem',
            },
            { eventID: eventId }
          );
        }

        fetch('/api/meta-conversions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            eventName: 'Lead',
            eventId: eventId,
            eventSourceUrl: window.location.href,
            contentName: 'Aula Usinagem WhatsApp Group',
            contentCategory: 'Aula Usinagem',
          }),
        }).catch((err) => console.error('Error firing CAPI lead event:', err));

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'lead',
          event_name: 'Lead',
          event_id: eventId,
          event_category: 'Conversion',
          page_location: window.location.href,
          content_name: 'Aula Usinagem WhatsApp Group',
        });

        if (typeof window.gtag === 'function') {
          window.gtag('event', 'generate_lead', {
            event_category: 'Engagement',
            event_label: 'Aula Usinagem WhatsApp Group',
          });
        }
      }

      // 3. Redirecionar para o grupo
      window.location.href = href;
    } catch (error) {
      console.error('Error submitting form', error);
      // Fallback: redirecionar mesmo se der erro no webhook
      window.location.href = href;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={className}>
        {children}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8">
              <div className="text-center mb-6 mt-2">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">
                  Falta pouco!
                </h3>
                <p className="text-slate-600 text-sm font-medium">
                  Preencha seus dados para acessar o grupo VIP e receber o link da aula.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all text-slate-900 font-medium bg-slate-50 focus:bg-white"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    WhatsApp (Com DDD)
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    required
                    minLength={11}
                    maxLength={11}
                    pattern="\d{11}"
                    title="O número deve ter exatamente 11 dígitos, apenas números (ex: 11999999999)."
                    value={whatsapp}
                    onChange={(e) => {
                      const numericValue = e.target.value.replace(/\D/g, '');
                      setWhatsapp(numericValue);
                    }}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all text-slate-900 font-medium bg-slate-50 focus:bg-white"
                    placeholder="Ex: 11999999999"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-6 bg-[#4ADE80] hover:bg-[#22C55E] text-slate-950 font-black py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 border-b-4 border-green-600 hover:border-b-[2px] hover:translate-y-[2px] uppercase tracking-wide text-lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Processando...</span>
                    </>
                  ) : (
                    <span>Acessar Grupo VIP</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
