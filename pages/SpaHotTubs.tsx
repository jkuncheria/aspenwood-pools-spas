import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Clock, ArrowRight, Phone, Sparkles, ThermometerSun, Heart, Zap } from 'lucide-react';
import SEO from '../components/SEO';
import RelatedServices from '../components/RelatedServices';

const SpaHotTubs: React.FC = () => {
  const benefits = [
    {
      icon: <Heart className="w-6 h-6 text-[#D4A853]" />,
      title: 'Relaxation & Wellness',
      description: 'Hydrotherapy jets soothe muscles, reduce stress, and promote better sleep.'
    },
    {
      icon: <ThermometerSun className="w-6 h-6 text-[#D4A853]" />,
      title: 'Year-Round Use',
      description: 'Enjoy your spa in any Colorado weather—even when it\'s snowing!'
    },
    {
      icon: <Zap className="w-6 h-6 text-[#D4A853]" />,
      title: 'Energy Efficient',
      description: 'Modern spas feature excellent insulation and efficient heating systems.'
    },
    {
      icon: <Shield className="w-6 h-6 text-[#D4A853]" />,
      title: 'Built to Last',
      description: 'Premium construction and quality components ensure years of reliable enjoyment.'
    }
  ];

  const spaTypes = [
    'In-ground spas',
    'Swim spas',
    'Therapy spas',
    'Luxury spas',
    'Family-size spas (6-8 person)',
    'Custom built-in spas'
  ];

  const features = [
    'Hydrotherapy jets',
    'LED mood lighting',
    'Bluetooth audio systems',
    'Waterfalls and fountains',
    'Ozone purification',
    'Salt water systems',
    'Smart controls & WiFi',
    'Energy-efficient covers'
  ];

  const services = [
    {
      title: 'Hot Tub Sales',
      description: 'We carry top brands and can help you find the perfect spa for your needs and budget.'
    },
    {
      title: 'Spa Installation',
      description: 'Professional delivery, electrical hookup, and setup to get you soaking quickly.'
    },
    {
      title: 'Spa Repair',
      description: 'Expert diagnosis and repair of pumps, heaters, jets, controls, and more.'
    },
    {
      title: 'Spa Maintenance',
      description: 'Regular cleaning, water testing, and chemical balancing to keep your spa pristine.'
    }
  ];

  return (
    <>
      <SEO
        title="Spa & Hot Tub Installation Parker CO | Hot Tub Sales & Service | Aspenwood Pools & Spas"
        description="Hot tub and spa installation, sales, and service in Parker, Colorado. In-ground spas, swim spas, therapy spas. Expert repair and maintenance. Serving Douglas County."
        keywords="hot tub installation Parker CO, spa sales Colorado, swim spa Denver, hot tub repair Douglas County, spa service Castle Rock"
        canonical="https://aspenwoodpools.com/spa-hot-tubs"
        serviceSchema={{
          name: "Spa & Hot Tub Services",
          description: "Complete spa and hot tub sales, installation, repair, and maintenance services.",
          url: "https://aspenwoodpools.com/spa-hot-tubs",
          image: "https://aspenwoodpools.com/services/spa-hot-tubs.jpg"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://aspenwoodpools.com/" },
          { name: "Services", url: "https://aspenwoodpools.com/services" },
          { name: "Spa & Hot Tubs", url: "https://aspenwoodpools.com/spa-hot-tubs" }
        ]}
      />
      <section className="py-20 md:py-28 bg-[#FAFAFA] px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Spa & Hot Tubs</span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-3 mb-6">
                Spa & Hot Tub Sales, Installation & Service
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] rounded-full mb-6"></div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Experience the ultimate in relaxation with a spa or hot tub from Aspenwood Pools & Spas. Whether you're looking for a portable hot tub, an in-ground spa, or a swim spa for exercise, we have the perfect solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 text-white font-semibold py-3.5 px-7 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-md group" style={{ background: 'linear-gradient(135deg, #0D5C6D 0%, #094854 100%)' }}>
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:18335737665" className="inline-flex items-center justify-center gap-2 border-2 border-[#0D5C6D] text-[#0D5C6D] font-semibold py-3.5 px-7 rounded-full hover:bg-[#0D5C6D] hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden h-[500px] md:h-[600px] rounded-2xl shadow-2xl">
                <img 
                  src="/Google-Drive-Shared/connerly/7.JPG" 
                  alt="Hot Tub Installation in Parker Colorado" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Benefits</span>
            <h2 className="text-3xl font-bold text-[#0F172A] mt-3 mb-4">Benefits of Owning a Spa</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-[#0D5C6D]/10 rounded-xl inline-flex items-center justify-center mb-6 group-hover:bg-[#0D5C6D]/20 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Spa Types & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          <div className="bg-gradient-to-br from-[#0D5C6D] to-[#094854] rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-white mb-6">Spa Types Available</h3>
            <div className="space-y-4">
              {spaTypes.map((type, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#D4A853] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{type}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#0D5C6D] to-[#094854] rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-white mb-6">Popular Features</h3>
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#D4A853] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl font-bold text-[#0F172A] mt-3 mb-4">Our Spa Services</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#0D5C6D]/20 hover:shadow-lg transition-all">
                <h4 className="text-lg font-bold text-[#0F172A] mb-3">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#0F172A] rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#0D5C6D]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#D4A853]/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Relax in Your Own Hot Tub?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Contact us today to explore our spa selection or schedule a service appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 font-semibold py-3.5 px-7 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg group" style={{ background: 'linear-gradient(135deg, #D4A853 0%, #B8923F 100%)', color: '#0F172A' }}>
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:18335737665" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-7 rounded-full transition-all duration-300 border border-white/20">
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </div>
        </div>

        <RelatedServices currentService="Spa & Hot Tubs" />

        </div>
      </section>
    </>
  );
};

export default SpaHotTubs;
