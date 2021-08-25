import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import "./contact.scss";

const Contact: React.FC = () => {
  return (
    <div className="section contact" id="contact">
      <div
        className="section-title text-center"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h2>Contact</h2>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2">
        <div className="text-area relative">
          <div className="small-text absolute right-0 font-bold uppercase">
            let's talk business
          </div>
          <p className="contact-description" data-aos="fade-left">
            Interested? Get in touch and let's work together.
          </p>
          <div className="contact-links">
            <div className="contact-link" data-aos="fade-up">
              <span>email</span>
              <a href="mailto:farhad.dev.contact@gmail.com">
                farhad.dev.contact@gmail.com
              </a>
            </div>
            <div
              className="contact-link inline-block mr-12 sm:mr-36 lg:mr-20 xl:mr-36"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <span>phone number</span>
              <button>(+98) 930 834 9179</button>
            </div>
            <div
              className="contact-link inline-block"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <span>Twitter</span>
              <a
                href="https://twitter.com/farhad_dev"
                target="_blank"
                rel="noreferrer"
              >
                @farhad_dev
              </a>
            </div>
          </div>
        </div>
        <div className="form-container">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
