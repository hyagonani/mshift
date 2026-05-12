import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background-dark  border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <Link href="/">
            <Image 
              src="https://lh3.googleusercontent.com/d/1e0N5YBz-Ic4Xo0rPZLygOdu9_u2azxQK=w500" 
              alt="MShift Logo" 
              width={144} 
              height={48} 
              className="h-10 w-auto mb-2"
              referrerPolicy="no-referrer"
            />
          </Link>
          <p className="text-slate-500 text-sm mt-2">© 2023 MShift Consultoria. Todos os direitos reservados.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="flex gap-6 text-sm font-bold uppercase tracking-widest">
            <Link className="text-slate-400 hover:text-white transition-colors" href="/">Home</Link>
            <Link className="text-slate-400 hover:text-white transition-colors" href="/politica-de-privacidade">Privacidade</Link>
            <Link className="text-slate-400 hover:text-white transition-colors" href="/#contato">Contato</Link>
            <Link className="text-slate-400 hover:text-white transition-colors" href="/sitemap.xml">Sitemap</Link>
          </div>
          <div className="flex gap-6">
            <Link className="text-slate-400 hover:text-white transition-colors" href="https://www.instagram.com/mshift.oficial/" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </Link>
            <Link className="text-slate-400 hover:text-white transition-colors" href="https://www.linkedin.com/company/mshiftconsultoriaementoria/" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
