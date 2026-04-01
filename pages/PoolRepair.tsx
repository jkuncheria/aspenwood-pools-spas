import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Clock, ArrowRight, Phone, Wrench, AlertTriangle, Zap, Settings } from 'lucide-react';
import SEO from '../components/SEO';
import RelatedServices from '../components/RelatedServices';

const PoolRepair: React.FC = () => {
  const benefits = [
    {
      icon: <Wrench className="w-6 h-6 text-[#D4A853]" />,
      title: 'Expert Technicians',
      description: 'Our certified technicians diagnose and repair all pool equipment brands and models.'
    },
    {
      icon: <Clock className="w-6 h-6 text-[#D4A853]" />,
      title: 'Fast Response',
      description: 'We understand pool problems can\'t wait—we offer prompt service calls.'
    },
    {
      icon: <Shield className="w-6 h-6 text-[#D4A853]" />,
      title: 'Quality Parts',
      description: 'We use only manufacturer-approved parts for lasting repairs.'
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-[#D4A853]" />,
      title: 'Honest Diagnosis',
      description: 'We\'ll tell you exactly what\'s wrong and give you repair options.'
    }
  ];

  const equipmentRepairs = [
    'Pool pumps and motors',
    'Filter systems (sand, cartridge, DE)',
    'Pool heaters (gas and electric)',
    'Heat pumps',
    'Salt chlorine generators',
    'Automatic chlorinators',
    'Variable speed pumps',
    'Booster pumps'
  ];

  const structuralRepairs = [
    'Vinyl liner replacement',
    'Plaster and pebble repair',
    'Tile replacement',
    'Coping repair',
    'Skimmer repair/replacement',
    'Return fitting repair',
    'Main drain repair',
    'Leak detection and repair'
  ];

  const commonIssues = [
    {
      problem: 'Pump Not Running',
      causes: 'Motor failure, capacitor issues, electrical problems, clogged impeller'
    },
    {
      problem: 'Pool Losing Water',
      causes: 'Liner tears, plumbing leaks, equipment pad leaks, evaporation'
    },
    {
      problem: 'Heater Not Heating',
      causes: 'Ignition failure, heat exchanger issues, thermostat problems, gas supply'
    },
    {
      problem: 'Cloudy Water',
      causes: 'Filter problems, poor circulation, chemical imbalance, algae growth'
    }
  ];

  return (
    <>
      <SEO
        title="Pool Repair Parker CO | Pool Equipment Repair | Aspenwood Pools & Spas"
        description="Professional pool repair services in Parker, Colorado. Pump repair, heater repair, leak detection, liner replacement. Fast, reliable service for Douglas County."
        keywords="pool repair Parker CO, pool pump repair Colorado, pool heater repair Denver, pool leak detection Douglas County, pool equipment repair Castle Rock"
        canonical="https://aspenwoodpools.com/pool-repair"
        serviceSchema={{
          name: "Pool Repair",
          description: "Professional pool equipment and structural repair services including pumps, heaters, filters, and leak detection.",
          url: "https://aspenwoodpools.com/pool-repair",
          image: "https://aspenwoodpools.com/services/pool-repair.jpg"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://aspenwoodpools.com/" },
          { name: "Services", url: "https://aspenwoodpools.com/services" },
          { name: "Pool Repair", url: "https://aspenwoodpools.com/pool-repair" }
        ]}
      />
      <section className="py-20 md:py-28 bg-[#FAFAFA] px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Pool Repair</span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-3 mb-6">
                Professional Pool Repair Services
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] rounded-full mb-6"></div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                When your pool equipment breaks down or you discover a leak, you need fast, reliable repair service. Aspenwood Pools & Spas provides expert diagnosis and repair for all pool equipment and structural issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 text-white font-semibold py-3.5 px-7 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-md group" style={{ background: 'linear-gradient(135deg, #0D5C6D 0%, #094854 100%)' }}>
                  Schedule Repair
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:3035557665" className="inline-flex items-center justify-center gap-2 border-2 border-[#0D5C6D] text-[#0D5C6D] font-semibold py-3.5 px-7 rounded-full hover:bg-[#0D5C6D] hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden h-[500px] md:h-[600px] rounded-2xl shadow-2xl">
                <img 
                  src="/Google-Drive-Shared/connerly/8.JPG" 
                  alt="Pool Repair Service in Parker Colorado" 
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
            <h2 className="text-3xl font-bold text-[#0F172A] mt-3 mb-4">Why Choose Us for Pool Repairs?</h2>
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

        {/* Repair Types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          <div className="bg-gradient-to-br from-[#0D5C6D] to-[#094854] rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-white mb-6">Equipment Repairs</h3>
            <div className="space-y-4">
              {equipmentRepairs.map((repair, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#D4A853] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{repair}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#0D5C6D] to-[#094854] rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-white mb-6">Structural Repairs</h3>
            <div className="space-y-4">
              {structuralRepairs.map((repair, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#D4A853] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{repair}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Common Issues */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Common Issues</span>
            <h2 className="text-3xl font-bold text-[#0F172A] mt-3 mb-4">Common Pool Problems We Fix</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonIssues.map((issue, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                <h4 className="text-lg font-bold text-[#0F172A] mb-2">{issue.problem}</h4>
                <p className="text-gray-600 text-sm"><span className="font-semibold text-[#0D5C6D]">Common causes:</span> {issue.causes}</p>
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
              Pool Problem? We Can Fix It.
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Don't let a broken pump or leak ruin your summer. Contact us for fast, professional pool repair.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 font-semibold py-3.5 px-7 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg group" style={{ background: 'linear-gradient(135deg, #D4A853 0%, #B8923F 100%)', color: '#0F172A' }}>
                Schedule Repair
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:3035557665" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-7 rounded-full transition-all duration-300 border border-white/20">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        <RelatedServices currentService="Pool Repair" />

        </div>
      </section>
    </>
  );
};

export default PoolRepair;
