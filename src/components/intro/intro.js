import React from "react";
//css
import "./intro.css";
//imgs
import Me from "../../../src/assets/yo2023.jpg";

export default function intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <div className="i-intro">Hello There, I'm</div>
          <div className="i-name">Agustín Pfarherr</div>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Front-end Developer</div>
              <div className="i-title-item">React JS</div>
              <div className="i-title-item">React Native</div>
              <div className="i-title-item">JavaScript & TypeScript</div>
              <div className="i-title-item">HTML & CSS</div>
            </div>
          </div>
          <div className="i-desc">
            I am a Junior Front-end Developer and I'm currently studying and
            learning Back-end.
          </div>
          <div className="i-desc">
            Willing to offer my services and expand my knowledge about Coding.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <div className="pad"></div>
        <img src={Me} alt="me-img" className="i-img" />
      </div>
    </div>
  );
}
