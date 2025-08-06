// ... existing code ...
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Battle from './pages/Battle';
import Articles from './pages/Articles';
import House from './pages/House';
import Notebooks from './pages/Notebooks';
import { NAVIGATION_ITEMS } from '@/lib/constants';
import { Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, FileText, Building, Image, Heart, X } from 'lucide-react';
import { cn } from '@/lib/utils';

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <HomeIcon size={20} />;
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
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Additional routes will be added here */}
          <Route path="/battle" element={<Battle />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/house" element={<House />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/notebooks" element={<Notebooks />} />
          {/* <Route path="/memorials" element={<div className="p-8 text-center text-primary-fifth">הנצחות - בקרוב</div>} /> */}
        </Routes>
      </main>

      {/* Mobile Menu Overlay - Outside Header */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[9999] bg-black/90" onClick={() => setIsMenuOpen(false)}>
          <div 
            className="absolute top-0 right-0 w-2/3 h-full bg-white shadow-xl z-[10000]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} className="text-black" />
            </button>
            
            {/* Navigation */}
            <nav className="pt-16 px-4">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "flex items-center space-x-reverse space-x-3 px-4 py-3 transition-colors rounded-lg",
                      isActive
                        ? "bg-primary-third text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <span className={cn(
                      isActive ? "text-white" : "text-gray-500"
                    )}>
                      {getIcon(item.icon)}
                    </span>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App; 