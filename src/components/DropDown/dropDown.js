import React from "react";
import { FiGlobe } from "react-icons/fi"; // Importamos el icono de mundo de react-icons
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
    <div className='dropdown'>
      {/* Icono de mundo de react-icons */}
      <button className='dropbtn' onClick={() => console.log("clicked")}>
        <FiGlobe size={20} />
      </button>
      <div className='dropdown-content'>
        <button onClick={() => changeLanguage("en")}>{t("langu1")}</button>
        <button onClick={() => changeLanguage("es")}>{t("langu2")}</button>
      </div>
    </div>
  );
};

export default DropDown;
