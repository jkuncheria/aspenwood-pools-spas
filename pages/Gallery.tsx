import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  // Gallery images - Pool projects
  const galleryImages = [
    { id: 1, src: '/Google-Drive-Shared/steven/s3.JPG', title: 'Custom Pool Installation' },
    { id: 2, src: '/Google-Drive-Shared/connerly/3.JPG', title: 'Luxury Pool Design' },
    { id: 3, src: '/Google-Drive-Shared/steven/s4.JPG', title: 'Night Pool Lighting' },
    { id: 4, src: '/Google-Drive-Shared/raena/r1.JPG', title: 'Aerial Pool View' },
    { id: 5, src: '/Google-Drive-Shared/connerly/4.JPG', title: 'Pool & Patio' },
    { id: 6, src: '/Google-Drive-Shared/steven/s5.JPG', title: 'Pool Renovation' },
    { id: 7, src: '/Google-Drive-Shared/connerly/5.JPG', title: 'Pool Repair' },
    { id: 8, src: '/Google-Drive-Shared/connerly/6.JPG', title: 'Pool Opening' },
    { id: 9, src: '/Google-Drive-Shared/raena/r2.JPG', title: 'Water Testing' },
    { id: 10, src: '/Google-Drive-Shared/steven/s6.JPG', title: 'Evening Pool' },
    { id: 11, src: '/Google-Drive-Shared/connerly/7.JPG', title: 'Pool Landscaping' },
    { id: 12, src: '/Google-Drive-Shared/raena/r3.JPG', title: 'Backyard Oasis' },
  ];


  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <>
      <SEO
        title="Pool & Spa Gallery | Aspenwood Pools & Spas | Parker Colorado"
        description="View our pool and spa project gallery. See beautiful pool installations, renovations, and spa projects from Aspenwood Pools & Spas in Parker and Douglas County, Colorado."
        keywords="pool gallery Parker CO, spa photos Colorado, pool installation gallery, pool renovation photos, Douglas County pools"
        canonical="https://aspenwoodpools.com/gallery"
      />
      <section className="py-20 md:py-28 bg-[#FAFAFA] px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Gallery</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-3 mb-4">
              Our Work Speaks for Itself
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Browse our portfolio of pool installations, renovations, and spa projects. Each project showcases our commitment to quality craftsmanship.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-square overflow-hidden bg-gray-200">
                    <img 
                      src={image.src} 
                      alt={`${image.title} - Aspenwood Pools & Spas Denver`} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white font-semibold p-4">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>

          {/* Lightbox Modal */}
          {selectedImage !== null && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-3"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-3"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div
                className="max-w-6xl max-h-[90vh] relative"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[selectedImage].src}
                  alt={`${galleryImages[selectedImage].title} - Aspenwood Pools & Spas`}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="bg-[#0F172A] rounded-2xl p-12 md:p-16 text-center mt-20 relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#0D5C6D]/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#D4A853]/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Let us help you create the backyard of your dreams. Contact us today for a free consultation.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-semibold py-3.5 px-7 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #D4A853 0%, #B8923F 100%)', color: '#0F172A' }}
              >
                Get Free Consultation
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Gallery;

