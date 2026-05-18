import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const servicesProvided = [
  {
    title: 'Home Solutions',
    description: 'Offering customized security assessments and installations for residential properties to enhance safety.'
  },
  {
    title: 'Business Security',
    description: 'Providing tailored security solutions, risk assessments, and monitoring for businesses to protect assets.'
  },
  {
    title: 'Management Systems',
    description: 'Implementing and refining security management frameworks to ensure effective protocols and response strategies.'
  },
  {
    title: 'Risk Assessment and Security Consulting',
    description: 'Identifying vulnerabilities on client property and creating customized security plans.'
  },
  {
    title: 'Event Security',
    description: 'Engaging and educating communities on safety practices and crime prevention initiatives.'
  }
];

const teamMembers = [
  { name: 'Primrose Musabayana', role: 'Director, Shareholder', description: 'One of the co-founders, director and shareholder of Fuzzy Electronics.' },
  { name: 'Shawn Granger', role: 'Technical Operations Manager', description: 'Oversees installation, monitoring and technical quality across all projects.' },
  { name: 'Bridgette Mtimukulu', role: 'Sales Executive', description: 'Leads customer relationships and provides tailored security proposals.' },
  { name: 'Bruce Mpofu', role: 'Technical Officer', description: 'Coordinates field teams and ensures systems meet performance expectations.' }
];

