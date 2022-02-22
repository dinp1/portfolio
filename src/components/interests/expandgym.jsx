import React, {useState} from 'react';
import "./expandgym.scss";
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import GamepadOutlinedIcon from '@mui/icons-material/GamepadOutlined';


function ExpandGym(){

    return (
            <div className = "expandgym">
                <div className="imgContainer">
                    <img src="../images/gym.jpg" alt=""/>
                </div>
                <h1>Gym</h1>
                <p>I follow bodybuilding and power-lifting sports which I have started few years ago. Goal to counteract sitting at the desk all day for work and gaming. </p>
                <div className="techstack"> 
                    <ul>
                        <li><GamepadOutlinedIcon className='listIcon' sz={{fontSize:500}}/>Practice powerlifting to gain strength, was member of power lifting club at University of Sussex.</li>
                        <li><GamepadOutlinedIcon className='listIcon' sz={{fontSize:500}}/>Bodybuilding to help with general health and overall wellbeing. </li>
                    </ul>
                </div>

            </div>

    );
  
}

export default ExpandGym;
  