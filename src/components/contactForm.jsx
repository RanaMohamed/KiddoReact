import React from "react";

const ContactForm = () => {
  return (
    <>
      <section className="my-lg">
        <div className="container my-xl">
          <h1>Contact Us</h1>
          <form className="form">
            <label htmlFor="title" className="form__subtitle">
              Name
            </label>
            <input
              type="text"
              className="input input--text-color-info input--padding-sm input--border-radius-md input--border-info"
              placeholder="Write your Name"
            />
            <span className="error-message"></span>
            <label htmlFor="title" className="form__subtitle">
              Email
            </label>
            <input
              type="text"
              className="input input--text-color-info input--padding-sm input--border-radius-md input--border-info"
              placeholder="Write Your Email"
            />
            <span className="error-message"></span>
            <label htmlFor="title" className="form__subtitle">
              Your Message
            </label>
            <textarea
              type="text"
              className="input input--text-color-primary input--bg-secondary input--padding-xs input--border-radius-md input--border-info"
              placeholder="write your message here..."
            />
            <span className="error-message"></span>

            <button className="btn btn--primary btn--rect">Send</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
