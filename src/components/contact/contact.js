import React, { useRef, useState } from "react";
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

const Contact = () => {
  const formRef = useRef();

  const [done, setDone] = useState(false);

  const mostrarAlerta = () => {
    Swal.fire("Mail sent successfully.", "Thank you!", "success");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lilius",
        "template_m6lspvj",
        formRef.current,
        "user_v8lv7h9xUJr6n9XlGDeii"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact me</h1>
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
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </div>
            <div className="c-info-item">
              <img src={Github} className="c-icon" alt="img" />
              <a
                href={"https://github.com/Lylhium?tab=repositories"}
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
            <div className="c-info-item">
              <img src={Address} className="c-icon" alt="img" />
              <a
                href={"https://goo.gl/maps/2Hs3EV9E2NQaFARk6"}
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                La Paternal, Capital Federal , Argentina
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <h2 className="c-contact">Do you need to contact me?</h2>
            <p className="c-texto">send me an email here!</p>
          </p>

          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_tema" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="4" placeholder="Message" name="message" />
            <button className="btn-send" onClick={() => mostrarAlerta()}>
              Send
            </button>
            {done && <h2 className="c-contact">Mail Sent.</h2>}
          </form>
        </div>
      </div>
      <div className="spacer layer1"></div>
    </div>
  );
};

export default Contact;
