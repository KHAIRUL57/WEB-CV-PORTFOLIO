import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Content/Home";
import About from "./Component/Content/About";
import Experience from "./Component/Content/Experience";
import Skills from "./Component/Content/Skills";
import Teams from "./Component/Content/Teams";
import Contact from "./Component/Content/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <div className="background">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Teams />
        <Contact />
      </div>
    </div>
  );
}

export default App;
