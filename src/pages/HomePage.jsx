import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const HomePage = () => {
  const heroSlides = [
    {
      image: '/assets/img/fuzzy/integrated_security.jpeg',
      title: 'Engineered Security. Delivered with Precision.',
      lead: 'Fuzzy Electronics provides state-of-the-art surveillance and access control infrastructure tailored for high-stakes environments.'
    },
    {
      image: '/assets/img/fuzzy/monitoring_center.jpeg',
      title: 'Trusted Technology. Smart Solutions.',
      lead: 'Advanced 24/7 monitoring and integrated security systems designed to protect your assets and people with absolute reliability.'
    },
    {
      image: '/assets/img/fuzzy/cctv_cameras.jpeg',
      title: 'Intelligent Surveillance Infrastructure.',
      lead: 'Harness the power of AI-driven CCTV systems for comprehensive perimeter monitoring and asset protection.'
    }
  ];

  return (
    <div className="home-page"> 
      {/* Premium Cinematic Hero Carousel */}
      <section id="hero" className="hero-premium section dark-background p-0">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="hero-swiper h-100"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="hero-slide-item">
                <div className="hero-bg">
                  <img src={slide.image} alt={slide.title} className="ken-burns" />
                  <div className="hero-overlay"></div>
                </div>
                
                <div className="container hero-container">
                  <div className="row justify-content-center text-center">
                    <div className="col-lg-10">
                      <span className="hero-eyebrow text-white">Smart Security • Smart Solutions</span>
                      <h1 className="hero-title mt-3">
                        {index === 0 ? (
                          <>Engineered <span className="text-danger">Security</span>. <br /> Delivered with Precision.</>
                        ) : (
                          <>Trusted <span className="text-danger">Technology</span>. <br /> Smart Solutions.</>
                        )}
                      </h1>
                      <p className="hero-lead mt-4 mx-auto">
                        {slide.lead}
                      </p>
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

      {/* Modern Expertise Section - Image Cards Carousel */}
      <section id="expertise" className="section bg-white pt-0 pb-5">
        <div className="container-fluid px-0">
          <div className="section-title-premium mb-0 text-center" data-aos="fade-up">
            <span className="eyebrow">Our Expertise</span>
            <h2 className="display-5 fw-bold">World-Class Security Solutions</h2>
          </div>
          
          <Swiper
            modules={[Autoplay, FreeMode]}
            autoplay={{ 
              delay: 0, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            loopAdditionalSlides={10}
            speed={10000}
            spaceBetween={30}
            freeMode={true}
            grabCursor={true}
            allowTouchMove={true}
            slidesPerView={1.2}
            centeredSlides={false}
            breakpoints={{
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
              1400: { slidesPerView: 4.2 }
            }}
            className="expertise-swiper-marquee"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {[...Array(3)].map(() => [
              {
                title: "Access Control Systems",
                description: "Control and manage entry to buildings, offices, complexes, and restricted areas.",
                image: "/assets/img/fuzzy/biometric_access.jpeg",
                btnText: "View Access"
              },
              {
                title: "CCTV & Surveillance",
                description: "Advanced monitoring and surveillance solutions for homes, businesses, and industry.",
                image: "/assets/img/fuzzy/cctv_cameras.jpeg",
                btnText: "View CCTV"
              },
              {
                title: "Alarm & Intrusion",
                description: "Protect properties from unauthorized access with real-time integrated monitoring.",
                image: "/assets/img/fuzzy/alarm_system.jpeg",
                btnText: "View Alarms"
              },
              {
                title: "Electric Fencing",
                description: "Reliable perimeter protection for residential, commercial, and industrial properties.",
                image: "/assets/img/fuzzy/electric_fence.jpeg",
                btnText: "View Fencing"
              },
              {
                title: "Gate Automation",
                description: "Smart entrance automation for convenience and high-level perimeter security.",
                image: "/assets/img/fuzzy/gate_automation.jpeg",
                btnText: "View Automation"
              },
              {
                title: "Control Room Solutions",
                description: "Centralized monitoring solutions for advanced security management and surveillance.",
                image: "/assets/img/fuzzy/monitoring_center.jpeg",
                btnText: "View Solutions"
              },
              {
                title: "Fire Detection",
                description: "Safety solutions designed to protect lives and property from fire hazards.",
                image: "/assets/img/fuzzy/fire_alarm_system.jpeg",
                btnText: "View Fire"
              },
              {
                title: "Professional Support",
                description: "Expert installation, maintenance, and 24/7 technical support services.",
                image: "/assets/img/fuzzy/service_van.jpeg",
                btnText: "View Support"
              }
            ]).flat().map((service, index) => (
              <SwiperSlide key={index}>
                <div className="expertise-card">
                  <div className="expertise-img-wrapper">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="expertise-content">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                    <Link to="/services" className="btn-expertise">
                      {service.btnText} <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section bg-light py-5">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="pe-lg-5">
                <h3 className="display-6 fw-bold">Trusted by Industry Leaders</h3>
                <p className="lead text-muted mt-3">
                  With over a decade of experience, we deliver precision engineering in the electronic security space. 
                  Our team ensures every installation is a masterpiece of safety and technology.
                </p>
                <div className="row mt-4 gy-3">
                  <div className="col-sm-6 d-flex align-items-center">
                    <i className="bi bi-patch-check-fill text-danger me-2"></i>
                    <span>Certified Professionals</span>
                  </div>
                  <div className="col-sm-6 d-flex align-items-center">
                    <i className="bi bi-patch-check-fill text-danger me-2"></i>
                    <span>24/7 Technical Support</span>
                  </div>
                  <div className="col-sm-6 d-flex align-items-center">
                    <i className="bi bi-patch-check-fill text-danger me-2"></i>
                    <span>Advanced Hardware</span>
                  </div>
                  <div className="col-sm-6 d-flex align-items-center">
                    <i className="bi bi-patch-check-fill text-danger me-2"></i>
                    <span>Scalable Infrastructure</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="img-wrapper rounded-5 overflow-hidden shadow-2xl">
                <img src="/assets/img/fuzzy/control_room.jpeg" alt="Security Command Center" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
