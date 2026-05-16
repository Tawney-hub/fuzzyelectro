import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <Link to="/" className="logo d-flex align-items-center">
              <span className="sitename">Fuzzy Electronics</span>
            </Link>
            <div className="footer-contact pt-3">
              <p>Suite 1, Nedlaw Complex</p>
              <p>202 Seke Road, Graniteside, Harare</p>
              <p className="mt-3"><strong>Phone:</strong> <span>+263 712 685 901</span></p>
              <p><strong>Email:</strong> <span>sales@genixsolutions.co.zw</span></p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/services">CCTV Systems</Link></li>
              <li><Link to="/services">Access Control</Link></li>
              <li><Link to="/services">Alarm Systems</Link></li>
              <li><Link to="/services">Electric Fencing</Link></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12 footer-newsletter">
            <h4>Fuzzy Electronics</h4>
            <p>Smart Security • Smart Solutions • Trusted Technology</p>
            <div className="footer-cta mt-4">
              <Link to="/contact" className="btn btn-danger py-2 px-4">Request a Quote</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">Fuzzy Electronics</strong> <span>All Rights Reserved</span></p>
      </div>
    </footer>
  );
};

export default Footer;
