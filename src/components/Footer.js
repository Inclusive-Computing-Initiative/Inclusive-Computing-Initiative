import './Footer.css'
import linkedinLogo from './LinkedIn_bw.png'
import facebookLogo from './f_logo_bw.png'
import instagramLogo from './instagram_bw.png'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Footer = () => {
    return (
        <>


        <div className="footer-wrapper">
            <div className="footer-socials-row"> 
                <a href='https://www.linkedin.com/company/inclusive-computing-initiative'> <img src={linkedinLogo} alt="LinkedIn"/> </a>
                <a href='https://www.facebook.com/profile.php?id=100090126751545'> <img src={facebookLogo} alt="Facebook"/> </a>
                <a href='https://www.instagram.com/inclusivecompute/'> <img src={instagramLogo} alt="Instagram"/> </a>
            </div>
            <div className="footer-links"> 
                <Button as={Link} to="/privacy-policy" style={{background: 'transparent', border:'0px', padding: '0 0.5em'}} >
                    <span style={{color: "black", margin: "0"}}>
                        PRIVACY POLICY
                    </span>
                </Button>
                <span style={{color: "black", margin: "0 0.5em"}}>&middot;</span>
                <Button as={Link} to="https://docs.google.com/forms/d/e/1FAIpQLScKCS9j1I5mUN_eq_LM85EYCaBOVxerIaRwwMQQgkMDbYC6uw/viewform" style={{background: 'transparent', border:'0px', padding: '0 0.5em'}} >
                    <span style={{color: "black", margin: "0"}}>
                        JOIN OUR TEAM
                    </span>
                </Button>
            </div>
            <div className="footer-description">
                <span style={{color: "black", margin: 0, display: 'block'}}> 
                    The Inclusive Computing Initiative is a 501(c)(3) nonprofit organization.<br/>EIN: 81-2908499
                </span>
            </div>
            <div className="footer-financials">
                <a href="https://hcb.hackclub.com/inclusive-computing-initiative/"> Financials </a>
            </div>
            <div className="footer-location" style={{marginTop: '1vh'}}>
                Allen, TX
            </div>
            <div className="footer-email">
                <a style={{textDecoration:"none"}} href='mailto:inclusivecompute@gmail.com'> inclusivecompute@gmail.com </a>
            </div>
            <div className="footer-phone">
                (586) 676-8033
            </div>
        </div>
        
        </>
    )
}

export default Footer;
