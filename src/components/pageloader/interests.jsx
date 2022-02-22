import React from 'react';
import Headerbar from "../header/Headerbar";
import Menu from "../menu/menu";
import InterestsPage from "../interests/interestspage";
import "./pageloader.scss"
import {useState} from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function Interests() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="pageloader">
       <Headerbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <InterestsPage/>
      </div>
    </div>
  );
}

export default Interests;
