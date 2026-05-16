import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Initialize AOS on every page change
function ScrollToTopAndAOS() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: 'slide',
        once: true
      });
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
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
