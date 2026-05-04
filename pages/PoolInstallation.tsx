import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Clock, ArrowRight, Phone, Sparkles, Droplets, Sun, Waves, Ruler } from 'lucide-react';
import SEO from '../components/SEO';
import RelatedServices from '../components/RelatedServices';

const PoolInstallation: React.FC = () => {
  const benefits = [
    {
      icon: <Ruler className="w-6 h-6 text-[#D4A853]" />,
      title: 'Custom Design',
      description: 'Every pool is uniquely designed to complement your backyard and lifestyle needs.'
    },
    {
      icon: <Shield className="w-6 h-6 text-[#D4A853]" />,
      title: 'Quality Construction',
      description: 'Built with premium materials and expert craftsmanship for decades of enjoyment.'
    },
    {
      icon: <Waves className="w-6 h-6 text-[#D4A853]" />,
      title: 'Modern Features',
      description: 'LED lighting, waterfalls, automation systems, and energy-efficient equipment.'
    },
    {
      icon: <Sun className="w-6 h-6 text-[#D4A853]" />,
      title: 'Year-Round Enjoyment',
      description: 'Optional heating systems let you extend your swimming season in Colorado.'
    }
  ];

  const poolTypes = [
    'In-ground gunite/concrete pools',
    'Fiberglass pools',
    'Vinyl liner pools',
    'Lap pools',
    'Infinity/vanishing edge pools',
    'Natural/pond-style pools',
    'Plunge pools',
    'Sport pools'
  ];

  const features = [
    'Custom shapes and sizes',
    'Integrated spa/hot tub',
    'Waterfalls and fountains',
    'LED color lighting',
    'Automatic pool covers',
    'Salt water systems',
    'Smart automation',
    'Energy-efficient pumps'
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation & Design',
      description: 'We meet with you to understand your vision, assess your property, and create custom designs.'
    },
    {
      step: '02',
      title: 'Permits & Planning',
      description: 'We handle all permits and approvals with Douglas County and your HOA if applicable.'
    },
    {
      step: '03',
      title: 'Excavation & Construction',
      description: 'Our experienced crew excavates and builds your pool with precision and care.'
    },
    {
      step: '04',
      title: 'Finishing & Startup',
      description: 'Final touches, equipment installation, filling, and water chemistry balancing.'
    }
  ];

  return (
    <>
      <SEO
        title="Pool Installation Parker CO | Custom Swimming Pools | Aspenwood Pools & Spas"
        description="Professional swimming pool installation in Parker, Colorado. Custom in-ground pools, fiberglass, and gunite construction. Serving Douglas County and the Denver metro area."
        keywords="pool installation Parker CO, swimming pool contractor Colorado, in-ground pool Denver, custom pool builder Douglas County, pool construction Castle Rock"
        canonical="https://aspenwoodpools.com/pool-installation"
        serviceSchema={{
          name: "Pool Installation",
          description: "Professional custom swimming pool installation services including design, construction, and finishing.",
          url: "https://aspenwoodpools.com/pool-installation",
          image: "https://aspenwoodpools.com/services/pool-installation.jpg"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://aspenwoodpools.com/" },
          { name: "Services", url: "https://aspenwoodpools.com/services" },
          { name: "Pool Installation", url: "https://aspenwoodpools.com/pool-installation" }
        ]}
      />
      <section className="py-20 md:py-28 bg-[#FAFAFA] px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Pool Installation</span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-3 mb-6">
                Custom Swimming Pool Installation
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] rounded-full mb-6"></div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Transform your backyard into a personal oasis with a custom swimming pool from Aspenwood Pools & Spas. We design and build beautiful, durable pools that provide years of enjoyment for your family. Serving Parker, Castle Rock, and the greater Denver metro area.
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
                  src="/Google-Drive-Shared/steven/s1.JPG" 
                  alt="Custom Pool Installation in Parker Colorado" 
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
            <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl font-bold text-[#0F172A] mt-3 mb-4">Why Choose Aspenwood for Your Pool?</h2>
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

        {/* Pool Types & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          <div className="bg-gradient-to-br from-[#0D5C6D] to-[#094854] rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-white mb-6">Pool Types We Build</h3>
            <div className="space-y-4">
              {poolTypes.map((type, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#D4A853] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{type}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#0D5C6D] to-[#094854] rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-white mb-6">Available Features</h3>
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

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl font-bold text-[#0F172A] mt-3 mb-4">Our Installation Process</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#0D5C6D]/20 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white text-xl font-bold" style={{ background: 'linear-gradient(135deg, #0D5C6D 0%, #094854 100%)' }}>
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-[#0F172A] mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
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
              Ready to Build Your Dream Pool?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and estimate. Let's create the perfect backyard retreat for your family.
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

        <RelatedServices currentService="Pool Installation" />

        </div>
      </section>
    </>
  );
};

export default PoolInstallation;
