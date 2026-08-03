"use client";

import { useEffect, useRef } from "react";

export default function GrupoPage() {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Aciona o clique automaticamente ao carregar para forçar o deeplink via DOM
    if (linkRef.current) {
      linkRef.current.click();
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#021526] text-white p-4">
      <div className="text-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-10 h-10 border-4 border-[#C49A5A] border-t-transparent rounded-full animate-spin mb-4"></div>
          <h1 className="text-xl font-bold text-[#C49A5A]">Redirecionando para o WhatsApp...</h1>
        </div>
        
        {/* Tag <a> oculta mantida exclusivamente para o deeplink funcionar nativamente no mobile */}
        <a 
          ref={linkRef}
          href="https://chat.whatsapp.com/EdFHW9YBGee1W93NJ4rGKW"
          className="hidden"
          aria-hidden="true"
        >
          Redirecionar
        </a>
      </div>
    </div>
  );
}
