import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

const heroSlides = [
  {
    image: '/assets/img/fuzzy/integrated_security.jpeg',
    title: <>Engineered <span className="text-danger">Security</span>.<br />Delivered with Precision.</>,
    lead: 'Fuzzy Electronics provides state-of-the-art surveillance and access control infrastructure tailored for high-stakes environments.'
  },
  {
    image: '/assets/img/fuzzy/monitoring_center.jpeg',
    title: <>Trusted <span className="text-danger">Technology</span>.<br />Smart Solutions.</>,
    lead: 'Advanced 24/7 monitoring and integrated security systems designed to protect your assets and people with absolute reliability.'
  },
  {
    image: '/assets/img/fuzzy/cctv_cameras.jpeg',
    title: <>Intelligent <span className="text-danger">Surveillance</span>.<br />Infrastructure.</>,
    lead: 'Harness the power of AI-driven CCTV systems for comprehensive perimeter monitoring and asset protection.'
  }
];

const expertiseCards = [
  { title: "Access Control Systems", description: "Control and manage entry to buildings, offices, complexes, and restricted areas.", image: "/assets/img/fuzzy/biometric_access.jpeg", btnText: "View Access" },
  { title: "CCTV & Surveillance", description: "Advanced monitoring and surveillance solutions for homes, businesses, and industry.", image: "/assets/img/fuzzy/cctv_cameras.jpeg", btnText: "View CCTV" },
  { title: "Alarm & Intrusion", description: "Protect properties from unauthorized access with real-time integrated monitoring.", image: "/assets/img/fuzzy/alarm_system.jpeg", btnText: "View Alarms" },
  { title: "Electric Fencing", description: "Reliable perimeter protection for residential, commercial, and industrial properties.", image: "/assets/img/fuzzy/electric_fence.jpeg", btnText: "View Fencing" },
  { title: "Gate Automation", description: "Smart entrance automation for convenience and high-level perimeter security.", image: "/assets/img/fuzzy/gate_automation.jpeg", btnText: "View Automation" },
  { title: "Control Room Solutions", description: "Centralized monitoring solutions for advanced security management and surveillance.", image: "/assets/img/fuzzy/monitoring_center.jpeg", btnText: "View Solutions" },
  { title: "Fire Detection", description: "Safety solutions designed to protect lives and property from fire hazards.", image: "/assets/img/fuzzy/fire_alarm_system.jpeg", btnText: "View Fire" },
  { title: "Professional Support", description: "Expert installation, maintenance, and 24/7 technical support services.", image: "/assets/img/fuzzy/service_van.jpeg", btnText: "View Support" }
];

const solutions = [
  { icon: 'bi-building', title: 'Building Management', desc: 'Unified platform integrating access, CCTV, fire, and automation across entire facilities.' },
  { icon: 'bi-wifi', title: 'IoT Sensor Networks', desc: 'Smart sensor mesh for real-time environmental and perimeter data capture at scale.' },
  { icon: 'bi-fingerprint', title: 'Biometric Verification', desc: 'Multi-factor biometric authentication for highest-security access environments.' },
  { icon: 'bi-camera-video-fill', title: '4K Ultra Surveillance', desc: 'Crystal-clear 4K IP cameras with AI-powered object recognition and license plate reading.' },
  { icon: 'bi-volume-up-fill', title: 'IP Audio Systems', desc: 'Networked intercom and PA systems integrated with your security infrastructure.' },
  { icon: 'bi-cloud-fill', title: 'Cloud Management', desc: 'Remotely manage, monitor, and audit all your security systems from any device, anywhere.' },
  { icon: 'bi-robot', title: 'AI-Driven Analytics', desc: 'Machine learning video analytics for crowd detection, anomaly alerts, and behavioral analysis.' },
  { icon: 'bi-lightning-charge-fill', title: 'Electric Perimeter', desc: 'High-voltage perimeter energizers with remote monitoring and instant breach alerts.' },
  { icon: 'bi-fire', title: 'Fire & Life Safety', desc: 'Complete fire detection and suppression systems designed to safeguard lives and assets.' }
];

