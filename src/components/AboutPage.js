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
		title: "Executive Director | Founder",
		picture:Joshua,
	}, 
	{
		name: "Brandon Bedolla",
		title: "Board Member",
		picture:Brandon,
	},
	{
		name: "Anish Choudhury",
		title: "Board Member",
	},
	{
		name: "Leo Silveira Martinez Goncalves",
		title: "Chief Marketing Officer",	
		picture:Leo,
	},
	{
		name: "Tiffany Wang",
		title: "Vice President",
	},
	{
		name: "Dacey Yang",
		title: "Director of Operations",
	},

	

]

const misc = [
	{
		name: "Matthew Price",
		title: "VP of Marketing"
	},
	{
		name: "Eileen Gin",
		title: "Officer"
	},
	{
		name: "Jayadeep Velagapudi",
		title: "Teaching Director"
	},
	{
		name: "Rishi N",
		title: "Teacher"
	},
]

const devs = [
	{
		name: "Lucas Wu",
		title: "AI Developer"
	},
	{
		name: "Pranav Balamurali",
		title: "AI Developer"
	},
	{
		name: "Abhirama Sonny",
		title: "AI Developer"
	},
	{
		name: "Kashika Khurana",
		title: "AI Developer"
	},
]

const chapters = [
	{
		name: "Immanuel Moses",
		title: "Michigan Regional Chapter Lead"
	},
	{
		name: "Aryan Sinha",
		title: "Rochester MI Co-president"
	},
	{
		name: "Aaradhya",
		title: "Walnut Grove Co-president"
	},
	{
		name: "Angela Wok",
		title: "Fremont Regional President"
	},
	{
		name: "Ansh",
		title: "Rochester MI Co-president"
	},
	{
		name: "Athindra",
		title: "Walnut Grove Co-president"
	},
	{
		name: "Harshita Kharbanda",
		title: "Frisco TX Co-president"
	},
	{
		name: "Ria Sood",
		title: "Frisco TX Co-president"
	},
	{
		name: "Tanya Verma",
		title: "Frisco TX Co-president"
	},
	{
		name: "Vishal Vinjamuri",
		title: "Frisco TX Co-president"
	},
	{
		name: "Vishy",
		title: "Frisco TX Co-president"
	}
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

				<div className='title' style={{fontWeight:'bold', marginBottom:"50px"}}> Our Team </div>
				<div className='members' style={{width:"70vw", display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center', flexWrap:'wrap'}}>
					{
						board.map(member => {
							return <> 
									<Card style={{width: 'max-content', margin:'20px'}}>
										<Card.Body> 
											<Card.Title> {member.title} </Card.Title>
											<Card.Text> {member.name} </Card.Text>
										</Card.Body>
									</Card> 
								</>
						})	
					}	
					<div style={{width:'80vw', height:'1px', border:'1px solid grey', margin:'40px'}}/>
		
					{
						devs.map(member => {
							return <> 
									<Card style={{width: 'max-content', margin:'20px'}}>
										<Card.Body> 
											<Card.Title> {member.title} </Card.Title>
											<Card.Text> {member.name} </Card.Text>
										</Card.Body>
									</Card> 
								</>
						})	
					}	
					<div style={{width:'80vw', height:'1px', border:'1px solid grey', margin:'40px'}}/>

					{
						chapters.map(member => {
							return <> 
									<Card style={{width: 'max-content', margin:'20px'}}>
										<Card.Body> 
											<Card.Title> {member.title} </Card.Title>
											<Card.Text> {member.name} </Card.Text>
										</Card.Body>
									</Card> 
								</>
						})	
					}	
					<div style={{width:'80vw', height:'1px', border:'1px solid grey', margin:'40px'}}/>
					{
						misc.map(member => {
							return <> 
									<Card style={{width: 'max-content', margin:'20px'}}>
										<Card.Body> 
											<Card.Title> {member.title} </Card.Title>
											<Card.Text> {member.name} </Card.Text>
										</Card.Body>
									</Card> 
								</>
						})	
					}	

					<div style={{width:'80vw', height:'1px', border:'1px solid grey', margin:'40px'}}/>
				</div>


		</div>

    )
}

export default AboutPage;
