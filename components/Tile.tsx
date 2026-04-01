import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Droplet, Shield, Sparkles, ArrowRight, Zap, Phone } from 'lucide-react';

const Tile: React.FC = () => {
  const tileTypes = [
    {
      name: 'Ceramic',
      description: 'Affordable and versatile, ceramic tile is perfect for any room. Available in countless colors and patterns.',
      image: '/products/tile.jpg'
    },
    {
      name: 'Porcelain',
      description: 'Dense and durable, porcelain tile is ideal for high-traffic areas and wet spaces like bathrooms and kitchens.',
      image: '/products/tile.jpg'
    },
    {
      name: 'Natural Stone',
      description: 'Elegant marble, travertine, and slate bring natural beauty and unique character to your floors.',
      image: '/products/tile.jpg'
    },
    {
      name: 'Glass',
      description: 'Modern and sophisticated, glass tile creates stunning visual effects with light and color.',
      image: '/products/tile.jpg'
    },
    {
      name: 'Mosaic',
      description: 'Small tiles arranged in patterns create intricate designs perfect for accent areas and backsplashes.',
      image: '/products/tile.jpg'
    },
    {
      name: 'Large Format',
      description: 'Oversized tiles minimize grout lines for a sleek, contemporary look with easier maintenance.',
      image: '/products/tile.jpg'
    }
  ];

  const benefits = [
    {
      icon: <Droplet className="w-8 h-8 text-blue-900" />,
      title: 'Water Resistant',
      description: 'Tile is naturally waterproof, making it perfect for bathrooms, kitchens, and other moisture-prone areas.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Extremely Durable',
      description: 'Tile floors can last for decades with minimal maintenance. Resistant to scratches, stains, and wear.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-900" />,
      title: 'Design Versatility',
      description: 'Endless options in colors, sizes, shapes, and finishes to match any style from classic to contemporary.'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-900" />,
      title: 'Easy Maintenance',
      description: 'Simple sweeping and mopping keep tile floors looking new. No special cleaners or treatments needed.'
    }
  ];

  const features = [
    'Perfect for bathrooms, kitchens, and entryways',
    'Waterproof and moisture-resistant',
    'Hypoallergenic and easy to clean',
    'Resistant to stains, scratches, and fading',
    'Can be used with radiant heating systems',
    'Increases home value and appeal'
  ];

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">TILE FLOORING</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Durable Beauty That Lasts
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Discover the perfect combination of style and durability with our premium tile flooring. From elegant 
                natural stone to modern porcelain, find the ideal tile to enhance any space in your home.
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
                  src="/animations/tile.gif" 
                  alt="Beautiful Tile Flooring" 
                  className="w-full h-full object-cover object-center block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Tile?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tile flooring offers unmatched durability, water resistance, and design flexibility for your home.
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
              Tile Flooring Features
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

        {/* Tile Types Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Tile Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From classic ceramic to luxurious natural stone, discover the perfect tile for your project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tileTypes.map((type, idx) => (
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
              Proper tile installation requires skill and precision. Our certified installers ensure level surfaces, 
              proper spacing, and flawless grout work for beautiful, long-lasting results.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Proper subfloor preparation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Precise cutting and layout</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Expert grouting and sealing</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Quality finish and cleanup</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Care & Maintenance</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Tile floors are incredibly easy to maintain. With simple regular care, your tile will look beautiful 
              for years to come.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Sweep or vacuum regularly</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Mop with mild tile cleaner</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Seal grout lines periodically</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Wipe spills immediately</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Install Beautiful Tile?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Visit our showroom to see our extensive tile collection, or schedule a free in-home consultation 
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

export default Tile;

