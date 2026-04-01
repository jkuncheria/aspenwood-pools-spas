import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Star, Users, Award, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Image */}
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-16">
          <img 
            src="/Google-Drive-Shared/steven/s4.JPG" 
            alt="About Us - Professional Pool and Spa Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
            <span className="text-[#D4A853] font-semibold tracking-wider text-sm uppercase">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
              Denver's Premier Pool & Outdoor Living Experts
            </h1>
          </div>
        </div>

        {/* Our Background Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-3 mb-4">Aspenwood Pools & Spas</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Trusted Landscapers & Pool Experts in Highlands Ranch, Parker, Englewood, Littleton, Castle Pines, Castle Rock, Aurora, Centennial & Lone Tree</p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100">
              <p className="text-gray-600 mb-6 leading-relaxed">
                We specialize in helping clients in Denver, Colorado & surrounding areas increase the value and beauty of their homes by creating <span className="font-semibold text-[#0D5C6D]">elegant outdoor living spaces</span>.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Aspenwood is a landscape design & build company serving Highlands Ranch, Parker, Englewood, Littleton, Castle Pines, Castle Rock, Aurora, Centennial & Lone Tree. We specialize in <span className="font-semibold">design and build outdoor living construction</span>.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team brings over <span className="font-semibold text-[#0D5C6D]">30 years of combined experience</span> to every aspect of landscaping, from pavers and concrete to retaining walls, pergolas, and pools. We create stunning outdoor spaces with features like turf, fire pits, outdoor kitchens, and outdoor lighting.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our company pays special attention to the details of every project to ensure the complete satisfaction of each client. Our goal is to enhance the exterior of your home, raise your property value, and <span className="font-semibold text-[#0D5C6D]">beautify your whole neighborhood</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:3035557665" 
                  className="inline-flex items-center justify-center gap-2 text-white font-semibold py-3.5 px-7 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-md"
                  style={{ background: 'linear-gradient(135deg, #0D5C6D 0%, #094854 100%)' }}
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <div className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 font-semibold py-3.5 px-7 rounded-full">
                  <MapPin className="w-5 h-5 text-[#0D5C6D]" />
                  Parker, CO 80134
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Star Reviews Banner */}
        <div className="rounded-2xl p-8 md:p-12 mb-20 text-center text-white bg-gradient-to-r from-[#0D5C6D] to-[#094854]">
          <div className="flex justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-[#D4A853] fill-[#D4A853]" />
            ))}
          </div>
          <p className="text-2xl md:text-3xl font-bold">Hundreds of 5-Star Reviews</p>
          <p className="text-white/70 mt-2">Trusted by customers across the Denver Metro Area</p>
        </div>

        {/* CTA Section */}
        <div className="bg-[#0F172A] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#0D5C6D]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#D4A853]/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-[#D4A853]" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Transform Your Backyard With Aspenwood
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Give us a call and let us help you create the perfect pool or spa for your family to enjoy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:3035557665" 
                className="inline-flex items-center justify-center gap-2 font-semibold py-3.5 px-7 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #D4A853 0%, #B8923F 100%)', color: '#0F172A' }}
              >
                <Phone className="w-5 h-5" />
                Call Now: (303) 555-POOL
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-7 rounded-full transition-all duration-300 border border-white/20"
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

export default About;


