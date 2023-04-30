import { useState, useEffect } from "react";
import Switch from "react-switch";
//css
import "../src/App.css";
import "./darkmode.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
//components
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Intro from "./components/intro/intro";

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
    <div className="App">
      <div
        style={{
          backgroundColor: `var(--bg-color)`,
          color: `var(--text-color)`,
        }}
      >
        <div className={`switch-container ${isDarkMode ? "dark-mode" : ""}`}>
          <Switch
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
            onColor="#74e295"
            offColor="#555555;"
          />
        </div>
        <Intro />
        <About />
        <Contact />
      </div>
      <ScrollToTop />
    </div>
  );
}

export default App;