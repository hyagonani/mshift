const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function fetchSupabase(path: string, options: RequestInit = {}) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('Supabase credentials missing');
    return null;
  }

  const url = `${SUPABASE_URL}/rest/v1/${path}`;
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
    const error = await response.json();
    console.error('Supabase error:', error);
    return null;
  }

  return response.json();
}

export async function getPosts() {
  return fetchSupabase('posts?select=*&published=eq.true&order=date.desc');
}

export async function getPostBySlug(slug: string) {
  const posts = await fetchSupabase(`posts?select=*&slug=eq.${slug}&limit=1`);
  return posts && posts.length > 0 ? posts[0] : null;
}
