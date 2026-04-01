import React from 'react';
import Hero from '../components/Hero';
import ClientBanner from '../components/ClientBanner';
import Categories from '../components/Categories';
import Difference from '../components/Difference';
import AboutHome from '../components/AboutHome';
import Inspiration from '../components/Inspiration';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import WhiteGloveService from '../components/WhiteGloveService';
import CTABanner from '../components/CTABanner';
import InstagramFeed from '../components/InstagramFeed';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Contact simplified={true} />
      {/* <ClientBanner /> */}
      <Categories />
      <AboutHome />
      <WhiteGloveService />
      <Testimonials />
      <CTABanner />
      <InstagramFeed />
      {/* <Inspiration /> */}
    </>
  );
};

export default Home;

