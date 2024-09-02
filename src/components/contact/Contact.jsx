import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="contact_title">Get in touch</h1>
      <h4 className="contact_subtitle">Contact us</h4>

      <div className="contact_container">
        <div className="contact-description">
          <h1 className="desc_heading">Let’s Build Together!</h1>
          <div className="descpara">
            We’re excited to team up with passionate individuals for innovative
            full-stack projects. If you have a vision or a new challenge in
            mind, let’s make it happen together. Drop us a message, and let’s
            start building something amazing!
          </div>
        </div>
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xzzpoleg"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your name"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              id="message"
              cols="30"
              rows="6"
              placeholder="Write your message"
              autoComplete="off"
              required
            ></textarea>

            <button className="Submit_button" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
