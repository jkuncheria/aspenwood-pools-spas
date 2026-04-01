import React from 'react';
import { DIFFERENCE_FEATURES } from '../constants';

const Difference: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#0D5C6D] to-[#094854] px-4 md:px-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A853]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">The Aspenwood Difference</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] mx-auto rounded-full mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Quality materials, experienced technicians, and exceptional results on every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENCE_FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col items-center text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-[#D4A853]/30 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#D4A853]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#D4A853]/30 transition-colors">
                <div className="text-[#D4A853]">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Difference;