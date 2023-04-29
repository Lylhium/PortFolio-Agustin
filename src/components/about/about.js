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
          I'm very passionated about creating interactive applications and
          different user experiences.
        </p>
        <p className="a-desc">
          As a developer, I am excited to learn and expand on front-end and
          other coding languages.
        </p>
        <p className="a-desc">
          Some of my other hobbies are drawing, play with my cat and take
          pictures.
        </p>
        <h1>My Proyects</h1>
        <img src={Logo} className="coco-icon" alt="img" />

        <a
          href={"https://angry-mestorf-fbb8cc.netlify.app/"}
          style={{ color: "white", fontWeight: 500, fontSize: 25 }}
        >
          Coco Light
        </a>
        <br />

        <br />
      </div>
    </div>
  );
};

export default about;
