import React from 'react'
import "./headerbar.scss"
import Particles from "react-tsparticles"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ComputerIcon from '@mui/icons-material/Computer';

export default function Headerbar({menuOpen, setMenuOpen}){
    const particlesInit = (main) => {console.log(main);};
    const particlesLoaded = (container) => {console.log(container);}
    const burgerIcon = menuOpen;
    ;
    return (
        <div className = {"headerbar " + (menuOpen && "active") + " barshadow"}>
            <Particles
                canvasClassName="particles"
                height="60px"
                width="100%"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: { enable: false },
                    overflow:{enable:true},
                    height:40,
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {enable: false,},
                            onHover: {
                            enable: false,},
                        },
                        modes: {
                            bubble: {
                                distance: 100,
                                duration: 5,
                                opacity: 0.7,
                                size: 10,
                            },
                            push: {
                                quantity: 10,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {value: "#ffffff",},
                        links: {
                            color: "#ffffff",
                            distance: 50,
                            enable: true,
                            opacity: 0.15,
                            width: 1,
                        },
                        collisions: {enable: true,},
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 0.10,
                            straight: false,
                        },
                        number: {
                            density: {enable: true,area: 500,},
                            value: 75,},
                            opacity: {value: 0.5,},
                            shape: {type: "circle",},
                            size: {random: true, value: 4,},
                    },
                    detectRetina: true,
                }}
            />
            <div className= "wrapper">
                <div className= "left">
                    <div className='itemContainerLeft'>
                        <a href="/#about"> <span className='bartxtshadow'>About</span></a>
                    </div>
                    <div className='itemContainerLeft'>
                        <a href="/#projects"><span className='bartxtshadow'>Projects</span></a>
                    </div>
                    <div className='itemContainerLeft'>
                        <a href="/#contact"><span className='bartxtshadow'>Contact</span></a>
                    </div>
                </div>
                <ComputerIcon/>
                <div className = "right">
                    <div className='itemContainerRight'>
                        <LinkedInIcon/>
                        <a href="https://www.linkedin.com/in/dinesh-pun-270b41106"><span className='bartxtshadow'>LinkedIn</span></a>
                    </div>
                    <div className='itemContainerRight'>
                        <GitHubIcon/>
                        <a href="https://github.com/dinp1/portfolio"><span className='bartxtshadow'>GitHub</span></a>
                    </div>
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        {burgerIcon ? <MenuIcon sx={{fontSize: 40}}/> : <MenuOpenIcon sx={{fontSize: 40}}/>}
                    </div>
                </div>
                
            </div>
        </div>
    )
    
}



