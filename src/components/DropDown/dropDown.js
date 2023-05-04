import React from "react";
//translate
import i18n from "../../i18n";
import "../../App.css";
//translate
import { useTranslation } from "react-i18next";

const DropDown = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn">{t("langu")}</button>
      <div className="dropdown-content">
        <button onClick={() => changeLanguage("en")}>{t("langu1")}</button>
        <button onClick={() => changeLanguage("es")}>{t("langu2")}</button>
      </div>
    </div>
  );
};

export default DropDown;
