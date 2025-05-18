import React from "react";
import Hero from "./sections/hero.jsx";
import About from "./sections/About.jsx";
import TechStack from "./sections/TechStack.jsx";
import Projects from "./sections/Projects.jsx";
import Testimoials from "./sections/Testimoials.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";
import SideBar from "./components/SideBar.jsx";
const App = () => {
  return (
    <div>
      <NavBar/>
      <SideBar/>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Testimoials />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
