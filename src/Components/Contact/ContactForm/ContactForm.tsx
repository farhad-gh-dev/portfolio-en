import React from "react";
import useContactForm from "./useContactForm";
import "./contact-form.scss";
import Loading from "../../Loading/Loading";

const ContactForm: React.FC = () => {
  const { isLoading, formValues, formUpdateHandler, formSubmitHandler } =
    useContactForm();

  return (
    <>
      {isLoading ? (
        <Loading message={"sending your message"} coverPage />
      ) : null}
      <form className="contact-form" onSubmit={(e) => formSubmitHandler(e)}>
        <div className="inputs-row" data-aos="fade-up">
          <div className="input-container relative inline-block">
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={(e) => formUpdateHandler(e)}
              placeholder="Name *"
              maxLength={26}
              required
            />
            <div className="input-border absolute top-0 left-0"></div>
          </div>
        </div>
        <div
          className="inputs-row sm:flex sm:justify-between"
          data-aos="fade-up"
        >
          <div className="input-container relative inline-block">
            <input
              type="text"
              name="location"
              value={formValues.location}
              onChange={(e) => formUpdateHandler(e)}
              placeholder="Location"
              maxLength={95}
            />
            <div className="input-border absolute top-0 left-0"></div>
          </div>
          <div className="input-container relative inline-block">
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={(e) => formUpdateHandler(e)}
              placeholder="Email Address *"
              maxLength={64}
              required
            />
            <div className="input-border absolute top-0 left-0"></div>
          </div>
        </div>
        <div className="inputs-row" data-aos="fade-up">
          <div className="input-container message-input relative inline-block">
            <textarea
              name="message"
              value={formValues.message}
              onChange={(e) => formUpdateHandler(e)}
              placeholder="Your Message *"
              maxLength={850}
              required
            />
            <div className="input-border absolute top-0 left-0"></div>
          </div>
        </div>
        <div
          className="submit-button mt-2 sm:mt-2 lg:mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button
            className="capitalize font-medium pt-1 pb-2 px-3 sm:px-6 border-2 border-black hover:bg-black hover:text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
