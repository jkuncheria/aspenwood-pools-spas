import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle, Shield, Sparkles, Waves, Droplets, Wrench, RefreshCw, Calendar, Beaker, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  const services = [
    {
      number: '01',
      title: 'Pool Installation',
      description: 'Custom swimming pool design and construction. From in-ground gunite to fiberglass pools, we build your dream backyard oasis.',
      features: [
        'Custom design consultation',
        'Quality construction',
        'Modern features & automation'
      ],
      cta: 'Build your dream pool. Get a quote.',
      icon: <Waves className="w-6 h-6 text-[#D4A853]" />,
      link: '/pool-installation'
    },
    {
      number: '02',
      title: 'Spa & Hot Tubs',
      description: 'Hot tub sales, installation, and service. Portable spas, in-ground spas, and swim spas for year-round relaxation.',
      features: [
        'Top brand hot tubs',
        'Professional installation',
        'Repair & maintenance'
      ],
      cta: 'Relax in your own spa. Learn more.',
      icon: <Sparkles className="w-6 h-6 text-[#D4A853]" />,
      link: '/spa-hot-tubs'
    },
    {
      number: '03',
      title: 'Pool Repair',
      description: 'Expert diagnosis and repair of pool equipment including pumps, heaters, filters, and more. Fast, reliable service.',
      features: [
        'Equipment repair',
        'Leak detection',
        'Structural repairs'
      ],
      cta: 'Get your pool running again.',
      icon: <Wrench className="w-6 h-6 text-[#D4A853]" />,
      link: '/pool-repair'
    },
    {
      number: '04',
      title: 'Pool Renovation',
      description: 'Transform your aging pool with resurfacing, new tile, modern features, and equipment upgrades.',
      features: [
        'Resurfacing & replastering',
        'Feature additions',
        'Equipment upgrades'
      ],
      cta: 'Give your pool new life.',
      icon: <RefreshCw className="w-6 h-6 text-[#D4A853]" />,
      link: '/pool-renovation'
    },
    {
      number: '05',
      title: 'Pool Opening & Closing',
      description: 'Professional seasonal services to protect your pool through Colorado winters and get it swim-ready in spring.',
      features: [
        'Spring opening service',
        'Fall winterization',
        'Equipment protection'
      ],
      cta: 'Protect your investment.',
      icon: <Calendar className="w-6 h-6 text-[#D4A853]" />,
      link: '/pool-opening-closing'
    },
    {
      number: '06',
      title: 'Auto Cover Installation',
      description: 'Automatic pool covers for safety, energy savings, and convenience. Professional installation for all pool shapes and sizes.',
      features: [
        'Safety certified covers',
        'Energy savings',
        'One-touch operation'
      ],
      cta: 'Protect your pool & family.',
      icon: <ShieldCheck className="w-6 h-6 text-[#D4A853]" />,
      link: '/auto-cover-installation'
    }
  ];

  const mainServices = [
    {
      title: 'New Pool Construction Package',
      description: 'Complete pool installation from design to first splash. Custom pools built to your specifications.',
      subDescription: 'We handle everything: design, permits, construction, and finishing for a stress-free experience.',
      features: [
        'Custom design consultation',
        'Permit handling',
        'Quality construction'
      ],
      cta: 'Start your project',
      link: '/pool-installation'
    },
    {
      title: 'Pool Renovation Package',
      description: 'Transform your aging pool with modern features and a fresh new look.',
      subDescription: 'Resurfacing, new tile, equipment upgrades, and feature additions to revitalize your pool.',
      features: [
        'Resurfacing & replastering',
        'Feature additions',
        'Equipment upgrades'
      ],
      cta: 'Revitalize your pool',
      link: '/pool-renovation'
    }
  ];

  return (
    <>
      <SEO
        title="Pool & Spa Services Parker CO | Installation, Maintenance, Repair | Aspenwood Pools & Spas"
        description="Complete pool and spa services in Parker, Colorado. Pool installation, maintenance, repair, renovation, and hot tub services. Serving Douglas County and Denver metro."
        keywords="pool services Parker CO, spa services Colorado, pool installation Denver, pool maintenance Douglas County, hot tub service Castle Rock"
        canonical="https://aspenwoodpools.com/services"
      />
      <section className="py-20 md:py-28 bg-[#FAFAFA] px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-3 mb-4">
            Pool & Spa Services
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            From custom pool installation to weekly maintenance, we provide complete pool and spa services for Parker, Castle Rock, and the Denver metro area.
          </p>
        </div>

        {/* Numbered Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-8 md:p-10 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#0D5C6D]/20 group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl font-bold" style={{ background: 'linear-gradient(135deg, #0D5C6D 0%, #094854 100%)' }}>
                    {service.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#0D5C6D]/10 rounded-xl flex items-center justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#0F172A]">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-[#0D5C6D] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={service.link || '/contact'}
                    className="inline-flex items-center gap-2 text-[#0D5C6D] font-semibold hover:text-[#094854] transition-colors group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Service Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          {mainServices.map((service, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-br from-[#0D5C6D] to-[#094854] rounded-2xl p-8 md:p-10 text-white"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/90 mb-4 leading-relaxed">
                {service.description}
              </p>
              <p className="text-white/70 mb-6 leading-relaxed text-sm">
                {service.subDescription}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#D4A853] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to={service.link}
                className="inline-flex items-center gap-2 font-semibold py-3.5 px-7 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg group"
                style={{ background: 'linear-gradient(135deg, #D4A853 0%, #B8923F 100%)', color: '#0F172A' }}
              >
                {service.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-[#0F172A] rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#0D5C6D]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#D4A853]/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation. Whether you need a new pool, maintenance, or repairs, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 font-semibold py-3.5 px-7 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg group"
                style={{ background: 'linear-gradient(135deg, #D4A853 0%, #B8923F 100%)', color: '#0F172A' }}
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="tel:3035557665" 
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-7 rounded-full transition-all duration-300 border border-white/20"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </div>
        </div>

        </div>
      </section>
    </>
  );
};

export default Services;

