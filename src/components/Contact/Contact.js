import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import emailjs from "emailjs-com";

import mailSent from "../../images/envelope.svg";
import "./Styles.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contacts = () => {
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jd5mspq",
        "template_cjue8z6",
        e.target,
        "user_NrjN6PpphzSSeWa2EFUT1"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    setSent(true);
  };

  return (
    <>
      <NavBar />
      <div className="contact-container">
        <div className="contact-heading">
          <h1 className="slogan">Thanks for taking the time to reach out.</h1>
          <h1 className="slogan"> How can I help you today?</h1>
        </div>

        <div id="contacts" className="contacts-page">
          <div data-aos="fade-left" className="contact-left">
            <form className="contact-form" onSubmit={sendEmail}>
              <label>First Name</label>
              <input type="text" name="first_name" required />
              <label>Last Name</label>
              <input type="text" name="last_name" required />
              <label>Email</label>
              <input type="email" name="reply_to" required />
              <label>Message</label>
              <textarea
                className="textarea is-large"
                name="message"
                rows="5"
                required=""
              ></textarea>
              <button className="form-submit" type="submit" value="Send">
                Submit
              </button>
            </form>
          </div>
          <div data-aos="fade-right" className="contact-right">
            <div className="contact-content">
              <p>
                <i className="fas fa-map-marked fa-2x"></i>
                <span>Wollongong , Australia</span>
              </p>
              <p>
                <i className="fas fa-phone-alt fa-2x"></i>
                <span>0450812929</span>
              </p>
              <p>
                <i className="fas fa-envelope fa-2x"></i>
                <span>jomarcotejo@gmail.com</span>
              </p>
              <hr></hr>
              <img src={mailSent} alt="mail" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      {sent ? <Redirect to="/success" /> : null}
    </>
  );
};

export default Contacts;
