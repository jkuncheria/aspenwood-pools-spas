import React, { useState } from 'react';
import { ArrowRight, X, Pointer } from 'lucide-react';

const Visualizer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenVisualizer = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">VISUALIZE YOUR PROJECT</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
              See Your Color Choices Before You Commit
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Snap a photo of your room, exterior, or cabinets. Then watch as we transform it with different paint colors from our collection. See exactly how that perfect shade will look in <em>your</em> space—before you make a decision.
            </p>
            <ul className="space-y-3 mb-8 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 font-bold text-xl">✓</span>
                <span>Upload any photo from your phone or computer</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 font-bold text-xl">✓</span>
                <span>Browse our color palette and preview it in your space</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 font-bold text-xl">✓</span>
                <span>Compare multiple options side-by-side</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 font-bold text-xl">✓</span>
                <span>Share with your partner or designer to get their input</span>
              </li>
            </ul>
            <button 
              type="button"
              onClick={handleOpenVisualizer}
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 group"
            >
              Start Visualizing Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Side - Video */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <video 
                src="/roomvo-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-2xl"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
          </div>

        </div>
      </section>

      {/* Modal Popup */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Pointer className="w-8 h-8 text-blue-900" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Open the Visualizer
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                To start visualizing paint colors in your space, please click on the <strong>visualizer widget</strong> located in the <strong>bottom-left corner</strong> of your screen.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-900 font-semibold">
                  Look for the widget that says "See our colors in your space"
                </p>
              </div>
              
              <button
                onClick={handleCloseModal}
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Visualizer;

