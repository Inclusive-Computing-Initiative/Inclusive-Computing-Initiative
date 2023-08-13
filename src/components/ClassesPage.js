import { Card } from 'react-bootstrap';
import './ClassesPage.css'
import Picture from './picture.jpg'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ClassesPage = () => {

    const upcomingClasses = [
        {
            name: "Introduction to Web design",
            date: "April 2nd",
            content: "Ever visited a website and wondered: How does this work? In this class, students will learn the basics of web developement and even create their own personal websites!",
        	picture: Picture, 
	},
    ];

    return (
        <>
           <div style = {{
                marginTop: "0",
                // paddingLeft: "10vw",
                width: "100vw",
                paddingTop: "10vh",
                paddingBottom: "10vh",
                boxShadow: "inset 0 0 1vw #000",
            }} className='classes-title'>
                <h1> Upcoming Classes </h1>
            </div>


            <div className='classes'>
                {upcomingClasses.map(upclass =>

			    <Card style={{ width: '18rem', margin: '2vw' }}>
                    <Card.Img variant="top" src={upclass.picture} />
                    <Card.Body>
                        <Card.Title> {upclass.name} </Card.Title>
                        <Card.Text>
                        {upclass.content}
                        </Card.Text>
                        <Button variant="primary" as = {Link} to={"https://forms.gle/9npvL5ZVnmdu1HwD7"}> Register! </Button>
                    </Card.Body>
                </Card>)
		}
            </div>
        </>
    )
}

export default ClassesPage;
