import React, {useState} from 'react';
import "./esports.scss";
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


function Esports(){
    
    return (
            <div className = "esports" >
                <h1>eSports</h1>
                <div className="imgContainer">
                        <img src="../images/gpu.png" alt=""/>
                </div>
            </div>
    );
  
}

export default Esports;
  