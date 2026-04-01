import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, Shield, Sparkles, ArrowRight, Heart, Phone } from 'lucide-react';

const Carpet: React.FC = () => {
  const carpetTypes = [
    {
      name: 'Plush',
      description: 'Luxurious and soft, plush carpet offers a smooth, velvety surface perfect for bedrooms and formal areas.',
      image: '/products/carpet.png'
    },
    {
      name: 'Berber',
      description: 'Durable loop-pile construction ideal for high-traffic areas. Resistant to stains and easy to maintain.',
      image: '/products/carpet.png'
    },
    {
      name: 'Frieze',
      description: 'Twisted fibers create a casual, comfortable texture. Perfect for family rooms and living spaces.',
      image: '/products/carpet.png'
    },
    {
      name: 'Cut & Loop',
      description: 'Combines cut and loop piles for unique patterns and textures. Adds visual interest to any room.',
      image: '/products/carpet.png'
    },
    {
      name: 'Textured',
      description: 'Multi-level loop construction provides durability and hides footprints. Great for active households.',
      image: '/products/carpet.png'
    },
    {
      name: 'Saxony',
      description: 'Classic cut-pile style with a smooth, uniform appearance. Timeless elegance for any home.',
      image: '/products/carpet.png'
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-blue-900" />,
      title: 'Comfort & Warmth',
      description: 'Carpet provides unmatched comfort underfoot and natural insulation, keeping your home warmer and quieter.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Safety',
      description: 'Soft surface reduces the risk of slips and falls, making carpet ideal for homes with children and seniors.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-900" />,
      title: 'Style Options',
      description: 'Endless colors, patterns, and textures to match any décor style from traditional to modern.'
    },
    {
      icon: <Home className="w-8 h-8 text-blue-900" />,
      title: 'Sound Absorption',
      description: 'Carpet significantly reduces noise, creating a quieter, more peaceful home environment.'
    }
  ];

  const features = [
    'Available in various fibers: nylon, polyester, wool, and more',
    'Multiple pile heights and densities',
    'Stain-resistant and easy-clean options',
    'Pet-friendly and hypoallergenic choices',
    'Wide range of colors and patterns',
    'Budget-friendly to luxury options'
  ];

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">CARPET FLOORING</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Comfort & Style Underfoot
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience the ultimate in comfort and warmth with our premium carpet selection. From plush luxury 
                to durable performance, find the perfect carpet to transform your home into a cozy haven.
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
                  src="/animations/carpet.gif" 
                  alt="Beautiful Carpet Flooring" 
                  className="w-full h-full object-cover object-center block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Carpet?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Carpet flooring offers comfort, warmth, and style that can't be matched by hard surfaces.
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
              Carpet Flooring Features
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

        {/* Carpet Types Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Carpet Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From plush luxury to durable performance, find the perfect carpet style for your home.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carpetTypes.map((type, idx) => (
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
              Proper carpet installation is crucial for appearance and longevity. Our certified installers ensure 
              precise measurements, proper padding, and seamless seams for flawless results.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Expert measurement and cutting</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Quality padding installation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Seamless seaming techniques</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Professional stretching and finishing</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Care & Maintenance</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Keep your carpet looking beautiful with proper care. Regular maintenance extends the life of your 
              carpet and keeps it fresh and clean.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Vacuum regularly (2-3 times per week)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Treat spills immediately</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Professional deep cleaning annually</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Use area rugs in high-traffic zones</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Feel the Comfort?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Visit our showroom to feel the difference quality carpet makes, or schedule a free in-home consultation 
            to see samples in your space.
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

export default Carpet;

