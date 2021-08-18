import React from "react";
import Typical from "react-typical";
import hero from "../../images/developer.svg";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { SocialIcon } from "react-social-icons";
import "./Styles.css";

const Hero = () => {
  return (
    <div id="hero" className="hero-body">
      {/* <ParticleBackground> </ParticleBackground> */}
      <div data-aos="fade-right" className="hero-heading">
        <div className="hero-heading2"></div>
        <h2>Hi there!</h2>
        <div class="hero-typical">
          <h1>
            I'm{" "}
            <Typical
              style={{ color: "#7510f7" }}
              loop={Infinity}
              wrapper="b"
              steps={[
                "Jose Marie Cotejo",
                2000,
                "a Front-End Developer",
                2000,
                "a React Developer",
                2000,
              ]}
            />
          </h1>
        </div>
        <p>
          I build web applications, I love to solve variant web problem and also
          combine the knowledge and code it to make everything works
        </p>
        <Link to="/contact">
          <button className="hero-button">HIRE ME</button>
        </Link>
        <div className="social-container">
          <div className="social-media">
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
        </div>
      </div>
      <div data-aos="fade-left" className="hero-image">
        <img src={hero} alt="computers" />
      </div>
      {/* <div className="scroll-down">
        <ScrollLink
          className="mouse-wrapper"
          to="About"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          <span>Scroll Down</span>
          <span className="mouse">
            <span className="wheel"></span>
          </span>
        </ScrollLink>
      </div> */}
    </div>
  );
};

export default Hero;
