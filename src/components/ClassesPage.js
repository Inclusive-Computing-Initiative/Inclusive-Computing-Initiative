import { Card } from 'react-bootstrap';
import './ClassesPage.css'
import Picture from './picture.jpg'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal';

const ClassesPage = () => {

    const upcomingClasses = [
        {
            name: "Introduction to Web design",
            date: "TBD",
            content: "Ever visited a website and wondered: How does this work? In this class, students will learn the basics of web developement and even create their own personal websites!",
        	picture: Picture, 
	},
    ];

    return (
    
            <div className='classes-wrapper'>
                <div className='title-wrapper'>
                    <div className="title" style={{position: "relative", width: "100vw", wordWrap: "break-word", backgroundColor: "transparent", fontWeight:"bold"}}>
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
                                <Button variant="primary" as = {Link} to={"https://forms.gle/9npvL5ZVnmdu1HwD7"}> Register! </Button>
                            </Card.Body>
                        </Card>
                    </Fade>  
                )})}   
            </div>  

        </div>

    )
}

export default ClassesPage;
