import About from "../About/About";
import Hero from "../Hero/Hero";
import Projects from "../projects/Project";
import Skills from "../Skills/Skills";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

import React from "react";

const Home = () => {
  return (
    <>
    <NavBar/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
