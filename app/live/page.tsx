"use client";

import { useEffect, useRef } from "react";

export default function LivePage() {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Aguarda 1 segundo para garantir que o evento de conversão
    // configurado no Facebook Ads (baseado na URL /live) tenha tempo de ser disparado
    const timer = setTimeout(() => {
      if (linkRef.current) {
        linkRef.current.click();
      } else {
        window.location.href = "https://meet.google.com/sor-qnvq-ieo";
      }
    }, 1000);
    
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
          href="https://meet.google.com/sor-qnvq-ieo"
          className="hidden"
          aria-hidden="true"
        >
          Entrar na Live
        </a>
      </div>
    </div>
  );
}
