import './ContactPage.css'
import Card from 'react-bootstrap/Card';
import phone from './phone.png'
import email from './email.png'
import instagram_bw from './instagram_bw.png'
import linkedin_bw from './LinkedIn_bw.png'

import { Fade } from 'react-reveal';    
// import { Fade } from 'react-reveal';

const ContactPage = () => {
    return (
        <div className='contact-wrapper'>
            <div className='title-wrapper'>
                <div className="title" style={{position: "relative", width: "100vw", wordWrap: "break-word", backgroundColor: "transparent", fontWeight:"bold"}}>
                    <Fade top>
                        Contact Us!                                 
                    </Fade>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} className='contact-content'>

                <Fade right delay = {200}>
                    <Card style={{ width: '18rem', margin: "1rem", color: "black", height: "min-content", borderRadius: "20px"}} className="contact-cards">
                        <Card.Img style={{alignSelf: 'center', marginTop: 40}} src={email} />
                        
                        <Card.Body>
                            <Card.Title className="text-center"> Email </Card.Title>
                                <Card.Text className='text-center'>
                                    joshvigel@gmail.com
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Fade>

                <Fade right delay = {400}>

                    <Card style={{ width: '18rem', margin: "1rem", color: "black", height: "min-content", borderRadius: "20px"}} className="contact-cards">
                        <Card.Img style={{height: 150, width: 150, alignSelf: 'center', marginTop: 40}} src={phone} />
                        
                        <Card.Body>
                            <Card.Title className="text-center"> Phone </Card.Title>
                                <Card.Text className='text-center'>
                                    586-676-8033
                                </Card.Text>
                        </Card.Body>
                    </Card>

                </Fade>    

                <Fade right delay = {600}>

                    <Card style={{ width: '18rem', margin: "1rem", color: "black", height: "min-content", borderRadius: "20px"}} className="contact-cards">
                        <Card.Img style={{height: 150, width: 150, alignSelf: 'center', marginTop: 40}} src={instagram_bw} />
                        
                        <Card.Body>
                            <Card.Title className="text-center"> Instagram </Card.Title>
                                <Card.Text className='text-center'>
                                    <a target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/inclusivecompute/"}>@inclusivecompute </a>
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Fade>    

                <Fade right delay = {800}>

                <Card style={{ width: '18rem', margin: "1rem", color: "black", height: "min-content", borderRadius: "20px"  }} className="contact-cards">
                    <Card.Img style={{height: 150, width: 150, alignSelf: 'center', marginTop: 40 }} src={linkedin_bw} />
                    
                    <Card.Body>
                        <Card.Title className="text-center"> LinkedIn </Card.Title>
                            <Card.Text className='text-center'  >
                                <a target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/company/96099560/admin/feed/posts/"}> Inclusive Computing initiative </a>
                            </Card.Text>
                    </Card.Body>
                </Card>
                </Fade>    

            
            </div>
        </div>
    )
}

export default ContactPage;