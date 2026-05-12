import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { NewsletterForm } from '@/components/newsletter-form';
import { ArrowRight } from 'lucide-react';
import { BlogList } from '@/components/blog-list';

import { blogPosts as originalPosts } from '@/lib/blogData';
import { SEO_TOPICS, generateSeoContent } from '@/lib/seoData';
import { getPosts } from '@/lib/supabase';

export const revalidate = 1800; // Revalida a cada 30 minutos

export default async function BlogPage() {
  // Fetch from Supabase
  const supabasePosts = await getPosts() || [];
  
  // Format Supabase posts to match our structure if needed
  const formattedSupabasePosts = supabasePosts.map((post: any) => ({
    ...post,
    // Ensure date is formatted correctly if it's a string from DB
    date: post.date ? new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }) : ''
  }));

  const seoPosts = SEO_TOPICS.map(topic => {
    const data = generateSeoContent(topic, null);
    return {
      id: data.slug,
      title: data.title,
      excerpt: data.excerpt,
      category: data.category,
      author: data.author,
      date: data.date,
      readTime: data.readTime,
      image: data.image,
      slug: data.slug
    };
  });

  const allPosts = [...formattedSupabasePosts, ...originalPosts, ...seoPosts];

  return (
    <div className="min-h-screen bg-background-dark">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">Conhecimento & Estratégia</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
              Blog e <span className="text-secondary italic">Recursos</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Insights práticos, metodologias validadas e ferramentas para ajudar empresários a escalarem seus negócios com clareza e lucro.
            </p>
          </div>
        </section>

        <BlogList initialPosts={allPosts} />

        {/* Resources Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">Ferramentas Práticas</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white">
                Recursos <span className="text-secondary italic">Gratuitos</span>
              </h2>
              <p className="text-slate-300 mt-4">
                Baixe ferramentas, templates e guias práticos para aplicar a metodologia MShift no seu negócio hoje mesmo.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Planilha de Gestão Financeira",
                description: "Controle suas entradas e saídas com clareza.",
                type: "XLSX",
                icon: "📊",
                link: "https://docs.google.com/spreadsheets/d/1QI0OJGKLufuV7ejJ1KtrS5oQPkrvRhOs/edit?gid=1347476871#gid=1347476871"
              },
              {
                title: "Mapeamento de Gargálos Invisíveis",
                description: "Passo a passo para delegar tarefas sem perder o controle.",
                type: "PDF",
                icon: "📋",
                link: "https://drive.google.com/file/d/1dH2yXH_efczO0O6Gl-aP1GoE4nhliwDz/view"
              },
              {
                title: "Estratégia de Alavancagem",
                description: "Estrutura para mapear os processos da sua empresa.",
                type: "DOCX",
                icon: "🗺️",
                link: "https://drive.google.com/file/d/17PWVnsGDAjxcAuQNHc15RQyZKyakuiBW/view"
              },
              {
                title: "Calculadora de Custos de Serviço",
                description: "Descubra a saúde financeira da sua aquisição de clientes.",
                type: "XLSX",
                icon: "🧮",
                link: "https://docs.google.com/spreadsheets/d/1EdwtGkBcLBGRCALIRrNC_8M0w0iMYQ83/edit?gid=1732426675#gid=1732426675"
              }
            ].map((resource, i) => (
              <a href={resource.link} target="_blank" rel="noopener noreferrer" key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-secondary transition-all group block">
                <div className="text-4xl mb-6">{resource.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
                <p className="text-slate-400 text-sm mb-6">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{resource.type}</span>
                  <span className="text-secondary font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                    Baixar <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 rounded-3xl p-8 md:p-16 relative overflow-hidden border border-white/10">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                  Receba insights semanais no seu e-mail
                </h2>
                <p className="text-slate-400 text-lg">
                  Assine nossa newsletter e receba estratégias de gestão, vendas e escala diretamente na sua caixa de entrada. Sem spam, apenas conteúdo de valor.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <NewsletterForm variant="section" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
