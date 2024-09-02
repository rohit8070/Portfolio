import "./App.css";
import Header from "./components/header/header";
import Home from "./components/Home/home";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
// import Qualification from "./components/qualification/qualification";
import Projects from "./components/Projects/projects";
import Contact from "./components/contact/Contact";
// import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
