import React from 'react';
import PageHero from '../components/PageHero';

const ContactPage = () => {
  return (
    <>
      <PageHero 
        image="/assets/img/fuzzy/integrated_security.jpeg"
        eyebrow="Connect"
        title="Contact Us"
        lead="Have a question or need a quote? Reach out to our security specialists today."
        breadcrumbs={[{ label: 'Contact', current: true }]}
      />

      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-5">
              <div className="info-wrap bg-white p-4 h-100 shadow-sm border rounded">
                <div className="info-item d-flex mb-4">
                  <i className="bi bi-geo-alt text-danger fs-3 me-3"></i>
                  <div>
                    <h5>Address</h5>
                    <p>Suite 1, Nedlaw Complex, 202 Seke Road, Graniteside, Harare</p>
                  </div>
                </div>

                <div className="info-item d-flex mb-4">
                  <i className="bi bi-telephone text-danger fs-3 me-3"></i>
                  <div>
                    <h5>Call Us</h5>
                    <p>+263 712 685 901 / +263 780 764 534</p>
                  </div>
                </div>

                <div className="info-item d-flex mb-4">
                  <i className="bi bi-envelope text-danger fs-3 me-3"></i>
                  <div>
                    <h5>Email Us</h5>
                    <p>sales@genixsolutions.co.zw</p>
                  </div>
                </div>
                
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.778749845564!2d31.0601314!3d-17.8488059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a576067b5e8f%3A0x6d9f8c6d4d4d4d4d!2sSeke%20Rd%2C%20Harare!5e0!3m2!1sen!2szw!4v1652636000000!5m2!1sen!2szw" 
                  frameBorder="0" 
                  style={{border:0, width: '100%', height: '270px'}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fuzzy Electronics Location"
                  className="rounded mt-3"
                ></iframe>
              </div>
            </div>

            <div className="col-lg-7">
              <form action="#" method="post" className="php-email-form bg-white p-4 shadow-sm border rounded">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <label htmlFor="name-field" className="pb-2">Your Name</label>
                    <input type="text" name="name" id="name-field" className="form-control" required />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email-field" className="pb-2">Your Email</label>
                    <input type="email" className="form-control" name="email" id="email-field" required />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="subject-field" className="pb-2">Subject</label>
                    <input type="text" className="form-control" name="subject" id="subject-field" required />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="message-field" className="pb-2">Message</label>
                    <textarea className="form-control" name="message" rows="10" id="message-field" required></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-danger py-2 px-5">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
