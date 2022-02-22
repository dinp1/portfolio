import React, { useEffect} from 'react'
import "./contact.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import {useInView} from 'react-intersection-observer';
import {motion, useAnimation} from 'framer-motion';

export default function Contact(){

    //function to trigger scroll animation when content is in view
    const animationLeft = useAnimation();
    const animationRight = useAnimation();
    const {ref, inView} = useInView({
        threshold: 0.2
    });
    useEffect(() => {
        if(inView){
             animationLeft.start({
                 opacity:1,
                 transition:{
                    duration: 1, delay: 0.2
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
                opacity:0,
            });
            animationRight.start({
                x:'150vw'
            });
        }
        console.log("asd", inView);
    }, [inView]);

    return (
        <div className = "contact" id="contact" ref={ref}>
            <motion.div className="left" animate={animationLeft}>
                <div className="imgcontainer picshadow">
                    <img src="../images/esport.jpg" alt=""/>
                </div>
            </motion.div>
            <motion.div className="right" animate={animationRight}>
                <div className="rightcontainer">
                    <h2>Get In Touch</h2>
                    <div className="paragraph">
                        <p>I am currently looking for new opportunities to grow my experience. </p>
                        <p>Whether you have open opportunities or just want to say hi, feel free to email or message me on linkedIn.</p>
                    </div>
                    <div className='itemContainerRight'>
                        <EmailIcon className="linkedicon"/>
                        <a href="mailto:pundin12@gmail.com"><span>pundin12@gmail.com</span></a>
                    </div>
                    <div className='itemContainerRight'>
                        <LinkedInIcon className="linkedicon"/>
                        <a href="https://www.linkedin.com/in/dinesh-pun-270b41106"><span>LinkedIn</span></a>
                    </div>
                    
                </div>
            </motion.div>
        </div>
    );
}