const newsItems = [
  {
    image: '/assets/img/fuzzy/fire_alarm_system.jpeg',
    date: 'Apr 2025',
    category: 'IoT',
    title: 'Next-Gen IoT Sensors Reshape Perimeter Security',
    excerpt: 'Distributed sensor networks are revolutionising how organisations detect and respond to perimeter breaches — faster, smarter, and with fewer false alarms.',
    detailTitle: 'Next-Gen IoT Sensors Reshape Perimeter Security',
    detailText: 'Distributed sensor networks are revolutionising how organisations detect and respond to perimeter breaches — faster, smarter, and with fewer false alarms.',
    isPopup: true
  },
  {
    image: '/assets/img/fuzzy/monitoring_center.jpeg',
    date: 'Mar 2025',
    category: 'Cloud',
    title: 'Cloud Video Management: The Future is Now',
    excerpt: 'Modern cloud VMS platforms eliminate on-premise server costs and deliver instant remote access to footage from any device, any time.',
    detailTitle: 'Cloud Video Management: The Future is Now',
    detailText: 'Modern cloud VMS platforms eliminate on-premise server costs and deliver instant remote access to footage from any device, any time.',
    isPopup: true
  },
  {
    image: '/assets/img/fuzzy/intrusion_detection.jpeg',
    date: 'Feb 2025',
    category: 'AI',
    title: 'AI-Powered Perimeter Protection Solutions',
    excerpt: 'Artificial intelligence is transforming traditional fencing and beam systems into intelligent barriers that distinguish real threats from noise.',
    detailTitle: 'AI-Powered Perimeter Protection Solutions',
    detailText: 'Artificial intelligence is transforming traditional fencing and beam systems into intelligent barriers that distinguish real threats from noise.',
    isPopup: true
  },
  {
    image: '/assets/img/fuzzy/monitoring_center.jpeg',
    date: 'May 2026',
    category: 'Zimbabwe',
    title: 'Zimbabwe Security Deployment Enhances Border and City Surveillance',
    excerpt: 'A Zimbabwe-based infrastructure rollout advances perimeter detection with AI-enabled cameras, biometric access, and cloud-managed operations.',
    detailTitle: 'Zimbabwe Security Deployment Enhances Border and City Surveillance',
    detailText: 'A Zimbabwe-based infrastructure rollout advances perimeter detection with AI-enabled cameras, biometric access, and cloud-managed operations.',
    isPopup: true
  }
];

