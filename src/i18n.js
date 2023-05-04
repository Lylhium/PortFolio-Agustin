import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: {
      translation: {
        // Aquí puedes agregar tus textos en inglés
        langu: "Languages",
        langu1: "English",
        langu2: "Spanish",
        hello: "Hello There, I'm",
        intro1:
          "I am a Junior Front-end Developer and I'm currently studying and learning Back-end.",
        intro2:
          "I'm willing to offer my services and expand my knowledge about coding.",
        aboutMe: "About me",
        about1: "I'm a Front-end Developer from Argentina,Buenos aires.",
        about2:
          "I'm very passionate about creating interactive applications and different user experiences.",
        about3:
          "As a developer, I am excited to learn and expand on front-end and other coding languages.",
        about4:
          "Some of my other hobbies are drawing, playing with my cat and taking pictures.",
        project: "My Projects",
        contact: "Contact Me",
        contact1: "Do you need to contact me?",
        contact2: "send me an email here!",
        btnSend: "Send",
        inputError: "Please complete all fields.",
      },
    },
    es: {
      translation: {
        // Aquí puedes agregar tus textos en español
        langu: "Idiomas",
        langu1: "Ingles",
        langu2: "Español",
        hello: " Hola, soy",
        intro1:
          "Soy Desarrollador Front-end Junior, actualmente estoy estudiando y aprendiendo Back-end.",
        intro2:
          "Estoy dispuesto a ofrecer mis servicios y ampliar mis conocimientos sobre programación.",
        aboutMe: "Sobre mi",
        about1: "Soy un Desarrollador Front-end de Buenos Aires,Argentina.",
        about2:
          "Me apasiona mucho crear aplicaciones interactivas y diferentes experiencias de usuario.",
        about3:
          "Como desarrollador, estoy emocionado de aprender y expandirme en el front-end y otros lenguajes de programación.",
        about4:
          "Algunos de mis otros hobbies son dibujar, jugar con mi gato y hacer fotografías.",
        project: "Mis Proyectos",
        contact: "Contactame",
        contact1: "¿Necesitás contactarme?",
        contact2: "envíame un email aquí!",
        btnSend: "Enviar",
        inputError: "Porfavor complete todos los campos.",
      },
    },
  },
});

export default i18n;
