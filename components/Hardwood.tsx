import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, Shield, Sparkles, ArrowRight, Phone } from 'lucide-react';

const Hardwood: React.FC = () => {
  const hardwoodTypes = [
    {
      name: 'Oak',
      description: 'Classic and durable, oak is one of the most popular hardwood choices. Available in red and white varieties.',
      image: '/products/hardwood.jpg'
    },
    {
      name: 'Maple',
      description: 'Light-colored and smooth-grained, maple offers a modern, clean look perfect for contemporary homes.',
      image: '/products/hardwood.jpg'
    },
    {
      name: 'Hickory',
      description: 'Extremely hard and durable, hickory is perfect for high-traffic areas and homes with pets.',
      image: '/products/hardwood.jpg'
    },
    {
      name: 'Walnut',
      description: 'Rich, dark tones with beautiful grain patterns. Walnut adds elegance and sophistication to any space.',
      image: '/products/hardwood.jpg'
    },
    {
      name: 'Cherry',
      description: 'Warm reddish tones that deepen over time. Cherry hardwood brings warmth and character to your home.',
      image: '/products/hardwood.jpg'
    },
    {
      name: 'Bamboo',
      description: 'Eco-friendly and sustainable, bamboo offers the beauty of hardwood with exceptional durability.',
      image: '/products/hardwood.jpg'
    }
  ];

  const benefits = [
    {
      icon: <Home className="w-8 h-8 text-blue-900" />,
      title: 'Increases Home Value',
      description: 'Hardwood floors are a timeless investment that can significantly increase your home\'s resale value.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-900" />,
      title: 'Timeless Beauty',
      description: 'Hardwood never goes out of style. It adds natural warmth and elegance that complements any décor.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Durability',
      description: 'Properly maintained hardwood floors can last for generations, making them a long-term investment.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-900" />,
      title: 'Easy Maintenance',
      description: 'Simple sweeping and occasional mopping keep hardwood floors looking beautiful for years to come.'
    }
  ];

  const features = [
    'Available in solid and engineered options',
    'Multiple wood species and finishes',
    'Can be refinished multiple times',
    'Improves indoor air quality',
    'Hypoallergenic and easy to clean',
    'Complements any design style'
  ];

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">HARDWOOD FLOORING</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Timeless Elegance for Your Home
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Discover the natural beauty and lasting value of hardwood flooring. From classic oak to exotic species, 
                we offer a wide selection of premium hardwood floors that will enhance your home for generations to come.
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
                  src="/animations/hardwood.gif" 
                  alt="Beautiful Hardwood Flooring" 
                  className="w-full h-full object-cover object-center block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Hardwood?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hardwood flooring offers unmatched beauty, durability, and value for your home.
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
              Hardwood Flooring Features
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

        {/* Wood Types Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Hardwood Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From traditional favorites to exotic species, find the perfect hardwood for your style.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardwoodTypes.map((type, idx) => (
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
              Our certified installers have years of experience installing hardwood floors. We ensure proper 
              acclimation, precise cutting, and flawless finishing for results that last.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Proper subfloor preparation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Expert installation techniques</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Quality finish application</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Clean-up and final inspection</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Care & Maintenance</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Hardwood floors are easy to maintain with proper care. Follow these simple guidelines to keep 
              your floors looking beautiful for years to come.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Sweep or vacuum regularly</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Use hardwood-specific cleaners</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Protect from excessive moisture</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Use area rugs in high-traffic areas</span>
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
            Visit our showroom to see our full selection of hardwood flooring, or schedule a free in-home consultation 
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

export default Hardwood;

