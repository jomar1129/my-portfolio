import React from "react";
import "./Styles.css";
import mailSent from "../../images/mail_sent.svg";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="success">
      <div className="success-content">
        <img src={mailSent} />
        <h1>Message received. Thanks!</h1>
        <h2>I'll be in touch with you shortly.</h2>
        <Link to="/">
          <button className="hero-button">Back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
