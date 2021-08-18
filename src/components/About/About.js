import React, { Link } from "react";
import "./Styles.css";
import resume from "../../files/jose_resume.pdf";

const About = () => {
  return (
    <div data-aos="zoom-in-up" id="About" className="about-page">
      <div className="about-heading">
        <h1>Who Am I ?</h1>
        <p>
          Hi , I'm Jose I Recently graduated from Generations Australia and
          Academy Xi Intensive Web Development Bootcamp. I am passionate about
          coding and solving problems through code, and I am excited to work
          alongside other amazing programmers and learn so much more!
        </p>
        <p>
          I have always been passionate about everything related to technology
          and IT, especially the web professions, which I made up my mind and
          change my career as a Web Developer. I also love to code and explore
          different programming languages and framework. I love to code from
          scratch and enjoy bringing up ideas , combining the knowledge I
          learned and work on various projects. aside from coding I love to
          watch Anime and Movies.
        </p>
        <a href={resume} target="_blank">
          <button>Download My CV</button>
        </a>
      </div>
    </div>
  );
};

export default About;
