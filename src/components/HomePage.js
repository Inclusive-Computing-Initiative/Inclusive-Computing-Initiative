import './HomePage.css'
import {useState} from 'react'
import landingBackground from './background.png'
import facebookLogo from './f_logo_RGB-Blue_58.png'
import twitterLogo from './twitter.png'
import instagramLogo from './instagram.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
const HomePage = () => {
	
                return(
                        <div>
			            <div className="home-wrapper">

                            <div style={{position: 'absolute', backgroundColor: "transparent", top: "20vh", width: "30vw", left: "5vw",}}>

                            <div style={{backgroundColor: "transparent", fontSize: "2.3rem", fontWeight:"bold"}}>
                                Computer Science for Special Education
                            </div>

                            
                            <div style={{backgroundColor: "transparent", fontSize: "1.5rem", top: "27vh", width: "40vw", left: "5vw"}}>
                                <i style={{backgroundColor: "transparent"}}>Everyone</i> deserves to learn and create.
                            </div>
                            </div>
                            <div className='landing-wrapper'>
                                <img 
                                    style={{width: "100%", margin: "0"}}
                                    src={landingBackground}
                                />
                            </div>
                            
                            <div className="about-wrapper">

                                <div className="about-left">
                                    <div className="about-title">
                                        <h2> Who are we? </h2>
                                    </div>
                                    <div className="about-content">
                                        <p> Computer Science for Special Education is a Project started by High School students at Allen High School to increase knowledge of Computer Science among students with Special Needs. We beleive that everyone deserves an equal opportunity to learn and create. </p>
			                        </div>
                                </div>
                            </div>

                            <div style = {{display: "flex", width: "100vw", paddingTop: "5vw", paddingBottom: "5vw", flexDirection: "column", alignItems: "center", backgroundColor: "#FFEEDC"}}>

                            <h1 style = {{marginBottom: "5vw", backgroundColor: "#FFEEDC"}}> Our Approach </h1>

                            <div style = {{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", backgroundColor: "#FFEEDC"}}>

                            <Card style={{ width: '18rem', margin: "1rem"}}>
                            <Card.Body>
                                <Card.Title>Visual Learning</Card.Title>
                                <Card.Text>
                                Many Special Needs children are visual learners. That's why our curriculum focuses on represeting topics in a tangible and engaging way to ensure that every student sufficiently understands the topics.
                                </Card.Text>
                            </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem', margin: "1rem" }}>
                            <Card.Body>
                                <Card.Title> Individual Attention </Card.Title>
                                <Card.Text>
                                We ensure that every student gets individual attentionefrom our highly qualified teachers. This attention is necessary to create a safe and welcoming environment and to understand and care to the needs of each and every student.
                                </Card.Text>
                            </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem', margin: "1rem" }}>
                            <Card.Body>
                                <Card.Title>Custom Pace</Card.Title>
                                <Card.Text>
                                Is the student eager to learn, or not? Do they grasp concepts quickly, or do they need some time to think over? Either way, we can accomodate. We allow each student to go at whatever pace they are comfortable in while still challenging them to improve.                                </Card.Text>
                            </Card.Body>
                            </Card>

                            </div>  
                            </div>

                            <div className='interested-wrapper' style={{
                                    width: "100vw",
                                    paddingTop: "10vh",
                                    paddingLeft: "10vw",
                                    paddingRight: "18vw",
                                    paddingBottom: "10vh"
                                }}>
                                <h1 style={{ fontWeight: "normal", letterSpacing: "1px", marginBottom: "5vh"}}>
                                   Interested? Take a look at our upcoming classes. 
                                </h1>
                                <Button variant='outline-primary' size='lg' as = {Link} to = {"/classes"} > Click Here ⇒ </Button>
                            </div>

                            <div className="footer-wrapper">
                                <div className="footer-description">
                                    <p> 
                                    CS for Special Ed. is on a mission to give everyone an opportunity to learn Computer Science.                                    </p>    
                                </div>
                                <div className="footer-main">
                                    <h1> Main </h1>
                                    <h2> Home </h2> 
                                    <h2> About </h2>
                                    <h2> Classes </h2>
                                    <h2> Contact </h2>
                                </div>
        
                               <div className="footer-main">
                                <h1> Social Media </h1>
                                    <div className="footer-socials"> 
                                        <a href='https://twitter.com/csforspecialedu'> <img style = {{width: "2vw", height: "auto", marginLeft: "0.5vw", marginRight: "0.5vw"}} src={twitterLogo}/> </a>
                                        <a href='https://www.facebook.com/profile.php?id=100090126751545'> <img style = {{width: "2vw", height: "auto", marginLeft: "0.5vw", marginRight: "0.5vw"}} src={facebookLogo}/> </a>
                                        <a href='https://www.instagram.com/cs4sped/'> <img style = {{width: "2vw", height: "auto", marginLeft: "0.5vw", marginRight: "0.5vw"}} src={instagramLogo}/> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )   
            }


export default HomePage
