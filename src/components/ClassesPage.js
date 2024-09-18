import { Card } from 'react-bootstrap';
import './ClassesPage.css'
import Picture from './picture.jpg'
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion'
import { Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal';
import Chem from './chem.jpg'

const ClassesPage = () => {
    
    const chapters = [
        "Allen, TX",
        "Rochester, MI",
        "Frisco, TX",
   		"Fremont, CA", 
	]

    const upcomingClasses = [
        {
            name: "Introduction to Chemistry",
            content: "Students will learn the basics of Chemistry, and even do real-life lab experiments!",
        	picture: Chem, 
	        location: ["Allen, TX"],
            link: "https://forms.gle/PZ5gZshvx2JReqfaA"       
        },
		{
            name: "Introduction to Game Dev",
            content: "Students will learn how to code their own games on scratch!",
        	picture: Picture, 
	        location: ["Rochester, MI"], 
            link:"https://forms.gle/RhaysuJv6TdHRur97"
        },
        {
			
            name: "Introduction to Web Dev",
            content: "Ever wonder how a website works? Students will learn how to create their own person websites to share with their friends and family!",
        	picture: Picture, 
	        location: ["Frisco, TX"], 
            link:"https://forms.gle/KiBoUtRSgpqB5Lsr6"
        },
		{
            name: "Introduction to Chemistry",
            content: "Students will learn the basics of Chemistry, and even perform some of their own cool experiments!",
        	picture: Chem, 
	        location: ["Fremont, CA"], 
            link:"https://forms.gle/Wd1es6UDro17YY9XA"
        },
    ];

    return (
    
            <div className='classes-wrapper'>
                <div className='title-wrapper'>
                    <div className="title" style={{position: "relative", wordWrap: "break-word", backgroundColor: "transparent", fontWeight:"bold"}}>
                        <Fade top>
                            Upcoming Classes                                
                        </Fade>
                    </div>
                </div>
                <div className='subtitle-wrapper'>
                    <Fade delay={200} top>
                        <p> We have upcoming classes in locations all around the DFW area, and more coming up soon!</p>
                    </Fade>
                </div>
            

            <div className='classes'>

                <Tabs className="mb-3" fill>
                {
                    chapters.map(chapter => (
                        <Tab eventKey={chapter} title={chapter} >
                                {
                                upcomingClasses.map(upclass => {
                                        if (!upclass.location.includes(chapter)) return;
                                        else return ( 
                                            <Card style={{width:"18rem", margin:"2rem"}}>
                                            <Card.Img variant="top" src={upclass.picture} />
                                                <Card.Body>
                                                    <Card.Title> {upclass.name} </Card.Title>
                                                    <Card.Text>
                                                    {upclass.content}
                                                    </Card.Text>
                                                    <Button variant="primary" as = {Link} to={upclass.link}> Register! </Button>
                                                </Card.Body>
                                            </Card>
                                        )
                                    }
                                )
                                }
                        </Tab>
                    ))
                }  
                </Tabs>
            </div>  

        </div>

    )
}

export default ClassesPage;