const HomePage = () => {
  const [activeNews, setActiveNews] = useState(null);

  const handleNewsClick = (item) => {
    if (item.isPopup) {
      setActiveNews(item);
    }
  };

  const closeNewsModal = () => setActiveNews(null);

  return (
    <div className="home-page">

      {/* Hero */}
      <section id="hero" className="hero-premium section dark-background p-0">
        <Swiper
          modules={[Autoplay, EffectCreative, Pagination]}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [-150, 0, -200],
              rotate: [0, 20, 0],
              opacity: 0.6
            },
            next: {
              shadow: true,
              translate: [150, 0, -200],
              rotate: [0, -20, 0],
              opacity: 0.8
            }
          }}
          autoplay={{ delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          grabCursor={true}
          loop={true}
          speed={1200}
          className="hero-swiper h-100"
        >
          {heroSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="hero-slide-item">
                <div className="hero-bg">
                  <img src={slide.image} alt="" className="ken-burns" />
                  <div className="hero-overlay"></div>
                </div>
                <div className="container hero-container">
                  <div className="row justify-content-center text-center">
                    <div className="col-lg-10">
                      <span className="hero-eyebrow text-white">Smart Security • Smart Solutions</span>
                      <h1 className="hero-title mt-3">{slide.title}</h1>
                      <p className="hero-lead mt-4 mx-auto">{slide.lead}</p>
                      <div className="hero-actions d-flex justify-content-center gap-3 mt-5">
                        <Link to="/contact" className="btn btn-danger btn-lg px-5 py-3 rounded-pill shadow-lg">Get Expert Quote</Link>
                        <Link to="/services" className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill">Explore Solutions</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="container-fluid px-0">
          <div className="stats-bar__inner">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '10+', label: 'Years Experience' },
              { value: '24/7', label: 'Technical Support' },
              { value: '100%', label: 'Certified Professionals' }
            ].map((stat, i) => (
              <div className="stats-bar__item" key={i}>
                <span className="stats-bar__value">{stat.value}</span>
                <span className="stats-bar__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Marquee — CSS infinite scroll, no gaps ever */}
      <section id="expertise" className="expertise-section bg-white pt-0 pb-5">
        <div className="container-fluid px-0">
          <div className="section-title-premium mb-0 text-center" data-aos="fade-up">
            <span className="eyebrow">Our Expertise</span>
            <h2 className="display-5 fw-bold">World-Class Security Solutions</h2>
          </div>
          <div className="marquee-viewport">
            <div className="marquee-track">
              {/* Render twice — animation moves exactly 50%, loop is invisible */}
              {[...expertiseCards, ...expertiseCards].map((s, i) => (
                <div className="expertise-card marquee-card" key={i}>
                  <div className="expertise-img-wrapper">
                    <img src={s.image} alt={s.title} />
                  </div>
                  <div className="expertise-content">
                    <h4>{s.title}</h4>
                    <p>{s.description}</p>
                    <Link to="/services" className="btn-expertise">
                      {s.btnText} <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section bg-light py-5">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="pe-lg-5">
                <span className="trust-eyebrow">Who We Are</span>
                <h3 className="display-6 fw-bold mt-2">Trusted by Industry Leaders</h3>
                <p className="lead text-muted mt-3">
                  With over a decade of experience, we deliver precision engineering in the electronic security space.
                  Our team ensures every installation is a masterpiece of safety and technology.
                </p>
                <div className="row mt-4 gy-3">
                  {['Certified Professionals', '24/7 Technical Support', 'Advanced Hardware', 'Scalable Infrastructure'].map((item, i) => (
                    <div className="col-sm-6 d-flex align-items-center" key={i}>
                      <i className="bi bi-patch-check-fill text-danger me-2"></i>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <Link to="/about" className="btn btn-danger px-5 py-3 rounded-pill me-3">Learn More</Link>
                  <Link to="/contact" className="btn btn-outline-dark px-5 py-3 rounded-pill">Contact Us</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="trust-img-wrap">
                <img src="/assets/img/fuzzy/monitoring_center.jpeg" alt="Security Command Center" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="section solutions-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="solutions-eyebrow">Integrated Platforms</span>
            <h2 className="display-5 fw-bold mt-2">Advanced Security Solutions</h2>
            <p className="text-muted mt-3 mx-auto" style={{maxWidth: '600px'}}>
              Nine specialised technology platforms working in concert to protect what matters most.
            </p>
          </div>
          <div className="row gy-4">
            {solutions.map((sol, i) => (
              <div className="col-lg-4 col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 60}>
                <div className="solution-card">
                  <div className="solution-card__icon">
                    <i className={`bi ${sol.icon}`}></i>
                  </div>
                  <h5 className="solution-card__title">{sol.title}</h5>
                  <p className="solution-card__desc">{sol.desc}</p>
                  <Link to="/services" className="solution-card__link">
                    Learn more <i className="bi bi-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="section news-section bg-white">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="solutions-eyebrow">Latest Updates</span>
            <h2 className="display-5 fw-bold mt-2">Industry Insights & News</h2>
          </div>
          <div className="row gy-4">
            {newsItems.map((item, i) => (
              <div className="col-12" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="news-card" onClick={() => handleNewsClick(item)}>
                  <div className="news-card__img">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="news-card__body">
                    <div className="news-card__meta">
                      <span className="news-card__cat">{item.category}</span>
                      <span className="news-card__date"><i className="bi bi-calendar3 me-1"></i>{item.date}</span>
                    </div>
                    <h4 className="news-card__title">{item.title}</h4>
                    <p className="news-card__excerpt">{item.excerpt}</p>
                    <a href="#" className="news-card__link" onClick={(e) => { e.preventDefault(); handleNewsClick(item); }}>Read More <i className="bi bi-arrow-right ms-1"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeNews && (
        <div className="news-modal" role="dialog" aria-modal="true">
          <div className="news-modal__backdrop" onClick={closeNewsModal}></div>
          <div className="news-modal__content" data-aos="zoom-in">
            <button className="news-modal__close" onClick={closeNewsModal} aria-label="Close news popup">
              <i className="bi bi-x-lg"></i>
            </button>
            <div className="news-modal__header">
              <span className="news-modal__category">{activeNews.category}</span>
              <h3>{activeNews.detailTitle || activeNews.title}</h3>
              <p className="news-modal__date"><i className="bi bi-calendar3 me-1"></i>{activeNews.date}</p>
            </div>
            <div className="news-modal__body">
              <img src={activeNews.image} alt={activeNews.detailTitle || activeNews.title} />
              <p>{activeNews.detailText || activeNews.excerpt}</p>
            </div>
            <div className="news-modal__footer">
              <button className="btn btn-danger px-4 py-2" onClick={closeNewsModal}>Close</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default HomePage;
