import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Stage1 from './pages/Stage1';
import Stage2 from './pages/Stage2';
import Stage3 from './pages/Stage3';
import Stage4 from './pages/Stage4';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="w-full min-h-screen bg-warm-white font-sans flex flex-col">
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/stage-1" element={<Stage1 />} />
          <Route path="/stage-2" element={<Stage2 />} />
          <Route path="/stage-3" element={<Stage3 />} />
          <Route path="/stage-4" element={<Stage4 />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
