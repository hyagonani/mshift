import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white ">
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
              <Shield className="text-secondary w-8 h-8" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900  mb-4">
              Política de <span className="text-secondary italic">Privacidade</span>
            </h1>
            <p className="text-slate-600 ">Última atualização: 15 de Março de 2024</p>
          </div>

          <div className="prose prose-slate  max-w-none">
            <div className="bg-slate-50  p-8 rounded-2xl border border-slate-100  mb-12">
              <h2 className="text-2xl font-bold text-slate-900  mb-4 flex items-center gap-3">
                <Lock className="text-secondary w-6 h-6" />
                Compromisso com sua Segurança
              </h2>
              <p className="text-slate-600  leading-relaxed">
                Na MShift, levamos a sua privacidade a sério. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais quando você interage com nosso site e serviços. Nosso objetivo é ser transparente sobre nossas práticas e garantir que seus dados estejam seguros.
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h3 className="text-xl font-bold text-slate-900  mb-4 flex items-center gap-3">
                  <Eye className="text-secondary w-5 h-5" />
                  1. Coleta de Informações
                </h3>
                <p className="text-slate-600  mb-4">
                  Coletamos informações que você nos fornece diretamente, como quando você preenche um formulário de contato, se inscreve em nossa newsletter ou solicita uma sessão estratégica. Isso pode incluir:
                </p>
                <ul className="list-disc pl-6 text-slate-600  space-y-2">
                  <li>Nome completo</li>
                  <li>E-mail corporativo</li>
                  <li>Número de telefone/WhatsApp</li>
                  <li>Nome da empresa e cargo</li>
                  <li>Informações sobre o faturamento e desafios do negócio</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900  mb-4 flex items-center gap-3">
                  <FileText className="text-secondary w-5 h-5" />
                  2. Uso das Informações
                </h3>
                <p className="text-slate-600  mb-4">
                  As informações coletadas são utilizadas para:
                </p>
                <ul className="list-disc pl-6 text-slate-600  space-y-2">
                  <li>Personalizar sua experiência e responder às suas necessidades individuais</li>
                  <li>Fornecer conteúdo relevante e atualizações sobre nossos serviços</li>
                  <li>Melhorar nosso site e o atendimento ao cliente</li>
                  <li>Processar transações e agendar sessões de consultoria</li>
                  <li>Enviar e-mails periódicos com notícias da empresa e recursos educativos</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900  mb-4">3. Proteção de Dados</h3>
                <p className="text-slate-600 ">
                  Implementamos uma variedade de medidas de segurança para manter a segurança de suas informações pessoais. Usamos criptografia de ponta para proteger dados sensíveis transmitidos on-line e também protegemos suas informações off-line. Apenas funcionários que precisam executar um trabalho específico (por exemplo, faturamento ou atendimento ao cliente) têm acesso a informações pessoalmente identificáveis.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900  mb-4">4. Cookies</h3>
                <p className="text-slate-600 ">
                  Usamos cookies para melhorar o acesso ao nosso site e identificar visitantes recorrentes. Além disso, nossos cookies melhoram a experiência do usuário, rastreando e direcionando seus interesses. No entanto, o uso de um cookie não está de forma alguma ligado a qualquer informação pessoal identificável em nosso site.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900  mb-4">5. Divulgação a Terceiros</h3>
                <p className="text-slate-600 ">
                  Nós não vendemos, trocamos ou transferimos para terceiros suas informações pessoalmente identificáveis. Isso não inclui terceiros confiáveis que nos auxiliam na operação de nosso site ou na condução de nossos negócios, desde que essas partes concordem em manter essas informações confidenciais.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900  mb-4">6. Seus Direitos</h3>
                <p className="text-slate-600 ">
                  Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. Para exercer esses direitos, entre em contato conosco através do e-mail fornecido abaixo.
                </p>
              </section>

              <section className="bg-slate-900 text-white p-8 rounded-2xl mt-16">
                <h3 className="text-xl font-bold mb-4">Contato</h3>
                <p className="text-slate-400 mb-6">
                  Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco:
                </p>
                <div className="space-y-2">
                  <p><span className="text-secondary font-bold">E-mail:</span> contato@mshift.com.br</p>
                  <p><span className="text-secondary font-bold">Endereço:</span> Jaraguá do Sul, SC - Brasil</p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
