import { useState, useEffect } from "react";
import Switch from "react-switch";
import "../src/App.css";
import "./darkmode.css";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Intro from "./components/intro/intro";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import DropDown from "./components/DropDown/dropDown";
import LanguageList from "./components/languageList/languageList";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div className='App'>
      <div
        style={{
          backgroundColor: `var(--bg-color)`,
          color: `var(--text-color)`,
        }}
      >
        <div className={`switch-container ${isDarkMode ? "dark-mode" : ""}`}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <h3>agustín</h3>
              <h3 className='logo'>.dev</h3>
            </div>
            <div className='dropdwn'>
              <DropDown />
            </div>
            <Switch
              checked={isDarkMode}
              onChange={() => setIsDarkMode(!isDarkMode)}
              onColor='#74e295'
              offColor='#555555;'
            />
          </div>
        </div>
        <Intro />
        <LanguageList />
        <div className='padding-between2' />
        <About />
        <div className='padding-between' />
        <Contact />
      </div>

      <ScrollToTop />
    </div>
  );
}

export default App;
