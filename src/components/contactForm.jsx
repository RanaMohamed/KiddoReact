import React from "react";

const ContactForm = () => {
  return (
    <>
      <h1>contact Us</h1>
      <form className="form">
        <label htmlFor="title" className="form__subtitle">
          Name
        </label>
        <input
          type="text"
          className="input form__input-1 input--text-color-info input--padding-sm input--border-radius-md input--border-info"
          placeholder="Write your Name"
        />
        <label htmlFor="title" className="form__subtitle">
          Email
        </label>
        <input
          type="text"
          className="input form__input-1 input--text-color-info input--padding-sm input--border-radius-md input--border-info"
          placeholder="Write Your Email"
        />
        <label htmlFor="title" className="form__subtitle">
          Your Message
        </label>
        <textarea
          type="text"
          className="input input--text-color-primary input--bg-secondary input--padding-xs input--border-radius-md"
          placeholder="write your message here..."
        />
      </form>
    </>
  );
};

export default ContactForm;
