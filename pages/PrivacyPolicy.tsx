import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | Aspenwood Pools & Spas"
        description="Privacy Policy for Aspenwood Pools & Spas. Learn how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, Aspenwood Pools & Spas"
        canonical="https://aspenwoodpools.com/privacy-policy"
      />
      
      <section className="py-20 md:py-28 bg-[#FAFAFA] px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="mb-12">
            <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">Legal</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-3 mb-4">Privacy Policy</h1>
            <div className="w-16 h-1 bg-gradient-to-r from-[#D4A853] to-[#E4BC6A] rounded-full mb-4"></div>
            <p className="text-gray-600">Last Updated: March 2026</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            
            <p className="lead text-xl text-gray-800 mb-8">
              Aspenwood Pools & Spas ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Fill out our contact form</li>
              <li>Request a quote or schedule a service</li>
              <li>Subscribe to our newsletter or promotional communications</li>
              <li>Contact us via phone, email, or text message</li>
            </ul>
            <p>This information may include:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Property/pool information</li>
              <li>Service preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information, including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Schedule and confirm appointments</li>
              <li>Send appointment reminders and service updates</li>
              <li>Process payments and send invoices</li>
              <li>Send promotional offers and marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. SMS/Text Message Communications</h2>
            <p>If you opt in to receive SMS/text messages from us, you agree to receive text messages regarding:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Appointment confirmations and reminders</li>
              <li>Service updates and notifications</li>
              <li>Responses to your inquiries</li>
              <li>Account and scheduling information</li>
            </ul>
            <p className="mb-4"><strong>Message Frequency:</strong> Message frequency varies based on your interactions with us and your preferences.</p>
            <p className="mb-4"><strong>Message and Data Rates:</strong> Standard message and data rates may apply depending on your mobile carrier and plan.</p>
            <p className="mb-4"><strong>Opt-Out:</strong> You may opt out of receiving text messages at any time by replying STOP to any message. After opting out, you will receive a confirmation message and will no longer receive text messages from us unless you opt in again.</p>
            <p className="mb-4"><strong>Help:</strong> For help, reply HELP to any message or contact us at (833) 573-POOL or info@aspenwoodpools.com.</p>
            <p>We will not share your phone number with third parties for their marketing purposes without your explicit consent.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our business (e.g., payment processors, CRM systems, email services)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Opt out of SMS/text messages by replying STOP</li>
            </ul>
            <p>To exercise these rights, please contact us using the information provided below.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Cookies and Tracking Technologies</h2>
            <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookies through your browser settings. Disabling cookies may affect certain features of our website.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Children's Privacy</h2>
            <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">11. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
            <div className="bg-gray-50 rounded-xl p-6 mt-4 mb-8">
              <p className="font-bold text-gray-900 mb-2">Aspenwood Pools & Spas</p>
              <p>Parker, CO 80134</p>
              <p className="mt-2">
                <strong>Phone:</strong> <a href="tel:18335737665" className="text-[#0D5C6D] hover:underline">(833) 573-POOL</a>
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

export default PrivacyPolicy;
