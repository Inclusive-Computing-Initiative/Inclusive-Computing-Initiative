import { Card } from 'react-bootstrap';
import './ClassesPage.css'
import Picture from './picture.jpg'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal';

const ClassesPage = () => {

    const upcomingClasses = [
        {
            name: "Introduction to Game Dev",
            date: "TBD",
            content: "Students will learn how to create their own scratch games!",
        	picture: Picture, 
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
            

            <div className='classes'>
                {upcomingClasses.map((upclass, num) => {                
                return (
                    <Fade delay = {num * 300} down>
                        <Card style={{ width: '18rem', margin: '2vw' }}>
                            <Card.Img variant="top" src={upclass.picture} />
                            <Card.Body>
                                <Card.Title> {upclass.name} </Card.Title>
                                <Card.Text>
                                {upclass.content}
                                </Card.Text>
                                <Button variant="primary" as = {Link} to={"https://forms.gle/pCe411ZghiRmiJsE9"}> Register! </Button>
                            </Card.Body>
                        </Card>
                    </Fade>  
                )})}   
            </div>  

        </div>

    )
}

export default ClassesPage;