const AboutPage = () => {
  return (
    <>
      <PageHero
        image="/assets/img/fuzzy/service_van.jpeg"
        eyebrow="About Us"
        title="Fuzzy Electronics"
        lead="A fully Zimbabwean-owned security solutions company with a regional footprint and trusted technical expertise."
        breadcrumbs={[{ label: 'About', current: true }]}
      />

      <section className="about section">
        <div className="container">
          <div className="row gy-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
              <div className="about-img">
                <img src="/assets/img/fuzzy/service_van.jpeg" alt="Fuzzy Electronics Service Van" className="img-fluid" />
                <div className="experience-badge">
                  <h2>24</h2>
                  <p>Years of service excellence</p>
                </div>
                <div className="projects-badge">
                  <h2>500+</h2>
                  <p>Projects completed</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="150">
              <div className="content">
                <span className="eyebrow">Company Overview</span>
                <h2>Fuzzy Electronics is built to protect people, property and operations.</h2>
                <p className="mt-4">
                  Fuzzy Electronics, through its holding company JEDZ Holdings and its subsidiaries, has a regional footprint across at least four Southern African countries.
                  We provide solutions for telecommunications, mining, retail, banking and financing, industrial, and manufacturing sectors.
                </p>
                <p>
                  Together with our sister companies, Fuzzy Electronics continues to lead with unique innovative solutions in the SADC region and expand service provision across the African continent.
                </p>
                <ul className="check-list">
                  <li><i className="bi bi-check-circle-fill"></i> Local ownership with international-quality security services.</li>
                  <li><i className="bi bi-check-circle-fill"></i> End-to-end system integration across CCTV, access control, alarms and perimeter protection.</li>
                  <li><i className="bi bi-check-circle-fill"></i> Strong industry expertise for large corporate and critical infrastructure projects.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light about-timeline-section">
        <div className="container">
          <div className="section-title text-center mb-5">
            <span className="eyebrow">Company Timeline</span>
            <h2>Our Story Since 2002</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item left" data-aos="fade-right">
              <div className="timeline-badge">2002</div>
              <div className="timeline-card">
                <h4>Fuzzy Security Systems</h4>
                <p>Founded in Zimbabwe and incorporated as Fuzzy Security Systems.</p>
              </div>
            </div>
            <div className="timeline-item right" data-aos="fade-left">
              <div className="timeline-badge">2006</div>
              <div className="timeline-card">
                <h4>First Division</h4>
                <p>Electronic Solutions Divisions were formed under Fuzzy Security Systems.</p>
              </div>
            </div>
            <div className="timeline-item left" data-aos="fade-right">
              <div className="timeline-badge">Sept 2018</div>
              <div className="timeline-card">
                <h4>Transition to Fuzzy Electronics</h4>
                <p>We started trading as Fuzzy Electronics with new departments for manned guarding and aerial surveillance.</p>
              </div>
            </div>
            <div className="timeline-item right" data-aos="fade-left">
              <div className="timeline-badge">Jun 2020</div>
              <div className="timeline-card">
                <h4>Continuous Improvement</h4>
                <p>We embraced advanced technology by supplying integrated systems and IoT solutions that power secure, connected operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-grid-section">
        <div className="container">
          <div className="section-title text-center mb-5">
            <span className="eyebrow">What We Do</span>
            <h2>Services We Provide To Our Clients</h2>
            <p className="mx-auto" style={{ maxWidth: '680px' }}>Your safety, our priority: comprehensive security solutions for every need.</p>
          </div>
          <div className="row g-4">
            {servicesProvided.map((service, index) => (
              <div className="col-md-6 col-lg-4" key={index} data-aos="fade-up" data-aos-delay={100 + index * 80}>
                <div className="service-card p-4 h-100 shadow-sm rounded-4 bg-white">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section advantages-section">
        <div className="container">
          <div className="section-title text-center mb-5">
            <span className="eyebrow">Advantages</span>
            <h2>Why should you work with us?</h2>
            <p className="mx-auto" style={{ maxWidth: '680px', color: '#6b7280' }}>
              Breakfast procuring nay end happiness allowance assurance frankness. Met simplicity nor difficulty unreserved who. Entreaties mr conviction dissimilar me astonished.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="120">
              <div className="service-card p-4 h-100 rounded-4 border">
                <div className="icon-box mb-3"><i className="bi bi-clock-history"></i></div>
                <h5>24/7 Urgent Services</h5>
                <p>Offer round-the-clock availability, including emergency response services and monitoring. Demonstrate your capability for swift action in case of an alarm or breach.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="160">
              <div className="service-card p-4 h-100 rounded-4 border">
                <div className="icon-box mb-3"><i className="bi bi-handshake"></i></div>
                <h5>Estimates at No Charge</h5>
                <p>We provide a cost estimate or quote for our services without charging for consultation or evaluation.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="service-card p-4 h-100 rounded-4 border">
                <div className="icon-box mb-3"><i className="bi bi-tag"></i></div>
                <h5>Best Price Assurance</h5>
                <p>We offer the most competitive price available and may match or beat a lower price found elsewhere for the same service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="row gy-5 align-items-center">
            <div className="col-lg-7" data-aos="fade-right">
              <span className="eyebrow">Join our Journey</span>
              <h2>Fuzzy Electronics is Zimbabwean-owned and built for tailored security.</h2>
              <p className="mt-4">
                A subsidiary of JEDZ Holdings, Fuzzy Electronics was incorporated in 2002 and has grown into a reliable brand for tailor-made security solutions.
              </p>
              <p>
                We provide security services, advice and system integration that include surveillance systems, access control systems, manned guarding, cash-in-transit, undercover guards and custom security solutions.
              </p>
            </div>
            <div className="col-lg-5" data-aos="fade-left">
              <div className="service-card p-4 rounded-4 shadow-sm bg-white">
                <h4>Trusted Local Security Excellence</h4>
                <ul className="check-list mt-4">
                  <li><i className="bi bi-check-circle-fill"></i> Regional delivery across Southern Africa.</li>
                  <li><i className="bi bi-check-circle-fill"></i> Custom engineered protection for complex sites.</li>
                  <li><i className="bi bi-check-circle-fill"></i> Integrated systems that work together seamlessly.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title text-center mb-5">
            <span className="eyebrow">Company Team</span>
            <h2>Our Amazing Team</h2>
          </div>
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div className="col-md-6 col-lg-3" key={index} data-aos="fade-up" data-aos-delay={120 + index * 80}>
                <div className="service-card p-4 h-100 rounded-4 shadow-sm text-center">
                  <div className="team-avatar mb-4">{member.name.split(' ').map((word) => word[0]).join('')}</div>
                  <h5>{member.name}</h5>
                  <p className="mb-2 text-danger fw-bold">{member.role}</p>
                  <p className="mb-0 text-muted">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
