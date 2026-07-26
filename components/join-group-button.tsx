'use client';

import React from 'react';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    gtag?: (...args: any[]) => void;
    dataLayer?: Record<string, any>[];
  }
}

interface JoinGroupButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

export function JoinGroupButton({
  href,
  className,
  children,
  target = '_blank',
  rel = 'noopener noreferrer',
}: JoinGroupButtonProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      // Gerar ID de evento único para deduplicação entre Pixel (Browser) e CAPI (Server)
      const eventId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

      // 1. Disparar evento de Lead no Meta Pixel (Browser) com eventID para deduplicação
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

      // 2. Disparar evento no Meta Conversions API (Server-Side) para 100% de entrega (AdBlock proof)
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

      // 3. Disparar evento no dataLayer (GTM)
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'lead',
        event_name: 'Lead',
        event_id: eventId,
        event_category: 'Conversion',
        page_location: window.location.href,
        content_name: 'Aula Usinagem WhatsApp Group',
      });

      // 4. Disparar evento no Google Analytics (gtag)
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', {
          event_category: 'Engagement',
          event_label: 'Aula Usinagem WhatsApp Group',
        });
      }
    }
  };

  return (
    <a 
      href={href} 
      target={target} 
      rel={rel} 
      className={className} 
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
