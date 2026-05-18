import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileNavActive(false);
    document.body.classList.remove('mobile-nav-active');
  }, [location]);

  const toggleMobileNav = () => {
    const next = !mobileNavActive;
    setMobileNavActive(next);
    document.body.classList.toggle('mobile-nav-active', next);
  };

  return (
    <div className="header-shell fixed-top">

      {/* Top Info Strip — desktop only */}
      <div className="header-topstrip d-none d-lg-block">
        <div className="container-fluid px-3 px-md-5">
          <div className="header-topstrip__inner">
            <a href="mailto:marketing@fuzzy.co.zw" className="header-topstrip__link">
              <i className="bi bi-envelope-fill"></i> marketing@fuzzy.co.zw
            </a>
            <div className="header-topstrip__contact-group">
              <a href="tel:+2638677008879" className="header-topstrip__link">
                <i className="bi bi-telephone-fill"></i> +263 867 700 8879
              </a>
              <a href="tel:+263867708879" className="header-topstrip__link">
                <i className="bi bi-telephone-fill"></i> +263 867 708 879
              </a>
            </div>
            <span className="header-topstrip__text">
              <i className="bi bi-geo-alt-fill"></i> 9 Belfast Road, Emerald Hill
            </span>
            <div className="ms-auto d-flex align-items-center gap-3">
              <a href="#" className="header-topstrip__link" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="header-topstrip__link" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <header id="header" className={`header d-flex align-items-center${isScrolled ? ' header-scrolled shadow-sm' : ''}`}>
        <div className="container-fluid px-3 px-md-5 d-flex align-items-center justify-content-between w-100">

          {/* Logo — left */}
          <Link to="/" className="logo d-flex align-items-center">
            <img
              src="/assets/img/logo.jpeg"
              alt="Fuzzy Electronics"
              className="header-logo"
              style={{ maxHeight: isScrolled ? '28px' : '34px', transition: '0.3s' }}
            />
          </Link>

          {/* Right side group */}
          <div className="d-flex align-items-center gap-3">

            {/* navmenu — desktop inline / mobile full-screen overlay */}
            <nav id="navmenu" className={`navmenu${mobileNavActive ? ' active' : ''}`}>
              <div className="mobile-nav-brand d-lg-none">
                <img src="/assets/img/logo.jpeg" alt="Fuzzy Electronics" />
                <p>Smart Security • Smart Solutions • Trusted Technology</p>
              </div>
              <ul>
                {[
                  { path: '/', label: 'Home', short: 'Home' },
                  { path: '/services', label: 'Products and Services', short: 'Services' },
                  { path: '/about', label: 'About', short: 'About' },
                  { path: '/#news', label: 'News & Blogs', short: 'News & Blogs' },
                  { path: '/contact', label: 'Contact', short: 'Contact' },
                ].map(({ path, label, short }) => (
                  <li key={label}>
                    {label === 'News & Blogs' ? (
                      <a href="/#news" className={location.pathname === '/' ? 'active' : ''}>
                        <span className="d-lg-none">{short}</span>
                        <span className="d-none d-lg-block">{label}</span>
                      </a>
                    ) : (
                      <Link to={path} className={location.pathname === path ? 'active' : ''}>
                        <span className="d-lg-none">{short}</span>
                        <span className="d-none d-lg-block">{label}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mobile-nav-socials d-lg-none">
                <div className="social-links">
                  <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                  <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="header-cta d-none d-lg-block">
              <Link to="/contact" className="btn btn-danger btn-sm px-4 rounded-pill">Get a Quote</Link>
            </div>

            {/* Hamburger — mobile only, always on the right */}
            <i
              className={`mobile-nav-toggle d-lg-none bi ${mobileNavActive ? 'bi-x' : 'bi-list'}`}
              onClick={toggleMobileNav}
              style={{ order: 99 }}
            ></i>

          </div>

        </div>
      </header>
    </div>
  );
};

export default Header;
