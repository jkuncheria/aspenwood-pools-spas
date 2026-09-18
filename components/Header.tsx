import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown, MapPin } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  // dropdownRefs only holds the desktop dropdowns, so without its own ref every
  // tap inside the mobile panel counts as a click outside.
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Fires on mousedown. Without this, a tap on a mobile submenu link closed the
      // dropdown and unmounted the link before mouseup, so no click event was ever
      // dispatched and the tap did nothing.
      if (mobileMenuRef.current?.contains(event.target as Node)) return;
      const refs = Object.values(dropdownRefs.current) as (HTMLDivElement | null)[];
      const clickedOutside = refs.every(
        (ref: HTMLDivElement | null) => {
          if (!ref) return true;
          return !ref.contains(event.target as Node);
        }
      );
      if (clickedOutside) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [openDropdown]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className={`w-full flex flex-col z-50 sticky top-0 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Top Bar - Premium Style */}
      <div className="bg-[#0F172A] text-xs py-2.5 px-4 hidden md:flex justify-between items-center">
        <div className="flex items-center gap-6 text-gray-300">
          <a href="tel:18335737665" className="flex items-center gap-2 hover:text-[#D4A853] transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>(833) 573-POOL</span>
          </a>
          <a href="mailto:info@aspenwoodpools.com" className="flex items-center gap-2 hover:text-[#D4A853] transition-colors">
            <Mail className="w-3.5 h-3.5" />
            <span>info@aspenwoodpools.com</span>
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Parker, CO</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#D4A853] font-medium">Free Consultation</span>
          <span className="text-gray-500">|</span>
          <Link to="/contact" onClick={scrollToTop} className="text-white hover:text-[#D4A853] transition-colors font-medium">
            Schedule Today →
          </Link>
        </div>
      </div>

      {/* Main Header Content */}
      <div className={`bg-white py-4 px-4 md:px-8 lg:px-16 transition-all duration-300 ${isScrolled ? 'py-2' : ''}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Mobile Contact Buttons (Left side on mobile) */}
          <div className="flex items-center gap-2 md:hidden">
            <a 
              href="tel:18335737665"
              className="p-2.5 text-white rounded-full transition-all shadow-md"
              style={{ background: 'linear-gradient(135deg, #0D5C6D 0%, #094854 100%)' }}
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Link to="/" onClick={scrollToTop} className="flex items-center group">
              <img 
                src="/aspenwood-logo.png" 
                alt="Aspenwood Pools & Spas" 
                className={`transition-all duration-300 ${isScrolled ? 'h-12 md:h-14' : 'h-14 md:h-20'} w-auto object-contain`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div 
                key={item.label}
                className="relative"
                ref={(el) => {
                  if (el && item.subItems && item.subItems.length > 0) {
                    dropdownRefs.current[item.label] = el;
                  }
                }}
              >
                {item.subItems && item.subItems.length > 0 ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#0D5C6D] transition-colors rounded-lg hover:bg-gray-50"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden min-w-[220px] z-50">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block px-5 py-3 text-sm text-gray-700 hover:bg-[#0D5C6D] hover:text-white transition-colors"
                            onClick={() => {
                              setOpenDropdown(null);
                              scrollToTop();
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    to={item.href}
                    className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#0D5C6D] transition-colors rounded-lg hover:bg-gray-50"
                    onClick={scrollToTop}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              to="/contact"
              onClick={scrollToTop}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0D5C6D] border-2 border-[#0D5C6D] rounded-full hover:bg-[#0D5C6D] hover:text-white transition-all duration-300"
            >
              Get Quote
            </Link>
            <a 
              href="tel:18335737665"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #0D5C6D 0%, #094854 100%)' }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              className="p-2 text-gray-700 hover:text-[#0D5C6D] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {/* A fixed max-height with overflow-hidden clipped the menu: with a
          submenu expanded the content is taller than the cap, so the lower
          links were unreachable with no way to scroll. 80vh plus overflowY
          auto lets the panel scroll, matching the RenoLens template. */}
      <div
        ref={mobileMenuRef}
        className="lg:hidden bg-white border-t border-gray-100 transition-all duration-300"
        style={{
          maxHeight: isMenuOpen ? '80vh' : 0,
          opacity: isMenuOpen ? 1 : 0,
          overflowY: isMenuOpen ? 'auto' : 'hidden',
          visibility: isMenuOpen ? 'visible' : 'hidden',
        }}
      >
        <div className="px-4 py-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              {item.subItems && item.subItems.length > 0 ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 font-semibold rounded-lg hover:bg-gray-50"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === item.label && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#0D5C6D] hover:bg-gray-50 rounded-lg"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setOpenDropdown(null);
                            scrollToTop();
                          }}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  to={item.href}
                  className="block px-4 py-3 text-gray-700 font-semibold rounded-lg hover:bg-gray-50"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          
          {/* Mobile CTA */}
          <div className="pt-4 mt-4 border-t border-gray-100 space-y-3">
            <Link 
              to="/contact"
              onClick={() => { setIsMenuOpen(false); scrollToTop(); }}
              className="block w-full text-center px-5 py-3 text-sm font-semibold text-white rounded-full"
              style={{ background: 'linear-gradient(135deg, #0D5C6D 0%, #094854 100%)' }}
            >
              Get Free Quote
            </Link>
            <a 
              href="tel:18335737665"
              className="block w-full text-center px-5 py-3 text-sm font-semibold text-[#0D5C6D] border-2 border-[#0D5C6D] rounded-full"
            >
              Call (833) 573-POOL
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;