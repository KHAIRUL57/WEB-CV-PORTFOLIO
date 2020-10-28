import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Content/Home";
import About from "./Component/Content/About";
import Services from "./Component/Content/Services";
import Skills from "./Component/Content/Skills";
import Project from "./Component/Content/Project";

function App() {
  return (
    <div>
      <Navbar />
      <div className="background">
        <Home />
        <About />
        <Services />
        <Skills />
        <Project />
      </div>
    </div>
  );
}

export default App;
