
import './Footer.css'
import facebookLogo from './f_logo_RGB-Blue_58.png'
import twitterLogo from './twitter.png'
import instagramLogo from './instagram.png'

import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo.png'
import './Navigationbar.css'


const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-description">
                <p> 
                CS for Special Ed. is on a mission to give everyone an opportunity to learn Computer Science.                                    </p>    
            </div>
            <div className="footer-main">
          <Nav style={{dispay: "flex", flexDirection: "column"}}>
            <Nav.Link as = {Link} to = {"/"} className = "px-4">Home</Nav.Link>
            <Nav.Link as = {Link} to = {"/about"} className = "px-4">About</Nav.Link>
            <Nav.Link as = {Link} to = {"/classes"} className = "px-4">Classes</Nav.Link>
            <Nav.Link as = {Link} to = {"/contact"} className = "px-4">Contact</Nav.Link>
          </Nav>
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
    )
}

export default Footer;
