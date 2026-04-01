import React from 'react';
import AboutComponent from '../components/About';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About Aspenwood Pools & Spas | Pool & Spa Services Parker CO"
        description="Learn about Aspenwood Pools & Spas, Parker's trusted pool and spa company. Professional pool installation, maintenance, repair, and hot tub services in Douglas County."
        keywords="about Aspenwood Pools & Spas, pool company Parker CO, spa services Douglas County, pool installation Colorado"
        canonical="https://aspenwoodpools.com/about"
      />
      <AboutComponent />
    </>
  );
};

export default About;

