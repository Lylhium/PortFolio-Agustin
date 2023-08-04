/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
//css
import "./intro.css";
//imgs
import Me from "../../../src/assets/yo2023.jpg";
//translate
import { useTranslation } from "react-i18next";
//CV
import CV from "../../assets/agustin.pdf";
export default function intro() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  return (
    <div className='i'>
      <div className='i-left'>
        <div className='i-left-wrapper'>
          <div className='i-intro'>{t("hello")}</div>
          <div className='i-name'>Agustín Pfarherr</div>
          <div className='i-title'>
            <div className='i-title-wrapper'>
              <div className='i-title-item'>Front-end Developer</div>
              <div className='i-title-item'>React JS</div>
              <div className='i-title-item'>React Native</div>
              <div className='i-title-item'>JavaScript & TypeScript</div>
              <div className='i-title-item'>HTML & CSS</div>
            </div>
          </div>
          <div className='i-desc1'>{t("intro1")}</div>
          <div className='i-desc2'>{t("intro2")}</div>
          <br />
          <a
            className='button'
            href={CV}
            download='Agustin_CV'
            target='_blank'
            rel='noreferrer'
            style={{ fontWeight: 500, textAlign: "center" }}
          >
            {t("cv")}
          </a>
        </div>
      </div>
      <div className='i-right'>
        <div className='i-bg'></div>
        <div className='pad'></div>
        <img src={Me} alt='me-img' className='i-img' />
      </div>
    </div>
  );
}
