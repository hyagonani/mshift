"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { NewsletterForm } from '@/components/newsletter-form';
import { ArrowRight, Calendar, Clock, User, ChevronRight, Search } from 'lucide-react';

import { blogPosts as originalPosts } from '@/lib/blogData';
import { SEO_TOPICS, generateSeoContent } from '@/lib/seoData';

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

const blogPosts = [...originalPosts, ...seoPosts];

const categories = ["Todos", "Gestão", "Estratégia", "Crescimento", "Cultura", "Vendas", "Metodologia"];

export default function BlogPage() {
  const [visibleCount, setVisibleCount] = useState(8); // 8 no grid + 1 destaque = 9 total

  const loadMore = () => {
    setVisibleCount(prev => prev + 9);
  };

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

        {/* Search and Categories */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/10 pb-8">
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    category === "Todos"
                      ? "bg-secondary text-white shadow-lg shadow-secondary/20"
                      : "bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-secondary transition-colors placeholder:text-slate-500"
              />
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <Link href={`/blog/${blogPosts[0].slug}`} className="group block relative overflow-hidden rounded-2xl bg-slate-900 aspect-[21/9]">
            <Image
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
              <span className="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">DESTAQUE</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 group-hover:text-secondary transition-colors">
                {blogPosts[0].title}
              </h2>
              <p className="text-slate-300 text-lg mb-6 line-clamp-2">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blogPosts[0].readTime} de leitura</span>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Blog Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1, visibleCount + 1).map((post) => (
              <article key={post.id} className="group flex flex-col bg-white/5 rounded-xl border border-white/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <Link href={`/blog/${post.slug}`} className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-background-dark/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </Link>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-[10px] text-slate-400 uppercase tracking-widest mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-white/10">
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-bold text-secondary hover:translate-x-1 transition-transform">
                      Ler Artigo Completo <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            {visibleCount + 1 < blogPosts.length && (
              <button 
                onClick={loadMore}
                className="px-8 py-4 border border-white/10 rounded-lg text-slate-300 font-bold hover:bg-white/5 transition-colors"
              >
                Carregar mais artigos
              </button>
            )}
          </div>
        </section>

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
