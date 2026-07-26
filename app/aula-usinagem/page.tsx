import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck, Calendar, Clock, Sparkles, Users } from 'lucide-react';
import { TestimonialGallery } from '@/components/testimonial-gallery';
import { JoinGroupButton } from '@/components/join-group-button';

export const metadata: Metadata = {
  title: 'Aula Ao Vivo - Usinagem & Metalúrgica | MShift',
  description: 'Descubra como gerar de 2 a 3 serviços recorrentes por mês no setor de usinagem e metalúrgica. Aula gratuita na Quarta-feira às 12h.',
  robots: 'index, follow',
};

const WHATSAPP_GROUP_URL = "https://tinyurl.com/aula-usinagem";

const DEPOIMENTOS = [
  {
    id: 3,
    src: '/depoimentos/DEP-3.jpeg',
    alt: 'Depoimento WhatsApp Projeto 150k',
    title: 'Projeto Fechado de R$ 150k',
    desc: 'Mensagem confirmando novo projeto de R$ 150.000 e contratação para expansão.',
    fit: 'object-contain p-2 bg-slate-950/90'
  },
  {
    id: 2,
    src: '/depoimentos/DEP-2.jpeg',
    alt: 'Depoimento Luis Sergio de 90k para 180k',
    title: 'De R$ 90k para R$ 180k (Luis Sergio)',
    desc: 'Dobrou o faturamento da empresa após a implementação do método MShift.',
    fit: 'object-cover object-top'
  },
  {
    id: 1,
    src: '/depoimentos/DEP-1.jpeg',
    alt: 'Depoimento Daphne triplicou faturamento',
    title: 'Faturamento Triplicado (Daphne)',
    desc: 'Faturou em apenas 1 mês o equivalente a 6 meses do ano anterior.',
    fit: 'object-cover object-bottom'
  }
];

