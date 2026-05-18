import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Initialize AOS on every page change
function ScrollToTopAndAOS() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.AOS) {
      window.AOS.init({
        duration: 700,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80,
        delay: 0,
        startEvent: 'DOMContentLoaded'
      });
      // Refresh after scroll resets so in-viewport elements animate immediately
      setTimeout(() => window.AOS && window.AOS.refresh(), 100);
    }
  }, [pathname]);

  return null;
}

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Artificial delay to ensure assets are ready and show the clean loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div id="preloader" className="preloader-overlay">
        <div className="loader-container">
          <div className="custom-loader"></div>
          <p className="mt-3 fw-bold text-danger ls-2">FUZZY ELECTRONICS</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTopAndAOS />
      <div className="app-container">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <div className="float-actions">
          <a href="https://wa.me/263789566578" target="_blank" rel="noreferrer" className="float-action float-action--contact" aria-label="WhatsApp Fuzzy Electronics">
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;
