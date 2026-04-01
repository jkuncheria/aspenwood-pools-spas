import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Breadcrumbs from './components/Breadcrumbs';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import PoolInstallation from './pages/PoolInstallation';
import SpaHotTubs from './pages/SpaHotTubs';
import PoolRepair from './pages/PoolRepair';
import PoolRenovation from './pages/PoolRenovation';
import PoolOpeningClosing from './pages/PoolOpeningClosing';
import AutoCoverInstallation from './pages/AutoCoverInstallation';
import Financing from './pages/Financing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const App: React.FC = () => {
  return (
        <Router>
          <ScrollToTop />
          <Breadcrumbs />
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/pool-installation" element={<PoolInstallation />} />
            <Route path="/spa-hot-tubs" element={<SpaHotTubs />} />
            <Route path="/pool-repair" element={<PoolRepair />} />
            <Route path="/pool-renovation" element={<PoolRenovation />} />
            <Route path="/pool-opening-closing" element={<PoolOpeningClosing />} />
            <Route path="/auto-cover-installation" element={<AutoCoverInstallation />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
      </main>

      <Footer />
    </div>
    </Router>
  );
};

export default App;