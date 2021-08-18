import React from "react";
import jquery from "../../images/programming/jquery.png";
import html from "../../images/programming/html.png";
import javascript from "../../images/programming/javascript.png";
import css from "../../images/programming/css.png";
import csharp from "../../images/programming/c.png";
import react from "../../images/programming/react.png";
import node from "../../images/programming/node-js.png";
import lua from "../../images/programming/lua.png";
import code from "../../images/programming/vscode.png";
import git from "../../images/programming/git.png";
import windows from "../../images/programming/windows.png";

import "./Styles.css";
const Skills = () => {
  const skills = [
    { name: "HTML", icon: html },
    { name: "CSS3", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "Jquery", icon: jquery },
    { name: "LUA", icon: lua },
    { name: "C#", icon: csharp },
    { name: "ReactJS", icon: react },
    { name: "NodeJS", icon: node },
    { name: "ExpressJS", icon: node },
    { name: "Git", icon: git },
    { name: "VS code", icon: code },
    { name: "Windows", icon: windows },
  ];

  return (
    <div data-aos="flip-left" class="skills">
      <h1>Skills</h1>
      <div className="about-skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill-cards">
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
