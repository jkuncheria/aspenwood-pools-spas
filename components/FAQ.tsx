import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      category: 'General Questions',
      questions: [
        {
          question: 'How quickly will you respond to my inquiry?',
          answer: 'We typically respond to all inquiries within 24 hours. For urgent matters or immediate assistance, please call us directly at (303) 555-POOL. Our team is available to help with all your pool and spa needs.'
        },
        {
          question: 'Do you offer free estimates?',
          answer: 'Yes! We offer free, no-obligation estimates for all pool and spa services. Our experts will assess your project, discuss your needs, and provide a detailed quote with transparent pricing. Schedule a consultation today to get started.'
        },
        {
          question: 'What areas do you serve?',
          answer: 'We proudly serve Parker, Castle Rock, Lone Tree, Highlands Ranch, Centennial, Aurora, and the greater Douglas County area. Contact us to confirm if we service your specific location!'
        },
        {
          question: 'Are you licensed and insured?',
          answer: 'Yes, Aspenwood Pools & Spas is fully licensed and insured. We carry comprehensive liability insurance and workers\' compensation coverage for your peace of mind.'
        }
      ]
    },
    {
      category: 'Pool Installation',
      questions: [
        {
          question: 'What types of pools do you install?',
          answer: 'We install in-ground gunite (concrete) pools, fiberglass pools, and vinyl liner pools. Each type has its advantages, and we\'ll help you choose the best option for your backyard, budget, and lifestyle.'
        },
        {
          question: 'How long does pool installation take?',
          answer: 'A typical in-ground pool installation takes 8-12 weeks from start to finish, depending on the complexity of the design, weather conditions, and permit processing times. We\'ll provide a detailed timeline during your consultation.'
        },
        {
          question: 'Do you handle permits?',
          answer: 'Yes! We handle all necessary permits and inspections as part of our pool installation service. We\'re familiar with local building codes and requirements in Douglas County and surrounding areas.'
        },
        {
          question: 'Can you add features like waterfalls or lighting?',
          answer: 'Absolutely! We can incorporate a wide range of features including waterfalls, fountains, LED lighting, fire features, swim-up bars, tanning ledges, and smart pool automation. Let us know your vision and we\'ll make it happen.'
        }
      ]
    },
    {
      category: 'Pool Maintenance',
      questions: [
        {
          question: 'How often should my pool be serviced?',
          answer: 'We recommend weekly service during swim season to maintain proper water chemistry and cleanliness. This includes skimming, vacuuming, brushing, chemical balancing, and equipment checks. Off-season service frequency depends on whether your pool is covered.'
        },
        {
          question: 'What\'s included in weekly maintenance?',
          answer: 'Our weekly service includes skimming debris, vacuuming the pool floor, brushing walls and tile, emptying skimmer and pump baskets, testing and balancing water chemistry, inspecting equipment, and providing a service report.'
        },
        {
          question: 'Do you provide the chemicals?',
          answer: 'Yes, chemicals are included in our maintenance plans. We use professional-grade products and adjust chemical levels as needed to keep your water safe, clear, and balanced.'
        },
        {
          question: 'Can I do my own maintenance?',
          answer: 'Of course! We\'re happy to teach you proper pool care techniques. We also offer water testing services and can provide chemicals and supplies if you prefer to maintain your pool yourself.'
        }
      ]
    },
    {
      category: 'Repairs & Renovation',
      questions: [
        {
          question: 'What pool repairs do you handle?',
          answer: 'We repair pumps, filters, heaters, salt systems, automation controls, lights, plumbing leaks, and structural issues. If something\'s wrong with your pool, we can diagnose and fix it.'
        },
        {
          question: 'How do I know if my pool needs resurfacing?',
          answer: 'Signs include rough or stained surfaces, visible cracks, plaster flaking or peeling, difficulty balancing chemicals, and water loss. Most pool surfaces last 10-15 years before needing refinishing.'
        },
        {
          question: 'Can you convert my pool to saltwater?',
          answer: 'Yes! Saltwater conversion is a popular upgrade. We\'ll install a salt chlorine generator and make any necessary adjustments to your equipment. Saltwater pools are gentler on skin and eyes and require less chemical handling.'
        },
        {
          question: 'Do you offer emergency repair services?',
          answer: 'Yes, we offer priority service for urgent repairs like major leaks, pump failures, or equipment malfunctions. Call us and we\'ll get to you as quickly as possible.'
        }
      ]
    },
    {
      category: 'Hot Tubs & Spas',
      questions: [
        {
          question: 'Do you sell hot tubs?',
          answer: 'Yes! We carry a selection of quality hot tubs and can help you choose the right size and features for your needs. We handle delivery, installation, and ongoing service.'
        },
        {
          question: 'How often should a hot tub be drained?',
          answer: 'We recommend draining and refilling your hot tub every 3-4 months, depending on usage. Regular water changes help maintain water quality and extend the life of your spa.'
        },
        {
          question: 'Can you service any brand of hot tub?',
          answer: 'We service most major hot tub brands. Our technicians are experienced with a wide range of makes and models. Contact us with your spa\'s brand and model for confirmation.'
        },
        {
          question: 'What maintenance does a hot tub need?',
          answer: 'Hot tubs need regular water testing and chemical balancing, filter cleaning, cover care, and periodic draining. We offer maintenance plans to keep your spa in perfect condition year-round.'
        }
      ]
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Flatten all FAQs for easier management
  const allFaqs = faqs.flatMap(category => category.questions);

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] px-4 md:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-3 mb-4">
            Frequently Asked Questions
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our pool and spa services. 
            Can't find what you're looking for? <Link to="/contact" className="font-semibold text-[#0D5C6D] hover:underline">Contact us</Link> and we'll be happy to help.
          </p>
        </div>

        {/* FAQ Categories */}
        {faqs.map((category, categoryIdx) => (
          <div key={categoryIdx} className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#0D5C6D]/10 rounded-xl flex items-center justify-center mr-4">
                <HelpCircle className="w-6 h-6 text-[#D4A853]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A]">{category.category}</h2>
            </div>
            
            <div className="space-y-4">
              {category.questions.map((faq, idx) => {
                const globalIndex = faqs.slice(0, categoryIdx).reduce((acc, cat) => acc + cat.questions.length, 0) + idx;
                return (
                  <div 
                    key={idx}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all hover:border-[#0D5C6D]/20 hover:shadow-md"
                  >
                    <button
                      onClick={() => toggleFaq(globalIndex)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-bold text-[#0F172A] text-lg pr-4">{faq.question}</span>
                      {openFaq === globalIndex ? (
                        <ChevronUp className="w-5 h-5 flex-shrink-0 text-[#0D5C6D]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === globalIndex && (
                      <div className="px-6 pb-5">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="mt-20 bg-[#0F172A] rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#0D5C6D]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#D4A853]/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Our pool and spa experts are here to help. Contact us today and we'll answer any questions you have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center gap-2 font-semibold py-3.5 px-7 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #D4A853 0%, #B8923F 100%)', color: '#0F172A' }}
              >
                Contact Us
              </Link>
              <a 
                href="tel:3035557665"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-7 rounded-full transition-all duration-300 border border-white/20"
              >
                Call (303) 555-POOL
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;

