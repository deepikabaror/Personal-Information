import React from "react";
import "./Contact.css";
const contact = () => {
  return (
    <>
      <div className="top" id="contact">
        <h2>Feel free to Contact Me</h2>
        <div className="contact">
          <div className="social">
            <a href="/" className="icon">
              <i class="fa-solid fa-phone"></i>
              <p>+91 9057510835</p>
            </a>
            <a
              href="https://www.instagram.com/dipika_b89/"
              rel="noreferrer"
              className="icon"
            >
              <i class="fa-brands fa-instagram"></i>
              <p>dipika_b89</p>
            </a>
            <a
              href="https://www.linkedin.com/in/deepika-baror-497059238/"
              className="icon"
            >
              <i class="fa-brands fa-linkedin"></i>
              <p>Linkedin</p>
            </a>
          </div>
          <div className="social">
            <a href="/" className="icon">
              <i class="fa-solid fa-envelope"></i>
              <p>deepikabaror07@gmail.com</p>
            </a>
            <a
              href="https://github.com/DipiKa2001"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <i class="fa-brands fa-github"></i>
              <p>Github</p>
            </a>
            <a
              href="https://github.com/DipiKa2001"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <i class="fa-brands fa-infinityfree"></i>
              <p>InfinityFree</p>
            </a>
          </div>
        </div>
        <div className="endLine">@ All Rights Reversed BY Deepika Baror</div>
      </div>
    </>
  );
};

export default contact;