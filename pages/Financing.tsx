import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Clock, ArrowRight, Phone, CreditCard, DollarSign, Percent, FileCheck, Calculator, BadgeCheck } from 'lucide-react';
import SEO from '../components/SEO';

const Financing: React.FC = () => {
  const benefits = [
    {
      icon: <Percent className="w-6 h-6 text-[#D4A853]" />,
      title: 'Competitive Rates',
      description: 'Access low APR financing options to fit your budget and make your dream pool affordable.'
    },
    {
      icon: <Clock className="w-6 h-6 text-[#D4A853]" />,
      title: 'Quick Approval',
      description: 'Get pre-qualified in minutes with a soft credit check that won\'t affect your score.'
    },
    {
      icon: <CreditCard className="w-6 h-6 text-[#D4A853]" />,
      title: 'Flexible Terms',
      description: 'Choose from multiple loan terms and payment options that work for your financial situation.'
    },
    {
      icon: <Shield className="w-6 h-6 text-[#D4A853]" />,
      title: 'Secure Process',
      description: 'Your information is protected with bank-level security throughout the application process.'
    }
  ];

  const features = [
    'Loans from $1,000 to $100,000+',
    'Terms from 2 to 12 years',
    'Fixed monthly payments',
    'No prepayment penalties',
    'Multiple lender options',
    'Competitive interest rates',
    'Fast funding after approval',
    'Easy online application'
  ];

  const process = [
    {
      step: '01',
      title: 'Check Your Rate',
      description: 'Complete a quick application to see your personalized loan options with no impact to your credit score.'
    },
    {
      step: '02',
      title: 'Compare Options',
      description: 'Review multiple offers from trusted lenders and choose the terms that work best for you.'
    },
    {
      step: '03',
      title: 'Get Approved',
      description: 'Complete the full application with your chosen lender and receive approval, often within 24 hours.'
    },
    {
      step: '04',
      title: 'Start Your Project',
      description: 'Once funded, we begin bringing your dream pool or outdoor living space to life.'
    }
  ];

  const faqs = [
    {
      question: 'What credit score do I need to qualify?',
      answer: 'Hearth works with multiple lenders who have varying requirements. Many homeowners with credit scores of 600+ can find financing options.'
    },
    {
      question: 'Will checking my rate affect my credit score?',
      answer: 'No! The initial rate check uses a soft credit inquiry that does not impact your credit score. A hard inquiry only occurs if you choose to proceed with a full application.'
    },
    {
      question: 'How long does the approval process take?',
      answer: 'Most applicants receive pre-qualification results within minutes. Full approval typically takes 1-3 business days depending on the lender.'
    },
    {
      question: 'Can I pay off my loan early?',
      answer: 'Yes! There are no prepayment penalties, so you can pay off your loan early without any additional fees.'
    }
  ];

  return (
    <>
      <SEO
        title="Pool Financing Parker CO | Easy Payment Options | Aspenwood Pools & Spas"
        description="Affordable financing options for your pool or outdoor living project. Partner with Hearth for competitive rates, flexible terms, and quick approval. Serving Parker, CO and Denver metro."
        keywords="pool financing Parker CO, pool loans Colorado, swimming pool payment plans, Hearth financing, outdoor living financing Denver"
        canonical="https://aspenwoodpools.com/financing"
      />
      <section className="py-20 md:py-28 bg-[#FAFAFA] px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Financing Options</span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-3 mb-6 leading-tight">
                Make Your Dream Pool Affordable
              </h1>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Don't let budget concerns hold you back from creating your perfect backyard oasis. We've partnered with <span className="font-semibold text-[#0D5C6D]">Hearth</span> to offer flexible financing options that make your pool or outdoor living project affordable.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With competitive rates, flexible terms, and a quick approval process, you can get started on your project sooner than you think.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://app.gethearth.com/financing/aspenwood" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-[#0F172A] font-semibold py-3.5 px-7 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-md"
                  style={{ background: 'linear-gradient(135deg, #D4A853 0%, #B8923F 100%)' }}
                >
                  Check Your Rate
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#0D5C6D] text-[#0D5C6D] font-semibold py-3.5 px-7 rounded-full hover:bg-[#0D5C6D] hover:text-white transition-all duration-300"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/Google-Drive-Shared/steven/s1.JPG" 
                alt="Pool Financing - Affordable Payment Options" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#0D5C6D]/10 flex items-center justify-center">
                    <BadgeCheck className="w-6 h-6 text-[#0D5C6D]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Powered by</p>
                    <p className="font-bold text-[#0F172A]">Hearth Financing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Why Finance With Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-3 mb-4">Benefits of Hearth Financing</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#0D5C6D]/20 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-[#0D5C6D]/10 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Financing Features */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#0F172A] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0D5C6D]/30 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <DollarSign className="w-12 h-12 text-[#D4A853] mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Flexible Financing Options</h3>
                <p className="text-gray-300 mb-6">
                  Hearth connects you with multiple lenders so you can compare options and choose the best fit for your budget.
                </p>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#D4A853] flex-shrink-0" />
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Our Partner</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-3 mb-6">About Hearth</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Hearth is a leading home improvement financing platform that connects homeowners with trusted lenders. They've helped thousands of families finance their dream home projects.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With Hearth, you can check your rate in minutes without affecting your credit score. Compare personalized offers from multiple lenders and choose the option that works best for you.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Their secure platform protects your information while providing a seamless application experience from start to finish.
              </p>
              <a 
                href="https://app.gethearth.com/financing/aspenwood" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#0D5C6D] font-semibold hover:text-[#094854] transition-colors"
              >
                Learn More About Hearth
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-3 mb-4">Simple Financing Process</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 h-full">
                  <span className="text-5xl font-bold text-[#0D5C6D]/10">{item.step}</span>
                  <h3 className="text-xl font-bold text-[#0F172A] mt-2 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-[#D4A853]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Common Questions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-3 mb-4">Financing FAQs</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] mx-auto rounded-full"></div>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D5C6D 0%, #094854 100%)' }}>
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#D4A853]/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <Calculator className="w-12 h-12 mx-auto mb-4 text-[#D4A853]" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Check your rate in minutes with no impact to your credit score. See what financing options are available for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://app.gethearth.com/financing/aspenwood" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-semibold py-3.5 px-7 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #D4A853 0%, #B8923F 100%)', color: '#0F172A' }}
              >
                <CreditCard className="w-5 h-5" />
                Check Your Rate Now
              </a>
              <a 
                href="tel:18335737665" 
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-7 rounded-full transition-all duration-300 border border-white/20"
              >
                <Phone className="w-5 h-5" />
                Call: (833) 573-POOL
              </a>
            </div>
          </div>
        </div>

        </div>
      </section>
    </>
  );
};

export default Financing;
