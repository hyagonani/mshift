import type {Metadata} from 'next';
import { Plus_Jakarta_Sans, Playfair_Display, Noto_Serif, Montserrat } from 'next/font/google';
import Script from 'next/script';
import './globals.css'; // Global styles

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const noto = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export const metadata: Metadata = {
  title: 'MShift - Consultoria & Mentoria Estratégica B2B',
  description: 'Mapeamento Estratégico: O caminho para dobrar o faturamento da sua empresa. Consultoria e mentoria especializada para negócios B2B.',
  keywords: ['consultoria empresarial', 'mentoria estratégica', 'crescimento b2b', 'mapeamento estratégico', 'gestão de negócios', 'escalabilidade', 'Willian Pereira', 'MShift'],
  openGraph: {
    title: 'MShift - Consultoria & Mentoria Estratégica B2B',
    description: 'Mapeamento Estratégico: O caminho para dobrar o faturamento da sua empresa. Consultoria e mentoria especializada para negócios B2B.',
    url: 'https://mshift.com.br',
    siteName: 'MShift',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MShift - Consultoria & Mentoria Estratégica B2B',
    description: 'Mapeamento Estratégico: O caminho para dobrar o faturamento da sua empresa.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`scroll-smooth ${jakarta.variable} ${playfair.variable} ${noto.variable} ${montserrat.variable}`}>
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function handleStaleCacheError(e) {
                const msg = e.message || (e.reason && e.reason.message) || '';
                const isChunkError = msg.includes('ChunkLoadError') || msg.includes('Failed to fetch') || msg.includes('fetch failed') || msg.includes('Loading chunk');
                const isCssError = e.target && e.target.tagName === 'LINK' && e.target.rel === 'stylesheet';
                const isJsError = e.target && e.target.tagName === 'SCRIPT';
                
                if (isChunkError || isCssError || isJsError) {
                  if (!sessionStorage.getItem('reloaded_due_to_stale_cache')) {
                    sessionStorage.setItem('reloaded_due_to_stale_cache', 'true');
                    const url = new URL(window.location.href);
                    url.searchParams.set('nocache', Date.now());
                    window.location.replace(url.toString());
                  }
                }
              }
              window.addEventListener('error', handleStaleCacheError, true);
              window.addEventListener('unhandledrejection', handleStaleCacheError, true);
            `
          }}
        />
      </head>
      <body suppressHydrationWarning className={`font-sans antialiased text-slate-800  bg-background-light  selection:bg-secondary selection:text-white`}>
        {/* Google Tag (gtag.js) - Optimized lazy loading */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7R3TXJ34XR"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7R3TXJ34XR');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
