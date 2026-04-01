import React from 'react';

const InstagramFeed: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Follow Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-3 mb-4">
            @AspenwoodPools on Instagram
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] mx-auto rounded-full mb-6"></div>
        </div>

        {/* Elfsight Instagram Feed Widget */}
        <div 
          className="elfsight-app-f4503188-f4a6-4da6-aa56-46ae86cc45a1" 
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
};

export default InstagramFeed;
