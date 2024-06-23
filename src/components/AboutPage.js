import './AboutPage.css'
import React from 'react';
import { Fade } from 'react-reveal';
import pic1 from './Picture1.jpg'
import Brandon from './brandon.png'
import Dacey from './dacey.png'
import Leo from './leo.jpg' 
import Joshua from './joshua.jpeg'
import { Card } from 'react-bootstrap';

const board = [
	{
		name: "Joshua Vigel",
		title: "Executive Director",
		picture:Joshua,
	}, 
	{
		name: "Brandon Bedolla",
		title: "Vice President",
		picture:Brandon,
	},
	{
		name: "Anish Choudhury",
		title: "Director of Fundraising",
	},
	{
		name: "Leo Silveira Martinez Goncalves",
		title: "Chief Marketing Officer",	
		picture:Leo,
	},
	{
		name: "Tiffany Wang",
		title: "Director of Operations",
	},
	{
		name: "Dacey Yang",
		title: "Secretary",
		picture:Dacey,
	},
]

const AboutPage = () => {
    
    return (
        <div className='page-wrapper'>

            <div className='title-wrapper'>
                <div className="title" style={{position: "relative", width: "100vw", wordWrap: "break-word", backgroundColor: "transparent", fontWeight:"bold"}}>
                    <Fade top>
                        Our Mission                                
                    </Fade>
                </div>
            </div>

            <Fade delay = {200}>
                <div className='mission-statement'>
                    <p> <a href='https://www.cdc.gov/ncbddd/adhd/data.html'> From 2016-2019 there were about 6 million children ages 3-17 diagnosed with ADHD. </a> And ADHD isn't the only mental disorder affecting society. While hundreds of years ago, it was possible to ignore such issues, it's impossible to do the same at the current time. Many children with Special Needs lack the same opportunities as their peers, and it's our mission to ensure that 
                        <strong> everyone can learn and create. </strong>
                    </p>
                </div>
            </Fade>
    

            <div className='what-we-do' style={{display: 'flex', marginBottom:'30vh'}}>
                <div className='left' style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <div className="title" style={{position: "relative", wordWrap: "break-word", backgroundColor: "transparent", fontWeight:"bold"}}>
                        <Fade left>
                            What we do                                
                        </Fade>
                    </div>
                    
                    <div className='description'> 
                        <p> 
                            We host weekly classes on topics in STEM for student with special needs. We believe that every student learns differently, and by adapting to every student's individual needs, we can create successful education. 
                        </p> 
                    </div>
                </div>

                <div className='picture'> 
                    <div className="title" style={{position: "relative", wordWrap: "break-word", backgroundColor: "transparent", fontWeight:"bold"}}>
                        <Fade left>
                            <div className='image'> 
                                <img style={{borderRadius:"40px"}} src={pic1}/> 
                            </div> 
						</Fade>
                    </div>
				</div>

            </div>

				<div className='title' style={{fontWeight:'bold'}}> Our Team </div>
				<div className='members'>
					{
						board.map(member => {
							return <> 
									<Card style={{width: '15vw', margin:'2vw'}}>
										{member.picture? <Card.Img src={member.picture}/> : <></>}
										<Card.Body> 
											<Card.Title> {member.title} </Card.Title>
											<Card.Text> {member.name} </Card.Text>
										</Card.Body>
									</Card> 
								</>
						})	
					}	
				</div>

		</div>

    )
}

export default AboutPage;
