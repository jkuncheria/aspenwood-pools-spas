import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, ArrowRight, Phone, Sun, Snowflake, Calendar, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import RelatedServices from '../components/RelatedServices';

const PoolOpeningClosing: React.FC = () => {
  const benefits = [
    { icon: <Calendar className="w-6 h-6 text-[#D4A853]" />, title: 'Seasonal Expertise', description: 'We know Colorado\'s climate and prepare your pool accordingly.' },
    { icon: <Shield className="w-6 h-6 text-[#D4A853]" />, title: 'Equipment Protection', description: 'Proper winterization prevents costly freeze damage to pipes and equipment.' },
    { icon: <Clock className="w-6 h-6 text-[#D4A853]" />, title: 'Save Time', description: 'Let us handle the work so you can enjoy the first swim of the season.' },
    { icon: <Sun className="w-6 h-6 text-[#D4A853]" />, title: 'Ready to Swim', description: 'Your pool will be crystal clear and swim-ready when we\'re done.' }
  ];

  const openingServices = ['Remove and store winter cover', 'Reinstall ladders and accessories', 'Reconnect pump and filter', 'Prime and start equipment', 'Test and balance water chemistry', 'Vacuum and brush pool', 'Inspect all equipment', 'Add startup chemicals'];
  const closingServices = ['Lower water level', 'Blow out plumbing lines', 'Add winterizing chemicals', 'Disconnect and drain equipment', 'Install winter plugs', 'Remove ladders and accessories', 'Install winter cover', 'Final equipment inspection'];

  return (
    <>
      <SEO
        title="Pool Opening & Closing Parker CO | Seasonal Pool Service | Aspenwood Pools & Spas"
        description="Professional pool opening and closing services in Parker, Colorado. Winterization and spring startup to protect your investment."
        keywords="pool opening Parker CO, pool closing Colorado, pool winterization Denver, seasonal pool service Douglas County"
        canonical="https://aspenwoodpools.com/pool-opening-closing"
      />
      <section className="py-20 md:py-28 bg-[#FAFAFA] px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Pool Opening & Closing</span>
                <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-3 mb-6">Seasonal Pool Opening & Closing</h1>
                <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] rounded-full mb-6"></div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Colorado's freeze-thaw cycles can wreak havoc on improperly winterized pools. Trust Aspenwood Pools & Spas for professional pool opening and closing services that protect your investment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 text-white font-semibold py-3.5 px-7 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-md group" style={{ background: 'linear-gradient(135deg, #0D5C6D 0%, #094854 100%)' }}>
                    Schedule Service <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href="tel:18335737665" className="inline-flex items-center justify-center gap-2 border-2 border-[#0D5C6D] text-[#0D5C6D] font-semibold py-3.5 px-7 rounded-full hover:bg-[#0D5C6D] hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5" /> Call Us
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden h-[500px] md:h-[600px] rounded-2xl shadow-2xl">
                  <img src="/Google-Drive-Shared/connerly/9.JPG" alt="Pool Opening Service in Parker Colorado" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl font-bold text-[#0F172A] mt-3 mb-4">Why Professional Seasonal Service?</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                  <div className="w-14 h-14 bg-[#0D5C6D]/10 rounded-xl inline-flex items-center justify-center mb-6 group-hover:bg-[#0D5C6D]/20 transition-colors">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
            <div className="bg-gradient-to-br from-[#0D5C6D] to-[#094854] rounded-2xl p-10">
              <div className="flex items-center gap-3 mb-6">
                <Sun className="w-8 h-8 text-[#D4A853]" />
                <h3 className="text-2xl font-bold text-white">Spring Opening</h3>
              </div>
              <div className="space-y-4">
                {openingServices.map((service, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#D4A853] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#0D5C6D] to-[#094854] rounded-2xl p-10">
              <div className="flex items-center gap-3 mb-6">
                <Snowflake className="w-8 h-8 text-[#D4A853]" />
                <h3 className="text-2xl font-bold text-white">Fall Closing</h3>
              </div>
              <div className="space-y-4">
                {closingServices.map((service, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#D4A853] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#0F172A] rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#0D5C6D]/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#D4A853]/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Schedule Your Seasonal Service?</h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Book early to secure your preferred date. We fill up fast during peak seasons!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 font-semibold py-3.5 px-7 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg group" style={{ background: 'linear-gradient(135deg, #D4A853 0%, #B8923F 100%)', color: '#0F172A' }}>
                  Schedule Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:18335737665" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-7 rounded-full transition-all duration-300 border border-white/20">
                  <Phone className="w-5 h-5" /> Call Us
                </a>
              </div>
            </div>
          </div>
          <RelatedServices currentService="Pool Opening & Closing" />
        </div>
      </section>
    </>
  );
};

export default PoolOpeningClosing;
