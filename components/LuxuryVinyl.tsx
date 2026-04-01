import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Droplet, Shield, Sparkles, ArrowRight, Wrench, Phone } from 'lucide-react';

const LuxuryVinyl: React.FC = () => {
  const vinylTypes = [
    {
      name: 'Luxury Vinyl Plank (LVP)',
      description: 'Realistic wood-look planks that mimic hardwood. Perfect for any room where you want the beauty of wood with superior durability.',
      image: '/products/vinyl.png'
    },
    {
      name: 'Luxury Vinyl Tile (LVT)',
      description: 'Tile-look luxury vinyl that captures the elegance of stone and ceramic. Ideal for bathrooms, kitchens, and high-moisture areas.',
      image: '/products/vinyl.png'
    },
    {
      name: 'Waterproof LVP',
      description: '100% waterproof luxury vinyl plank perfect for basements, bathrooms, and kitchens. Never worry about water damage again.',
      image: '/products/vinyl.png'
    },
    {
      name: 'Rigid Core',
      description: 'Extra-thick, dimensionally stable planks with enhanced durability. Perfect for uneven subfloors and high-traffic areas.',
      image: '/products/vinyl.png'
    },
    {
      name: 'WPC (Wood Plastic Composite)',
      description: 'Advanced core technology combining wood and plastic for superior stability and comfort underfoot.',
      image: '/products/vinyl.png'
    },
    {
      name: 'SPC (Stone Plastic Composite)',
      description: 'Ultra-durable core made from stone and plastic. The most stable and waterproof option available.',
      image: '/products/vinyl.png'
    }
  ];

  const benefits = [
    {
      icon: <Droplet className="w-8 h-8 text-blue-900" />,
      title: '100% Waterproof',
      description: 'Luxury vinyl is completely waterproof, making it perfect for bathrooms, kitchens, basements, and any moisture-prone area.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Extremely Durable',
      description: 'Resistant to scratches, dents, and stains. Perfect for homes with pets, kids, and high foot traffic.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-900" />,
      title: 'Realistic Designs',
      description: 'Advanced printing technology creates stunningly realistic wood and tile looks that are hard to distinguish from the real thing.'
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-900" />,
      title: 'Easy Installation',
      description: 'Click-lock installation makes it DIY-friendly, or our professionals can install it quickly with minimal disruption.'
    }
  ];

  const features = [
    '100% waterproof - perfect for any room',
    'Scratch and dent resistant',
    'Easy to clean and maintain',
    'Comfortable underfoot with built-in padding',
    'Can be installed over most existing floors',
    'Affordable luxury that looks like high-end materials'
  ];

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">LUXURY VINYL FLOORING</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Beauty Meets Performance
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience the perfect combination of stunning aesthetics and unbeatable durability. Luxury vinyl 
                flooring offers the look of hardwood or tile with superior water resistance and easy maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:6025542113" className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden h-[500px] md:h-[600px]">
                <img 
                  src="/animations/vinyl.gif" 
                  alt="Beautiful Luxury Vinyl Flooring" 
                  className="w-full h-full object-cover object-center block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Luxury Vinyl?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Luxury vinyl combines the best of both worlds: stunning beauty and practical performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-blue-50 transition-colors duration-300 border border-gray-100"
              >
                <div className="bg-white p-4 rounded-full inline-flex mb-6 shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features List */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 md:p-16 mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Luxury Vinyl Flooring Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vinyl Types Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Luxury Vinyl Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From wood-look planks to tile-look options, find the perfect luxury vinyl for your home.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vinylTypes.map((type, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={type.image} 
                    alt={type.name} 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{type.description}</p>
                  <button className="text-blue-900 font-semibold hover:underline flex items-center gap-2 group">
                    View Options
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Installation & Care Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Installation</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              While luxury vinyl can be DIY-friendly, professional installation ensures perfect results. Our 
              certified installers handle subfloor preparation, precise cutting, and seamless installation.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Subfloor inspection and preparation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Precise cutting and fitting</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Seamless click-lock installation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Baseboard and transition installation</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Care & Maintenance</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Luxury vinyl is incredibly easy to maintain. Simple regular cleaning keeps it looking beautiful 
              for years with minimal effort.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Sweep or vacuum regularly</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Mop with mild cleaner and water</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Wipe spills immediately</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">No waxing or special treatments needed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Home?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Visit our showroom to see our extensive luxury vinyl collection, or schedule a free in-home consultation 
            to explore options for your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:6025542113" className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LuxuryVinyl;

