import React, { useState } from "react";
//css
import "../contact/contact.css";
//img
import Phone from "../../assets/phone.png";
import Email from "../../assets/email.png";
import Address from "../../assets/address.png";
import Linkedin from "../../assets/linkedin.png";
import Github from "../../assets/github.png";
//emailJS
import emailjs from "emailjs-com";
//sweetalert
import Swal from "sweetalert2";
//translate
import { useTranslation } from "react-i18next";

const Contact = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (
      !e.target.message.value ||
      !e.target.name.value ||
      !e.target.subject.value ||
      !e.target.email.value
    ) {
      setError(t("inputError"));
      return;
    }

    emailjs
      .sendForm(
        "service_z2gylhq",
        "template_Lilius",
        e.target,
        "QXiJ-cPyQSWR84xkF"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Mail sent successfully.",
            text: "Thank you!",
            iconColor: "#74e295", // para cambiar el color del icono
            confirmButtonColor: "#74e295",
            customClass: {
              icon: "my-custom-icon-class",
              confirmButton: "my-custom-button-class",
            },
          });
          setMessage("");
          setName("");
          setSubject("");
          setEmail("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  function handleInputChange(event) {
    switch (event.target.name) {
      case "message":
        setMessage(event.target.value);
        break;
      case "name":
        setName(event.target.value);
        break;
      case "subject":
        setSubject(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      default:
        break;
    }
  }

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">{t("contact")}</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} className="c-icon" alt="img" />
              +(54) 9 11 7360-7075
            </div>
            <div className="c-info-item">
              <img src={Email} className="c-icon" alt="img" />
              Agustinpfarherr@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Linkedin} className="c-icon" alt="img" />
              <a
                href={
                  "https://www.linkedin.com/in/agust%C3%ADn-pfarherr-623188211/"
                }
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </div>
            <div className="c-info-item">
              <img src={Github} className="c-icon" alt="img" />
              <a
                href={"https://github.com/Lylhium"}
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
            <div className="c-info-item">
              <img src={Address} className="c-icon" alt="img" />
              <a
                href={"https://goo.gl/maps/vcbZic1LcaeCpi9y8"}
                className="button"
                target="_blank"
                rel="noreferrer"
                color="white"
              >
                Villa Crespo, Capital Federal , Argentina
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <h2 className="c-contact">{t("contact1")}</h2>
            <p className="c-texto">{t("contact2")}</p>
          </p>
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={subject}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleInputChange}
            />
            <br></br>
            <textarea
              className="textarea-style"
              name="message"
              rows={4}
              value={message}
              placeholder="Message"
              onChange={handleInputChange}
            />

            {error && <div style={{ color: "red" }}>{error}</div>}
            <button className="btn-send" type="submit">
              {t("btnSend")}
            </button>
          </form>
        </div>
      </div>
      <div className="spacer layer1"></div>
    </div>
  );
};

export default Contact;
