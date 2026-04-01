import React from 'react';
import { Link } from 'react-router-dom';

const MilitaryDiscount: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-16 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-[#0D5C6D] via-[#0A4D5C] to-[#094854] rounded-2xl overflow-hidden shadow-2xl">
          {/* Diagonal separator effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-900/20 to-transparent" style={{
            clipPath: 'polygon(0 0, 70% 0, 100% 100%, 0 100%)'
          }}></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
            {/* Left Section - Text Content */}
            <div className="lg:col-span-2 p-8 md:p-12 text-white">
              <div className="mb-4">
                <span className="text-red-400 font-bold text-sm uppercase tracking-wider">SPECIAL OFFER</span>
                <div className="w-16 h-0.5 bg-red-400 mt-2"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
                10% Off For All Military or Veterans
              </h2>
              
              <p className="text-white/80 text-sm md:text-base mb-6">
                *Must show military card in order to receive credit.
              </p>
              
              <Link
                to="/contact"
                className="inline-block bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                CONTACT US
              </Link>
            </div>

            {/* Right Section - Image */}
            <div className="lg:col-span-1 relative h-64 md:h-80 lg:h-full min-h-[300px]">
              <div className="absolute inset-0 rounded-r-2xl overflow-hidden">
                <img 
                  src="/military.avif" 
                  alt="Military Service" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilitaryDiscount;

