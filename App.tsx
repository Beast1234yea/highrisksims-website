
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
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

const FULL_ACCESS_PASSWORD = 'highrisksims2026';
const DEMOS_ONLY_PASSWORD = 'demos2026';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

type AccessLevel = 'none' | 'demos' | 'full';

const App: React.FC = () => {
  const [accessLevel, setAccessLevel] = useState<AccessLevel>(() => {
    const stored = sessionStorage.getItem('access_level');
    if (stored === 'full' || stored === 'demos') return stored;
    return 'none';
  });
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === FULL_ACCESS_PASSWORD) {
      setAccessLevel('full');
      sessionStorage.setItem('access_level', 'full');
      setError(false);
    } else if (password === DEMOS_ONLY_PASSWORD) {
      setAccessLevel('demos');
      sessionStorage.setItem('access_level', 'demos');
      setError(false);
    } else {
      setError(true);
    }
  };

  if (accessLevel === 'none') {
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

  // Demos-only access: only show demos page, redirect everything else
  if (accessLevel === 'demos') {
    return (
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#1a102e] text-white">
          <div className="bg-white/5 border-b border-white/10 py-4 px-6 flex items-center justify-between">
            <span className="text-xl font-bold font-heading text-accent-gold">High Risk Sims</span>
            <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full">Demo Access</span>
          </div>
          <main className="flex-grow">
            <Routes>
              <Route path="/demos" element={<SimulationDemosPage />} />
              <Route path="*" element={<Navigate to="/demos" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    );
  }

  // Full access: show everything
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
