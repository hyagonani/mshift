import Link from 'next/link';
import { BadgeCheck, MessageCircle, ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Obrigado | MShift',
  robots: 'noindex, nofollow',
};

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background-dark pt-40 pb-20 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-hero-pattern"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/20 rounded-full mb-8 animate-bounce-slow">
            <BadgeCheck className="w-10 h-10 text-secondary" />
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Sua aplicação foi <span className="italic text-gradient-gold">recebida com sucesso!</span>
          </h1>
          
          <div className="bg-surface-dark border border-slate-700/50 p-8 rounded-2xl shadow-2xl mb-12 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageCircle className="w-6 h-6 text-green-500" />
              <p className="text-xl text-white font-medium">Entraremos em contato pelo WhatsApp</p>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed">
              Nossa equipe analisará seu perfil e entrará em contato em breve para agendar seu Mapeamento Estratégico. Verifique suas mensagens!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/" 
              className="flex items-center justify-center gap-2 text-slate-400 hover:text-white transition-colors font-bold group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Voltar para a Home
            </Link>
            
            <Link 
              href="https://wa.me/5548991216333" 
              target="_blank"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              Dúvidas? Chame agora
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
