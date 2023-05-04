import React from "react";
//css
import "../about/about.css";
//img
import me2 from "../../../src/assets/pulg.jpg";
import Logo from "../../assets/Logo.png";
//translate
import { useTranslation } from "react-i18next";

const about = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"> </div>
        <div className="a-card">
          <img src={me2} className="a-img" alt="img" />
        </div>
      </div>
      <div className="a-right">
        <h1>{t("aboutMe")}</h1>

        <p className="a-desc">{t("about1")}</p>
        <p className="a-desc">{t("about2")}</p>
        <p className="a-desc">{t("about3")}</p>
        <p className="a-desc">{t("about4")}</p>
        <h1>{t("project")}</h1>

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
