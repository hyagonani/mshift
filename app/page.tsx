import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  BadgeCheck, 
  GraduationCap, 
  MapPin, 
  Clock, 
  Star, 
  EyeOff, 
  TrendingDown, 
  Brain, 
  X 
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { FaqItem } from '@/components/faq-item';
import { Footer } from '@/components/footer';
import { LogoCarousel } from '@/components/logo-carousel';

import { ContactForm } from '@/components/contact-form';

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-background-dark " id="home">
        <div className="absolute inset-0 opacity-10 bg-hero-pattern"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block border border-secondary/50 rounded-full px-4 py-1.5 bg-secondary/10 backdrop-blur-sm">
                <span className="text-secondary text-xs font-bold tracking-widest uppercase">Sistema de Usinagem Empresarial</span>
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold leading-tight text-white">
                <span className="text-gradient-gold">Sistema de Usinagem Empresarial:</span> O caminho para <span className="italic text-gradient-gold">dobrar o faturamento</span> da sua empresa
              </h1>
              <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                Aumente o ticket médio e deixe de ser refém das indicações. Saiba como a Metalux usou nosso sistema para transformar a operação sem precisar trabalhar 12 horas por dia.
              </p>
              
              <div className="relative flex lg:hidden justify-center items-end">
                <Image priority sizes="(max-width: 768px) 100vw, 500px" alt="Willian Pereira, Fundador MShift" width={500} height={600} className="relative z-10 w-full max-w-md object-cover rounded-t-xl drop-shadow-2xl" src="https://drive.google.com/thumbnail?id=1NVFgZNcUNVbQvT9h1X4MSaBOB4fXTmdt&sz=w1000" referrerPolicy="no-referrer" />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link className="flex items-center justify-center bg-gradient-gold hover:brightness-110 text-background-dark font-bold text-lg py-4 px-8 rounded-lg shadow-xl shadow-secondary/20 transition-all duration-300 transform hover:-translate-y-1" href="/grupo">
                  Participar da Aula Gratuita
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <div className="flex items-center gap-4 px-4 py-2 border-l border-slate-700">
                  <div className="flex -space-x-3">
                    <Image alt="Client 1" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwVl2F0zP5nfcz_FxUPKuDKccuxDgNUbsAPCZpdjSpdkMMW6CwgY3IVh5VRtI7-qiwHkqSVpeI6UE5MZR6zATsfF90lIOj_McVwC9Ogp0RE-NQ5uG7KYu8cYm-73DkfWyhs_THxtYdbCNMP_r6KRuCM5M9Uvzk4vwRWNFSLEB8HVQeoan5U6XM9B3P05KJ-KlIvaQsNP45BCAVc6fHM-NayvjvEAZX-gm3kIE5AuyDZ3lzmAtLdQVYyKVFiom7nvghxCoTLlvgg7GR" referrerPolicy="no-referrer" />
                    <Image alt="Client 2" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHEJPMBGRGqzyTl0J-nT5n8NuYonQWeK9TFaVqeaj8LZxY4bI0YdFc2vupAoyH1EWKtYtbLdPzsQTzRGHWAOHI9TQ9B3d-kvZdxKsMWNLiWC22dJiCFF4XPoGrsF81oIhYw3Fvy3Iize0HWfDL-RtrDQzjwwU-MfZhxjk_11TStoNnz5tT15zSzoL4k9YkTE5YC4dSCSVCr7M7ilAhhdoey9H3Ev6KGIzNwz5f70dmYiYyDNyc78T6x2b7djrPa0Eyy6qt618Fr0UH" referrerPolicy="no-referrer" />
                    <Image alt="Client 3" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg_YrPH0rBEtppcOZxGyEZokfw00oNLyhcpZWOlBTSB5vP5B77RNWKifxwlATjL1h9_tEgCXN_QbzDFtrg0_7x6EkoKxVgvh7rZ54p4o4lnknMNyHLGK0TzyER3TTDJDayLj-rS4_UfxgCGlj2ISHO_m_dEJx0GuEPSWlisSq2k-Vhm-OwSJ98aB7oS1SrIQTnLQEwA5E8P31QW4wEziFsK8kOjxQViEcD6EOgIXGFq3aaOtdSV0e8eRb-ycQMEsS6y4QEpER6QshI" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm">+150 Empresas</span>
                    <span className="text-slate-400 text-xs">Transformadas</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative lg:h-[600px] hidden lg:flex justify-end items-end">
              <Image priority sizes="(min-width: 1024px) 500px, 100vw" alt="Willian Pereira, Fundador MShift" width={500} height={600} className="relative z-10 w-full max-w-lg object-cover rounded-t-xl drop-shadow-2xl" src="https://drive.google.com/thumbnail?id=1NVFgZNcUNVbQvT9h1X4MSaBOB4fXTmdt&sz=w1000" referrerPolicy="no-referrer" />
              <div className="absolute top-1/3 -left-4 z-30 bg-card-dark border border-slate-700 p-4 rounded-xl shadow-2xl max-w-[180px] hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-2 mb-2">
                  <BadgeCheck className="text-secondary w-5 h-5" />
                  <span className="text-white font-bold text-sm">Metodologia</span>
                </div>
                <p className="text-slate-400 text-xs">Validada em mais de 10 nichos diferentes de mercado.</p>
              </div>
            </div>
          </div>
        </div>
        <LogoCarousel />
      </section>

      <div className="bg-surface-dark border-y border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-800/50">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:pl-4 pt-4 md:pt-0">
              <MapPin className="text-secondary w-8 h-8" />
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wide">Formato</p>
                <p className="text-white font-medium">Online e Individual</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:pl-4 pt-4 md:pt-0">
              <Clock className="text-secondary w-8 h-8" />
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wide">Duração</p>
                <p className="text-white font-medium">6 meses intensivos</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:pl-4 pt-4 md:pt-0">
              <Star className="text-secondary w-8 h-8" />
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wide">NPS Médio</p>
                <p className="text-white font-medium">94 de 100</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-background-light  text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-background-dark font-serif text-3xl md:text-4xl font-bold mb-4">
              A Realidade do Dono de Usinagem
            </h2>
            <p className="text-slate-600 text-lg">
              O dono trabalhava 12h por dia e acordava às 5h da manhã para resolver problemas que deveriam ser do time. Essa era a situação quando a Metalux nos procurou:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Clock className="text-red-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Preso no Chão de Fábrica</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <X className="text-red-500 w-4 h-4 mt-1" />
                  <span className="text-slate-600 text-sm">Sem previsibilidade ou processos</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="text-red-500 w-4 h-4 mt-1" />
                  <span className="text-slate-600 text-sm">Sem saber como sair dessa situação</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <TrendingDown className="text-red-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tentativas Frustradas</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <X className="text-red-500 w-4 h-4 mt-1" />
                  <span className="text-slate-600 text-sm">Tentou delegar, mas os problemas voltaram mais fortes</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="text-red-500 w-4 h-4 mt-1" />
                  <span className="text-slate-600 text-sm">Dono precisou reassumir a operação</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <BadgeCheck className="text-green-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">O Que Não Mudamos</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="text-green-500 w-4 h-4 mt-1" />
                  <span className="text-slate-600 text-sm">Não paramos a produção</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="text-green-500 w-4 h-4 mt-1" />
                  <span className="text-slate-600 text-sm">Apenas aplicamos 3 etapas simples</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background-dark  relative overflow-hidden" id="solucao">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">O Método</span>
            <h2 className="text-white font-serif text-3xl md:text-5xl font-bold mt-2">
              Os 3 Pilares do Sistema de Usinagem Empresarial
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card-dark p-8 rounded-none border border-slate-700 hover:border-secondary transition-all duration-300 group relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <div className="mb-6">
                <span className="text-5xl font-serif text-slate-700 group-hover:text-secondary/20 transition-colors">01</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-secondary transition-colors">Plano de Usinagem Empresarial</h3>
              <p className="text-slate-400 leading-relaxed">
                Entendimento claro da operação. Você deixa de apagar incêndios e assume o controle real da sua empresa, parando de microgerenciar.
              </p>
            </div>
            <div className="bg-card-dark p-8 rounded-none border border-secondary shadow-[0_0_30px_rgba(231,170,27,0.1)] group relative transform md:-translate-y-4">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-gold opacity-10 rounded-bl-full"></div>
              <div className="mb-6">
                <span className="text-5xl font-serif text-secondary opacity-40">02</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-secondary">Operação Sob Controle</h3>
              <p className="text-slate-300 leading-relaxed">
                O que existia na sua cabeça vira processo documentado. A empresa não depende mais de você para decisões básicas e o time ganha poder no operacional.
              </p>
              <div className="mt-6">
                <span className="inline-flex items-center text-xs font-bold text-background-dark bg-secondary px-3 py-1 rounded-sm">
                  PASSO CRUCIAL
                </span>
              </div>
            </div>
            <div className="bg-card-dark p-8 rounded-none border border-slate-700 hover:border-secondary transition-all duration-300 group relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <div className="mb-6">
                <span className="text-5xl font-serif text-slate-700 group-hover:text-secondary/20 transition-colors">03</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-secondary transition-colors">Produção de Alta Margem</h3>
              <p className="text-slate-400 leading-relaxed">
                Reduza a dependência de indicações. Ganhe poder de negociação para clientes grandes e cresça com mais lucro usando um comercial objetivo.
              </p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Link className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 border border-secondary hover:bg-secondary/10 rounded-lg" href="/grupo">
              Entrar no Grupo de WhatsApp da Aula
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background-dark" id="mentor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary translate-x-4 translate-y-4 rounded-lg"></div>
                <Image sizes="(min-width: 768px) 500px, 100vw" alt="Willian Pereira Portrait" width={500} height={625} className="relative rounded-lg shadow-xl w-full object-cover aspect-[4/5] filter" src="https://drive.google.com/thumbnail?id=1uvOywOq17-BbCbORdeqNiKyDvogL7-l7&sz=w1000" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="md:col-span-7">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">O Mentor</span>
              <h2 className="text-white font-serif text-4xl font-bold mb-6">
                Willian Pereira
              </h2>
              <div className="text-lg text-slate-300 mb-6 leading-relaxed">
                <p>Fundador da <b>MShift</b>, Willian combina a experiência de quem já geriu <b>orçamentos milionários</b> como executivo C-Level com a agilidade de quem construiu negócios do zero.</p>
                <p className="mt-4">Criador da <b>MShift</b>, ele já mentorou dezenas de empresários a saírem do caos operacional para alcançarem <b>previsibilidade de vendas e lucro</b>, transformando expertises técnicas em empresas escaláveis e autônomas.</p>
              </div>
              
              <div className="relative md:hidden mb-10 mt-8">
                <div className="absolute inset-0 bg-secondary translate-x-4 translate-y-4 rounded-lg"></div>
                <Image sizes="(max-width: 768px) 100vw, 500px" alt="Willian Pereira Portrait" width={500} height={625} className="relative rounded-lg shadow-xl w-full object-cover aspect-[4/5] filter" src="https://drive.google.com/thumbnail?id=1uvOywOq17-BbCbORdeqNiKyDvogL7-l7&sz=w1000" referrerPolicy="no-referrer" />
              </div>

              <div className="grid grid-cols-2 sm:flex sm:flex-row justify-between items-center md:items-start gap-y-5 gap-x-2 sm:gap-4 md:gap-6 border-t border-white/10 pt-8 text-center md:text-left">
                <div className="whitespace-nowrap">
                  <span className="block text-3xl font-bold text-white mb-1">20+</span>
                  <span className="text-sm text-slate-400">Anos de Experiência</span>
                </div>
                <div className="whitespace-nowrap">
                  <span className="block text-3xl font-bold text-white mb-1">R$ 30M+</span>
                  <span className="text-sm text-slate-400">Gerados para Clientes</span>
                </div>
                <div className="whitespace-nowrap col-span-2 flex flex-col items-center md:items-start">
                  <span className="block text-3xl font-bold text-white mb-1">150+</span>
                  <span className="text-sm text-slate-400">Empresas Transformadas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-24 relative bg-background-dark  overflow-hidden" id="contato">
        <div className="absolute inset-0 bg-secondary/5"></div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Sua empresa no próximo nível.
            <br />
            <span className="text-gradient-gold">Comece agora.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Aplique para uma sessão estratégica gratuita. Vamos analisar o seu momento atual e desenhar o próximo passo do seu crescimento.
          </p>
          <ContactForm />
        </div>
      </section>

      <section className="py-24 bg-white" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-dark-blue font-serif text-3xl md:text-4xl font-bold mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-slate-600 font-montserrat">Tire suas principais dúvidas sobre como o Sistema de Usinagem Empresarial pode transformar seu negócio.</p>
          </div>
          <div className="space-y-4">
            <FaqItem 
              question="O que é o Sistema de Usinagem Empresarial?" 
              answer="É um mapeamento 360º da sua operação atual para identificar gargalos, definir processos claros e implementar uma produção de alta margem." 
            />
            <FaqItem 
              question="Para quem é indicado?" 
              answer="Donos de empresas de usinagem que querem sair do operacional (chão de fábrica), faturar mais com alto ticket e parar de depender só de indicações." 
            />
            <FaqItem 
              question="Quanto tempo dura a implementação?" 
              answer="A estruturação dura cerca de 6 meses (180 dias), com resultados e melhorias visíveis logo nos primeiros passos de controle da operação." 
            />
            <FaqItem 
              question="Preciso parar minha produção para aplicar?" 
              answer="De forma alguma! O método é focado em ajustes paralelos que não interrompem o fluxo do chão de fábrica." 
            />
            <FaqItem 
              question="E se eu não gostar do resultado?" 
              answer="Temos garantia incondicional e o acompanhamento necessário para garantir que o seu operacional não pare." 
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
