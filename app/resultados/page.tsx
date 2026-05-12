import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Star, ArrowRight, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ResultadosPage() {
  const shorts = [
    "d9SPxnhI36U",
    "Z3_j6fUAs9M",
    "leW3UaROFa8",
    "TBLyC1HYk6A",
    "vzkgZD_59Nw",
    "W87xJU6FHoE",
    "axY1ZPxGWok",
    "69p-YkVNMn8",
    "wG_rIhQZJ0g",
    "u3JvHwmMhkg",
    "GJgipNmBBCM"
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen font-sans">
        
        {/* ==============================================================
            HERO SECTION
            ============================================================== */}
        <section className="relative pt-32 pb-8 lg:pt-48 lg:pb-16 bg-background-dark overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10 bg-hero-pattern"></div>
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-secondary text-xs font-bold tracking-widest uppercase">Resultados Reais</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              O que falam sobre o <br className="hidden md:block"/>
              <span className="italic text-gradient-gold">Método MShift</span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Não acredite apenas na nossa palavra. Veja como empresários transformaram a gestão e o faturamento de seus negócios aplicando nossa metodologia na prática.
            </p>
          </div>
        </section>

        {/* ==============================================================
            YOUTUBE SHORTS GRID
            ============================================================== */}
        <section className="pt-8 pb-20 lg:pt-12 lg:pb-32 bg-background-dark relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12 lg:mb-16">
              <PlayCircle className="w-8 h-8 text-secondary" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Feedback de <span className="italic text-secondary">Clientes</span></h2>
              <div className="flex-1 h-px bg-white/10 ml-4 hidden md:block"></div>
            </div>

            {/* Shorts Container */}
            <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
              {shorts.map((id, index) => (
                <div 
                  key={id} 
                  className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 bg-slate-900 aspect-[9/16] w-full max-w-[320px] transition-transform hover:-translate-y-2 duration-300"
                >
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${id}?rel=0`} 
                    title={`Depoimento MShift ${index + 1}`} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==============================================================
            WRITTEN TESTIMONIALS
            ============================================================== */}
        <section className="py-24 lg:py-32 bg-slate-50 relative rounded-t-[3rem] lg:rounded-t-[5rem] shadow-[0_-30px_60px_rgba(0,0,0,0.5)] z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="text-slate-900 font-serif text-3xl md:text-5xl font-bold mb-6">
                Histórias de <span className="italic text-secondary">Sucesso</span>
              </h2>
              <div className="w-16 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-secondary/30 relative">
                <span className="absolute -top-6 -left-2 text-8xl font-serif text-slate-100 pointer-events-none select-none">"</span>
                <div className="flex items-center gap-1 text-secondary mb-6 relative z-10">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-slate-700 font-serif text-lg italic mb-10 flex-grow leading-relaxed relative z-10">
                  O Willian enxerga o que não vimos há anos. Ele identificou gaps ocultos e transformou nossas habilidades em soluções reais de mercado. Foi a virada de chave que precisávamos para crescer.
                </p>
                <div className="flex flex-col border-t border-slate-100 pt-6 relative z-10">
                  <p className="text-slate-900 font-bold text-base">Rodrigo Brina</p>
                  <p className="text-slate-500 text-sm">Fundador JBTEL</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-secondary/30 relative">
                <span className="absolute -top-6 -left-2 text-8xl font-serif text-slate-100 pointer-events-none select-none">"</span>
                <div className="flex items-center gap-1 text-secondary mb-6 relative z-10">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-slate-700 font-serif text-lg italic mb-10 flex-grow leading-relaxed relative z-10">
                  Dobramos nossa carteira de clientes em tempo recorde, mas com um diferencial: entendemos que qualidade vale mais que quantidade. Crescemos 70% em 6 meses com um planejamento sólido de curto, médio e longo prazo.
                </p>
                <div className="flex flex-col border-t border-slate-100 pt-6 relative z-10">
                  <p className="text-slate-900 font-bold text-base">Gustavo Piontkiewicz</p>
                  <p className="text-slate-500 text-sm">CEO, Metalux</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-secondary/30 relative">
                <span className="absolute -top-6 -left-2 text-8xl font-serif text-slate-100 pointer-events-none select-none">"</span>
                <div className="flex items-center gap-1 text-secondary mb-6 relative z-10">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-slate-700 font-serif text-lg italic mb-10 flex-grow leading-relaxed relative z-10">
                  Antes do William, eu operava no escuro, sem processos ou critérios de contratação. O Mapeamento Estratégico de Crescimento foi o divisor de águas que transformou meu estúdio em uma empresa de verdade, com fluxo de produção e visão estratégica.
                </p>
                <div className="flex flex-col border-t border-slate-100 pt-6 relative z-10">
                  <p className="text-slate-900 font-bold text-base">Vinícius Souza</p>
                  <p className="text-slate-500 text-sm">Proprietário, Syntese 3D</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            FINAL CTA
            ============================================================== */}
        <section className="py-24 relative bg-background-dark overflow-hidden">
          <div className="absolute inset-0 bg-secondary/5"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              Pronto para ser o próximo <br className="hidden md:block"/>
              <span className="italic text-secondary">Caso de Sucesso?</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Chega de tentar adivinhar o que está travando o crescimento da sua empresa. Vamos mapear o seu negócio e construir um plano prático de expansão.
            </p>
            <Link 
              href="/#contato" 
              className="inline-flex items-center justify-center gap-3 bg-secondary hover:bg-secondary/90 text-slate-900 font-bold px-10 py-5 rounded-2xl text-lg transition-transform duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_40px_rgba(231,170,27,0.3)]"
            >
              Agendar Mapeamento Estratégico
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
