// ... existing code ...
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Battle from './pages/Battle';
import Articles from './pages/Articles';
import House from './pages/House';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Additional routes will be added here */}
            <Route path="/battle" element={<Battle />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/house" element={<House />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* <Route path="/memorials" element={<div className="p-8 text-center text-primary-fifth">הנצחות - בקרוב</div>} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 