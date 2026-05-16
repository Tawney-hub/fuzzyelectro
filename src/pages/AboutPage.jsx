import React from 'react';
import PageHero from '../components/PageHero';

const AboutPage = () => {
  return (
    <>
      <PageHero 
        image="/assets/img/fuzzy/service_van.jpeg"
        eyebrow="Company"
        title="About Fuzzy Electronics"
        lead="Your trusted partner in integrated electronic security and surveillance since day one."
        breadcrumbs={[{ label: 'About', current: true }]}
      />

      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="content">
                <h3>Our Mission</h3>
                <p>
                  To provide intelligent, reliable, and scalable security solutions designed 
                  to protect people, assets, infrastructure, and critical information. 
                  We believe in leveraging the latest technology to deliver peace of mind.
                </p>
                <ul className="list-unstyled mt-4">
                  <li className="d-flex mb-3">
                    <i className="bi bi-check-circle-fill text-danger me-3"></i>
                    <span>Professional Site Assessments & Security Consultations</span>
                  </li>
                  <li className="d-flex mb-3">
                    <i className="bi bi-check-circle-fill text-danger me-3"></i>
                    <span>Expert System Configuration & Professional Installation</span>
                  </li>
                  <li className="d-flex mb-3">
                    <i className="bi bi-check-circle-fill text-danger me-3"></i>
                    <span>24/7 Technical Support & Annual Service Contracts</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <img src="/assets/img/fuzzy/control_room.jpeg" alt="Control Room" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container text-center">
          <div className="section-title">
            <h2>Why Choose Us?</h2>
          </div>
          <div className="row gy-4">
            <div className="col-md-4">
              <div className="p-4 bg-white shadow-sm rounded h-100">
                <i className="bi bi-award text-danger fs-1 mb-3"></i>
                <h5>Quality Equipment</h5>
                <p>We supply only the highest-performance security hardware from trusted global brands.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-white shadow-sm rounded h-100">
                <i className="bi bi-tools text-danger fs-1 mb-3"></i>
                <h5>Expert Installation</h5>
                <p>Our technicians are highly trained to ensure every system is configured for maximum efficiency.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-white shadow-sm rounded h-100">
                <i className="bi bi-headset text-danger fs-1 mb-3"></i>
                <h5>Ongoing Support</h5>
                <p>We offer comprehensive maintenance and repairs to keep your security systems running 24/7.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
