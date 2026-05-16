import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileNavActive(false);
  }, [location]);

  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive);
    document.body.classList.toggle('mobile-nav-active');
  };

  const isHome = location.pathname === '/';

  return (
    <header id="header" className={`header d-flex align-items-center fixed-top transition-all header-scrolled shadow-sm`}>
      <div className="container-fluid header-bar px-3 px-md-5 d-flex align-items-center justify-content-between">
        
        <Link to="/" className="logo d-flex align-items-center">
          <img src="/assets/img/logo.jpeg" alt="Fuzzy Electronics Logo" className="header-logo" style={{maxHeight: isScrolled ? '28px' : '34px', transition: '0.3s'}} />
        </Link>

        <div className="d-flex align-items-center gap-4">
          <nav id="navmenu" className={`navmenu ${mobileNavActive ? 'active' : ''}`}>
            <ul>
              <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
              <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
              <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li>
              <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
            </ul>
          </nav>
          
          <div className="header-social-links d-none d-md-flex align-items-center gap-3">
            <a href="#" className="facebook"><i className="bi bi-facebook fs-6"></i></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin fs-6"></i></a>
          </div>

          <div className="header-cta d-none d-md-block">
            <Link to="/contact" className="btn btn-danger btn-sm px-4 rounded-pill">Contact</Link>
          </div>

          <i className={`mobile-nav-toggle d-xl-none bi ${mobileNavActive ? 'bi-x' : 'bi-list'} ms-2`} onClick={toggleMobileNav}></i>
        </div>

      </div>
    </header>
  );
};

export default Header;
