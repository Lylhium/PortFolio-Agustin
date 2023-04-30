import React from "react";
//css
import "../about/about.css";
//img
import me2 from "../../../src/assets/pulg.jpg";
import Logo from "../../assets/Logo.png";

const about = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"> </div>
        <div className="a-card">
          <img src={me2} className="a-img" alt="img" />
        </div>
      </div>
      <div className="a-right">
        <h1>About me</h1>

        <p className="a-desc">
          I'm a Front-end Developer from Argentina, Buenos aires
        </p>
        <p className="a-desc">
          I'm very passionate about creating interactive applications and
          different user experiences.
        </p>
        <p className="a-desc">
          As a developer, I am excited to learn and expand on front-end and
          other coding languages.
        </p>
        <p className="a-desc">
          Some of my other hobbies are drawing, playing with my cat and taking
          pictures.
        </p>
        <h1>My Projects</h1>

        <a
          className="button1"
          href={"https://angry-mestorf-fbb8cc.netlify.app/"}
          target="_blank"
          rel="noreferrer"
          style={{ fontWeight: 500, fontSize: 25 }}
        >
          <img src={Logo} className="coco-icon" alt="img" />
          Coco Light
        </a>
        <br />
      </div>
    </div>
  );
};

export default about;
