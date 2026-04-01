import React from 'react';
import FAQComponent from '../components/FAQ';
import SEO from '../components/SEO';

const FAQ: React.FC = () => {
  return (
    <>
      <SEO
        title="FAQ | Aspenwood Pools & Spas | Pool & Spa Questions Parker CO"
        description="Frequently asked questions about Aspenwood Pools & Spas services. Get answers about pool installation, maintenance, repair, hot tubs, and more. Serving Parker, Castle Rock, and Douglas County."
        keywords="pool FAQ Parker CO, spa questions Colorado, pool maintenance FAQ, hot tub questions Douglas County, pool installation FAQ"
        canonical="https://aspenwoodpools.com/faq"
      />
      <FAQComponent />
    </>
  );
};

export default FAQ;

