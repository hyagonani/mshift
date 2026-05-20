import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blogData';
import { SEO_TOPICS, CITIES, generateSeoSlug } from '@/lib/seoData';
import { fetchSupabase } from '@/lib/supabase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mshift.com.br';

  // Buscar posts do Supabase
  const supabasePostsData = await fetchSupabase('posts?select=slug,created_at&published=eq.true');
  const supabasePosts = (supabasePostsData || []).map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.created_at || new Date()),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const supabaseSlugs = new Set((supabasePostsData || []).map((post: any) => post.slug));

  const originalPosts = blogPosts
    .filter((post) => !supabaseSlugs.has(post.slug))
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

  const genericSeoPosts = SEO_TOPICS
    .filter((topic) => !supabaseSlugs.has(generateSeoSlug(topic)))
    .map((topic) => ({
      url: `${baseUrl}/blog/${generateSeoSlug(topic)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

  const localizedSeoPosts = SEO_TOPICS.flatMap((topic) => 
    CITIES
      .filter((city) => !supabaseSlugs.has(generateSeoSlug(topic, city)))
      .map((city) => ({
        url: `${baseUrl}/blog/${generateSeoSlug(topic, city)}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }))
  );


  const staticRoutes = [
    '',
    '/blog',
    '/mentor',
    '/metodo',
    '/politica-de-privacidade'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.9,
  }));

  return [...staticRoutes, ...supabasePosts, ...originalPosts, ...genericSeoPosts, ...localizedSeoPosts];
}
