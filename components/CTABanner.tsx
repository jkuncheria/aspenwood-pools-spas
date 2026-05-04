import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

const CTABanner: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-16 bg-[#0F172A] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#0D5C6D]/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#D4A853]/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Your Backyard Paradise Awaits</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
          Ready to Transform Your Backyard?
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Whether you need a new pool, spa installation, or expert maintenance, we're here to help. Contact us today for a free consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg group"
            style={{ background: 'linear-gradient(135deg, #D4A853 0%, #B8923F 100%)', color: '#0F172A' }}
          >
            Get Free Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a 
            href="tel:18335737665"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 border border-white/20"
          >
            <Phone className="w-5 h-5" />
            (833) 573-POOL
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
