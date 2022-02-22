import React, {useState} from 'react';
import "./expandesports.scss";
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import GamepadOutlinedIcon from '@mui/icons-material/GamepadOutlined';


function ExpandEsports(){

    return (
            <div className = "expandesports">
                <div className="imgContainer">
                    <img src="../images/mouse.png" alt=""/>
                </div>
                <h1>eSports</h1>
                <p>I have always been passionate about gaming and computers since a young age. Throghout the years, learning about different layers involved interms of software and hardware.</p>
                <div className="techstack"> 
                    <ul>
                        <li><GamepadOutlinedIcon className='listIcon' sz={{fontSize:500}}/>Built multiple computer/gaming computers</li>
                        <li className="libold" ><GamepadOutlinedIcon className='listIcon' sz={{fontSize:500}} />Competitor/team member for University of Leicester eSports team</li>
                        <li className="libold" ><GamepadOutlinedIcon className='listIcon' sz={{fontSize:500}}/>President of University of Leicester eSports team</li>
                        <li><GamepadOutlinedIcon className='listIcon' sz={{fontSize:500}}/>Participated in running varcity gaming tournament, parterning with ESL (major gaming company)</li>
                    </ul>
                </div>

            </div>
    );
  
}

export default ExpandEsports;
  