import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Battle from './pages/Battle';
import Articles from './pages/Articles';
import House from './pages/House';
import Notebooks from './pages/Notebooks';
import Speech from './pages/Speech';
import WriteToUs from './pages/WriteToUs';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/battle" element={<Battle />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/house" element={<House />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/notebooks" element={<Notebooks />} />
          <Route path="/speech" element={<Speech />} />
          <Route path="/write-to-us" element={<WriteToUs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
