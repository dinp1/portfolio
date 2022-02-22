import React, {useState} from 'react';
import "./gym.scss";
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


function Gym(){
    return (
            <div className = "gym" >
                <h1>Gym</h1>
                <div className="imgContainer">
                    <img src="../images/arnold.jpg" alt=""/>
                </div>
            </div>
    );
  
}

export default Gym;
  