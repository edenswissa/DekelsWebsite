import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FileText, Building, Image, Heart } from 'lucide-react';
import { SITE_CONFIG, NAVIGATION_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const location = useLocation();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <Home size={20} />;
      case 'file-text':
        return <FileText size={20} />;
      case 'building':
        return <Building size={20} />;
      case 'image':
        return <Image size={20} />;
      case 'heart':
        return <Heart size={20} />;
      default:
        return <FileText size={20} />;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-primary-main/95 backdrop-blur-sm shadow-lg border-b border-primary-second/20">
      <div className="container mx-auto px-4 py-3 md:py-6">
        {/* Title Section */}
        <div className="text-center mb-4 md:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary-fifth mb-1 md:mb-2 px-2">
            {SITE_CONFIG.title}
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-primary-fourth font-medium px-2">
            "{SITE_CONFIG.subtitle}"
          </p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center space-x-reverse space-x-4">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center space-x-reverse space-x-2 px-4 py-2 rounded-xl transition-all duration-200 font-medium",
                  isActive
                    ? "bg-primary-third text-white shadow-md"
                    : "text-primary-fourth hover:text-primary-fifth hover:bg-white/50"
                )}
              >
                <span className={cn(
                  isActive ? "text-white" : "text-primary-fourth"
                )}>
                  {getIcon(item.icon)}
                </span>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          {/* Mobile Navigation Bar */}
          <nav className="flex justify-center items-center space-x-reverse space-x-2 overflow-x-auto pb-2">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all duration-200 font-medium text-center min-w-0 flex-shrink-0",
                    isActive
                      ? "bg-primary-third text-white shadow-md"
                      : "text-primary-fourth hover:text-primary-fifth hover:bg-white/50"
                  )}
                >
                  <span className={cn(
                    isActive ? "text-white" : "text-primary-fourth"
                  )}>
                    {getIcon(item.icon)}
                  </span>
                  <span className="text-xs">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 