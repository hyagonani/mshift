import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { TestimonialGallery } from '@/components/testimonial-gallery';
import { TrackedGroupLink } from '@/components/tracked-group-link';

export const metadata: Metadata = {
  title: 'Sistema de Usinagem Empresarial | MShift',
  description: 'Sistema testado para sair de 5 pra 20 clientes recorrentes na sua empresa de usinagem sem depender de indicações.',
  robots: 'noindex, nofollow',
};

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/D8ATC9wkT9K8IunvpfneRo?s=cl&p=i&mlu=0";

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
    desc: 'Dobrou o faturamento da empresa após a implementação do Plano de Usinagem Empresarial.',
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
      <main className="min-h-screen font-sans selection:bg-secondary selection:text-slate-900 relative">
        
        {/* Top Alert Ribbon */}
        <div className="bg-background-dark text-secondary font-bold text-xs sm:text-sm tracking-widest uppercase text-center py-3 px-4 flex items-center justify-center border-b border-white/5">
          <span>EXCLUSIVO PARA DONO DE EMPRESA DE USINAGEM</span>
        </div>

        {/* HERO SECTION - White Background */}
        <section className="bg-white px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in" style={{ animationDuration: '0.6s' }}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight uppercase leading-tight">
              USINAGEM: <span className="text-gradient-gold">SISTEMA TESTADO</span> PARA SAIR DE <span className="text-gradient-gold">5 PRA 20 CLIENTES</span> NA SUA EMPRESA SEM DEPENDER DE INDICAÇÕES
            </h1>

            <div className="space-y-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed">
              <p>
                Pegue a Estratégia Validada para adicionar contratos previsíveis todos os meses sem precisar gastar com tráfego e sem ficar apagando incêndio na operação.
              </p>
              <p className="font-medium text-slate-900">
                Toque no botão abaixo e pegue a Estratégia Validada no grupo silencioso! Na próxima <span className="font-bold">quarta (às 12h)</span>, eu abro uma aula prática e te ajudo a aplicar na sua empresa.
              </p>
            </div>

            <div className="pt-4 max-w-xl mx-auto">
              <TrackedGroupLink
                target="_blank"
                rel="noopener noreferrer"
                href={WHATSAPP_GROUP_URL}
                className="group relative flex items-center justify-center w-full py-4 sm:py-5 px-6 sm:px-8 rounded-full font-extrabold text-sm sm:text-lg text-white bg-[#25D366] hover:bg-[#20ba59] transition-all duration-300 shadow-lg shadow-green-500/20 uppercase tracking-wider"
              >
                <span>PEGAR ESTRATÉGIA GRATUITAMENTE</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </TrackedGroupLink>
              <div className="flex items-center justify-center gap-2 mt-4 text-slate-500 text-xs sm:text-sm">
                <span>O link leva para o grupo silencioso onde a estratégia está disponível.</span>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS SECTION - Dark Blue Background */}
        <section className="bg-background-dark px-4 sm:px-6 lg:px-8 py-16 relative z-10 border-y border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white font-bold text-lg sm:text-2xl mb-10">
              Resultados da estratégia que você vai ter acesso:
            </h2>
            
            <div className="max-w-2xl mx-auto mb-10">
              <blockquote className="font-serif text-2xl sm:text-3xl text-white italic leading-relaxed">
                "Esses três pilares, a gente chama de Sistema de Usinagem Empresarial. Em <span className="text-secondary font-bold">6 meses, 70% de crescimento</span>."
              </blockquote>
            </div>

            <div className="max-w-5xl mx-auto mb-16">
              <TestimonialGallery testimonials={DEPOIMENTOS} />
            </div>

            <div className="max-w-md mx-auto">
              <TrackedGroupLink
                target="_blank"
                rel="noopener noreferrer"
                href={WHATSAPP_GROUP_URL}
                className="group relative flex items-center justify-center w-full py-4 px-6 rounded-full font-extrabold text-sm sm:text-base text-white bg-[#25D366] hover:bg-[#20ba59] transition-all duration-300 uppercase tracking-wide"
              >
                <span>PEGAR ESTRATÉGIA GRATUITAMENTE</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </TrackedGroupLink>
              <div className="mt-4 text-slate-400 text-xs text-center">
                <span>O link leva para o grupo onde a Estratégia está disponível.</span>
              </div>
            </div>
          </div>
        </section>

        {/* PILARES SECTION - White Background */}
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Na aula você vai entender como implementar:
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Pilar 1 */}
              <div className="bg-card-dark p-6 sm:p-8 rounded-2xl flex flex-col items-start hover:shadow-xl transition-shadow border border-surface-dark">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-secondary font-black text-4xl leading-none">1</span>
                  <span className="text-secondary font-bold text-xs uppercase tracking-widest border-l-2 border-secondary/30 pl-3">
                    Plano de Usinagem Empresarial
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Assumir o controle da empresa e sair do operacional
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm">
                  Pare de apagar incêndios no chão de fábrica e passe a conduzir a sua operação com uma direção clara.
                </p>
              </div>

              {/* Pilar 2 */}
              <div className="bg-card-dark p-6 sm:p-8 rounded-2xl flex flex-col items-start hover:shadow-xl transition-shadow border border-surface-dark">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-secondary font-black text-4xl leading-none">2</span>
                  <span className="text-secondary font-bold text-xs uppercase tracking-widest border-l-2 border-secondary/30 pl-3">
                    Operação Sob Controle
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Fazer a operação rodar sem depender de você
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm">
                  Como transformar o que está na sua cabeça em processos, delegar com segurança e focar apenas na lucratividade.
                </p>
              </div>

              {/* Pilar 3 */}
              <div className="bg-card-dark p-6 sm:p-8 rounded-2xl flex flex-col items-start hover:shadow-xl transition-shadow border border-surface-dark">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-secondary font-black text-4xl leading-none">3</span>
                  <span className="text-secondary font-bold text-xs uppercase tracking-widest border-l-2 border-secondary/30 pl-3">
                    Produção de Alta Margem
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Crescer com lucro e sem depender de indicações
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm">
                  Como implementar um comercial objetivo para atrair grandes clientes e aumentar suas margens sem gastar com tráfego.
                </p>
              </div>
            </div>

            <div className="mt-12 max-w-xl mx-auto">
              <TrackedGroupLink
                target="_blank"
                rel="noopener noreferrer"
                href={WHATSAPP_GROUP_URL}
                className="group relative flex items-center justify-center w-full py-4 sm:py-5 px-6 sm:px-8 rounded-full font-extrabold text-sm sm:text-lg text-white bg-[#25D366] hover:bg-[#20ba59] transition-all duration-300 shadow-lg shadow-green-500/20 uppercase tracking-wider"
              >
                <span>PEGAR ESTRATÉGIA GRATUITAMENTE</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </TrackedGroupLink>
              <div className="mt-4 text-slate-500 text-xs text-center">
                <span>O link leva para o grupo onde a Estratégia está disponível.</span>
              </div>
            </div>
          </div>
        </section>

        {/* MENTOR SECTION - Dark Blue Background */}
        <section className="bg-background-dark py-16 relative z-10 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-2">
                Quem será seu professor?
              </h2>
              <p className="text-slate-300 mt-2">
                Agora que já viu os resultados, conheça quem vai mostrar como aplicar esse sistema na sua empresa.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
              <div className="w-64 sm:w-80 flex-shrink-0 relative">
                <div className="absolute inset-0 bg-secondary translate-x-4 translate-y-4 rounded-lg"></div>
                <Image 
                  sizes="(min-width: 768px) 320px, 256px" 
                  alt="Willian Pereira Portrait" 
                  width={500} 
                  height={625} 
                  className="relative rounded-lg shadow-xl w-full object-cover aspect-[4/5] filter" 
                  src="https://drive.google.com/thumbnail?id=1NVFgZNcUNVbQvT9h1X4MSaBOB4fXTmdt&sz=w1000" 
                  referrerPolicy="no-referrer" 
                />
              </div>

              <div className="text-center md:text-left space-y-4 max-w-md">
                <h3 className="text-2xl font-bold text-secondary">Willian Pereira</h3>
                <ul className="space-y-3 text-slate-300 text-sm sm:text-base text-left">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Sócio da MShift Consultoria</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Mais de 20 anos de experiência</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Especialista em escala para empresas B2B e Usinagem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Mais de R$ 30 milhões gerados em faturamento junto aos clientes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Mais de 150 empresas transformadas</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-surface-dark mt-6 text-left">
                  <p className="italic text-slate-400 text-sm">
                    "Nesta aula, eu vou te mostrar o sistema utilizado para tirar o dono do operacional e gerar novos clientes previsíveis para sua empresa de usinagem."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 max-w-xl mx-auto">
              <TrackedGroupLink
                target="_blank"
                rel="noopener noreferrer"
                href={WHATSAPP_GROUP_URL}
                className="group relative flex items-center justify-center w-full py-4 sm:py-5 px-6 sm:px-8 rounded-full font-extrabold text-sm sm:text-lg text-white bg-[#25D366] hover:bg-[#20ba59] transition-all duration-300 shadow-lg shadow-green-500/20 uppercase tracking-wider"
              >
                <span>PEGAR ESTRATÉGIA GRATUITAMENTE</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </TrackedGroupLink>
              <div className="mt-4 text-slate-400 text-xs text-center">
                <span>O link leva para o grupo silencioso onde o mapa está disponível.</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-background-dark border-t border-surface-dark py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} MShift Consultoria. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
