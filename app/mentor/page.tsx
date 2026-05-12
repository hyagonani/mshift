import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ArrowRight, Play, Quote, Brain, TrendingUp, Target } from 'lucide-react';

export default function MentorPage() {
  return (
    <div className="font-sans text-slate-900 bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#051525] text-white pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <span className="inline-block border border-[#E7AA1B] text-[#E7AA1B] text-[10px] px-3 py-1 rounded-full uppercase tracking-[0.2em] font-bold mb-6">
                Expertise & Liderança
              </span>
              <h1 className="font-serif text-5xl lg:text-6xl leading-tight mb-4">
                Mais do que um Mentor.<br />
                <span className="italic text-[#E7AA1B]">Um Gestor de Campo de Batalha.</span>
              </h1>
              <p className="text-gray-400 text-lg mb-10 max-w-xl leading-relaxed">
                Esqueça a teoria de palco. Willian Pereira construiu sua autoridade na trincheira, transformando empresas quebradas em máquinas de lucro e escalando negócios B2B com consistência implacável.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="#trajetoria" className="bg-[#E7AA1B] text-[#051525] px-8 py-4 rounded font-bold text-sm uppercase tracking-widest flex items-center group hover:bg-yellow-500 transition-colors">
                  Conhecer a Jornada
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/metodo" className="border border-gray-600 px-8 py-4 rounded font-bold text-sm uppercase tracking-widest flex items-center hover:bg-white/5 transition-colors">
                  <span className="w-6 h-6 rounded-full border border-[#E7AA1B] flex items-center justify-center mr-2">
                    <Play className="h-3 w-3 text-[#E7AA1B] fill-current" />
                  </span>
                  Ver Método
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative flex flex-col">
              <div className="absolute inset-0 bg-[#E7AA1B]/20 -m-4 rounded-xl blur-3xl -z-10"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10">
                <Image 
                  alt="Willian Pereira" 
                  width={600} 
                  height={800} 
                  className="w-full object-cover transition duration-700" 
                  src="https://drive.google.com/thumbnail?id=1yLKUr3fSKcv6x46wOlq6z028o-_7Pedf&sz=w1000" 
                />
                <div className="absolute bottom-6 left-6 right-6 bg-[#051525]/90 backdrop-blur-md p-6 border border-white/10 rounded-lg flex items-center justify-between">
                  <div>
                    <p className="text-[#E7AA1B] text-xs font-bold uppercase tracking-widest mb-1 flex items-center">
                      <Target className="h-4 w-4 mr-1" />
                      Fundador MShift
                    </p>
                    <p className="text-gray-400 text-[10px] uppercase">Consultoria Estratégica Premium</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:flex sm:flex-row justify-between items-center mt-8 pt-8 border-t border-white/10 w-full gap-y-5 gap-x-2 sm:gap-6 pb-0">
                <div className="whitespace-nowrap text-center">
                  <div className="text-2xl sm:text-3xl font-bold mb-1">20+</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500">Anos de Experiência</div>
                </div>
                <div className="whitespace-nowrap text-center">
                  <div className="text-2xl sm:text-3xl font-bold mb-1">R$ 30M+</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500">Gerados para Clientes</div>
                </div>
                <div className="whitespace-nowrap text-center col-span-2">
                  <div className="text-2xl sm:text-3xl font-bold mb-1">150+</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500">Empresas Transformadas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="trajetoria" className="py-24 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl mb-4 text-slate-900">A Trajetória da Excelência</h2>
            <p className="text-gray-500 uppercase tracking-widest text-xs font-semibold">Resultados reais construídos em cenários de alta pressão.</p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[16px] md:left-1/2 top-0 bottom-0 transform md:-translate-x-1/2 w-0.5 bg-slate-200"></div>
            
            {/* Timeline Item 1 */}
            <div className="relative flex flex-col md:flex-row gap-4 md:gap-0 mb-16 md:mb-24 items-start md:items-center">
              <div className="absolute left-[16px] md:left-1/2 top-2 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 bg-[#E7AA1B] rounded-full border-[3px] box-content border-white shadow-[0_0_0_4px_rgba(231,170,27,0.2)] z-10"></div>
              
              <div className="md:w-1/2 md:text-right pl-12 md:pl-0 md:pr-12">
                <h3 className="font-serif text-2xl mb-2 text-slate-900">O Início no Varejo</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Começando do chão de loja, Willian entendeu a psicologia do consumidor e a importância vital dos processos operacionais. As bases de uma carreira de resultados.
                </p>
              </div>
              <div className="md:w-1/2 pl-12 md:pr-0 flex items-center">
                <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-3 py-1 rounded uppercase">1999 - 2003</span>
              </div>
            </div>
            
            {/* Timeline Item 2 */}
            <div className="relative flex flex-col md:flex-row gap-4 md:gap-0 mb-16 md:mb-24 items-start md:items-center">
              <div className="absolute left-[16px] md:left-1/2 top-2 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 bg-[#E7AA1B] rounded-full border-[3px] box-content border-white shadow-[0_0_0_4px_rgba(231,170,27,0.2)] z-10"></div>
              
              <div className="md:w-1/2 md:text-right pl-12 md:pl-0 md:pr-12 order-1 md:order-1 flex items-center md:justify-end">
                <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-3 py-1 rounded uppercase">2004 - 2016</span>
              </div>
              <div className="md:w-1/2 pl-12 md:pr-0 order-2 md:order-2">
                <h3 className="font-serif text-2xl mb-2 text-slate-900">Grandes Corporações</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Atuação estratégica em gigantes do mercado como o Grupo Bradesco e outras grandes empresas do ramo de tecnologia, consolidando expertise em processos complexos e escala corporativa.
                </p>
              </div>
            </div>
            
            {/* Timeline Item 3 */}
            <div className="relative flex flex-col md:flex-row gap-4 md:gap-0 mb-16 md:mb-24 items-start md:items-center">
              <div className="absolute left-[16px] md:left-1/2 top-2 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 bg-[#E7AA1B] rounded-full border-[3px] box-content border-white shadow-[0_0_0_4px_rgba(231,170,27,0.2)] z-10"></div>
              
              <div className="md:w-1/2 md:text-right pl-12 md:pl-0 md:pr-12">
                <h3 className="font-serif text-2xl mb-2 text-slate-900">Turnaround Bona Studio</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Assumiu a gestão com faturamento estagnado em <span className="font-bold text-[#051525]">270k</span>. Implementou reestruturação completa de vendas e cultura. Alcançando <span className="font-bold text-[#E7AA1B]">R$ 2 Milhões</span> de faturamento anual.
                </p>
              </div>
              <div className="md:w-1/2 pl-12 md:pr-0 flex items-center">
                <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-3 py-1 rounded uppercase">2017 - 2021</span>
              </div>
            </div>
            
            {/* Timeline Item 4 */}
            <div className="relative flex flex-col md:flex-row gap-4 md:gap-0 mb-16 md:mb-24 items-start md:items-center">
              <div className="absolute left-[16px] md:left-1/2 top-2 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 bg-[#E7AA1B] rounded-full border-[3px] box-content border-white shadow-[0_0_0_4px_rgba(231,170,27,0.2)] z-10"></div>
              
              <div className="md:w-1/2 md:text-right pl-12 md:pl-0 md:pr-12 order-1 md:order-1 flex items-center md:justify-end">
                <span className="bg-[#E7AA1B] text-[#051525] text-[10px] font-bold px-3 py-1 rounded uppercase">2023 - Hoje</span>
              </div>
              <div className="md:w-1/2 pl-12 md:pr-0 order-2 md:order-2">
                <h3 className="font-serif text-2xl mb-2 text-slate-900">Fundação MShift</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Nasce a consultoria dedicada a aplicar metodologia proprietária para negócios B2B que precisam romper o teto de crescimento sem sacrificar a vida pessoal do fundador.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-[#051525] py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-[#E7AA1B] mb-8 flex justify-center">
            <Quote className="h-12 w-12 opacity-50 fill-current" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight text-white italic">
            &quot;Empresa rica, dono pobre é <span className="text-[#E7AA1B] italic">vaidade</span>. Empresa rica, dono rico é <span className="text-[#E7AA1B] italic">prosperidade</span>.&quot;
          </h2>
          <div className="mt-12 flex flex-col items-center">
            <Image 
              alt="Willian Pereira" 
              width={64} 
              height={64} 
              className="w-16 h-16 rounded-full border-2 border-[#E7AA1B] mb-4 object-cover" 
              src="https://drive.google.com/thumbnail?id=1yLKUr3fSKcv6x46wOlq6z028o-_7Pedf&sz=w200" 
            />
            <p className="text-[#E7AA1B] font-bold uppercase tracking-[0.3em] text-xs">Willian Pereira</p>
            <p className="text-gray-500 uppercase text-[10px] mt-1 tracking-widest">Mentor MShift</p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-2 text-slate-900">Os Pilares da Mentoria</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:border-[#E7AA1B]/30 transition-colors group">
              <div className="w-12 h-12 bg-[#E7AA1B]/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-[#E7AA1B] transition-colors">
                <Brain className="h-6 w-6 text-[#E7AA1B] group-hover:text-[#051525]" />
              </div>
              <h3 className="font-bold text-xl mb-4 uppercase tracking-tight text-slate-900">Mentalidade de Gestor</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Sair do operacional para liderar estrategicamente. Decisões baseadas em dados, não em &quot;feeling&quot;.
              </p>
            </div>
            {/* Pillar 2 */}
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:border-[#E7AA1B]/30 transition-colors group">
              <div className="w-12 h-12 bg-[#E7AA1B]/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-[#E7AA1B] transition-colors">
                <TrendingUp className="h-6 w-6 text-[#E7AA1B] group-hover:text-[#051525]" />
              </div>
              <h3 className="font-bold text-xl mb-4 uppercase tracking-tight text-slate-900">Escala Previsível</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Processos comerciais que não dependem do dono para vender. Receita recorrente e margem saudável.
              </p>
            </div>
            {/* Pillar 3 */}
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:border-[#E7AA1B]/30 transition-colors group">
              <div className="w-12 h-12 bg-[#E7AA1B]/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-[#E7AA1B] transition-colors">
                <Target className="h-6 w-6 text-[#E7AA1B] group-hover:text-[#051525]" />
              </div>
              <h3 className="font-bold text-xl mb-4 uppercase tracking-tight text-slate-900">Cultura de Performance</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Atrair e reter talentos que pensam como donos. Alinhamento de incentivos e rituais de gestão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl mb-6 text-slate-900">Pronto para construir o próximo nível?</h2>
          <p className="text-gray-500 mb-12 text-lg">
            Não existe mágica, existe método. Descubra como a metodologia MShift pode ser aplicada no seu negócio nas próximas 4 semanas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/metodo" className="w-full sm:w-auto bg-[#E7AA1B] text-[#051525] px-10 py-5 rounded font-bold text-sm uppercase tracking-widest hover:bg-yellow-500 transition-colors shadow-lg">
              Conhecer a Metodologia MShift
            </Link>
            <Link href="/#contato" className="w-full sm:w-auto border border-gray-300 text-gray-700 px-10 py-5 rounded font-bold text-sm uppercase tracking-widest hover:bg-gray-50 transition-colors">
              Falar com Consultor
            </Link>
          </div>
          <p className="text-gray-400 text-[10px] mt-8 uppercase tracking-[0.2em]">Poucas vagas para mentoria individual neste trimestre.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
