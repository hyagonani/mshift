"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ChevronRight, Search } from 'lucide-react';

interface Post {
  id: string | number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

const categories = ["Todos", "Gestão", "Estratégia", "Crescimento", "Cultura", "Vendas", "Metodologia"];

export function BlogList({ initialPosts }: { initialPosts: Post[] }) {
  const [visibleCount, setVisibleCount] = useState(9);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredPosts = initialPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  const loadMore = () => {
    setVisibleCount(prev => prev + 9);
  };

  return (
    <>
      {/* Search and Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/10 pb-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-secondary transition-colors placeholder:text-slate-500"
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <Link href={`/blog/${featuredPost.slug}`} className="group block relative overflow-hidden rounded-2xl bg-slate-900 aspect-[21/9]">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
              <span className="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">DESTAQUE</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 group-hover:text-secondary transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-slate-300 text-lg mb-6 line-clamp-2">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{featuredPost.readTime} de leitura</span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.slice(0, visibleCount).map((post) => (
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
          {otherPosts.length > visibleCount && (
            <button 
              onClick={loadMore}
              className="px-8 py-4 border border-white/10 rounded-lg text-slate-300 font-bold hover:bg-white/5 transition-colors"
            >
              Carregar mais artigos
            </button>
          )}
        </div>
      </section>
    </>
  );
}
