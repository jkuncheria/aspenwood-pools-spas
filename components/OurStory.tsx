import React from 'react';
import { BookOpen, Users, Building, Star, Sparkles } from 'lucide-react';

const OurStory: React.FC = () => {
  // Curved arrow SVG component - smooth S-curve
  const CurvedArrowDown = ({ flip = false }: { flip?: boolean }) => (
    <svg 
      className={`w-full max-w-md h-24 md:h-32 mx-auto my-2 ${flip ? 'scale-x-[-1]' : ''}`} 
      viewBox="0 0 200 80" 
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <path 
        d="M30 10 C80 10, 80 70, 130 70 C150 70, 160 70, 170 70" 
        stroke="#0D5C6D" 
        strokeWidth="3" 
        strokeLinecap="round"
        strokeDasharray="10 6"
        fill="none"
      />
      <polygon 
        points="165,65 175,70 165,75" 
        fill="#0D5C6D"
      />
    </svg>
  );

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] px-4 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Decorative background elements */}
        <div className="absolute top-20 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl bg-[#0D5C6D]"></div>
        <div className="absolute bottom-40 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl bg-[#D4A853]"></div>
        
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">About Aspenwood Pools & Spas</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] mt-3 mb-4">
            Our Story
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From humble beginnings to Parker's trusted pool and spa experts – here's how Aspenwood Pools & Spas came to be.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative z-10">
          
          {/* Chapter 1: The Early Days */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-8">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl shadow-lg bg-gradient-to-br from-[#0D5C6D] to-[#094854]">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-bold uppercase tracking-wider text-[#0D5C6D]">Chapter 1</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A]">The Early Days</h3>
                  </div>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Aspenwood Pools & Spas was founded with a simple mission: to bring <span className="font-bold text-gray-900">quality pool and spa services</span> to the Parker and Douglas County community.
                  </p>
                  <p>
                    Our founders saw a need for a pool company that truly cared about its customers – one that would <span className="italic font-medium">treat every backyard like their own</span>.
                  </p>
                  <p className="text-xl font-bold py-2 text-[#0D5C6D]">
                    ✨ And so Aspenwood was born.
                  </p>
                  <p>
                    Starting with just a few maintenance clients, we built our reputation on reliability, quality workmanship, and honest pricing.
                  </p>
                  <p>
                    Word spread quickly, and soon we were installing pools, servicing spas, and helping families create their dream outdoor spaces.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center items-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center shadow-2xl bg-gradient-to-br from-[#0D5C6D] to-[#094854]">
                  <div className="text-center text-white">
                    <p className="text-5xl md:text-6xl font-black">2019</p>
                    <p className="text-sm md:text-base font-medium opacity-90">Where it all started</p>
                  </div>
                </div>
                <Sparkles className="absolute -top-4 -right-4 w-10 h-10 text-yellow-400" />
              </div>
            </div>
          </div>

          {/* Curved Arrow 1 */}
          <div className="hidden md:block">
            <CurvedArrowDown />
          </div>
          <div className="md:hidden flex justify-center my-6">
            <div className="w-1 h-16 rounded-full bg-[#0D5C6D]"></div>
          </div>

          {/* Chapter 2: The Second Phase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-8">
            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center shadow-2xl bg-gradient-to-br from-yellow-400 to-yellow-500">
                  <div className="text-center text-white">
                    <p className="text-5xl md:text-6xl font-black">2021</p>
                    <p className="text-sm md:text-base font-medium opacity-90">Growth explodes</p>
                  </div>
                </div>
                <Users className="absolute -bottom-2 -left-4 w-12 h-12 p-2 rounded-full bg-white shadow-lg text-[#0D5C6D]" />
              </div>
            </div>
            <div>
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-500">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-bold uppercase tracking-wider text-[#D4A853]">Chapter 2</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A]">The Second Phase</h3>
                  </div>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    As our client base grew, so did our capabilities. <span className="font-bold text-gray-900">Aspenwood expanded</span> from maintenance into full pool construction and spa installation.
                  </p>
                  <p>
                    We assembled a team of experienced pool builders, technicians, and service professionals – <span className="italic font-medium">the best in Douglas County</span>.
                  </p>
                  <p>
                    By 2021, we were handling dozens of projects across Parker, Castle Rock, and the surrounding areas.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-4 mt-4">
                    <p className="text-2xl font-black text-gray-900">100+ Happy Customers</p>
                    <p className="text-sm text-gray-500">And growing every season!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Curved Arrow 2 */}
          <div className="hidden md:block">
            <CurvedArrowDown flip />
          </div>
          <div className="md:hidden flex justify-center my-6">
            <div className="w-1 h-16 rounded-full bg-[#0D5C6D]"></div>
          </div>

          {/* Chapter 3: Brick And Mortar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl shadow-lg bg-gradient-to-br from-gray-700 to-gray-900">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-bold uppercase tracking-wider text-gray-500">Chapter 3</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A]">Brick And Mortar</h3>
                  </div>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Today, Aspenwood Pools & Spas is a <span className="font-bold text-gray-900">full-service pool and spa company</span> offering everything from custom installations to stunning outdoor living spaces.
                  </p>
                  <p>
                    We've built lasting relationships with our customers, many of whom have been with us since the beginning – <span className="italic">and that's exactly how we like it</span>.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Parker', 'Castle Rock', 'Lone Tree', 'Highlands Ranch', 'Centennial', 'Aurora'].map((city) => (
                      <span key={city} className="px-3 py-1 rounded-full text-sm font-medium text-white bg-[#0D5C6D]">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center items-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center shadow-2xl bg-gradient-to-br from-gray-700 to-gray-900">
                  <div className="text-center text-white px-4">
                    <Building className="w-12 h-12 mx-auto mb-2 opacity-80" />
                    <p className="text-lg md:text-xl font-bold">1,200 sq ft</p>
                    <p className="text-sm opacity-80">State of the Art</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        
      </div>
    </section>
  );
};

export default OurStory;
