const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function fetchSupabase(path: string, options: RequestInit = {}) {
  console.log('Environment Check:', {
    URL: SUPABASE_URL ? 'PRESENT' : 'MISSING',
    KEY: SUPABASE_ANON_KEY ? 'PRESENT' : 'MISSING',
  });

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('Supabase credentials missing. Check if your .env or .env.local file exists and is named correctly.');
    return null;
  }

  const url = `${SUPABASE_URL}/rest/v1/${path}`;
  console.log(`Fetching Supabase: ${url}`);
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Supabase error status:', response.status);
      console.error('Supabase error body:', errorText);
      return null;
    }

    const data = await response.json();
    console.log(`Supabase fetch success. Items: ${data?.length || 0}`);
    return data;
  } catch (err) {
    console.error('Fetch to Supabase failed:', err);
    return null;
  }
}

function formatPost(post: any) {
  if (!post) return null;
  
  let cleanContent = post.content;
  
  // Se o conteúdo começar com [ e terminar com ], tenta tratar como array JSON
  if (typeof cleanContent === 'string' && cleanContent.trim().startsWith('[') && cleanContent.trim().endsWith(']')) {
    try {
      const parsed = JSON.parse(cleanContent);
      if (Array.isArray(parsed)) {
        cleanContent = parsed.join('\n');
      }
    } catch (e) {
      console.error('Falha ao parsear conteúdo JSON:', e);
    }
  }

  // Formata a data usando created_at (data real de criação) ou date como fallback
  const displayDate = post.created_at 
    ? new Date(post.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
    : (post.date ? new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }) : '');

  return {
    ...post,
    content: cleanContent,
    date: displayDate
  };
}

export async function getPosts() {
  const posts = await fetchSupabase('posts?select=*&published=eq.true&order=created_at.desc');
  return posts ? posts.map(formatPost) : [];
}

export async function getPostBySlug(slug: string) {
  const posts = await fetchSupabase(`posts?select=*&slug=eq.${slug}&limit=1`);
  return posts && posts.length > 0 ? formatPost(posts[0]) : null;
}
