import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, ArrowRight, Phone, Sparkles, RefreshCw, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';
import RelatedServices from '../components/RelatedServices';

const PoolRenovation: React.FC = () => {
  const benefits = [
    { icon: <RefreshCw className="w-6 h-6 text-[#D4A853]" />, title: 'New Life for Old Pools', description: 'Transform your dated pool into a modern backyard centerpiece.' },
    { icon: <TrendingUp className="w-6 h-6 text-[#D4A853]" />, title: 'Increase Home Value', description: 'A renovated pool significantly boosts your property\'s appeal and value.' },
    { icon: <Sparkles className="w-6 h-6 text-[#D4A853]" />, title: 'Modern Features', description: 'Add LED lighting, water features, and smart automation to your existing pool.' },
    { icon: <Shield className="w-6 h-6 text-[#D4A853]" />, title: 'Energy Efficiency', description: 'Upgrade to variable speed pumps and efficient heaters to save on operating costs.' }
  ];

  const surfaceOptions = ['Plaster refinishing', 'Pebble finishes (PebbleTec)', 'Quartz aggregate finishes', 'Glass bead finishes', 'Tile replacement', 'Coping replacement', 'Waterline tile upgrade', 'Color changes'];
  const featureUpgrades = ['LED color lighting', 'Waterfalls and spillovers', 'Deck jets and bubblers', 'Fire and water features', 'Automatic pool covers', 'Salt water conversion', 'Smart pool automation', 'Variable speed pumps'];

  return (
    <>
      <SEO
        title="Pool Renovation Parker CO | Pool Resurfacing & Remodeling | Aspenwood Pools & Spas"
        description="Professional pool renovation and remodeling in Parker, Colorado. Pool resurfacing, replastering, equipment upgrades, and feature additions."
        keywords="pool renovation Parker CO, pool resurfacing Colorado, pool remodeling Denver, pool replastering Douglas County"
        canonical="https://aspenwoodpools.com/pool-renovation"
      />
      <section className="py-20 md:py-28 bg-[#FAFAFA] px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Pool Renovation</span>
                <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-3 mb-6">Pool Renovation & Remodeling</h1>
                <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] rounded-full mb-6"></div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Is your pool looking tired and outdated? Aspenwood Pools & Spas specializes in pool renovations that breathe new life into aging pools. From simple resurfacing to complete remodels with new features, we can transform your pool.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 text-white font-semibold py-3.5 px-7 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-md group" style={{ background: 'linear-gradient(135deg, #0D5C6D 0%, #094854 100%)' }}>
                    Get Free Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href="tel:18335737665" className="inline-flex items-center justify-center gap-2 border-2 border-[#0D5C6D] text-[#0D5C6D] font-semibold py-3.5 px-7 rounded-full hover:bg-[#0D5C6D] hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5" /> Call Us
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden h-[500px] md:h-[600px] rounded-2xl shadow-2xl">
                  <img src="/Google-Drive-Shared/steven/s3.JPG" alt="Pool Renovation in Parker Colorado" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Why Renovate</span>
              <h2 className="text-3xl font-bold text-[#0F172A] mt-3 mb-4">Why Renovate Your Pool?</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                  <div className="w-14 h-14 bg-[#0D5C6D]/10 rounded-xl inline-flex items-center justify-center mb-6 group-hover:bg-[#0D5C6D]/20 transition-colors">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
            <div className="bg-gradient-to-br from-[#0D5C6D] to-[#094854] rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-white mb-6">Surface Options</h3>
              <div className="space-y-4">
                {surfaceOptions.map((option, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#D4A853] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{option}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#0D5C6D] to-[#094854] rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-white mb-6">Feature Upgrades</h3>
              <div className="space-y-4">
                {featureUpgrades.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#D4A853] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#0F172A] rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#0D5C6D]/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#D4A853]/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Pool?</h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Contact us today for a free consultation and see what's possible for your pool.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 font-semibold py-3.5 px-7 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg group" style={{ background: 'linear-gradient(135deg, #D4A853 0%, #B8923F 100%)', color: '#0F172A' }}>
                  Get Free Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:18335737665" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-7 rounded-full transition-all duration-300 border border-white/20">
                  <Phone className="w-5 h-5" /> Call Us
                </a>
              </div>
            </div>
          </div>
          <RelatedServices currentService="Pool Renovation" />
        </div>
      </section>
    </>
  );
};

export default PoolRenovation;
