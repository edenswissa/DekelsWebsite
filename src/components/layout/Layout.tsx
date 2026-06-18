import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // The home page opens with a full-bleed hero that sits behind the transparent
  // header, so it must NOT be pushed down by the header-clearance padding.
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main
        className="flex-1"
        style={{ paddingTop: isHome ? 0 : 'var(--header-height)' }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
