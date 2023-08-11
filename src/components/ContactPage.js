import './ContactPage.css'
import Card from 'react-bootstrap/Card';
import phone from './phone.png'
import email from './email.png'
import instagram_bw from './instagram_bw.png'
import linkedin_bw from './LinkedIn_bw.png'

const ContactPage = () => {
    return (
        <>
           <div style = {{
                marginTop: "0",
                // paddingLeft: "10vw",
                width: "100vw",
                paddingTop: "10vh",
                paddingBottom: "10vh",
                backgroundImage: "radial-gradient(#ffeedc, #ffeadc)",
                boxShadow: "inset 0 0 1vw #000",
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
            }} className='contact-title'>
                <h1> Contact Us </h1>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} className='contact-content'>

                <Card style={{ width: '18rem', margin: "1rem", color: "black",}} className="contact-cards">
                    <Card.Img style={{alignSelf: 'center' }} src={email} />
                    
                    <Card.Body>
                        <Card.Title className="text-center"> Email </Card.Title>
                            <Card.Text>
                                joshvigel@gmail.com
                            </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: "1rem", color: "black" }} className="contact-cards">
                    <Card.Img style={{height: 150, width: 150, alignSelf: 'center', paddingTop: 10 }} src={phone} />
                    
                    <Card.Body>
                        <Card.Title className="text-center"> Phone </Card.Title>
                            <Card.Text>
                                586-676-8033
                            </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: "1rem", color: "black" }} className="contact-cards">
                    <Card.Img style={{height: 150, width: 150, alignSelf: 'center', paddingTop: 10 }} src={instagram_bw} />
                    
                    <Card.Body>
                        <Card.Title className="text-center"> Instagram </Card.Title>
                            <Card.Text>
                                <a target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/inclusivecompute/"}>@inclusivecompute </a>
                            </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: "1rem", color: "black" }} className="contact-cards">
                    <Card.Img style={{height: 150, width: 150, alignSelf: 'center', paddingTop: 10 }} src={linkedin_bw} />
                    
                    <Card.Body>
                        <Card.Title className="text-center"> LinkedIn </Card.Title>
                            <Card.Text>
                                <a target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/company/96099560/admin/feed/posts/"}> Inclusive Computing initiative </a>
                            </Card.Text>
                    </Card.Body>
                </Card>
            
            </div>
        </>
    )
}

export default ContactPage;