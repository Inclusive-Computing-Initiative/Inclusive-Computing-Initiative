import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-wrapper">

            <div className="footer-description">
                <p style={{color: "black", textAlign: "center"}}> 
                The Inclusive Computing Initiative is on a mission to give everyone an opportunity to learn Computer Science.                      </p>
        
                <div className='social-cards'> 
                    <div class='flat-under'>
                        <div class='grow-container'>
                          <a href="#" class='to-twitter circle-button'>
                            <i class="fa fa-twitter fa-fw" aria-hidden="true"></i>
                          </a>
                        </div>
                        <div class='grow-container'>
                          <a href="#" class='to-red circle-button'>
                            <i class="fa fa-google-plus fa-fw" aria-hidden="true"></i>
                          </a>
                        </div>
                        <div class='grow-container'>
                          <a href="#" class='to-facebook circle-button'>
                            <i class="fa fa-facebook fa-fw" aria-hidden="true"></i>
                          </a>
                        </div>
                        <div class='grow-container'>
                          <a href="#" class='to-linkedin circle-button'>
                            <i class="fa fa-linkedin fa-fw" aria-hidden="true"></i>
                          </a>
                        </div>
                        <div class='grow-container'>
                          <a href="#" class='to-reddit circle-button'>
                            <i class="fa fa-reddit-alien fa-fw" aria-hidden="true"></i>
                          </a>
                        </div>
                    </div>  
                </div>
            </div>
{/* 
            <div className="footer-main">
                <Nav style={{dispay: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Nav.Link style={{color: "white", fontWeight:"bold"}} as = {Link} to = {"/"} className = "px-4">Home</Nav.Link>
                    <Nav.Link style={{color: "white", fontWeight:"bold"}} as = {Link} to = {"/about"} className = "px-4">About</Nav.Link>
                    <Nav.Link style={{color: "white", fontWeight:"bold"}} as = {Link} to = {"/classes"} className = "px-4">Classes</Nav.Link>
                    <Nav.Link style={{color: "white", fontWeight:"bold"}} as = {Link} to = {"/contact"} className = "px-4">Contact</Nav.Link>
                </Nav>
            </div>

            <div className="footer-main">
            <h1> Social Media </h1>
                <div className="footer-socials"> 
                    <a href='https://twitter.com/csforspecialedu'> <img style = {{height: "auto", marginLeft: "0.5vw", marginRight: "0.5vw"}} src={twitterLogo}/> </a>
                    <a href='https://www.facebook.com/profile.php?id=100090126751545'> <img style = {{height: "auto", marginLeft: "0.5vw", marginRight: "0.5vw"}} src={facebookLogo}/> </a>
                    <a href='https://www.instagram.com/cs4sped/'> <img style = {{height: "auto", marginLeft: "0.5vw", marginRight: "0.5vw"}} src={instagramLogo}/> </a>
                </div>
            </div> */}
        </div>
    )
}

export default Footer;
