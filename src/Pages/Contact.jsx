import React from "react";
import CommonHeading from "../Components/CommonHeading";
import MyDetails from "../Components/MyDetails";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <CommonHeading heading="CONTACT" subHeading="Get in Touch" />
        <div className="row justify-content-between">
          <div className="col-xxl-3">
            <MyDetails />
          </div>
          <div className="col-xxl-9">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
