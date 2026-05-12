import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Target, Network, Layers, ShieldCheck, Crown, Settings, ClipboardCheck, LineChart, Users, Zap, Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
export default function ProcessosPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background-dark pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden font-sans relative">
        {/* Background Patterns from Home */}
        <div className="absolute inset-0 opacity-10 bg-hero-pattern"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Grid with Photo */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
            <div className="lg:col-span-7 relative z-10 text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start mb-8 relative">
                <span className="text-secondary/10 font-serif font-black text-8xl md:text-[120px] absolute -top-16 -left-8 z-0 select-none pointer-events-none hidden lg:block tracking-tighter">01</span>
                <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 rounded-3xl sm:rounded-full border border-secondary/50 bg-secondary/20 backdrop-blur-md shadow-[0_0_30px_rgba(231,170,27,0.25)] relative z-10 text-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_rgba(231,170,27,1)] hidden sm:block"></span>
                  <span className="text-white font-sans font-extrabold tracking-[0.1em] sm:tracking-[0.2em] uppercase text-xs sm:text-sm">
                    A Jornada do Método <span className="text-secondary mx-1 sm:mx-2 hidden sm:inline">—</span><br className="block sm:hidden"/> <span className="text-secondary">Passo 01</span>
                  </span>
                </div>
              </div>
              
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="italic text-gradient-gold">Fundação</span> <br className="hidden md:block"/> 
                <span className="text-white">Empresarial</span>
              </h1>
              
              <div className="w-16 h-1 lg:w-20 bg-secondary mb-6 lg:mb-8 mx-auto lg:mx-0 rounded-full"></div>

              <p className="text-slate-400 text-base lg:text-xl leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
                Chega de operar como um prestador de serviços sobrecarregado. Você é uma empresa e precisa agir como uma. Construímos os alicerces do seu negócio para que ele <strong className="text-white font-semibold underline decoration-secondary/50 underline-offset-4">suporte o crescimento sem depender exclusivamente de você.</strong>
              </p>
            </div>

            <div className="lg:col-span-5 relative mt-12 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-background-dark via-transparent to-transparent z-10"></div>
              
              {/* Photo styling similar to home */}
              <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay z-10"></div>
                <Image 
                  src="https://drive.google.com/thumbnail?id=1NVFgZNcUNVbQvT9h1X4MSaBOB4fXTmdt&sz=w1000"
                  alt="Sessão Estratégica"
                  width={500}
                  height={600}
                  className="w-full object-cover filter contrast-125"
                  referrerPolicy="no-referrer"
                  priority
                />
              </div>
              
              {/* Floating Element */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:-left-12 z-20 bg-card-dark border border-secondary/30 p-3 lg:p-4 rounded-xl shadow-2xl animate-bounce-slow backdrop-blur-md w-[90%] sm:w-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Crown className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Mentalidade de CEO</p>
                    <p className="text-slate-400 text-xs">A base do crescimento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Connector Graphic */}
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary via-white/10 to-transparent hidden lg:block"></div>
            
            {/* Bloco 2: Entregáveis (Grid Elaborado) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6 lg:gap-y-12 relative z-10 mb-12 lg:mb-20">
              
              {/* Card 1 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-transparent opacity-0 group-hover:opacity-20 rounded-3xl blur transition-opacity duration-500"></div>
                <div className="relative bg-surface-dark/90 backdrop-blur-xl p-6 lg:p-10 rounded-2xl border border-white/10 group-hover:border-secondary/50 transition-all duration-500 flex flex-col h-full shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-background-dark border border-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary/10 transition-all duration-500 shadow-inner">
                      <Target className="w-7 h-7 text-secondary" />
                    </div>
                    <span className="text-4xl lg:text-5xl font-serif text-white/5 font-bold">01</span>
                  </div>
                  <h3 className="text-white font-bold text-xl lg:text-2xl mb-3 lg:mb-4 font-sans group-hover:text-secondary transition-colors">Posicionamento de Alto Valor no B2B</h3>
                  <p className="text-slate-400 leading-relaxed text-sm lg:text-base">
                    Saia da guerra de preços. Você deixa de ser tratado como &quot;freela&quot; e passa a ser visto como um parceiro estratégico indispensável para corporações.
                  </p>
                </div>
              </div>

              {/* Card 2 - Offset to create staggering effect on desktop */}
              <div className="relative group lg:mt-16">
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-transparent opacity-0 group-hover:opacity-20 rounded-3xl blur transition-opacity duration-500"></div>
                <div className="relative bg-surface-dark/90 backdrop-blur-xl p-6 lg:p-10 rounded-2xl border border-white/10 group-hover:border-secondary/50 transition-all duration-500 flex flex-col h-full shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-background-dark border border-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary/10 transition-all duration-500 shadow-inner">
                      <Network className="w-7 h-7 text-secondary" />
                    </div>
                    <span className="text-4xl lg:text-5xl font-serif text-white/5 font-bold">02</span>
                  </div>
                  <h3 className="text-white font-bold text-xl lg:text-2xl mb-3 lg:mb-4 font-sans group-hover:text-secondary transition-colors">Governança e Estrutura Enxuta</h3>
                  <p className="text-slate-400 leading-relaxed text-sm lg:text-base">
                    Desenhamos o organograma, papéis e responsabilidades detalhadas, garantindo extremo profissionalismo e entrega constante mesmo com equipe reduzida.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-transparent opacity-0 group-hover:opacity-20 rounded-3xl blur transition-opacity duration-500"></div>
                <div className="relative bg-surface-dark/90 backdrop-blur-xl p-6 lg:p-10 rounded-2xl border border-white/10 group-hover:border-secondary/50 transition-all duration-500 flex flex-col h-full shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-background-dark border border-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary/10 transition-all duration-500 shadow-inner">
                      <Layers className="w-7 h-7 text-secondary" />
                    </div>
                    <span className="text-4xl lg:text-5xl font-serif text-white/5 font-bold">03</span>
                  </div>
                  <h3 className="text-white font-bold text-xl lg:text-2xl mb-3 lg:mb-4 font-sans group-hover:text-secondary transition-colors">Engenharia de Oferta e Nicho</h3>
                  <p className="text-slate-400 leading-relaxed text-sm lg:text-base">
                    Clareza absoluta sobre o que, para quem e por que você vende. O fim da confusão na hora de atrair e converter clientes high-ticket.
                  </p>
                </div>
              </div>

              {/* Card 4 - Offset */}
              <div className="relative group lg:mt-16">
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-transparent opacity-0 group-hover:opacity-20 rounded-3xl blur transition-opacity duration-500"></div>
                <div className="relative bg-surface-dark/90 backdrop-blur-xl p-6 lg:p-10 rounded-2xl border border-white/10 group-hover:border-secondary/50 transition-all duration-500 flex flex-col h-full shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-background-dark border border-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary/10 transition-all duration-500 shadow-inner">
                      <ShieldCheck className="w-7 h-7 text-secondary" />
                    </div>
                    <span className="text-4xl lg:text-5xl font-serif text-white/5 font-bold">04</span>
                  </div>
                  <h3 className="text-white font-bold text-xl lg:text-2xl mb-3 lg:mb-4 font-sans group-hover:text-secondary transition-colors">Identidade Corporativa</h3>
                  <p className="text-slate-400 leading-relaxed text-sm lg:text-base">
                    Construímos a postura e a imagem institucional da sua empresa exatamente do jeito que o mercado corporativo exige, confia e respeita.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Bloco 3: Banner de Resultado */}
          <div className="relative z-10 mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-card-dark to-surface-dark border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-gold"></div>
            <div className="absolute right-0 top-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="p-6 lg:p-12 flex flex-col md:flex-row items-center gap-6 lg:gap-12 relative z-10">
              <div className="flex-shrink-0 w-16 h-16 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br from-secondary/20 to-transparent flex items-center justify-center border border-secondary/30 shadow-[0_0_40px_rgba(231,170,27,0.2)] transform rotate-3">
                <Crown className="w-8 h-8 lg:w-12 lg:h-12 text-secondary drop-shadow-lg" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                  A Transformação
                </span>
                <p className="text-white text-lg lg:text-2xl font-light leading-relaxed font-serif">
                  O Resultado final: <strong className="font-bold text-white">Você abandona a postura de tarefeiro</strong>, elimina a informalidade e assume definitivamente <span className="italic text-secondary">a cadeira de CEO do seu negócio.</span>
                </p>
              </div>
            </div>
          </div>

          </div>

        {/* ==============================================================
            PASSO 02: Operação sem Caos (LIGHT THEME)
            ============================================================== */}
        <div className="relative w-full z-10 mt-12 lg:mt-20">
          {/* Smooth Gradient Transition Background */}
          <div className="absolute top-0 left-0 right-0 h-32 lg:h-48 bg-gradient-to-b from-background-dark to-slate-50 z-0 pointer-events-none"></div>
          <div className="absolute top-32 lg:top-48 bottom-0 left-0 right-0 bg-slate-50 z-0 pointer-events-none rounded-b-[3rem] lg:rounded-b-[5rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)]"></div>

          <div className="relative z-10 pt-16 lg:pt-24 pb-24 lg:pb-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              
              {/* Elegant Divider between sections */}
              <div className="flex flex-col items-center justify-center mb-16 lg:mb-20">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mb-2 shadow-[0_0_10px_rgba(231,170,27,0.8)]"></div>
                <div className="w-px h-16 lg:h-24 bg-gradient-to-b from-secondary to-transparent"></div>
              </div>

              {/* Header Grid with Photo (Inverted) */}
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 lg:mb-24">
                
                {/* PHOTO ON THE LEFT */}
                <div className="lg:col-span-5 relative mt-12 lg:mt-0 order-2 lg:order-1">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-10"></div>
                  
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl">
                    <div className="absolute inset-0 bg-secondary/5 mix-blend-overlay z-10"></div>
                    <Image 
                      src="https://drive.google.com/thumbnail?id=1uvOywOq17-BbCbORdeqNiKyDvogL7-l7&sz=w1000"
                      alt="Operação Enxuta"
                      width={500}
                      height={600}
                      className="w-full object-cover filter contrast-110"
                      referrerPolicy="no-referrer"
                      priority
                    />
                  </div>
                  
                  {/* Floating Element (Light Theme) */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:-right-12 lg:left-auto z-20 bg-white border border-slate-200 p-3 lg:p-4 rounded-xl shadow-xl animate-bounce-slow w-[90%] sm:w-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Settings className="w-5 h-5 text-secondary animate-[spin_4s_linear_infinite]" />
                      </div>
                      <div>
                        <p className="text-slate-800 font-bold text-sm">Maestria Operacional</p>
                        <p className="text-slate-500 text-xs">Padrões de excelência</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TEXT ON THE RIGHT */}
                <div className="lg:col-span-7 relative z-10 text-center lg:text-left order-1 lg:order-2">
                  <div className="flex flex-col items-center lg:items-start mb-8 relative">
                    <span className="text-slate-300 font-serif font-black text-8xl md:text-[120px] absolute -top-16 -left-8 z-0 select-none pointer-events-none hidden lg:block tracking-tighter">02</span>
                    <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 rounded-3xl sm:rounded-full border border-secondary/30 bg-white shadow-lg relative z-10 text-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_rgba(231,170,27,0.5)] hidden sm:block"></span>
                      <span className="text-slate-800 font-sans font-extrabold tracking-[0.1em] sm:tracking-[0.2em] uppercase text-xs sm:text-sm">
                        A Jornada do Método <span className="text-secondary mx-1 sm:mx-2 hidden sm:inline">—</span><br className="block sm:hidden"/> <span className="text-secondary">Passo 02</span>
                      </span>
                    </div>
                  </div>
                  
                  <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-slate-900">
                    <span className="italic text-secondary">Operação</span> <br className="hidden md:block"/> 
                    sem Caos
                  </h2>
                  
                  <div className="w-16 h-1 lg:w-20 bg-secondary mb-6 lg:mb-8 mx-auto lg:mx-0 rounded-full"></div>

                  <p className="text-slate-600 text-base lg:text-xl leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
                    Seu negócio precisa rodar com previsibilidade e escala — mesmo sem você apagando incêndios todos os dias. Nesta fase, eliminamos os gargalos operacionais, os retrabalhos e a dependência exclusiva da sua memória ou do humor da equipe. <strong className="text-slate-900 font-bold border-b-2 border-secondary/30">Construímos uma operação autogerenciável.</strong>
                  </p>
                </div>
              </div>

              {/* Bloco 2: Entregáveis (Editorial List Layout) */}
              <div className="relative z-10 mb-16 lg:mb-24 flex flex-col border-t border-slate-200 mt-12 lg:mt-0">
                
                {/* Item 1 */}
                <div className="group py-8 lg:py-10 border-b border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center hover:bg-white transition-colors duration-500 cursor-default px-4 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8 rounded-2xl">
                  <div className="md:col-span-2 flex items-center justify-start">
                    <span className="text-6xl lg:text-7xl font-serif font-black text-slate-100 group-hover:text-secondary/20 transition-colors duration-500">01</span>
                  </div>
                  <div className="md:col-span-4 flex items-center gap-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-secondary/10 group-hover:border-secondary/30 transition-colors shadow-sm">
                      <Settings className="w-6 h-6 text-slate-400 group-hover:text-secondary" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-slate-900 group-hover:text-secondary transition-colors leading-tight">Processos Replicáveis e Padronizados</h3>
                  </div>
                  <div className="md:col-span-6 mt-2 md:mt-0">
                    <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
                      Padrões operacionais claros para que qualquer membro do time execute com excelência, sem depender da supervisão constante do dono.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="group py-8 lg:py-10 border-b border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center hover:bg-white transition-colors duration-500 cursor-default px-4 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8 rounded-2xl">
                  <div className="md:col-span-2 flex items-center justify-start">
                    <span className="text-6xl lg:text-7xl font-serif font-black text-slate-100 group-hover:text-secondary/20 transition-colors duration-500">02</span>
                  </div>
                  <div className="md:col-span-4 flex items-center gap-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-secondary/10 group-hover:border-secondary/30 transition-colors shadow-sm">
                      <ClipboardCheck className="w-6 h-6 text-slate-400 group-hover:text-secondary" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-slate-900 group-hover:text-secondary transition-colors leading-tight">Checklists e Gabaritos Prontos</h3>
                  </div>
                  <div className="md:col-span-6 mt-2 md:mt-0">
                    <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
                      Ferramentas acionáveis implementadas para reduzir a zero os erros amadores e acelerar radicalmente a velocidade das suas entregas.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="group py-8 lg:py-10 border-b border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center hover:bg-white transition-colors duration-500 cursor-default px-4 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8 rounded-2xl">
                  <div className="md:col-span-2 flex items-center justify-start">
                    <span className="text-6xl lg:text-7xl font-serif font-black text-slate-100 group-hover:text-secondary/20 transition-colors duration-500">03</span>
                  </div>
                  <div className="md:col-span-4 flex items-center gap-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-secondary/10 group-hover:border-secondary/30 transition-colors shadow-sm">
                      <LineChart className="w-6 h-6 text-slate-400 group-hover:text-secondary" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-slate-900 group-hover:text-secondary transition-colors leading-tight">Gestão Visual e Previsibilidade</h3>
                  </div>
                  <div className="md:col-span-6 mt-2 md:mt-0">
                    <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
                      Controle absoluto sobre tarefas, prazos e fluxos. Você saberá exatamente o que está acontecendo no seu negócio com uma rápida olhada.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="group py-8 lg:py-10 border-b border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center hover:bg-white transition-colors duration-500 cursor-default px-4 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8 rounded-2xl">
                  <div className="md:col-span-2 flex items-center justify-start">
                    <span className="text-6xl lg:text-7xl font-serif font-black text-slate-100 group-hover:text-secondary/20 transition-colors duration-500">04</span>
                  </div>
                  <div className="md:col-span-4 flex items-center gap-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-secondary/10 group-hover:border-secondary/30 transition-colors shadow-sm">
                      <Users className="w-6 h-6 text-slate-400 group-hover:text-secondary" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-slate-900 group-hover:text-secondary transition-colors leading-tight">Cultura de Execução e Comunicação</h3>
                  </div>
                  <div className="md:col-span-6 mt-2 md:mt-0">
                    <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
                      Alinhamento total do time. O fim do &quot;telefone sem fio&quot; para construir uma equipe fluida que tem autonomia para resolver problemas.
                    </p>
                  </div>
                </div>

              </div>

              {/* Bloco 3: Banner de Resultado (Light Theme) */}
              <div className="relative z-10 mt-12 overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-xl">
                <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-gold"></div>
                <div className="absolute right-0 top-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none"></div>
                
                <div className="p-6 lg:p-12 flex flex-col md:flex-row items-center gap-6 lg:gap-12 relative z-10">
                  <div className="flex-shrink-0 w-16 h-16 lg:w-24 lg:h-24 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20 shadow-md transform -rotate-3">
                    <Zap className="w-8 h-8 lg:w-12 lg:h-12 text-secondary" />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                      A Transformação
                    </span>
                    <p className="text-slate-800 text-lg lg:text-2xl font-light leading-relaxed font-serif">
                      O Resultado final: <strong className="font-bold text-slate-900">Você sai do caos operacional constante</strong>, deixa de ser o gargalo da própria empresa e consolida <span className="italic text-secondary">uma máquina que roda de forma inteligente.</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ==============================================================
            PASSO 03: Crescimento com Lucro (DARK THEME)
            ============================================================== */}
        <div className="relative w-full z-0 -mt-12 lg:-mt-20 pt-24 lg:pt-40">
          <div className="relative z-10 pb-24 lg:pb-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              
              {/* Elegant Divider between sections */}
              <div className="flex flex-col items-center justify-center mb-16 lg:mb-20">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mb-2 shadow-[0_0_10px_rgba(231,170,27,0.8)]"></div>
                <div className="w-px h-16 lg:h-24 bg-gradient-to-b from-secondary to-transparent"></div>
              </div>

              {/* Header Grid with Photo (Right) */}
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
                
                {/* TEXT ON THE LEFT */}
                <div className="lg:col-span-7 relative z-10 text-center lg:text-left">
                  {/* Passo 03 Header style (same as 01 and 02) */}
                  <div className="flex flex-col items-center lg:items-start mb-8 relative">
                    <span className="text-secondary/10 font-serif font-black text-8xl md:text-[120px] absolute -top-16 -left-8 z-0 select-none pointer-events-none hidden lg:block tracking-tighter">03</span>
                    <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 rounded-3xl sm:rounded-full border border-secondary/50 bg-secondary/20 backdrop-blur-md shadow-[0_0_30px_rgba(231,170,27,0.25)] relative z-10 text-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_rgba(231,170,27,1)] hidden sm:block"></span>
                      <span className="text-white font-sans font-extrabold tracking-[0.1em] sm:tracking-[0.2em] uppercase text-xs sm:text-sm">
                        A Jornada do Método <span className="text-secondary mx-1 sm:mx-2 hidden sm:inline">—</span><br className="block sm:hidden"/> <span className="text-secondary">Passo 03</span>
                      </span>
                    </div>
                  </div>

                  <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                    <span className="italic text-gradient-gold">Crescimento</span> <br className="hidden md:block"/> 
                    com Lucro
                  </h2>
                  
                  <div className="w-16 h-1 lg:w-20 bg-secondary mb-6 lg:mb-8 mx-auto lg:mx-0 rounded-full"></div>

                  <p className="text-slate-400 text-base md:text-lg lg:text-xl leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
                    Crescer a qualquer custo é o caminho mais rápido para quebrar a operação. O objetivo aqui é escalar com controle e alta margem. <strong className="text-white font-bold">Preparamos o seu negócio para expandir sem que você perca o domínio.</strong>
                  </p>
                </div>

                {/* PHOTO ON THE RIGHT */}
                <div className="lg:col-span-5 relative mt-12 lg:mt-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-transparent to-transparent z-10"></div>
                  
                  <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                    <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay z-10"></div>
                    <Image 
                      src="https://drive.google.com/thumbnail?id=1yLKUr3fSKcv6x46wOlq6z028o-_7Pedf&sz=w1000"
                      alt="Crescimento com Lucro"
                      width={500}
                      height={600}
                      className="w-full object-cover filter contrast-125"
                      referrerPolicy="no-referrer"
                      priority
                    />
                  </div>
                  
                  {/* Floating Element */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:-left-12 z-20 bg-card-dark border border-secondary/30 p-3 lg:p-4 rounded-xl shadow-2xl animate-bounce-slow backdrop-blur-md w-[90%] sm:w-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <LineChart className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">Escala Sustentável</p>
                        <p className="text-slate-400 text-xs">Margem e previsibilidade</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

                  {/* List of Deliverables */}
                  <ul className="space-y-6 md:space-y-8 mb-16">
                    <li className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-slate-300 text-base lg:text-lg font-light leading-relaxed">
                        <strong className="text-white font-medium">Planejamento Estratégico Direcionado</strong> — Metas claras e indicadores que fazem sentido.
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-slate-300 text-base lg:text-lg font-light leading-relaxed">
                        <strong className="text-white font-medium">Controle Financeiro de Alta Performance</strong> — Domínio absoluto sobre os números e fluxo de caixa.
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-slate-300 text-base lg:text-lg font-light leading-relaxed">
                        <strong className="text-white font-medium">Aquisição de Talentos Inteligente</strong> — Frameworks para atrair e filtrar as pessoas certas.
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <p className="text-slate-300 text-base lg:text-lg font-light leading-relaxed">
                        <strong className="text-white font-medium">Sistema de Metas e OKRs por Setor</strong> — Todo o time sabendo o que entregar e quando.
                      </p>
                    </li>
                  </ul>

                  {/* Blockquote */}
                  <blockquote className="border-l-4 border-secondary pl-6 py-2 mb-16">
                    <p className="text-white text-xl md:text-2xl font-serif italic leading-relaxed">
                      &quot;O Resultado: Você escala seu faturamento com segurança, mantém a margem intacta e conquista a liberdade de tempo que um verdadeiro fundador merece.&quot;
                    </p>
                  </blockquote>

              {/* Centralized CTA */}
              <div className="flex justify-center mt-12 relative z-10">
                <Link href="/#contato" className="inline-flex items-center justify-center gap-3 bg-secondary hover:bg-secondary/90 text-slate-900 font-bold px-8 py-5 rounded-2xl text-lg transition-transform duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_40px_rgba(231,170,27,0.3)]">
                  Quero conhecer a metodologia
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>

            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
