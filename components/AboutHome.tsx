import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutHome: React.FC = () => {
  const features = [
    'Custom Pool Design & Installation',
    'Pavers, Patios & Outdoor Kitchens',
    '30+ Years Combined Experience',
    '3D Design Services'
  ];

  return (
    <section className="py-20 md:py-28 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="/Google-Drive-Shared/connerly/5.JPG" 
                alt="Professional Pool & Spa Services - Serving Parker, Castle Rock, and Douglas County" 
                className="w-full h-auto object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4A853]/20 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#0D5C6D]/10 rounded-2xl -z-10"></div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">About Aspenwood</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-3 mb-6 leading-tight">
              Your Trusted Pool & Outdoor Living Experts
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Transform your outdoor space into a stunning oasis. Our team of professionals combines creativity, over 30 years of combined experience, and attention to detail to create beautiful pools, spas, and outdoor living spaces you'll love spending time in.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We specialize in helping clients in Denver, Colorado & surrounding areas increase the value and beauty of their homes. From pools and spas to pavers, retaining walls, pergolas, fire pits, outdoor kitchens, and lighting—we handle it all with expert craftsmanship.
            </p>
            
            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0D5C6D]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-[#0D5C6D]" />
                  </div>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/about"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold py-3.5 px-7 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-md text-center"
                style={{ background: 'linear-gradient(135deg, #0D5C6D 0%, #094854 100%)' }}
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#0D5C6D] text-[#0D5C6D] font-semibold py-3.5 px-7 rounded-full hover:bg-[#0D5C6D] hover:text-white transition-all duration-300 text-center"
              >
                Get Free Quote
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHome;

