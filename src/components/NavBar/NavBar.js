import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";

import { animateScroll as scroll, Link } from "react-scroll";
import { Link as Navlink } from "react-router-dom";
import Hamburger from "hamburger-react";

import "./Styles.css";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const menuOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <nav>
        <h1>JOSE.</h1>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          onToggle={menuOpen}
          color="#7510f7"
          easing="ease-in"
          direction="left"
        />
      </nav>

      {isOpen ? (
        <div data-aos="fade-down" className="nav-menu">
          <div className="nav-close">
            <button onClick={menuOpen} type="button">
              +
            </button>
          </div>

          <ul className="nav-links">
            <li className="nav-items">
              <Navlink className="link-nav" to="/">
                Home
              </Navlink>
            </li>
            <li className="nav-items">
              <Link
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                className="link-nav"
                to="About"
              >
                About
              </Link>
            </li>
            <li className="nav-items">
              <Link
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                className="link-nav"
                to="projects"
              >
                Projects
              </Link>
            </li>
            <li className="nav-items">
              <Navlink className="link-nav" to="/contact">
                Contact
              </Navlink>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavBar;
