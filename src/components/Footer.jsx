import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <Link to="/" className="logo d-flex align-items-center">
              <span className="sitename" style={{ fontSize: '26px', fontWeight: '800', letterSpacing: '0.5px' }}>Fuzzy Electronics</span>
            </Link>
            <div className="footer-contact pt-3">
              <p>9 Belfast Road, Emerald Hill</p>
              <p>Harare, Zimbabwe</p>
              <p className="mt-3"><strong>Phone:</strong> <span>+263 867 700 8879</span></p>
              <p><strong>Landline:</strong> <span>+263 867 708 879</span></p>
              <p><strong>Email:</strong> <span>marketing@fuzzy.co.zw</span></p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links-grid">
            <h5>Useful Links</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/about">Projects</Link></li>
              <li><Link to="/about">Team Members</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links-grid">
            <h5>Our Services</h5>
            <ul>
              <li><Link to="/services">CCTV Systems</Link></li>
              <li><Link to="/services">Access Control</Link></li>
              <li><Link to="/services">Alarm Systems</Link></li>
              <li><Link to="/services">Electric Fencing</Link></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12 footer-cta">
            <h5>Fuzzy Electronics</h5>
            <p className="tagline">Smart Security • Smart Solutions • Trusted Technology</p>
            <div className="mt-4">
              <Link to="/contact" className="btn-outline">Request a Quote</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>© Copyright <strong className="px-1 sitename">Fuzzy Electronics</strong>. All Rights Reserved</p>
            <div className="credits">
              Smart Solutions • Trusted Technology
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
