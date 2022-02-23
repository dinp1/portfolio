import React, {useState, useEffect} from 'react'
import "./projects.scss"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosNewIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import {useInView} from 'react-intersection-observer';
import {motion, useAnimation} from 'framer-motion';

export default function Projects(){

    const [currentSlide, setCurrentSlide] = useState(0);
    
    //function to move slider to next or previous project slider item
    const handleClick = (way) => {
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3) 
        : setCurrentSlide(currentSlide + 1  < 5 - 1 ? currentSlide + 1 : 0);
    };

    //function to trigger scroll animation when content is in view
    const animateSlides = useAnimation();
    const {ref, inView} = useInView({
        threshold: 0.4
    });
    useEffect(() => {
        if(inView){
             animateSlides.start({
                 y:0,
                 opacity: 1,
                 transition:{
                     duration: 1, delay: 0.4
                 }
             });
        }
        if(!inView){
            animateSlides.start({
                y:'-100px',
                opacity: 0
            });
        }
        console.log("projects", inView);
    }, [inView]);

    return (
        <div className="projects2">
            <motion.div  ref={ref} animate={animateSlides} className = "projects" id="projects">
                <h1 className= "shadow1">Projects</h1>
                <div  className= "slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                    <div className="container">
                        <div className="item projectshadow">
                            <div className="left">
                                <div className="leftContainer">
                                    <h2 className="shadow1">Core Banking System</h2>
                                    <p>Full range of development activities for the core banking system used by colleagues to serve millions of customers accross the UK.</p>
                                    <ul>
                                        <li><DeveloperBoardIcon className='listIcon' sz={{fontSize:500}}/>Creating new components, functions, UI, defect fixes</li>
                                        <li><DeveloperBoardIcon className='listIcon' sz={{fontSize:500}}/>Migrated software form Win7 to Win10</li>
                                        <li><DeveloperBoardIcon className='listIcon' sz={{fontSize:500}}/>Implemented key banking services using API's</li>
                                    </ul>
                                    <h3>TechStack</h3>
                                    <div className="techstack">
                                        <div className="leftstack">
                                        <ul >
                                            <li><DeveloperBoardIcon className='listIcon' sz={{fontSize:500}}/>.Net</li>
                                            <li><DeveloperBoardIcon className='listIcon' sz={{fontSize:500}}/>C/C++/C#</li>
                                            <li><DeveloperBoardIcon className='listIcon' sz={{fontSize:500}}/>JavaScript</li>
                                            <li><DeveloperBoardIcon className='listIcon' sz={{fontSize:500}}/>Microsoft OS</li>
                                        </ul>
                                        </div>
                                        <div className="rightstack">
                                        <ul>
                                            <li><DeveloperBoardIcon className='listIcon' sz={{fontSize:500}}/>PowerShell</li>
                                            <li><DeveloperBoardIcon className='listIcon' sz={{fontSize:500}}/>SQL</li>
                                            <li><DeveloperBoardIcon className='listIcon' sz={{fontSize:500}}/>ReactJS</li>
                                            <li><DeveloperBoardIcon className='listIcon' sz={{fontSize:500}}/>Windows Serivces</li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <img src="../images/project_bank.png" alt=""/>
                            </div>
                    </div>
                    </div>
                    <div className="container">
                        <div className="item projectshadow">
                            <div className="left">
                                <div className="leftContainer">
                                    <h2 className="shadow1">Portfolio Website</h2>
                                    <p>This website is created to demonstrate my knowledge/experience using React, different components and packages </p>
                                    <ul>
                                        <li><DeveloperBoardIcon className='listIcon' sz={{fontSize:500}}/>Providing more information about myself and my experience</li>
                                        <li><DeveloperBoardIcon className='listIcon' sz={{fontSize:500}}/>Showcasing my understanding of web/app development</li>
                                        <li><DeveloperBoardIcon className='listIcon' sz={{fontSize:500}}/>Multipage and single page website</li>
                                    </ul>
                                    <h3>TechStack</h3>
                                    <div className="techstack">
                                        <div className="leftstack">
                                        <ul >
                                            <li><DeveloperBoardIcon className='listIcon' sz={{fontSize:500}}/>React</li>
                                            <li><DeveloperBoardIcon className='listIcon' sz={{fontSize:500}}/>JavaScript</li>
                                            <li><DeveloperBoardIcon className='listIcon' sz={{fontSize:500}}/>CSS</li>
                                            <li><DeveloperBoardIcon className='listIcon' sz={{fontSize:500}}/>GitHub</li>
                                        </ul>
                                        </div>
                                        <div className="rightstack">
                                        <ul>
                                            <li><DeveloperBoardIcon className='listIcon' sz={{fontSize:500}}/>MUI library</li>
                                            <li><DeveloperBoardIcon className='listIcon' sz={{fontSize:500}}/>Framer Motion</li>
                                            <li><DeveloperBoardIcon className='listIcon' sz={{fontSize:500}}/>AWS Amplify</li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <img src="../images/website.png" alt=""/>
                            </div>
                    </div>
                    </div>
                    <div className="container">
                        <div className="item projectshadow">
                            <div className="left">
                                <div className="leftContainer">
                                    <h2 className="shadow1">React Native App</h2>
                                    <p>Used React Native to create cross platform app for both Android and iOS as part of the masters project. </p>
                                    <p>Platform for coahces and clients to interact with each other easily.</p>
                                    <ul>
                                        <li><ArrowRightIcon className='listIcon' sz={{fontSize:500}}/>Coaches can set goals/ track activities/ view client data</li>
                                        <li><ArrowRightIcon className='listIcon' sz={{fontSize:500}}/>Clients can view/track goals & tasks / contact their coach</li>
                                    </ul>
                                    <h3>TechStack</h3>
                                    <div className="techstack">
                                        <div className="leftstack">
                                        <ul >
                                            <li><DeveloperBoardIcon className='listIcon'/>React Native</li>
                                            <li><DeveloperBoardIcon className='listIcon' />JavaScript</li>
                                            <li><DeveloperBoardIcon className='listIcon' />GraphQL</li>
                                        </ul>
                                        </div>
                                        <div className="rightstack">
                                        <ul>
                                            <li><DeveloperBoardIcon className='listIcon' />MongoDB</li>
                                            <li><DeveloperBoardIcon className='listIcon' />UI Libraries</li>
                                            <li><DeveloperBoardIcon className='listIcon' />GitHub </li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <img src="../images/projectm.png" alt=""/>
                            </div>
                        </div>
                    
                    </div>
                    <div className="container">
                        <div className="item projectshadow">
                            <div className="left">
                                <div className="leftContainer">
                                    <h2 className="shadow1">Android App</h2>
                                    <p>Created an Android app which offers users route planning functionality (as part of final year project Bsc)  </p>
                                    <p>Outputs suggested sequence of touristic points for the user to visit </p>
                                    <ul>
                                        <li><ArrowRightIcon className='listIcon' sz={{fontSize:500}}/>Ability to search locations/  save trips</li>
                                        <li><ArrowRightIcon className='listIcon' sz={{fontSize:500}}/>View  routes on google maps</li>
                                    </ul>
                                    <h3>TechStack</h3>
                                    <div className="techstack">
                                        <div className="leftstack">
                                        <ul >
                                            <li><DeveloperBoardIcon className='listIcon'/>Android Studio</li>
                                            <li><DeveloperBoardIcon className='listIcon' />Java</li>
                                            <li><DeveloperBoardIcon className='listIcon' />Gradle</li>
                                            <li><DeveloperBoardIcon className='listIcon' />Google Map API</li>
                                        </ul>
                                        </div>
                                        <div className="rightstack">
                                        <ul>
                                            <li><DeveloperBoardIcon className='listIcon' />SQL</li>
                                            <li><DeveloperBoardIcon className='listIcon' />PHP</li>
                                            <li><DeveloperBoardIcon className='listIcon' />JSON</li>
                                            <li><DeveloperBoardIcon className='listIcon' />Google Play</li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <img src="../images/android.png" alt=""/>
                            </div>
                        </div>
                    
                    </div>
                    <div className="container">
                        <div className="item projectshadow">
                            <div className="left">
                                <div className="leftContainer">
                                    <h2 className="shadow1">Enactus Society Website</h2>
                                    <p>Leading a team of students, created University of Sussex Enactus society website. </p>
                                    <ul>
                                        <li><ArrowRightIcon className='listIcon' sz={{fontSize:500}}/>Increased student’s awareness of Enactus and its projects</li>
                                        <li><ArrowRightIcon className='listIcon' sz={{fontSize:500}}/>Promoting and presenting projects and activities.</li>
                                    </ul>
                                    <h3>TechStack</h3>
                                    <div className="techstack">
                                        <div className="leftstack">
                                        <ul >
                                            <li><DeveloperBoardIcon className='listIcon'/>PHP</li>
                                            <li><DeveloperBoardIcon className='listIcon' />HTML</li>
                                            <li><DeveloperBoardIcon className='listIcon' />CSS</li>
                                        </ul>
                                        </div>
                                        <div className="rightstack">
                                        <ul>
                                            <li><DeveloperBoardIcon className='listIcon' />JavaScript</li>
                                            <li><DeveloperBoardIcon className='listIcon' />jQuery</li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <img src="../images/enactus.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <ArrowBackIosNewIcon sx={{fontSize: 200}} className="arrow left arrowshadow" alt="" onClick={()=> handleClick("left")}/>
                <ArrowForwardIosNewIcon sx={{fontSize: 200}} className="arrow right arrowshadow" alt="" onClick={()=> handleClick()}/>
            </motion.div>
            <div className="arrowdown">
                    <h5>Contact</h5>
                <a href="#contact"><ExpandMoreRoundedIcon href="#contact" className="arrow down" alt=""/></a>
            </div>
        </div>
    )
}