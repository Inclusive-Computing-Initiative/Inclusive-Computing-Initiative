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
        "Dallas, TX",
	]

    const upcomingClasses = [
		{
            name: "CodeTogether Hackathon",
            content: "Students will learn how to create a technical project as a team and present it!",
        	picture: Chem, 
	        location: ["Dallas, TX"], 
            link:"/hackathon"
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
                                                    <Button variant="primary" as = {Link} to={"/hackathon"}> Register! </Button>
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
