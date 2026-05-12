'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-800 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 bg-dark-blue text-white text-left focus:outline-none"
      >
        <span className="font-noto font-bold text-lg">{question}</span>
        <ChevronDown className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="p-5 bg-card-dark">
          <p className="text-slate-300 font-montserrat leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
