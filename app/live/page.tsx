"use client";

import { useEffect, useRef } from "react";

export default function LivePage() {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Dispara evento via API (Server-Side) para garantir o track mesmo fechando a página
    fetch('/api/meta-conversions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true, // Garante que a requisição não seja cancelada no redirecionamento
      body: JSON.stringify({
        eventName: 'PageView',
        contentName: 'Live Redirect',
        eventSourceUrl: window.location.href
      })
    }).catch(console.error);

    // Tenta disparar o client-side também
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }

    // Reduzido para 500ms (apenas para a UI dar uma leve piscada e ir direto)
    const timer = setTimeout(() => {
      if (linkRef.current) {
        linkRef.current.click();
      } else {
        window.location.href = "https://meet.google.com/veo-snpb-ngs?authuser=0";
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#021526] text-white p-4">
      <div className="text-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-10 h-10 border-4 border-[#C49A5A] border-t-transparent rounded-full animate-spin mb-4"></div>
          <h1 className="text-xl font-bold text-[#C49A5A]">Redirecionando para a Live...</h1>
          <p className="mt-2 text-sm text-gray-400">Você será conectado ao Google Meet em instantes.</p>
        </div>
        
        {/* Tag <a> oculta mantida para o deeplink funcionar nativamente no mobile (abrir app do Meet) */}
        <a 
          ref={linkRef}
          href="https://meet.google.com/veo-snpb-ngs?authuser=0"
          className="hidden"
          aria-hidden="true"
        >
          Entrar na Live
        </a>
      </div>
    </div>
  );
}
