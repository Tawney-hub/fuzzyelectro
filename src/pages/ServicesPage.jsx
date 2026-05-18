import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const servicesData = [
  {
    num: '01',
    title: 'Access Control Systems',
    description: 'Control and manage entry to buildings, offices, complexes, and restricted areas.',
    image: '/assets/img/fuzzy/biometric_access.jpeg',
    items: [
      'Biometric Fingerprint Readers', 'Facial Recognition Terminals', 'RFID & Card Access Systems',
      'Keypad Door Entry Systems', 'Smart Door Locks', 'Electric & Magnetic Locks',
      'Door Exit Buttons', 'Access Control Panels', 'Time & Attendance Systems',
      'Visitor Management Systems', 'Intercom Systems', 'Video Intercom Systems',
      'Boom Gates', 'Turnstiles', 'Gate Automation Systems'
    ]
  },
  {
    num: '02',
    title: 'CCTV & Surveillance Systems',
    description: 'Advanced monitoring and surveillance solutions for homes, businesses, schools, and industries.',
    image: '/assets/img/fuzzy/cctv_cameras.jpeg',
    items: [
      'IP Cameras', 'HD Analog Cameras', 'Bullet Cameras', 'Dome Cameras',
      'PTZ Cameras', 'Wireless Cameras', 'Night Vision Cameras', 'ANPR Cameras',
      'CCTV DVRs & NVRs', 'Remote Viewing Solutions', 'CCTV Installation & Maintenance',
      'Surveillance Monitoring Systems'
    ]
  },
  {
    num: '03',
    title: 'Alarm & Intrusion Detection Systems',
    description: 'Protect properties from unauthorized access and security threats.',
    image: '/assets/img/fuzzy/alarm_system.jpeg',
    items: [
      'Wireless Alarm Systems', 'Wired Alarm Systems', 'Motion Sensors',
      'PIR Detectors', 'Door & Window Sensors', 'Outdoor Beams',
      'Glass Break Detectors', 'Panic Buttons', 'GSM Alarm Systems',
      'Smart Alarm Systems', 'Sirens & Strobe Lights', 'Alarm Monitoring Solutions'
    ]
  },
  {
    num: '04',
    title: 'Electric Fencing Solutions',
    description: 'Reliable perimeter protection for residential, commercial, and industrial properties.',
    image: '/assets/img/fuzzy/electric_fence.jpeg',
    items: [
      'Electric Fence Energizers', 'Electric Fence Installation', 'Razor Wire Systems',
      'Wall Top Electric Fencing', 'Perimeter Security Systems',
      'Fence Maintenance & Repairs', 'Solar Electric Fence Systems'
    ]
  },
  {
    num: '05',
    title: 'Gate Automation & Barrier Systems',
    description: 'Smart entrance automation for maximum convenience and security.',
    image: '/assets/img/fuzzy/gate_automation.jpeg',
    items: [
      'Sliding Gate Motors', 'Swing Gate Motors', 'Boom Gate Systems',
      'Remote Gate Controls', 'GSM Gate Opening Solutions',
      'Automated Garage Doors', 'Parking Barrier Systems'
    ]
  },
  {
    num: '06',
    title: 'Control Room & Monitoring Solutions',
    description: 'Centralized monitoring solutions for advanced security management and surveillance.',
    image: '/assets/img/fuzzy/monitoring_center.jpeg',
    items: [
      'Guard Rooms', 'Security Control Rooms', 'Video Wall Displays',
      'CCTV Monitoring Stations', 'Multi-Screen Surveillance Systems', 'Command Centers',
      'Remote Monitoring Solutions', 'Surveillance Workstations',
      '24/7 Monitoring Setups', 'Integrated Security Monitoring Systems'
    ]
  },
  {
    num: '07',
    title: 'Fire Detection & Safety Systems',
    description: 'Safety solutions designed to protect lives and property from fire hazards.',
    image: '/assets/img/fuzzy/fire_safety.jpeg',
    items: [
      'Fire Alarm Systems', 'Smoke Detectors', 'Heat Detectors',
      'Fire Suppression Systems', 'Emergency Exit Systems', 'Fire Safety Installations'
    ]
  },
  {
    num: '08',
    title: 'Installation, Maintenance & Support',
    description: 'Professional technical support and comprehensive after-sales services.',
    image: '/assets/img/fuzzy/service_van.jpeg',
    items: [
      'Supply of Security Equipment', 'Professional Installation', 'System Configuration',
      'Maintenance & Repairs', 'Technical Support', 'System Upgrades',
      'Site Assessments', 'Security Consultations', 'Annual Service Contracts'
    ]
  }
];

const ServicesPage = () => {
  return (
    <>
      <PageHero
        image="/assets/img/fuzzy/integrated_security.jpeg"
        eyebrow="Solutions"
        title="Our Services & Products"
        lead="Comprehensive security solutions tailored for residential, commercial, and industrial needs."
        breadcrumbs={[{ label: 'Services', current: true }]}
      />

      {/* Intro strip */}
      <div className="svc-intro-strip">
        <div className="container">
          <div className="row align-items-center gy-3">
            <div className="col-lg-7">
              <h2 className="svc-intro-strip__heading">
                Fuzzy Electronics — Product &amp; Service Categories
              </h2>
              <p className="svc-intro-strip__sub">
                Smart Security • Smart Solutions • Trusted Technology
              </p>
            </div>
            <div className="col-lg-5 text-lg-end">
              <Link to="/contact" className="btn btn-danger px-5 py-3 rounded-pill me-2">
                Request a Quote
              </Link>
              <Link to="/contact" className="btn btn-outline-light px-5 py-3 rounded-pill">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services grid */}
      <section className="svc-grid-section">
        <div className="container">
          <div className="row g-4">
            {servicesData.map((svc, i) => (
              <div className="col-lg-6" key={i}>
                <div className="svc-card">

                  {/* Image */}
                  <div className="svc-card__img-wrap">
                    <img src={svc.image} alt={svc.title} className="svc-card__img" />
                    <div className="svc-card__img-overlay" />
                    <span className="svc-card__num">{svc.num}</span>
                    <div className="svc-card__img-bar" />
                  </div>

                  {/* Body */}
                  <div className="svc-card__body">
                    <h3 className="svc-card__title">{svc.title}</h3>
                    <p className="svc-card__desc">{svc.description}</p>

                    <p className="svc-card__label">Products &amp; Solutions</p>
                    <ul className="svc-card__list">
                      {svc.items.map((item, j) => (
                        <li key={j} className="svc-card__item">
                          <i className="bi bi-check-circle-fill svc-card__check"></i>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact" className="svc-card__cta">
                      Get a Quote <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="svc-cta-section">
        <div className="container text-center">
          <h2 className="svc-cta__heading">Need a Custom Security Solution?</h2>
          <p className="svc-cta__sub">Our specialists will assess your site and design a system tailored to your exact needs.</p>
          <Link to="/contact" className="btn btn-danger btn-lg px-6 py-3 rounded-pill mt-3">
            Talk to an Expert
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
