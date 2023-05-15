import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaSass,
  FaGithub,
  FaBootstrap,
  FaWordpress,
} from "react-icons/fa";
import { SiFirebase, SiNodedotjs, SiTypescript } from "react-icons/si";
import "./languageList.css";

const LanguageList = () => {
  const languages = [
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "SASS", icon: <FaSass /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "WordPress", icon: <FaWordpress /> },
    { name: "FireBase", icon: <SiFirebase /> },
    { name: "Node Js", icon: <SiNodedotjs /> },
  ];

  return (
    <div className="language-list">
      {languages.map((language, index) => (
        <div key={index} className="language-item">
          <div className="icon">{language.icon}</div>
          <span className="i-title-item2">{language.name}</span>
        </div>
      ))}
    </div>
  );
};

export default LanguageList;
