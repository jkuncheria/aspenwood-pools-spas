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
                <a href="tel:3035557665" className="flex items-center gap-3 text-gray-300 hover:text-[#D4A853] transition-colors">
                  <Phone className="w-4 h-4 text-[#D4A853]" />
                  <span>(303) 555-POOL</span>
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

            {/* Hours & Social */}
            <div>
              <h4 className="text-[#D4A853] font-semibold mb-6 uppercase text-sm tracking-wider">Business Hours</h4>
              <div className="space-y-2 text-gray-400 mb-8">
                <div className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span className="text-white">8 AM – 5 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white">9 AM – 3 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
              
              <h4 className="text-[#D4A853] font-semibold mb-4 uppercase text-sm tracking-wider">Follow Us</h4>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/aspenwoodpools" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4A853] flex items-center justify-center transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.yelp.com/biz/aspenwood-pools-spas-parker" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4A853] flex items-center justify-center transition-all duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M42.9 240.32l99.62 48.61c19.2 9.4 16.2 37.51-4.5 42.71L30.5 358.45a22.79 22.79 0 0 1-28.21-19.6 197.16 197.16 0 0 1 9-85.32 22.8 22.8 0 0 1 31.61-13.21zm44 239.25a199.45 199.45 0 0 0 79.42 32.11A22.78 22.78 0 0 0 192.94 490l3.9-110.82c.7-21.3-25.5-31.91-39.81-16.1l-74.21 82.4a22.82 22.82 0 0 0 4.09 34.09zm145.34-109.92l58.81 94a22.93 22.93 0 0 0 34 5.5 198.36 198.36 0 0 0 52.71-67.61A22.8 22.8 0 0 0 368.1 369l-105.42-26.31c-20.61-5.1-38.21 20.2-25.44 37.96zm148.33-132.23a197.44 197.44 0 0 0-50.41-69.31 22.77 22.77 0 0 0-34 4.4l-62 91.92c-11.9 17.7 4.7 40.61 25.2 34.71L366 268.63a22.82 22.82 0 0 0 14.61-31.21zM62.11 30.18a22.86 22.86 0 0 0-9.9 32l104.12 180.44c11.7 20.2 42.61 11.9 42.61-11.4V22.88a22.67 22.67 0 0 0-24.5-22.8 320.37 320.37 0 0 0-112.33 30.1z"/>
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