import React, { useEffect, useRef } from 'react'
import "./about.scss"
import {init,} from 'ityped'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent } from '@mui/lab';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import {useInView} from 'react-intersection-observer';
import {motion, useAnimation} from 'framer-motion';



export default function About(){
    
    const aboutme = ["3 years+ experience working at one of UK's largest financial institution with miliions of customers accross the country."];
    //function to animate string of words with typewriter style 
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            startDelay: 700,
            showCursor: false,
            typeSpeed:  110,
            backDelay:  15000,
            strings: ["Hi, welcome to my portfolio, I'm",],
        });
    },[])

    //function to trigger scroll animation when content is in view
    const animationLeft = useAnimation();
    const animationRight = useAnimation();
    const {ref, inView} = useInView({
        threshold: 0.4
    });
    useEffect(() => {
        if(inView){
             animationLeft.start({
                 x:0,
                 transition:{
                     type: 'spring', duration: 1, delay: 0.2 , bounce:0.15
                 }
             });
             animationRight.start({
                x:0,
                transition:{
                    type: 'spring', duration: 1, delay: 0.2 , bounce: 0.15
                }
            });
        }
        if(!inView){
            animationLeft.start({
                x:'-100vw'
            });
            animationRight.start({
                x:'150vw'
            });
        }
        console.log("asd", inView);
    }, [inView]);

    return (
        <div className = "about2">
            <div ref={ref} className = "about" id="about">
                <motion.div  className={"left"}
                    animate={animationLeft}>
                    <div className="imgContainer picshadow">
                        <img src="../images/profile2.jpg" alt=""/>
                    </div>
                    <div className="wrapperLeft">
                        <h3><span ref={textRef}></span></h3>
                        <h1>Dinesh Pun</h1>
                        <div className="lines">
                            <span className="seperator seperatorshadow"></span>
                            <span className="seperator2 seperatorshadow"></span>
                        </div>
                        <h2 className="shadow1">Software Engineer</h2>
                        <span className="underline"></span>
                    </div>
                    <div className="lines2">
                        <span className="seperator3"></span>
                    </div>
                </motion.div>
                <motion.div className="right"  animate={animationRight}>
                    <motion.div className="wrapperRight"
                     >
                        <React.Fragment>
                            <Timeline className='timeline' position="block">
                                <TimelineItem id="firstItem">
                                    <TimelineOppositeContent className="oppoText">
                                        Software Engineer
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot id="firstDot" variant="outlined" color="success"/>
                                        <TimelineConnector id="firstLine"/>
                                    </TimelineSeparator>
                                    <TimelineContent id="firstText" color="text.secondary">{aboutme}</TimelineContent>
                                </TimelineItem>
                                <TimelineItem id='uniItem2'>
                                    <TimelineOppositeContent color="text.secondary">
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot className="uniDot" variant="outlined" color="primary" />
                                        <TimelineConnector className="uniLine"/>
                                    </TimelineSeparator>
                                    <TimelineContent className="uniName">MSc Computer Science</TimelineContent>
                                </TimelineItem>
                                <TimelineItem id='uniItem'> 
                                    <TimelineOppositeContent color="text.secondary">   
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot className="uniDot" variant="outlined" color="primary"/>
                                    </TimelineSeparator>
                                    <TimelineContent className="uniName" >BSc Computer Science</TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        </React.Fragment>
                    </motion.div>
                </motion.div>
            </div>
            <div className="arrowdown">
                <h5>Projects</h5>
                <a href="#projects"><ExpandMoreRoundedIcon href="#projects" className="arrow down" alt=""/></a>
            </div>
            
        </div>
    )
}