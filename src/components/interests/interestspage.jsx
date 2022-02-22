import React from 'react';
import "./interestspage.scss";
import {useState} from "react";
import ExpandEsports from './expandesports';
import ESports from './esports';
import ExpandGym from './expandgym';
import Gym from './gym';
import {motion} from 'framer-motion';

export default function InterestsPage(){

  //states to show/hide cards
  const [esports, setEsports] = useState(false);
  const [gym, setGym] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const ec = esports;
  const gc = gym;

  return (
      <motion.div className="interests" id="interests"
        initial={{scaleY: 0}}
        animate={{scaleY: 1}}
        exit={{scaleY: 0}}
        transition={{duration: 0.4, delay: 0.4}}
        >
        <div className="container">
            
              {ec ? (
                <motion.div className="expanditem"  onClick={(e) => {setEsports(esports => !esports); setExpanded(false); }}
                  initial={{opacity:0, scale: 0.1}}
                  animate={{opacity:1, scale:1.2}}
                  transition={{duration: 0.5, ease: 'easeInOut'}}
                  >
                  <ExpandEsports/>
                </motion.div>
              ) : (
                <motion.div className={"item " + (expanded && "empty")} onClick= {(e) => {setEsports(esports => !esports); setExpanded(true);}}
                  whileHover={{scale:1.1}}
                  whileTap={{scale:0.9}}
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  >
                {expanded ? (
                  <div>
                    
                  </div>
                ) : ( 
                  <motion.div className="itemcontent">
                    <ESports/> 
                  </motion.div> 
                  )}
                  </motion.div>
              )}
          

              {gc ? (
                <motion.div className="expanditem" onClick= {(e) => {setGym(gym => !gym);  setExpanded(false); }}
                  initial={{opacity:0, scale: 0.1}}
                  animate={{opacity:1, scale:1.2}}
                  transition={{duration: 0.5, ease: 'easeInOut'}}
                >
                  <ExpandGym/> 
                </motion.div>
              ) : (

                <motion.div className={"item2 " + (expanded && "empty")} onClick= {(e) => {setGym(gym => !gym);  setExpanded(true); }}
                  whileHover={{scale:1.1}}
                  whileTap={{scale:0.9}}
                  >
                  {expanded ? (
                    <div></div>
                  ) : (
                    <motion.div className="itemcontent">
                    <Gym/> 
                    </motion.div>

                  )}
                  </motion.div>
              )}
        </div>
      </motion.div>
  );
}
