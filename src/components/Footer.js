import './Footer.css'
import linkedinLogo from './LinkedIn.png'
import facebookLogo from './f_logo_RGB-Blue_58.png'
import instagramLogo from './instagram.png'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Footer = () => {
    return (
        <>


        <div className="footer-wrapper">
             
            <div className='dividor'> </div>

            <div className="footer-left">
                <div className="footer-socials"> 
                    <a href='https://www.linkedin.com/company/inclusive-computing-initiative'> <img style = {{height: "auto", marginLeft: "0.5vw", marginRight: "1vw"}} src={linkedinLogo}/> </a>
            <a href='https://www.facebook.com/profile.php?id=100090126751545'> <img style = {{height: "auto", marginLeft: "0.5vw", marginRight: "1vw"}} 
    src={facebookLogo}/> </a>
                    <a href='https://www.instagram.com/cs4sped/'> <img style = {{height: "auto", marginLeft: "0.5vw", marginRight: "0.5vw"}} src={instagramLogo}/> </a>
        </div>
               
               <div style={{display:"flex", flexDirection:"row"}}> 
                    <Button as={Link} to="/privacy-policy" style={{background: 'transparent', border:'0px', padding: '0'}} >
                        <p style={{color: "black", margin: "0"}}>
                            PRIVACY POLICYㅤ· 
        </p>
                    </Button>

                    <Button as={Link} to="https://docs.google.com/forms/d/e/1FAIpQLScKCS9j1I5mUN_eq_LM85EYCaBOVxerIaRwwMQQgkMDbYC6uw/viewform" style={{background: 'transparent', border:'0px', padding: '0'}} >
                        <p style={{color: "black", margin: "0"}}>
                        ㅤJOIN OUR TEAM
                        </p>
                    </Button>
                </div>

                 <p style={{color: "black"}}> 
                    The Inclusive Computing Initiative is a 501(c)(3) nonprofit organization. 
                    <br/> EIN: 81-2908499
                    <br/>
                    <a href="https://hcb.hackclub.com/inclusive-computing-initiative/"> Financials </a>
                 </p>
                
            </div>
            
            <div className="footer-right">
                
                <p style={{textAlign: "right", margin: '0'}}>
                    Allen, TX
                    <br/> <a style={{textDecoration:"none"}} href='mailto:inclusivecompute@gmail.com'> inclusivecompute@gmail.com </a>
                    <br/> (586) - 676 - 8033
                </p>

            </div>
       </div>
        
        </>
    )
}

export default Footer;
