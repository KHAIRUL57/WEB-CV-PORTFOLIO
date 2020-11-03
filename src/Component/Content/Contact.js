import React from "react";
import "../ContentStyle/Contact.css";

function Contact() {
  return (
    <div>
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact me</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Get in Touch</div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos harum corporis fuga corrupti. Doloribus quis soluta
                nesciunt veritatis vitae nobis?
              </p>
              <div className="icons">
                <div className="row">
                  <i className="fas fa-user"></i>
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">Khairul Tamimi</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">
                      Kav.Nongsa Batam, Riau island
                    </div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-envelope"></i>
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">khairultamimi5757@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Message me</div>
              <form action="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <div className="fields">
                  <div className="field name">
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="field email">
                    <input type="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="field">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="field textarea">
                  <textarea
                    required
                    cols="30"
                    rows="10"
                    placeholder="Message.."
                  ></textarea>
                </div>
                <div className="field textarea">
                  <input
                    type="file"
                    name="myfile"
                    id="myfile"
                    placeholder="Upload File"
                  />
                </div>
                <div className="field textarea">
                  <div data-netlify-recaptcha="true"></div>
                </div>
                <div className="button">
                  <button type="submit">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <span>
          Created By<a href="/">Khairul Tamimi</a>{" "}
          <span className="far fa-copyright"></span> 2020 All rights reserved.
        </span>
      </footer>
    </div>
  );
}

export default Contact;
