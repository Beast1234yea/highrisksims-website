
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Lock } from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import SimulationDemosPage from './pages/SimulationDemosPage';

const ACCESS_PASSWORD = 'highrisksims2026';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return sessionStorage.getItem('site_unlocked') === 'true';
  });
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ACCESS_PASSWORD) {
      setIsUnlocked(true);
      sessionStorage.setItem('site_unlocked', 'true');
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-[#1a102e] text-white flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white/5 rounded-3xl p-8 border border-white/10 text-center space-y-6">
            <div className="w-20 h-20 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto">
              <Lock className="w-10 h-10 text-accent-gold" />
            </div>
            <div>
              <h1 className="text-3xl font-black font-heading mb-2">Private Preview</h1>
              <p className="text-gray-400">This site is currently in private preview. Enter the access code to continue.</p>
            </div>
            <form onSubmit={handleUnlock} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                placeholder="Enter access code"
                className={`w-full bg-white/5 border ${error ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-center text-lg tracking-widest focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all`}
                autoFocus
              />
              {error && (
                <p className="text-red-400 text-sm">Incorrect access code. Please try again.</p>
              )}
              <button
                type="submit"
                className="w-full bg-accent-gold text-[#2D1B4E] py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-gold/20"
              >
                Enter Site
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#1a102e] text-white">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/demos" element={<SimulationDemosPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