export default function AulaUsinagemPage() {
  return (
    <>
      {/* High-Performance Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 h-16 flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
          <div className="flex items-center select-none">
            <Image 
              src="https://lh3.googleusercontent.com/d/1e0N5YBz-Ic4Xo0rPZLygOdu9_u2azxQK=w500" 
              alt="MShift Logo" 
              width={180} 
              height={60} 
              className="h-10 sm:h-12 w-auto filter brightness-0"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <JoinGroupButton 
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary hover:bg-yellow-500 text-slate-950 font-bold text-xs sm:text-sm py-2 px-4 rounded-full transition-colors shadow-md flex items-center gap-1.5"
          >
            <span>ENTRAR NO GRUPO</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </JoinGroupButton>
        </div>
      </header>

      <main className="min-h-screen bg-slate-50 text-slate-700 pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden font-sans selection:bg-secondary selection:text-slate-900">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-0 -ml-20 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Top Alert Ribbon */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 text-white font-bold text-xs sm:text-sm tracking-wider uppercase text-center py-2 sm:py-2.5 px-4 shadow-md flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-200" />
          <span>EXCLUSIVO PARA USINAGEM, METALÚRGICA E PRESTADORES INDUSTRIAIS</span>
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-200" />
        </div>

        {/* Hero Section Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 relative z-10">
          
          {/* Header Title */}
          <div className="text-center space-y-3 sm:space-y-4 mb-6 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-secondary/40 bg-secondary/10 backdrop-blur-md">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-700" />
              <span className="text-amber-800 text-xs sm:text-sm font-semibold tracking-wide">
                AULA AO VIVO: QUARTA-FEIRA ÀS 12H
              </span>
            </div>

            <h1 className="font-sans text-2xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight uppercase leading-snug sm:leading-tight min-h-[4rem] sm:min-h-[7rem]">
              NICHOS DE USINAGEM & METALÚRGICA <br className="hidden sm:inline" />
              QUE <span className="text-gradient-gold italic font-serif">JÁ MULTIPLICARAM RESULTADOS</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              Descubra o método testado para gerar de <strong className="text-amber-600 font-bold">2 a 3 serviços recorrentes todos os meses</strong> no setor industrial.
            </p>
          </div>

          {/* CTA 1 Button & Guarantee */}
          <div className="max-w-xl mx-auto text-center space-y-3.5 mb-10 sm:mb-16">
            <JoinGroupButton
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center w-full py-3.5 sm:py-4.5 px-5 sm:px-8 rounded-xl font-extrabold text-base sm:text-xl text-slate-950 bg-[#4ADE80] hover:bg-[#22C55E] transition-all duration-200 shadow-lg shadow-green-500/20 uppercase tracking-wide border-2 border-green-300"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2.5 sm:mr-3 text-slate-950 fill-slate-950/20" />
              <span>ENTRAR NO GRUPO SILENCIOSO DA AULA</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2.5 sm:ml-3 group-hover:translate-x-1 transition-transform" />
            </JoinGroupButton>

            <div className="flex items-center justify-center gap-2 text-slate-600 text-xs sm:text-sm px-3 bg-white/60 py-2.5 rounded-lg border border-slate-200 backdrop-blur-sm max-w-lg mx-auto">
              <ShieldCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span>
                <strong>Não precisa deixar e-mail. Não precisa preencher formulário.</strong> O botão leva direto para o grupo silencioso do WhatsApp.
              </span>
            </div>
          </div>

        </div>

        {/* 2. Angled Ribbon Banner */}
        <div className="relative my-8 sm:my-14 overflow-hidden py-3 sm:py-3.5 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 shadow-lg border-y border-amber-400/30 transform -rotate-1 scale-105">
          <div className="whitespace-nowrap flex text-white font-extrabold text-xs sm:text-base tracking-widest uppercase gap-6 sm:gap-8 justify-around">
            <span>⚡ AULA GRATUITA: QUARTA-FEIRA ÀS 12H</span>
            <span>•</span>
            <span>COMO GERAR 2 A 3 SERVIÇOS RECORRENTES POR MÊS</span>
            <span>•</span>
            <span>EXCLUSIVO PARA USINAGEM & METALÚRGICA</span>
          </div>
        </div>

        {/* 3. Proof & Testimonials Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="text-amber-700 font-bold text-xs sm:text-sm uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-200 inline-block mb-2">
              RESULTADOS REAIS NA PRÁTICA
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Veja o que acontece quando você aplica o <span className="text-gradient-gold italic">Mapeamento Estratégico</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-base mt-2">
              Faturamento real, reuniões agendadas com compradores qualificados e mensagens de confirmação no WhatsApp.
            </p>
          </div>

          {/* Testimonial Gallery Component */}
          {/* Using it inside a wrapper since TestimonialGallery is dark themed */}
          <div className="bg-background-dark p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-800 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
             <div className="relative z-10">
                <TestimonialGallery testimonials={DEPOIMENTOS} />
             </div>
          </div>
        </section>

        {/* 4. Core Value Proposition Box */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 relative z-10">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="space-y-5 sm:space-y-7 text-center sm:text-left relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                Quarta-feira às 12h • Ao Vivo e Gratuito
              </div>

              <h2 className="font-serif text-xl sm:text-4xl font-bold text-slate-900 leading-tight sm:leading-snug">
                Nessa aula gratuita vou te mostrar como usar o método MShift para <span className="text-gradient-gold italic">gerar de 2 a 3 serviços recorrentes</span> todos os meses no setor de usinagem e metalúrgica
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-lg leading-relaxed border-t border-slate-200 pt-5">
                <p>
                  Essa aula faz sentido para <strong>dono de oficina de usinagem, caldeiraria, tornearia, indústria metalúrgica, gestor de vendas ou prestador de serviço B2B</strong> que já tem uma estrutura operando e precisa gerar novos contratos com mais previsibilidade e lucro.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-3 text-left">
                  <div className="flex items-start gap-3 bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700">
                      <strong>Fim da montanha-russa:</strong> Crie um processo ativo de captação de clientes industriais.
                    </span>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700">
                      <strong>Serviços Recorrentes:</strong> Garanta contratos de médio e longo prazo para manter o caixa forte.
                    </span>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700">
                      <strong>Sem dependência de indicação:</strong> Saiba como abordar compradores qualificados com precisão.
                    </span>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700">
                      <strong>Atração Direta:</strong> Leve o cliente direto da atração para o grupo e agendamento de reuniões.
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA 2 Button */}
              <div className="pt-4 sm:pt-6 text-center">
                <JoinGroupButton
                  href={WHATSAPP_GROUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center w-full sm:w-auto py-3.5 sm:py-4.5 px-6 sm:px-10 rounded-xl font-extrabold text-base sm:text-xl text-slate-950 bg-[#4ADE80] hover:bg-[#22C55E] transition-all duration-200 shadow-lg shadow-green-500/20 uppercase tracking-wide border-2 border-green-300"
                >
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 mr-2.5 sm:mr-3 text-slate-950" />
                  <span>ENTRAR NO GRUPO DA AULA (QUARTA ÀS 12H)</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2.5 sm:ml-3 group-hover:translate-x-1 transition-transform" />
                </JoinGroupButton>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Lightweight Footer */}
      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} MShift Consultoria. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="/politica-de-privacidade" target="_blank" className="hover:text-amber-600 transition-colors">Privacidade</Link>
            <JoinGroupButton href={WHATSAPP_GROUP_URL} target="_blank" className="hover:text-amber-600 transition-colors">Grupo VIP WhatsApp</JoinGroupButton>
          </div>
        </div>
      </footer>
    </>
  );
}
