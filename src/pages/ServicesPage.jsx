import React from 'react';
import PageHero from '../components/PageHero';

const servicesData = [
  {
    title: "1. Access Control Systems",
    description: "Control and manage entry to buildings, offices, complexes, and restricted areas.",
    items: [
      "Biometric Fingerprint Readers", "Facial Recognition Terminals", "RFID & Card Access Systems",
      "Keypad Door Entry Systems", "Smart Door Locks", "Electric & Magnetic Locks",
      "Door Exit Buttons", "Access Control Panels", "Time & Attendance Systems",
      "Visitor Management Systems", "Intercom Systems", "Video Intercom Systems",
      "Boom Gates", "Turnstiles", "Gate Automation Systems"
    ],
    image: "/assets/img/fuzzy/biometric_access.jpeg"
  },
  {
    title: "2. CCTV & Surveillance Systems",
    description: "Advanced monitoring and surveillance solutions for homes, businesses, schools, and industries.",
    items: [
      "IP Cameras", "HD Analog Cameras", "Bullet Cameras", "Dome Cameras",
      "PTZ Cameras", "Wireless Cameras", "Night Vision Cameras", "ANPR Cameras",
      "CCTV DVRs & NVRs", "Remote Viewing Solutions", "CCTV Installation & Maintenance",
      "Surveillance Monitoring Systems"
    ],
    image: "/assets/img/fuzzy/cctv_cameras.jpeg"
  },
  {
    title: "3. Alarm & Intrusion Detection Systems",
    description: "Protect properties from unauthorized access and security threats.",
    items: [
      "Wireless Alarm Systems", "Wired Alarm Systems", "Motion Sensors",
      "PIR Detectors", "Door & Window Sensors", "Outdoor Beams",
      "Glass Break Detectors", "Panic Buttons", "GSM Alarm Systems",
      "Smart Alarm Systems", "Sirens & Strobe Lights", "Alarm Monitoring Solutions"
    ],
    image: "/assets/img/fuzzy/alarm_system.jpeg"
  },
  {
    title: "4. Electric Fencing Solutions",
    description: "Reliable perimeter protection for residential, commercial, and industrial properties.",
    items: [
      "Electric Fence Energizers", "Electric Fence Installation", "Razor Wire Systems",
      "Wall Top Electric Fencing", "Perimeter Security Systems", "Fence Maintenance & Repairs",
      "Solar Electric Fence Systems"
    ],
    image: "/assets/img/fuzzy/electric_fence.jpeg"
  },
  {
    title: "5. Gate Automation & Barrier Systems",
    description: "Smart entrance automation for convenience and security.",
    items: [
      "Sliding Gate Motors", "Swing Gate Motors", "Boom Gate Systems",
      "Remote Gate Controls", "GSM Gate Opening Solutions", "Automated Garage Doors",
      "Parking Barrier Systems"
    ],
    image: "/assets/img/fuzzy/gate_automation.jpeg"
  },
  {
    title: "6. Control Room & Monitoring Solutions",
    description: "Centralized monitoring solutions for advanced security management and surveillance.",
    items: [
      "Guard Rooms", "Security Control Rooms", "Video Wall Displays",
      "CCTV Monitoring Stations", "Multi-Screen Surveillance Systems", "Command Centers",
      "Remote Monitoring Solutions", "Surveillance Workstations", "24/7 Monitoring Setups",
      "Integrated Security Monitoring Systems"
    ],
    image: "/assets/img/fuzzy/control_room.jpeg"
  },
  {
    title: "7. Fire Detection & Safety Systems",
    description: "Safety solutions designed to protect lives and property.",
    items: [
      "Fire Alarm Systems", "Smoke Detectors", "Heat Detectors",
      "Fire Suppression Systems", "Emergency Exit Systems", "Fire Safety Installations"
    ],
    image: "/assets/img/fuzzy/fire_safety.jpeg"
  },
  {
    title: "8. Installation, Maintenance & Support Services",
    description: "Professional technical support and after-sales services.",
    items: [
      "Supply of Security Equipment", "Professional Installation", "System Configuration",
      "Maintenance & Repairs", "Technical Support", "System Upgrades",
      "Site Assessments", "Security Consultations", "Annual Service Contracts"
    ],
    image: "/assets/img/fuzzy/service_van.jpeg"
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

      <section id="services-list" className="services-list section">
        <div className="container">
          <div className="row gy-4">
            {servicesData.map((service, index) => (
              <div className="col-lg-6" key={index}>
                <div className="service-item d-flex flex-column h-100 p-3 shadow-sm rounded border bg-white">
                  <div className="service-img mb-3 overflow-hidden rounded" style={{maxHeight: '200px'}}>
                    <img src={service.image} alt={service.title} className="img-fluid w-100 h-100 object-fit-cover" />
                  </div>
                  <h4 className="mb-2">{service.title}</h4>
                  <p className="text-muted small mb-3">{service.description}</p>
                  <ul className="list-unstyled mt-auto">
                    {service.items.slice(0, 6).map((item, i) => (
                      <li key={i} className="mb-1 small d-flex align-items-center">
                        <i className="bi bi-check-circle-fill text-danger me-2" style={{fontSize: '0.8rem', color: 'var(--accent-color) !important'}}></i>
                        <span>{item}</span>
                      </li>
                    ))}
                    {service.items.length > 6 && <li className="small text-muted mt-2 fst-italic">+ {service.items.length - 6} more solutions...</li>}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
