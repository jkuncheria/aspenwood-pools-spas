import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../constants';

const Categories: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      const scrollTo = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="our-services" className="py-20 md:py-28 bg-[#FAFAFA] px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-3 mb-4">Our Services</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            From custom pool installations to weekly maintenance, we provide comprehensive pool and spa services tailored to your needs.
          </p>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:bg-[#0D5C6D] hover:text-white text-[#0D5C6D] transition-all duration-300 hidden md:flex items-center justify-center"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 px-2" style={{ minWidth: 'max-content' }}>
              {CATEGORIES.map((cat) => {
                const linkMap: Record<string, string> = {
                  'pool-installation': '/pool-installation',
                  'spa-hot-tubs': '/spa-hot-tubs',
                  'pool-maintenance': '/pool-maintenance',
                  'pool-repair': '/pool-repair',
                  'pool-renovation': '/pool-renovation',
                  'pool-opening-closing': '/pool-opening-closing',
                  'water-testing': '/water-testing'
                };

                const content = (
                  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 w-80 md:w-[340px] flex-shrink-0">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={cat.image} 
                        alt={cat.name} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent"></div>
                      
                      {/* Title on Image */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {cat.name}
                        </h3>
                        <div className="flex items-center gap-2 text-[#D4A853] font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                );

                if (linkMap[cat.id]) {
                  return (
                    <Link 
                      key={cat.id} 
                      to={linkMap[cat.id]} 
                      className="block transform hover:-translate-y-2 transition-transform duration-300"
                    >
                      {content}
                    </Link>
                  );
                }

                return (
                  <div key={cat.id} className="transform hover:-translate-y-2 transition-transform duration-300">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:bg-[#0D5C6D] hover:text-white text-[#0D5C6D] transition-all duration-300 hidden md:flex items-center justify-center"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
        
        {/* View All Button */}
        <div className="mt-14 text-center">
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#0D5C6D] text-[#0D5C6D] font-semibold rounded-full hover:bg-[#0D5C6D] hover:text-white transition-all duration-300"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;