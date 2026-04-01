import React from 'react';
import Marquee from 'react-fast-marquee';

const ClientBanner: React.FC = () => {
  const brands = [
    { name: 'XPEL', logo: '/brands/xpel-logo.png', alt: 'XPEL Paint Protection Film' },
    { name: 'Ceramic Pro', logo: '/brands/ceramic-pro-logo.png', alt: 'Ceramic Pro Coatings' },
    { name: '3M', logo: '/brands/3m-logo.png', alt: '3M Automotive Films' },
    { name: 'SunTek', logo: '/brands/suntek-logo.png', alt: 'SunTek Window Tint' },
    { name: 'Gtechniq', logo: '/brands/gtechniq-logo.png', alt: 'Gtechniq Ceramic Coatings' },
    { name: 'Avery Dennison', logo: '/brands/avery-logo.png', alt: 'Avery Dennison Vehicle Wraps' },
    { name: 'LLumar', logo: '/brands/llumar-logo.png', alt: 'LLumar Window Films' },
    { name: 'Gyeon', logo: '/brands/gyeon-logo.png', alt: 'Gyeon Quartz Coatings' }
  ];

  return (
    <section className="bg-gray-50 py-10 md:py-12 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="text-center mb-8">
          <h3 className="text-lg md:text-xl text-gray-700 font-bold">
            Trusted Brands We Use
          </h3>
        </div>
        
        <Marquee speed={40} pauseOnHover={true} gradient={false}>
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center h-12 md:h-16 mx-8 md:mx-12"
            >
              <img
                src={brand.logo}
                alt={brand.alt}
                className="max-h-full max-w-[120px] md:max-w-[180px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ClientBanner;

