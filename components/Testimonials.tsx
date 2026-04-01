import React, { useEffect, useState, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  product?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Parker, CO',
    rating: 5,
    text: 'Aspenwood built our dream pool and it exceeded all expectations! The team was professional, on time, and the quality is outstanding. Our backyard is now our favorite place to be.',
    product: 'Pool Installation'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Castle Rock, CO',
    rating: 5,
    text: 'We\'ve used Aspenwood for weekly pool maintenance for two years now. Always reliable, always thorough. Our pool has never looked better and the water is always crystal clear!',
    product: 'Pool Maintenance'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    location: 'Lone Tree, CO',
    rating: 5,
    text: 'Had our hot tub installed by Aspenwood and the experience was seamless. They handled everything from delivery to setup. Now we enjoy it every evening!',
    product: 'Spa & Hot Tub'
  },
  {
    id: 4,
    name: 'David Thompson',
    location: 'Highlands Ranch, CO',
    rating: 5,
    text: 'Our 15-year-old pool needed serious renovation. Aspenwood resurfaced it and added new tile - it looks brand new! They also upgraded our equipment. Highly recommend!',
    product: 'Pool Renovation'
  },
  {
    id: 5,
    name: 'Jennifer Williams',
    location: 'Parker, CO',
    rating: 5,
    text: 'Quick response when our pool pump failed mid-summer. They diagnosed the issue, ordered parts, and had us back up and running in no time. Great emergency service!',
    product: 'Pool Repair'
  },
  {
    id: 6,
    name: 'Robert Martinez',
    location: 'Castle Rock, CO',
    rating: 5,
    text: 'From the initial design consultation to the final walkthrough, Aspenwood was fantastic. They helped us create a beautiful pool with a waterfall feature. Worth every penny!',
    product: 'Pool Installation'
  }
];

const Testimonials: React.FC = () => {
  const [showFallback, setShowFallback] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  const checkIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check if widget loads successfully
    const checkWidgetLoaded = () => {
      if (widgetRef.current) {
        // Check if widget has content - look for Elfsight widget elements
        const hasContent = 
          widgetRef.current.children.length > 0 || 
          widgetRef.current.querySelector('.elfsight-widget') !== null ||
          widgetRef.current.offsetHeight > 100; // Widget should have substantial height
        
        if (hasContent) {
          // Widget loaded successfully, hide fallback
          setShowFallback(false);
          if (checkIntervalRef.current) {
            clearInterval(checkIntervalRef.current);
          }
          return true;
        }
      }
      return false;
    };

    // Start checking after a delay to allow widget to load
    const initialTimeout = setTimeout(() => {
      // Check periodically for widget content
      checkIntervalRef.current = setInterval(() => {
        checkWidgetLoaded();
      }, 500);

      // If widget doesn't load within 6 seconds, show fallback
      setTimeout(() => {
        if (!checkWidgetLoaded()) {
          setShowFallback(true);
          if (checkIntervalRef.current) {
            clearInterval(checkIntervalRef.current);
          }
        }
      }, 6000);
    }, 1000);

    return () => {
      clearTimeout(initialTimeout);
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }
    };
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating
            ? 'fill-[#D4A853] text-[#D4A853]'
            : 'fill-gray-200 text-gray-200'
        }`}
      />
    ));
  };

  const renderFallbackTestimonials = () => (
    <>
      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#0D5C6D]/20 hover:shadow-lg transition-all duration-300 relative group"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6">
              <Quote className="w-10 h-10 text-[#0D5C6D]/10 group-hover:text-[#D4A853]/20 transition-colors" />
            </div>

            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-4">
              {renderStars(testimonial.rating)}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
              "{testimonial.text}"
            </p>

            {/* Product Badge */}
            {testimonial.product && (
              <div className="mb-4">
                <span className="inline-block bg-[#0D5C6D]/10 text-[#0D5C6D] text-xs font-semibold px-3 py-1.5 rounded-full">
                  {testimonial.product}
                </span>
              </div>
            )}

            {/* Customer Info */}
            <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0D5C6D] to-[#094854] flex items-center justify-center text-white font-semibold text-sm">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-semibold text-[#0F172A]">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Indicators */}
      <div className="mt-16 pt-12 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#0D5C6D] mb-2">500+</div>
            <div className="text-gray-500 text-sm">Pools Serviced</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#0D5C6D] mb-2">1000+</div>
            <div className="text-gray-500 text-sm">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#0D5C6D] mb-2">4.9/5</div>
            <div className="text-gray-500 text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#0D5C6D] mb-2">10+ Yrs</div>
            <div className="text-gray-500 text-sm">Experience</div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] px-4 md:px-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0D5C6D] rounded-full opacity-[0.02] blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D4A853] rounded-full opacity-[0.03] blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-3 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what real customers have to say about their pool and spa experience with Aspenwood.
          </p>
        </div>

        {/* Elfsight Widget Container */}
        <div 
          ref={widgetRef}
          className="elfsight-app-255a6704-0c39-4c14-834c-9813bee83ad6" 
          data-elfsight-app-lazy
          style={{ minHeight: showFallback ? '0' : '400px' }}
        ></div>

        {/* Fallback Testimonials - Show if widget doesn't load */}
        {showFallback && renderFallbackTestimonials()}
      </div>
    </section>
  );
};

export default Testimonials;

