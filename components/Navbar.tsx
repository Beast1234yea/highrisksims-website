
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HardHat } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Demos', path: '/demos' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#2D1B4E]/90 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-accent-gold rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg shadow-gold/20">
              <HardHat className="text-[#2D1B4E] w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-white font-heading">
                HIGH RISK <span className="text-accent-gold">SIMS</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold -mt-1">RTO Consulting</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent-gold ${
                  isActive(link.path) ? 'text-accent-gold' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-accent-gold text-[#2D1B4E] px-5 py-2 rounded-full font-bold text-sm hover:scale-105 transition-all shadow-lg shadow-gold/10"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#2D1B4E] border-b border-purple-500/20 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 rounded-md text-base font-medium ${
                isActive(link.path)
                  ? 'bg-accent-gold/10 text-accent-gold'
                  : 'text-gray-300 hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-accent-gold text-[#2D1B4E] px-3 py-4 rounded-md font-bold text-lg mt-4"
          >
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
