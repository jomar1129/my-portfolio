
import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Styles.css";
const Footer = () => {
  return (
    <footer>
      <h1>JOSE.</h1>
      <div className="footer-social">
        <SocialIcon
          className="socialBtn"
          bgColor="#7510f7"
          target="_blank"
          url="https://github.com/jomar1129"
        />{" "}
        <br />
        <SocialIcon
          className="socialBtn"
          bgColor="#7510f7"
          target="_blank"
          url="https://www.linkedin.com/in/jose-cotejo/"
        />{" "}
        <br />
        <SocialIcon
          className="socialBtn"
          bgColor="#7510f7"
          target="_blank"
          url="https://www.instagram.com/josemariecotejo/"
        />{" "}
        <br />
      </div>
      <p>Developed by JOSE</p>
    </footer>
  );
};

export default Footer;
