import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const TermsOfService: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms of Service | Aspenwood Pools & Spas"
        description="Terms of Service for Aspenwood Pools & Spas. Read our terms and conditions for using our services."
        keywords="terms of service, terms and conditions, Aspenwood Pools & Spas"
        canonical="https://aspenwoodpools.com/terms-of-service"
      />
      
      <section className="py-20 md:py-28 bg-[#FAFAFA] px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="mb-12">
            <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Legal</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-3 mb-4">Terms of Service</h1>
            <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] rounded-full mb-4"></div>
            <p className="text-gray-600">Last Updated: March 2026</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            
            <p className="lead text-xl text-gray-800 mb-8">
              Welcome to Aspenwood Pools & Spas. By accessing our website or using our services, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using the Aspenwood Pools & Spas website (splashmobiledetail.com) or any of our services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website or services.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Services</h2>
            <p>Aspenwood Pools & Spas provides professional pool and spa installation, maintenance, repair, and related services. Our services include but are not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Pool installation and construction</li>
              <li>Spa and hot tub installation</li>
              <li>Pool maintenance and cleaning</li>
              <li>Pool repair services</li>
              <li>Pool renovation and resurfacing</li>
              <li>Pool opening and closing services</li>
              <li>Water testing and chemical balancing</li>
            </ul>
            <p>Service availability, pricing, and scope may vary. We reserve the right to modify our services at any time.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Appointments and Scheduling</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Booking:</strong> Appointments can be scheduled by phone, email, or through our website contact form.</li>
              <li><strong>Confirmation:</strong> All appointments are subject to confirmation by our team.</li>
              <li><strong>Cancellation:</strong> We request at least 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows may be subject to a cancellation fee.</li>
              <li><strong>Access:</strong> Please ensure we have access to your pool area at the scheduled appointment time.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Pricing and Payment</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Quotes:</strong> All quotes are estimates based on the information provided. Final pricing may vary based on the actual condition of the pool or spa and site conditions.</li>
              <li><strong>Payment:</strong> Payment is due upon completion of services unless otherwise agreed upon in writing.</li>
              <li><strong>Methods:</strong> We accept cash, credit cards, and other payment methods as specified at the time of service.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Pool/Spa Condition and Liability</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Pre-existing Damage:</strong> We are not responsible for pre-existing damage, defects, or conditions that may become more visible after service (e.g., cracks, stains, worn surfaces).</li>
              <li><strong>Access and Safety:</strong> Please ensure the pool area is accessible and safe for our technicians. We are not responsible for injuries caused by unsafe conditions.</li>
              <li><strong>Disclosure:</strong> Please inform us of any known issues with your pool or spa, including but not limited to leaks, electrical problems, or structural concerns.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Satisfaction Guarantee</h2>
            <p>We strive for complete customer satisfaction. If you are not satisfied with our work, please contact us within 48 hours of service completion, and we will work to address your concerns. Re-service requests are subject to our evaluation and may be performed at our discretion.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. SMS/Text Message Terms</h2>
            <p>By opting in to receive SMS/text messages from Aspenwood Pools & Spas, you agree to the following:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>You consent to receive automated and non-automated text messages related to your inquiry, appointments, reminders, and service updates.</li>
              <li>Message frequency varies based on your interactions and preferences.</li>
              <li>Message and data rates may apply depending on your mobile carrier and plan.</li>
              <li>You may opt out at any time by replying STOP to any message.</li>
              <li>For help, reply HELP or contact us at (303) 555-POOL.</li>
              <li>Carriers are not liable for delayed or undelivered messages.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Website Use</h2>
            <p>When using our website, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any portion of the website</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Copy, reproduce, or distribute any content without permission</li>
              <li>Submit false or misleading information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, images, and software, is the property of Aspenwood Pools & Spas or its content suppliers and is protected by copyright and other intellectual property laws. You may not use, reproduce, or distribute any content without our prior written consent.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Aspenwood Pools & Spas shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services or website. Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">11. Indemnification</h2>
            <p>You agree to indemnify and hold harmless Aspenwood Pools & Spas, its owners, employees, and agents from any claims, damages, losses, or expenses arising out of your violation of these Terms of Service or your use of our services.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">12. Governing Law</h2>
            <p>These Terms of Service shall be governed by and construed in accordance with the laws of the State of Colorado, without regard to its conflict of law provisions. Any disputes arising under these terms shall be resolved in the courts of Douglas County, Colorado.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">13. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the new terms.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">14. Severability</h2>
            <p>If any provision of these Terms of Service is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">15. Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us at:</p>
            <div className="bg-gray-50 rounded-xl p-6 mt-4 mb-8">
              <p className="font-bold text-gray-900 mb-2">Aspenwood Pools & Spas</p>
              <p>Parker, CO 80134</p>
              <p className="mt-2">
                <strong>Phone:</strong> <a href="tel:3035557665" className="text-[#0D5C6D] hover:underline">(303) 555-POOL</a>
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:info@aspenwoodpools.com" className="text-[#0D5C6D] hover:underline">info@aspenwoodpools.com</a>
              </p>
            </div>

          </div>

          {/* Back to Home */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              to="/" 
              className="inline-flex items-center text-[#0D5C6D] hover:underline font-medium"
            >
              ← Back to Home
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default TermsOfService;
