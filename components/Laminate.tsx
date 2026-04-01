import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, Shield, Sparkles, ArrowRight, DollarSign, Phone } from 'lucide-react';

const Laminate: React.FC = () => {
  const laminateTypes = [
    {
      name: 'Standard Laminate',
      description: 'Classic laminate flooring that offers the look of hardwood at an affordable price. Perfect for bedrooms and living areas.',
      image: '/products/laminate.jpg'
    },
    {
      name: 'Waterproof Laminate',
      description: 'Advanced technology makes this laminate 100% waterproof. Ideal for kitchens, bathrooms, and basements.',
      image: '/products/laminate.jpg'
    },
    {
      name: 'Thick Laminate',
      description: 'Extra-thick planks provide enhanced durability and a more realistic feel underfoot. Great for high-traffic areas.',
      image: '/products/laminate.jpg'
    },
    {
      name: 'Textured Laminate',
      description: 'Embossed textures mimic the feel of real wood grain. Adds authenticity and visual depth to your floors.',
      image: '/products/laminate.jpg'
    },
    {
      name: 'Wide Plank',
      description: 'Wider planks create a modern, spacious feel. Perfect for contemporary homes and open floor plans.',
      image: '/products/laminate.jpg'
    },
    {
      name: 'Premium Collection',
      description: 'High-end laminate with superior printing technology and realistic wood textures. Luxury look at a fraction of the cost.',
      image: '/products/laminate.jpg'
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-blue-900" />,
      title: 'Affordable',
      description: 'Get the beautiful look of hardwood at a fraction of the cost. Laminate offers exceptional value for your flooring investment.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Durable & Scratch Resistant',
      description: 'Tough wear layer protects against scratches, dents, and fading. Perfect for homes with pets and active families.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-900" />,
      title: 'Realistic Wood Looks',
      description: 'Advanced printing technology creates stunningly realistic wood grain patterns that are hard to distinguish from real hardwood.'
    },
    {
      icon: <Home className="w-8 h-8 text-blue-900" />,
      title: 'Easy Installation',
      description: 'Click-lock installation system makes laminate DIY-friendly, or our professionals can install it quickly and efficiently.'
    }
  ];

  const features = [
    'Affordable alternative to hardwood',
    'Scratch and stain resistant',
    'Easy to clean and maintain',
    'Available in countless wood-look styles',
    'Can be installed over most existing floors',
    'Great for high-traffic areas'
  ];

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">LAMINATE FLOORING</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Beautiful Floors, Smart Value
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Discover the perfect balance of beauty, durability, and affordability with laminate flooring. 
                Get the stunning look of hardwood without the high price tag, perfect for any room in your home.
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
                  src="/animations/laminate.gif" 
                  alt="Beautiful Laminate Flooring" 
                  className="w-full h-full object-cover object-center block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Laminate?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Laminate flooring offers exceptional value, combining beautiful aesthetics with practical benefits.
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
              Laminate Flooring Features
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

        {/* Laminate Types Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Laminate Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From classic styles to waterproof options, find the perfect laminate for your home and lifestyle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {laminateTypes.map((type, idx) => (
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
              While laminate is DIY-friendly, professional installation ensures perfect results. Our certified 
              installers handle subfloor preparation, precise cutting, and seamless click-lock installation.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Subfloor leveling and preparation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Precise cutting and fitting</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Proper expansion gap spacing</span>
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
              Laminate floors are easy to maintain with simple regular cleaning. Keep them looking beautiful 
              with minimal effort and no special treatments required.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Sweep or dry mop regularly</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Damp mop with laminate-specific cleaner</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Wipe spills immediately</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Use felt pads under furniture legs</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Find Your Perfect Laminate?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Visit our showroom to see our extensive laminate collection, or schedule a free in-home consultation 
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

export default Laminate;

