import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blogData';
import { SEO_TOPICS, CITIES, generateSeoSlug } from '@/lib/seoData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mshift.com.br';

  const originalPosts = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const genericSeoPosts = SEO_TOPICS.map((topic) => ({
    url: `${baseUrl}/blog/${generateSeoSlug(topic)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const localizedSeoPosts = SEO_TOPICS.flatMap((topic) => 
    CITIES.map((city) => ({
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

  return [...staticRoutes, ...originalPosts, ...genericSeoPosts, ...localizedSeoPosts];
}
