import React from "react";
import taskApp from "../../images/task-app.png";
import recipeApp from "../../images/recipe-app.PNG";
import ravenous from "../../images/ravenous.PNG";
import colmar from "../../images/colmar.PNG";
import portfolio from "../../images/portfolio.PNG";
import travelAdvisor from "../../images/traveladvisor.PNG";
import Cyber from "../../images/cyberPunk.PNG";
import memories from "../../images/memories.PNG";
import quote from "../../images/quote.PNG";

import "./Styles.css";

const ProjectsArray = [
  {
    name: "Task Manager App",
    image: taskApp,
    techUsed: "HTML , CSS , JavaScript , BootStrap",
    github: "https://github.com/jomar1129/jwd5FinalProject",
    description:
      "Final Project for the Web development bootcamp that i attended where user can CREATE , UPDATE and DELETE task of an Employee",
    live: "https://jomar1129.github.io/jwd5FinalProject/",
  },
  {
    name: "Recipe Manager App",
    image: recipeApp,
    techUsed: "HTML , CSS , JavaScript , BootStrap",
    description:
      "Coding Challenge to our bootcamp , A recipe APP that enables users to CREATE , UPDATE and DELETE the recipe that the user input to the application",
    github: "https://github.com/jomar1129/Recipe-App",
    live: "https://jomar1129.github.io/Recipe-App/",
  },
  {
    name: "Ravenous",
    image: ravenous,
    techUsed: "ReactJs , Fetch API",
    description:
      "React Fetch API , That enables to search for a business on a desired location",
    github: "https://github.com/jomar1129/ravenous",
    live: "https://jomar1129.github.io/ravenous/",
  },
  {
    name: "Colmar Academy",
    image: colmar,
    techUsed: "HTML , CSS , Flex Boxes",
    description:
      "A Website Production where we are given a layout and transform it into HTML code",
    github: "https://github.com/jomar1129/capstone",
    live: "https://jomar1129.github.io/capstone/",
  },

  {
    name: "CyberPunk RED",
    image: Cyber,
    techUsed: "ReactJS",
    description:
      "This webapp is a growing collection of utilities for players and game masters of the TTPRG (Table Top Role Play Game) of Cyberpunk RED.",
    github: "https://github.com/notevenagoat/cyberpunktools",
    live: "https://notevenagoat.github.io/cyberpunktools/",
  },

  {
    name: "Quote API",
    image: quote,
    techUsed: "Express",
    description:
      "API creation using Express , where you can fetch a Quote by author or in random",
    github: "https://github.com/jomar1129/quote-api",
    live: "https://jose-quote-api.herokuapp.com/",
  },

  {
    name: "Travel Advisor",
    image: travelAdvisor,
    techUsed: "ReactJS , Google API",
    description:
      "Travel Advisor APP using Google Maps. With Geolocation, Google Maps API, Searching for places, Fetching restaurants, hotels and attractions based on the location specified by the user.",
    github: "https://github.com/jomar1129/travel-advisor",
    live: "https://app.netlify.com/sites/jose-travel-advisor",
  },
  {
    name: "Portfolio",
    image: portfolio,
    techUsed: "ReactJS",
    description:
      "Portfolio was build using ReactJS where i store some of the projects that i made",
    github: "https://github.com/jomar1129/my-portfolio",
    live: "http://josecotejo.tech/",
  },

  {
    name: "Memories",
    image: memories,
    techUsed: "ReactJS",
    description:
      "A Mern Stack Application that enables the user to post memories or events that they want to capture, backend was deploy on heroku and front-end was deployed on netlify",
    github: "https://github.com/jomar1129/memories-app",
    live: "https://jose-memories-app.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="project-container">
      <h1>Projects</h1>
      <div id="projects" className="project-section">
        {ProjectsArray.map((project, index) => (
          <div key={index} data-aos="fade-up" className="project-cards">
            {/* <p className="project-heading">{project.name}</p> */}
            <div className="project-image">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="project-description">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div className="project-links">
                <a class="link-item" target="_blank" href={project.live}>
                  Live
                </a>
                <a class="link-item" target="_blank" href={project.github}>
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
