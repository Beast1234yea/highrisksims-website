
import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, Mail, MapPin, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#120a1f] border-t border-purple-900/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent-gold rounded-lg flex items-center justify-center">
                <HardHat className="text-[#2D1B4E] w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white font-heading">
                HIGH RISK <span className="text-accent-gold">SIMS</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Expert consulting for RTOs looking to modernise their training delivery. Interactive eLearning, 3D simulations, and LMS implementation.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-gold hover:text-[#2D1B4E] transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-accent-gold transition-colors">Audit & Strategy</Link></li>
              <li><Link to="/services" className="hover:text-accent-gold transition-colors">Course Transformation</Link></li>
              <li><Link to="/services" className="hover:text-accent-gold transition-colors">Simulation Development</Link></li>
              <li><Link to="/services" className="hover:text-accent-gold transition-colors">LMS Implementation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-accent-gold transition-colors">About</Link></li>
              <li><Link to="/demos" className="hover:text-accent-gold transition-colors">Simulation Demos</Link></li>
              <li><Link to="/contact" className="hover:text-accent-gold transition-colors">Contact</Link></li>
              <li><Link to="/case-studies" className="hover:text-accent-gold transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-gold shrink-0" />
                <span>Australia<br />100% Remote Delivery Nationwide</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent-gold shrink-0" />
                <a href="mailto:nickbeashel@hotmail.com" className="hover:text-accent-gold transition-colors">
                  nickbeashel@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} High Risk Sims. All Rights Reserved.</p>
          <p>Built by an operator, for operators.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
