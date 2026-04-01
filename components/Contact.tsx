import React, { useState, useRef, useEffect } from 'react';
import { Send, Mail, Phone, MapPin, ChevronDown, Clock, Facebook, Instagram, Calendar, Users, Loader2, CheckCircle, X } from 'lucide-react';

interface ContactProps {
  simplified?: boolean;
}

const Contact: React.FC<ContactProps> = ({ simplified = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    message: '',
    smsOptIn: false
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const inquiryOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'quote', label: 'Request a Quote' },
    { value: 'pool-installation', label: 'Pool Installation' },
    { value: 'spa-hot-tub', label: 'Spa & Hot Tub' },
    { value: 'maintenance', label: 'Pool Maintenance' },
    { value: 'repair', label: 'Pool Repair' },
    { value: 'renovation', label: 'Pool Renovation' },
    { value: 'other', label: 'Other' }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectOption = (value: string) => {
    setFormData({
      ...formData,
      inquiryType: value
    });
    setIsDropdownOpen(false);
  };

  const selectedOption = inquiryOptions.find(opt => opt.value === formData.inquiryType) || inquiryOptions[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Map inquiryType to projectType for better API compatibility
      const projectTypeMap: Record<string, string> = {
        'general': 'General Inquiry',
        'quote': 'Request a Quote',
        'pool-installation': 'Pool Installation',
        'spa-hot-tub': 'Spa & Hot Tub',
        'maintenance': 'Pool Maintenance',
        'repair': 'Pool Repair',
        'renovation': 'Pool Renovation',
        'other': 'Other'
      };

      // Send to GoHighLevel via server-side API route (avoids CORS issues)
      try {
        await fetch('/api/contact-webhook', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone || '',
            inquiryType: projectTypeMap[formData.inquiryType] || formData.inquiryType,
            message: formData.message || '',
            smsOptIn: formData.smsOptIn,
          }),
        });
      } catch (ghlError) {
        // Log but don't fail - continue with other submission
        console.error('Error sending to GHL:', ghlError);
      }

      // Prepare submission data for RenoLens
      const submissionData: Record<string, any> = {
        name: formData.name,
        email: formData.email,
        clientId: 'RL-WAWTG568',
        projectType: projectTypeMap[formData.inquiryType] || formData.inquiryType,
        inquiryType: formData.inquiryType,
      };

      // Add optional fields if they have values
      if (formData.phone) {
        submissionData.phone = formData.phone;
      }
      if (formData.message) {
        submissionData.message = formData.message;
      }

      // Submit to RenoLens API
      const response = await fetch('https://www.renolens.com/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Server error: ${response.status}`);
      }

      // Success
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'general',
        message: '',
        smsOptIn: false
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] px-4 md:px-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0D5C6D] rounded-full opacity-[0.02] blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4A853] rounded-full opacity-[0.03] blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-3 mb-4">
            Let's Talk About Your Project
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? Need a quote? Our pool and spa experts are here to help you create your dream backyard oasis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">Contact Information</h3>
              <p className="text-gray-500 mb-8 text-sm">
                Reach out to us through any of these channels.
              </p>

              <div className="space-y-4">
                <a href="tel:3035557665" className="group flex items-center gap-4 p-4 rounded-xl hover:bg-[#0D5C6D]/5 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#0D5C6D] to-[#094854] group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A]">(303) 555-POOL</p>
                    <p className="text-sm text-gray-500">Call for Free Consultation</p>
                  </div>
                </a>

                <a href="mailto:info@aspenwoodpools.com" className="group flex items-center gap-4 p-4 rounded-xl hover:bg-[#0D5C6D]/5 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#0D5C6D] to-[#094854] group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A] break-all">info@aspenwoodpools.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#0D5C6D] to-[#094854]">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A]">Parker, CO 80134</p>
                    <p className="text-sm text-gray-500">Serving Douglas County</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[#0D5C6D] focus:ring-2 focus:ring-[#0D5C6D]/10 transition-all bg-gray-50 focus:bg-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[#0D5C6D] focus:ring-2 focus:ring-[#0D5C6D]/10 transition-all bg-gray-50 focus:bg-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[#0D5C6D] focus:ring-2 focus:ring-[#0D5C6D]/10 transition-all bg-gray-50 focus:bg-white"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="relative" ref={dropdownRef}>
                  <label htmlFor="inquiryType" className="block text-sm font-bold text-gray-900 mb-2.5">
                    Inquiry Type <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="hidden"
                    name="inquiryType"
                    value={formData.inquiryType}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[#0D5C6D] focus:ring-2 focus:ring-[#0D5C6D]/10 transition-all bg-gray-50 hover:bg-white font-medium text-left flex items-center justify-between group"
                  >
                    <span className={formData.inquiryType ? 'text-gray-900' : 'text-gray-400'}>
                      {selectedOption.label}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
                      {inquiryOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleSelectOption(option.value)}
                          className={`w-full px-5 py-3.5 text-left hover:bg-[#0D5C6D]/5 transition-colors ${
                            formData.inquiryType === option.value
                              ? 'bg-[#0D5C6D]/10 text-[#0D5C6D] font-semibold'
                              : 'text-gray-900'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full border border-[#0097A7] rounded-xl px-5 py-3.5 focus:outline-none focus:border-[#0097A7] focus:ring-2 focus:ring-[#0097A7]/10 transition-all resize-none bg-gray-50 focus:bg-white"
                  placeholder="Tell us about your pool or spa project, the services you're interested in, or any questions you have..."
                ></textarea>
              </div>

              {/* SMS Opt-in Checkbox */}
              <div className="mb-6">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="smsOptIn"
                    checked={formData.smsOptIn}
                    onChange={(e) => setFormData({ ...formData, smsOptIn: e.target.checked })}
                    className="mt-1 w-5 h-5 rounded border-2 border-gray-300 text-[#0D5C6D] focus:ring-[#0D5C6D] focus:ring-offset-0 cursor-pointer"
                  />
                  <span className="text-sm text-gray-600 leading-relaxed">
                    I agree to receive SMS/text messages from Aspenwood Pools & Spas for appointment confirmations, reminders, and service updates. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe. View our{' '}
                    <a href="/privacy-policy" className="text-[#0D5C6D] hover:underline font-medium">Privacy Policy</a>
                    {' '}and{' '}
                    <a href="/terms-of-service" className="text-[#0D5C6D] hover:underline font-medium">Terms of Service</a>.
                  </span>
                </label>
              </div>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-green-800 font-medium">
                    Thank you for your message! We'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-start gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-red-800 font-medium mb-1">Error submitting form</p>
                    <p className="text-red-700 text-sm">{errorMessage}</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #0D5C6D 0%, #094854 100%)' }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Store Hours & Location Section - Only show on full Contact page */}
        {!simplified && (
          <>
            <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#0D5C6D] to-[#094854]">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] ml-4">Business Hours</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-900">Monday</span>
                  <span className="text-gray-600">8 AM – 5 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-900">Tuesday</span>
                  <span className="text-gray-600">8 AM – 5 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-900">Wednesday</span>
                  <span className="text-gray-600">8 AM – 5 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-900">Thursday</span>
                  <span className="text-gray-600">8 AM – 5 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-900">Friday</span>
                  <span className="text-gray-600">8 AM – 5 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-900">Saturday</span>
                  <span className="text-gray-600">8 AM – 5 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold text-gray-900">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#0D5C6D] to-[#094854]">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] ml-4">Service Area</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 mb-2">We Serve</p>
                <p className="text-gray-900 font-semibold">Parker & Castle Rock</p>
                <p className="text-gray-900 font-semibold">Douglas County</p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-gray-600 mb-4">
                  We serve Parker, Castle Rock, Lone Tree, Highlands Ranch, and the greater Douglas County area. Contact us to discuss your project.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #0D5C6D 0%, #094854 100%)' }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

                      </>
        )}

      </div>
    </section>
  );
};

export default Contact;

