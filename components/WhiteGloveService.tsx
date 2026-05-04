import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';

const WhiteGloveService: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div>
            <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Why Choose Aspenwood</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-3 mb-6 leading-tight">
              Full-Service Pool & Spa Experts
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From design to installation to ongoing maintenance, Aspenwood Pools & Spas is your one-stop shop for all things pool and spa. We handle every aspect of your project with care and expertise.
            </p>
            
            <div className="bg-[#0D5C6D]/5 rounded-xl p-6 mb-6 border border-[#0D5C6D]/10">
              <h3 className="font-bold mb-3 text-lg text-[#0D5C6D]">What Sets Us Apart</h3>
              <p className="text-gray-600 mb-4">
                We're not just contractors – we're pool enthusiasts who take pride in creating beautiful, functional outdoor spaces that families enjoy for years to come.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-[#D4A853]" />
                  <span className="text-gray-600">Licensed and insured professionals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-[#D4A853]" />
                  <span className="text-gray-600">Quality materials and equipment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-[#D4A853]" />
                  <span className="text-gray-600">Transparent pricing with no hidden fees</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:18335737665"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold py-3.5 px-7 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-md"
                style={{ background: 'linear-gradient(135deg, #0D5C6D 0%, #094854 100%)' }}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#0D5C6D] text-[#0D5C6D] font-semibold py-3.5 px-7 rounded-full hover:bg-[#0D5C6D] hover:text-white transition-all duration-300"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/Google-Drive-Shared/connerly/6.JPG" 
              alt="Professional Pool Services - Serving Parker, Castle Rock, and Douglas County" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhiteGloveService;
