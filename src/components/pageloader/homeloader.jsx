import React from 'react';
import Headerbar from "../header/Headerbar";
import About from "../about/about";
import Projects from "../projects/projects";
import Contact from "../contact/contact";
import Menu from "../menu/menu";
import "./pageloader.scss"
import {useState} from "react"


function HomeLoader() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="pageloader">
      <Headerbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default HomeLoader;
