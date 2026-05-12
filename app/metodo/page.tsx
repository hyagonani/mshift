import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { VSLPlayer } from '@/components/vsl-player';
import { ArrowRight, TrendingUp, ShieldCheck, CreditCard, Landmark, LineChart, Users, Filter, Settings, Quote, Star } from 'lucide-react';

export default function MetodoPage() {
  return (
    <div className="font-sans text-slate-100 bg-[#021526]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-[#031525]">
        <div className="max-w-7xl mx-auto px-6 gap-12">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block py-1 px-3 rounded bg-[#E7AA1B]/10 text-[#E7AA1B] font-bold text-xs tracking-widest uppercase mb-6 border border-[#E7AA1B]/20">
              O PRÓXIMO NÍVEL DO SEU NEGÓCIO
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white font-serif">
              <span className="text-[#E7AA1B]">Mapeamento Estratégico de Crescimento</span>, a única maneira de organizar sua operação e <span className="text-[#E7AA1B]">dobrar seu faturamento</span> em 180 dias
            </h1>
            <p className="text-sm md:text-base text-slate-300 mb-8 leading-relaxed font-light max-w-3xl mx-auto">
              Pare de apagar incêndios e assuma a cadeira de estrategista. Descubra os gargalos invisíveis que impedem sua empresa de escalar e recupere sua liberdade com um método validado no campo de batalha.
            </p>
            <div className="relative max-w-sm mx-auto mt-12">
              <div className="absolute -inset-4 bg-[#E7AA1B]/20 blur-3xl rounded-full"></div>
              <VSLPlayer url="https://www.youtube.com/watch?v=How4Oc70Z0c" />
              
              <div className="absolute -bottom-6 -right-6 bg-card-dark border border-slate-800 p-4 rounded-xl shadow-2xl hidden md:block z-20">
                <div className="flex items-center gap-3">
                  <div className="bg-[#E7AA1B]/20 p-2 rounded-lg">
                    <TrendingUp className="text-[#E7AA1B] w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold text-sm">+R$ 30 Milhões</p>
                    <p className="text-slate-400 text-xs text-left">Faturamento Gerado</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 mt-16">
              <Link href="https://payfast.greenn.com.br/105158/offer/6CXHjo" className="bg-[#E7AA1B] hover:bg-[#E7AA1B]/90 text-[#021526] px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-xl shadow-[#E7AA1B]/30 flex items-center justify-center gap-2 transform hover:scale-105">
                QUERO FAZER MEU MAPEAMENTO ESTRATÉGICO
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-surface-dark py-24 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 leading-snug text-white font-serif">
            Você sente que a sua empresa é uma <span className="italic text-[#E7AA1B]">&apos;montanha-russa&apos;</span>?
          </h2>
          <div className="space-y-6 text-lg leading-relaxed max-w-2xl mx-auto">
            <p className="text-slate-400">
              Um mês fatura R$ 50k, no outro cai para R$ 15k? Se você parar por uma semana, tudo trava? 
            </p>
            <p className="text-slate-400">
              A maioria dos empresários acredita que para crescer precisa de mais funcionários ou mais horas de trabalho. <span className="font-bold underline decoration-[#E7AA1B] underline-offset-4 text-white">Eles estão errados.</span>
            </p>
            <p className="font-medium italic text-white">
              O que você tem hoje não é uma empresa, é um &apos;auto-emprego&apos; escravizante.
            </p>
          </div>
        </div>
      </section>

      {/* Mechanism Section */}
      <section className="py-24 bg-[#021526]" id="metodo">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif text-white">O Protocolo de Desafogamento</h2>
            <p className="text-slate-400">Identificamos e eliminamos os 3 principais pontos de travamento.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#051E34] p-10 rounded-2xl border border-slate-800 hover:border-[#E7AA1B]/50 transition-all group">
              <div className="w-16 h-16 bg-[#E7AA1B]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Filter className="text-[#E7AA1B] w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white font-serif">Gargalo de Processo</h3>
              <p className="text-slate-400 leading-relaxed">
                Onde o dinheiro &apos;vaza&apos; por desorganização. Implementamos fluxos claros para que nada se perca no caminho.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#051E34] p-10 rounded-2xl border border-slate-800 hover:border-[#E7AA1B]/50 transition-all group">
              <div className="w-16 h-16 bg-[#E7AA1B]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-[#E7AA1B] w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white font-serif">Gargalo de Decisão</h3>
              <p className="text-slate-400 leading-relaxed">
                Por que tudo ainda depende da sua aprovação. Criamos autonomia para que a empresa rode sem você ser o gargalo.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#051E34] p-10 rounded-2xl border border-slate-800 hover:border-[#E7AA1B]/50 transition-all group">
              <div className="w-16 h-16 bg-[#E7AA1B]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-[#E7AA1B] w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white font-serif">Gargalo de Execução</h3>
              <p className="text-slate-400 leading-relaxed">
                Como transformar sua equipe em uma máquina de entrega autônoma, focada em resultados e não apenas em tarefas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-24 border-y bg-background-dark border-slate-800" id="entrega">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white font-serif">O Que Você Vai Receber</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col gap-4 p-6 rounded-xl border bg-card-dark border-slate-800">
              <Landmark className="text-[#E7AA1B] w-8 h-8" />
              <h4 className="font-bold text-white font-serif">Diagnóstico de Fluxo de Caixa</h4>
              <p className="text-sm text-slate-400">Previsibilidade para faturamento anual.</p>
            </div>
            <div className="flex flex-col gap-4 p-6 rounded-xl border bg-card-dark border-slate-800">
              <Users className="text-[#E7AA1B] w-8 h-8" />
              <h4 className="font-bold text-white font-serif">Matriz de Delegação</h4>
              <p className="text-sm text-slate-400">Aprenda a sair do operacional sem perder o controle da qualidade.</p>
            </div>
            <div className="flex flex-col gap-4 p-6 rounded-xl border bg-card-dark border-slate-800">
              <Filter className="text-[#E7AA1B] w-8 h-8" />
              <h4 className="font-bold text-white font-serif">O Plano de Escala</h4>
              <p className="text-sm text-slate-400">A simplicidade estratégica que gera milhões em faturamento.</p>
            </div>
            <div className="flex flex-col gap-4 p-6 rounded-xl border bg-card-dark border-slate-800">
              <Settings className="text-[#E7AA1B] w-8 h-8" />
              <h4 className="font-bold text-white font-serif">Sistemas de Gestão Prontos</h4>
              <p className="text-sm text-slate-400">Templates e fluxogramas imediatos para aplicar hoje mesmo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-24 relative overflow-hidden bg-[#021526]">
        <div className="absolute inset-0 bg-[#E7AA1B]/5 skew-y-3 origin-right"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden border-4 border-[#E7AA1B] shadow-2xl relative">
            <Image 
              alt="Willian Pereira Profile" 
              fill
              className="object-cover" 
              src="https://drive.google.com/thumbnail?id=1VwyB2U99dQtcZ0Cv56G86uHSIAXCYEtP&sz=w1000" 
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed mb-6">
              &quot;Toda empresa pode mudar de nível, desde que tenha a orientação de quem já trilhou o caminho.&quot;
            </p>
            <h4 className="text-xl font-bold text-[#E7AA1B] font-serif">— Willian Pereira</h4>
            <p className="text-slate-400">Estrategista de Negócios & Fundador do Método</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background-light " id="cases">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-slate-900  font-serif text-3xl md:text-4xl font-bold mb-4">
              Resultados Reais
            </h2>
            <p className="text-slate-600 ">Empresários que transformaram a gestão de seus negócios.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white  p-8 rounded-xl shadow-sm border border-slate-100  flex flex-col h-full">
              <div className="flex items-center justify-center gap-1 text-secondary mb-4">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-slate-700  italic mb-8 text-center flex-grow">&quot;O Willian enxerga o que não vimos há anos. Ele identificou gaps ocultos e transformou nossas habilidades em soluções reais de mercado. Foi a virada de chave que precisávamos para crescer.&quot;</p>
              <div className="flex flex-col items-center text-center pt-6 border-t border-slate-100 ">
                <p className="text-slate-900  font-bold text-sm">Rodrigo Brina</p>
                <p className="text-slate-500 text-xs">Fundador JBTEL</p>
              </div>
            </div>
            <div className="bg-white  p-8 rounded-xl shadow-sm border border-slate-100  flex flex-col h-full">
              <div className="flex items-center justify-center gap-1 text-secondary mb-4">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-slate-700  italic mb-8 text-center flex-grow">&quot;Dobramos nossa carteira de clientes em tempo recorde, mas com um diferencial: entendemos que qualidade vale mais que quantidade. Crescemos 70% em 6 meses com um planejamento sólido de curto, médio e longo prazo.&quot;</p>
              <div className="flex flex-col items-center text-center pt-6 border-t border-slate-100 ">
                <p className="text-slate-900  font-bold text-sm">Gustavo Piontkiewicz</p>
                <p className="text-slate-500 text-xs">CEO, Metalux</p>
              </div>
            </div>
            <div className="bg-white  p-8 rounded-xl shadow-sm border border-slate-100  flex flex-col h-full">
              <div className="flex items-center justify-center gap-1 text-secondary mb-4">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-slate-700  italic mb-8 text-center flex-grow">&quot;Antes do William, eu operava no escuro, sem processos ou critérios de contratação. O Mapeamento Estratégico de Crescimento foi o divisor de águas que transformou meu estúdio em uma empresa de verdade, com fluxo de produção e visão estratégica.&quot;</p>
              <div className="flex flex-col items-center text-center pt-6 border-t border-slate-100 ">
                <p className="text-slate-900  font-bold text-sm">Vinícius Souza</p>
                <p className="text-slate-500 text-xs">Proprietário, Syntese 3D</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 border-t border-slate-800 bg-background-dark" id="garantia">
        <div className="max-w-4xl mx-auto px-6 text-center rounded-3xl p-12 border bg-card-dark border-slate-800">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#E7AA1B]/20 mb-8">
            <ShieldCheck className="text-[#E7AA1B] w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white font-serif">Risco Zero</h2>
          <p className="text-xl mb-8 text-slate-300">
            Sua empresa organizada ou seu dinheiro de volta. Você tem uma <span className="text-[#E7AA1B] font-bold">garantia incondicional de 7 dias</span> para testar todo o método.
          </p>
          <p className="text-slate-500 text-sm">
            Confiamos tanto no método que o risco fica todo com a gente.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#021526] relative overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white max-w-4xl mx-auto font-serif">
            Pronto para assumir o controle do seu <span className="text-[#E7AA1B]">crescimento?</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Não deixe para depois a liberdade que você pode conquistar hoje. Garanta sua vaga agora.
          </p>
          <Link href="https://payfast.greenn.com.br/105158/offer/6CXHjo" className="inline-block bg-[#E7AA1B] hover:bg-[#E7AA1B]/90 text-[#021526] px-12 py-6 rounded-2xl font-bold text-xl md:text-2xl transition-all shadow-2xl shadow-[#E7AA1B]/40 transform hover:-translate-y-1">
            QUERO FAZER MEU MAPEAMENTO ESTRATÉGICO DE CRESCIMENTO
          </Link>
          <div className="mt-12 flex items-center justify-center gap-8 opacity-50 grayscale">
            <span className="text-xs font-bold tracking-widest uppercase text-white">Pagamento Seguro</span>
            <ShieldCheck className="w-6 h-6 text-white" />
            <CreditCard className="w-6 h-6 text-white" />
            <Landmark className="w-6 h-6 text-white" />
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E7AA1B]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E7AA1B]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
      </section>

      <Footer />
    </div>
  );
}
