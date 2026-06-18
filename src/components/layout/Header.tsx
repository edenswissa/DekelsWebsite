import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  FileText,
  Building,
  Image,
  Heart,
  Menu,
  X,
  Quote,
  Shield,
  Newspaper,
  BookOpen,
  Mail,
  Instagram,
  Coffee,
} from 'lucide-react';
import { SITE_CONFIG, NAVIGATION_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'home':
      return <Home size={20} />;
    case 'shield':
      return <Shield size={20} />;
    case 'newspaper':
      return <Newspaper size={20} />;
    case 'building':
      return <Building size={20} />;
    case 'image':
      return <Image size={20} />;
    case 'book':
      return <BookOpen size={20} />;
    case 'quote':
      return <Quote size={20} />;
    case 'mail':
      return <Mail size={20} />;
    case 'heart':
      return <Heart size={20} />;
    default:
      return <FileText size={20} />;
  }
};

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const isHome = location.pathname === '/';
  // On the home page the header floats transparently over the full-screen hero
  // until the user scrolls, then it solidifies into the cream bar.
  const transparent = isHome && !scrolled && !isMenuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 flex items-center transition-colors duration-300',
          transparent
            ? 'bg-gradient-to-b from-black/60 via-black/30 to-transparent text-white'
            : 'bg-primary-main/95 backdrop-blur-sm shadow-lg border-b border-primary-second/20'
        )}
        style={{ minHeight: 'var(--header-height)' }}
      >
        {/* Theme toggle sits in the free top-left corner in both layouts */}
        <ThemeToggle
          transparent={transparent}
          className="absolute top-2 left-2 md:top-4 md:left-4 z-10"
        />
        <div className="container mx-auto px-4 py-2 md:py-3">
          {/* Mobile Header */}
          <div className="md:hidden relative">
            <div className="text-center px-10">
              <h1
                className={cn(
                  'text-base font-bold leading-tight transition-colors duration-300',
                  transparent ? 'text-white drop-shadow' : 'text-primary-fifth'
                )}
              >
                {SITE_CONFIG.title}
              </h1>
              {!transparent && (
                <p className="text-xs font-medium text-primary-fourth">
                  "{SITE_CONFIG.subtitle}"
                </p>
              )}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="תפריט"
              className="absolute top-1/2 -translate-y-1/2 right-0 w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <X size={22} className={transparent ? 'text-white' : 'text-primary-fifth'} />
              ) : (
                <Menu size={22} className={transparent ? 'text-white' : 'text-primary-fifth'} />
              )}
            </button>
          </div>

          {/* Desktop Header */}
          <div className="hidden md:block">
            <div className="text-center mb-4">
              <h1
                className={cn(
                  'text-2xl lg:text-3xl font-bold px-2 transition-colors duration-300',
                  transparent ? 'text-white drop-shadow-lg' : 'text-primary-fifth'
                )}
              >
                {SITE_CONFIG.title}
              </h1>
              {!transparent && (
                <p className="text-sm lg:text-base font-medium text-primary-fourth mt-1">
                  "{SITE_CONFIG.subtitle}"
                </p>
              )}
            </div>

            <nav className="flex flex-wrap justify-center items-center gap-x-1 gap-y-1">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      'flex items-center space-x-reverse space-x-2 px-3 py-1.5 rounded-xl transition-all duration-200 text-sm font-medium',
                      isActive
                        ? 'bg-primary-third text-white shadow-md'
                        : transparent
                        ? 'text-white hover:bg-white/15 drop-shadow'
                        : 'text-primary-fourth hover:text-primary-fifth hover:bg-white/50'
                    )}
                  >
                    <span
                      className={
                        isActive ? 'text-white' : transparent ? 'text-white' : 'text-primary-fourth'
                      }
                    >
                      {getIcon(item.icon)}
                    </span>
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-[9999] bg-black/90"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-2/3 h-full bg-white shadow-xl z-[10000]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="סגירת תפריט"
              className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} className="text-black" />
            </button>

            <nav className="pt-16 px-4">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      'flex items-center space-x-reverse space-x-3 px-4 py-3 transition-colors rounded-lg',
                      isActive
                        ? 'bg-primary-third text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    )}
                  >
                    <span className={isActive ? 'text-white' : 'text-gray-500'}>
                      {getIcon(item.icon)}
                    </span>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}

              <div className="border-t border-gray-200 my-4" />

              <div className="px-4 py-2">
                <h3 className="text-sm font-semibold text-gray-500 mb-3">קישורים נוספים</h3>
                <div className="space-y-2">
                  <a
                    href="https://www.instagram.com/remember_dekel_swissa?igsh=MWdpdWoxcGFtMzFpbg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-reverse space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Instagram size={20} className="text-gray-500" />
                    <span className="font-medium text-sm">דף האינסטגרם לזכרו</span>
                  </a>
                  <a
                    href="https://morning-shops.com/LaShaker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-reverse space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Coffee size={20} className="text-gray-500" />
                    <span className="font-medium text-sm">ליקר קפה לזכרו - La Shaker</span>
                  </a>
                  <a
                    href="https://www.matkonzikaron.co.il/kl-hmtkvnym/דקל-סויסה-ז%D7%B4ל"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-reverse space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <BookOpen size={20} className="text-gray-500" />
                    <span className="font-medium text-sm">מתכון עם זיכרון - עוגיות שוקולד צ'יפס</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
