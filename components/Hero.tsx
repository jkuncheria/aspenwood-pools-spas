import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Phone, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#0F172A] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/pool-video.mp4" type="video/mp4" />
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-[#0F172A]/30" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 h-full min-h-[90vh] flex items-center">
        <div className="max-w-2xl py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <span className="w-2 h-2 bg-[#D4A853] rounded-full animate-pulse"></span>
            <span className="text-sm text-white/90 font-medium">Serving Parker & Douglas County</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            PARKER'S PREMIER
            <span className="block text-[#D4A853]">POOL COMPANY</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
            Custom pools, relaxing spas, and expert maintenance services. We bring your dream outdoor oasis to life with quality craftsmanship you can trust.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link 
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-[#0F172A] font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: 'linear-gradient(135deg, #D4A853 0%, #B8923F 100%)' }}
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="tel:3035557665"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              (303) 555-POOL
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-[#D4A853] flex items-center justify-center text-xs text-[#0F172A] font-bold border-2 border-[#0F172A]">
                    ★
                  </div>
                ))}
              </div>
              <span className="text-sm">5-Star Reviews</span>
            </div>
            <div className="h-4 w-px bg-white/20 hidden sm:block"></div>
            <div className="text-sm">
              <span className="text-white font-semibold">500+</span> Pools Serviced
            </div>
            <div className="h-4 w-px bg-white/20 hidden sm:block"></div>
            <div className="text-sm">
              <span className="text-white font-semibold">Licensed</span> & Insured
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAFA] to-transparent z-20"></div>
    </section>
  );
};

export default Hero;