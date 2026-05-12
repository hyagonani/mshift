import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { NewsletterForm } from '@/components/newsletter-form';
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, ChevronRight } from 'lucide-react';
import { notFound } from 'next/navigation';

import { blogPosts } from '@/lib/blogData';
import { parseSlug, generateSeoContent } from '@/lib/seoData';
import { getPostBySlug } from '@/lib/supabase';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post = await getPostBySlug(slug);
  
  if (!post) {
    post = blogPosts.find((p) => p.slug === slug) as any;
  }

  if (!post) {
    const { topic, city } = parseSlug(slug);
    if (topic) post = generateSeoContent(topic, city);
  }
  if (!post) return;
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post = await getPostBySlug(slug);

  if (!post) {
    post = blogPosts.find((p) => p.slug === slug) as any;
  }

  if (!post) {
    const { topic, city } = parseSlug(slug);
    if (topic) {
      post = generateSeoContent(topic, city);
    }
  }

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white ">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <Link href="/blog" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-secondary mb-8 transition-colors">
            <ArrowLeft className="mr-2 w-4 h-4" /> Voltar para o Blog
          </Link>
          
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-slate-900  mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-slate-100 ">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden relative">
                <Image src="https://picsum.photos/seed/willian/100/100" alt={post.author} fill className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 ">{post.author}</p>
                <p className="text-xs text-slate-500">Mentor de Empresários</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} de leitura</span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_300px] gap-16">
          <article className="prose prose-lg  prose-slate max-w-none prose-headings:font-serif prose-headings:font-bold prose-a:text-secondary prose-blockquote:border-secondary prose-blockquote:bg-slate-50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-xl">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            
            <div className="mt-16 pt-8 border-t border-slate-100  flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-slate-900  uppercase tracking-widest">Compartilhar:</span>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-slate-50  flex items-center justify-center text-slate-600  hover:bg-secondary hover:text-white transition-all">
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-slate-50  flex items-center justify-center text-slate-600  hover:bg-secondary hover:text-white transition-all">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-slate-50  flex items-center justify-center text-slate-600  hover:bg-secondary hover:text-white transition-all">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-slate-50  flex items-center justify-center text-slate-600  hover:bg-secondary hover:text-white transition-all">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {["Gestão", "Estratégia", "B2B"].map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-slate-100  text-slate-500 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-12">
            {/* CTA Sidebar */}
            <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-serif font-bold mb-4">Precisa de ajuda para escalar?</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Agende um Mapeamento Estratégico gratuito e descubra os gargalos que estão travando o seu crescimento.
                </p>
                <Link href="/#contato" className="block w-full bg-secondary hover:bg-yellow-600 text-white  font-bold py-3 rounded-lg text-center transition-all text-sm">
                  Quero meu Mapeamento
                </Link>
              </div>
            </div>

            {/* Newsletter Sidebar */}
            <div className="border border-slate-100  rounded-2xl p-8">
              <h3 className="text-lg font-bold text-slate-900  mb-4">Newsletter</h3>
              <p className="text-slate-500 text-sm mb-6">
                Receba os melhores conteúdos diretamente no seu e-mail.
              </p>
              <NewsletterForm variant="sidebar" />
            </div>
          </aside>
        </div>

        {/* Related Posts */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 ">Leia <span className="text-secondary italic">também</span></h2>
            <Link href="/blog" className="text-sm font-bold text-secondary flex items-center hover:translate-x-1 transition-transform">
              Ver todos os artigos <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <article key={post.id} className="group flex flex-col bg-white  rounded-xl border border-slate-100  overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <Link href={`/blog/${post.slug}`} className="relative aspect-[16/9] overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </Link>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900  mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-slate-500 text-xs mb-4">{post.date} • {post.readTime}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-xs font-bold text-secondary uppercase tracking-widest">
                    Ler mais <ChevronRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
