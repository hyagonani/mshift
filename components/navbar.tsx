'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Star, 
  HelpCircle, 
  BookOpen, 
  Layout, 
  Shield, 
  ArrowRight,
  Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/#home', icon: Home },
    { name: 'O Método', href: '/metodo', icon: Layout },
    { name: 'Processo', href: '/processos', icon: Settings },
    { name: 'O Mentor', href: '/mentor', icon: User },
    { name: 'Resultados', href: '/resultados', icon: Star },
    { name: 'Blog e Recursos', href: '/blog', icon: BookOpen },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-background-dark/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="https://lh3.googleusercontent.com/d/1e0N5YBz-Ic4Xo0rPZLygOdu9_u2azxQK=w500" 
                alt="MShift Logo" 
                width={180} 
                height={60} 
                className="h-12 w-auto"
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                className="text-sm font-medium hover:text-secondary transition-colors text-slate-300" 
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
            <Link className="bg-secondary hover:bg-yellow-600 text-white  font-bold py-2.5 px-6 rounded-full transition-all duration-300 shadow-lg shadow-secondary/20" href="/#contato">
              Agendar Mapeamento
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-secondary transition-colors p-2 rounded-lg bg-white/5"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-background-dark border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-8 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 px-4 py-4 text-base font-medium text-slate-300 hover:text-secondary hover:bg-white/5 rounded-xl transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                      <link.icon className="h-5 w-5 text-secondary" />
                    </div>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6 px-4"
              >
                <Link 
                  href="/#contato"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full bg-secondary hover:bg-yellow-600 text-white  font-bold py-4 rounded-xl transition-all shadow-xl shadow-secondary/20"
                >
                  Agendar Mapeamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

