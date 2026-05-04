import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-white">
      {/* Main Footer */}
      <div className="py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" onClick={scrollToTop} className="inline-block mb-6">
                <img 
                  src="/aspenwood-logo.png" 
                  alt="Aspenwood Pools & Spas" 
                  className="h-16 w-auto object-contain"
                />
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Premier pool and spa services in Parker, Colorado. Creating backyard paradises since day one.
              </p>
              <div className="space-y-3">
                <a href="tel:18335737665" className="flex items-center gap-3 text-gray-300 hover:text-[#D4A853] transition-colors">
                  <Phone className="w-4 h-4 text-[#D4A853]" />
                  <span>(833) 573-POOL</span>
                </a>
                <a href="mailto:info@aspenwoodpools.com" className="flex items-center gap-3 text-gray-300 hover:text-[#D4A853] transition-colors">
                  <Mail className="w-4 h-4 text-[#D4A853]" />
                  <span>info@aspenwoodpools.com</span>
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-[#D4A853]" />
                  <span>Parker, CO 80134</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[#D4A853] font-semibold mb-6 uppercase text-sm tracking-wider">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/pool-installation" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors">
                    Pool Installation
                  </Link>
                </li>
                <li>
                  <Link to="/spa-hot-tubs" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors">
                    Spa & Hot Tubs
                  </Link>
                </li>
                <li>
                  <Link to="/pool-repair" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors">
                    Pool Repair
                  </Link>
                </li>
                <li>
                  <Link to="/pool-renovation" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors">
                    Pool Renovation
                  </Link>
                </li>
                <li>
                  <Link to="/pool-opening-closing" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors">
                    Pool Opening & Closing
                  </Link>
                </li>
                <li>
                  <Link to="/auto-cover-installation" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors">
                    Auto Cover Installation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[#D4A853] font-semibold mb-6 uppercase text-sm tracking-wider">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors">
                    All Services
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/faq" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/financing" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors">
                    Financing
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-[#D4A853] font-semibold mb-4 uppercase text-sm tracking-wider">Follow Us</h4>
              <div className="flex gap-3">
                <a 
                  href="https://www.instagram.com/aspenwoodlandscape" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4A853] flex items-center justify-center transition-all duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; 2026 Aspenwood Pools & Spas. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy-policy" onClick={scrollToTop} className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" onClick={scrollToTop} className="text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <a 
                href="https://renolens.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#D4A853] transition-colors"
              >
                Built by RenoLens
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;