import React from 'react';

const Inspiration: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900 text-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Text */}
        <div>
            <span className="text-stone-200 font-bold tracking-wider text-sm">GET INSPIRED</span>
            <h2 className="text-4xl font-bold mt-2 mb-6 leading-tight">Bring Your Vision to Life</h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Not sure where to start? Browse our room gallery to see how different floors look in real homes, or upload your own photo to our Room Visualizer to see it in your space instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-8 rounded transition-colors">
                    EXPLORE ROOM SCENES
                </button>
                <button className="border border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded transition-colors">
                    LAUNCH VISUALIZER
                </button>
            </div>
        </div>

        {/* Right Side Image Grid */}
        <div className="grid grid-cols-2 gap-4">
            <img 
                src="https://picsum.photos/seed/room1/600/800" 
                alt="Room Inspiration 1" 
                className="w-full h-64 object-cover rounded-lg transform translate-y-8 shadow-2xl"
            />
            <img 
                src="https://picsum.photos/seed/room2/600/800" 
                alt="Room Inspiration 2" 
                className="w-full h-64 object-cover rounded-lg shadow-2xl"
            />
             <img 
                src="https://picsum.photos/seed/room3/600/800" 
                alt="Room Inspiration 3" 
                className="w-full h-64 object-cover rounded-lg transform translate-y-8 shadow-2xl"
            />
             <img 
                src="https://picsum.photos/seed/room4/600/800" 
                alt="Room Inspiration 4" 
                className="w-full h-64 object-cover rounded-lg shadow-2xl"
            />
        </div>

      </div>
    </section>
  );
};

export default Inspiration;