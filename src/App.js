//css
import "../src/App.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
//components
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Intro from "./components/intro/intro";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
