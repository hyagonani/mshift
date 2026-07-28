'use client';

import React from 'react';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    gtag?: (...args: any[]) => void;
    dataLayer?: Record<string, any>[];
  }
}

interface TrackedGroupLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export function TrackedGroupLink({ href, children, onClick, ...props }: TrackedGroupLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Disparar eventos síncronos
    if (typeof window !== 'undefined') {
      const eventId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
      
      try {
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
      } catch (err) { console.warn('FB pixel blocked', err); }

      try {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'lead',
          event_name: 'Lead',
          event_id: eventId,
          event_category: 'Conversion',
          page_location: window.location.href,
          content_name: 'Aula Usinagem WhatsApp Group',
        });
      } catch (err) { console.warn('GTM blocked', err); }

      try {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'generate_lead', {
            event_category: 'Engagement',
            event_label: 'Aula Usinagem WhatsApp Group',
          });
        }
      } catch (err) { console.warn('GTag blocked', err); }
      
      // Enviar evento CAPI (Server-Side)
      try {
        fetch('/api/meta-conversions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            eventName: 'Lead',
            eventId: eventId,
            eventSourceUrl: window.location.href,
            contentName: 'Aula Usinagem WhatsApp Group',
            contentCategory: 'Aula Usinagem',
          })
        }).catch(() => {});
      } catch (err) {}
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
