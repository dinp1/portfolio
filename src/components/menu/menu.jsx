import React from 'react'
import "./menu.scss"
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

export default function Menu({menuOpen, setMenuOpen}){
    return (
        <div className = {"menu "+ (menuOpen && "active")}>
            <ul>
                <li className="menushadow" onClick={()=>setMenuOpen(false)}>
                <SportsEsportsIcon/><a href="/interests">Interests</a><FitnessCenterIcon/>
                </li>
            </ul>
        </div>
    )
}