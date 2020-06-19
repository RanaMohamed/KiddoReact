import React from "react";

const Footer = () => {
  return (
    <>
      <div className="Footeer">
        <div className="Footer Footer__inner">
          <div className="Logo">KIDDO</div>© Kiddo.com 2020
          <div className="Footer Footer__third">
            <a href="#"> About Us</a>
            <a href="#"> Contact</a>
          </div>
          <div className="Footer Footer__third">
            <a href="#">
              <i className="fa fa-facebook"></i> Facebook
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i> Twitter
            </a>
            <a href="#">
              <i className="fa fa-Instgram"></i> Instgram
            </a>
          </div>
          <div className="Footer Footer__third">
            <a href="#"> Privacy Policy</a>
            <a href="#"> Terms &amp; condition</a>
            <a href="#"> FAQs</a>
          </div>
          <div className="Footer Footer__third">
            Subscribe to our newsletter
            <input
              type="text"
              className="input input--text-color-primary input--comment input--border-primary input--padding-xs input--border-radius-sm"
              placeholder="Add a comment...."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
