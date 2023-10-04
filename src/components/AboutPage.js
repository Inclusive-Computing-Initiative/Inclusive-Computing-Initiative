import './AboutPage.css'
import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import PersonCard from './PersonCard.js';

import joshua from './joshua.jpeg'
import brandon from './brandon.png'
import dacey from './dacey.png'
import leo from './leo.jpg'

const AboutPage = () => {
    const [modalShow, setModalShow] = React.useState("");

    const buttonHandler = name => {
        setModalShow(name);
    }

    const board = [
        {
            name: "Joshua Vigel | Executive Director",
            picture: joshua,
            text: "I founded the Inclusive Computing Initiative because I noticed a lack of leaders in STEM coming from the Special Needs community. Having a brother with special needs, I was bothered by the fact that the school curriculum rarely focused or emphasized STEM subjects. While I was bombarded with online courses, classes at school, and competitions for computer science, I found that he and many of his classmates were left ignorant. It's the reason I founded this club, to make sure that no child is denied the opportunity to learn and be passionate about something"
        },
    
        { 
            name: "Brandon Bedolla | Secretary",
            picture: brandon,  
            text: "As someone with personal experience caring for a loved one with special needs, I found myself deeply moved when Joshua, the founder of the Inclusive Computing Initiative, spoke passionately about the club's mission in front of my class. The desire to aid and uplift those with special needs has always been close to my heart, and becoming a member of this club felt like a natural step towards fulfilling that goal. As someone with a passion for computer science, I believe that by collaborating with the Inclusive Computing Initiative, we can develop innovative approaches that incorporate creativity and intelligence to better serve all students in the program. Ultimately, my goal is to contribute my skills and knowledge towards building a more inclusive and equitable future for individuals with special needs."
        },
    
        {
            name: "Tiffany Wang | Vice President",
            picture: null,
            text: "I joined the Inclusive Computing Initiative because I wanted an opportunity to learn more about coding while gaining experience from teaching others. Since this is my first year learning about computer science, I wanted to find a way to apply my knowledge in real-world situations. Being in the club allowed me to reflect on what I was learning in class and repurpose the knowledge into material for teaching other students. the Inclusive Computing Initiative gives me the chance to meet with fellow peers with similar interests and work collaboratively on building a valuable resource to younger students with special needs who may not have access to as many opportunities in this field. It is a gratifying experience to contribute a project that fulfills my own interests along with supporting the education of other students. ",
        },
    
        {
            name: "Dacey Yang | Director Of Operations",
            picture: dacey,
            text: null,
        },
    
        {
            name: "Leonardo | Director Of Outreach",
            picture: leo,
            text: null,
        },

        {
            name: "Carson Sheffield | CFO",
            picture: null,
            text: null,
        }
    
    ];

    const members = [

    {
        name: "Robel Abraham",
        text: "The Inclusive Computing Initiative is a club I found on posters around the school and was immediately interested; I decided to give it a shot. I joined this club because I am passionate about helping others, and I feel fulfilled in sharing my knowledge. I wish to make a difference in these students with special needs by giving them a skill that can be invaluable in today’s world and can help provide them with future opportunities. Overall, joining this club could be a way for me to make a positive impact on society and contribute to a meaningful cause. I have high hopes for the future of this program.",
    },

    {
        name: "Richard Jang",
        picture: null,
        text: "I joined the Inclusive Computing Initiative program in order to help people understand and appreciate computer science. Computer science has always acted as a mental playground where I could express my creativity. It has also allowed me to think in many different ways. To solve real world problems, computer scientists often have to think in a different way, and learning computer science has allowed me to think outside the box more effectively. I want to assist students on their journey through computer science, assist learners in the field of computer science, and help them discover their own path.",
    },

    {
        name: "William Turner",
        picture: null,
        text: "I became a member of the Inclusive Computing Initiative after noticing a poster in the hall for it. Seeing the poster made me think about how Ive had the priviledge of having access to tons of computer science resources to learn from and I realized that I wanted to make that same journey accessable to everyone. I decided I would join the Inclusive Computing Initiative so that I could further the CS community and make resources that anybody could learn from regardless of learning disabilities. Another great reason I saw to joining this club is to allow myself to polish up on my own skills, understand everything fully, and fill cracks in my knowledge.",
    },



    {
        name: "Jayadeep Velugapadi",
        text: "With over three years of experience in computer science, I am passionate about teaching the subject to individuals with special educational needs. Unfortunately, many learners with disabilities do not have access to computer science education, which puts them at a disadvantage in today's technology-driven world. I am motivated to bridge this gap and make computer science education more accessible to these learners, so that they can develop valuable skills that will help them succeed. By joining the Inclusive Computing Initiative, I hope to use my knowledge and expertise to empower students and make a positive impact in their lives        ",
    },

    {
        name: "Namay Saini",
        text: "My decision to join Computer Science for Special Education stemmed from my genuine passion for the field and my love for tutoring others. I believe that everyone should have access to quality education, regardless of their background or abilities. I find great joy in sharing my knowledge and helping others overcome their learning challenges. My commitment to special education and computer science is driven by a desire to make a positive impact in the lives of students who may face additional obstacles in their learning journey.",
    },
    {
        name: "Katie Yao",
        text: null,
    },
    {
        name: "Anish Chowdhry",
        text: null,
    },
    {
        name: "Joseph Nguyen",
        text: null,
    },
    {
        name: "Phoebe Li",
        text: null,
    },
    {
        name: "Katie Escobedo",
        text: null,
    },
    {
        name: "Sasank Goteti",
        text: null,
    },
    {
        name: "Anas Shah",
        text: null,
    },
    {
        name: "Nafis Anjum",
        text: null,
    },
    {
        name: "Shazib Hameed",
        text: null,
    },
    {
        name: "Hasher Syed",
        text: null,
    },
]

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





        <div className='board-wrapper'>
            <Fade>
                <div style={{marginTop: "20vh"}}> 
                    <div class="title" style={{position: "relative", width: "60vw", wordWrap: "break-word", backgroundColor: "transparent", fontWeight: "bold "}}>
                        <Fade top delay={100}>
                            Our Team
                        </Fade>
                    </div>
                </div>
            </Fade>

            <div class="subtitle" style={{position: "relative", width: "100vw", wordWrap: "break-word", backgroundColor: "transparent"}}>
                <Fade top delay= {400}>
                    Board of Directors
                </Fade>
            </div>    
        {
            board.map((value) => {
                const name = value.name;
                return (
                
                <Card style={{ width: '14rem', height: "min-content", margin: "1rem", borderRadius: "20px" }}>
                    <Card.Img variant="top" src={value.picture} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
        
                    <Button variant="outline-primary" onClick={() => buttonHandler(name)}>
                        Learn More  
                    </Button>                
                    
                    </Card.Body>
                </Card>

                )
            })

        }
        </div>
        
        {
            board.map((value) => { 
                // console.log(value.name + " : " + (modalShow == value.name));

                return (
                    <PersonCard
                    show={modalShow == value.name}
                    onHide={() => setModalShow("")}
                    text={value.text}
                    name={value.name}
                />
                )
            })
        }

        {
            members.map((value) => { 
                // console.log(value.name + " : " + (modalShow == value.name));

                return (
                    <PersonCard
                    show={modalShow == value.name}
                    onHide={() => setModalShow("")}
                    text={value.text}
                    name={value.name}
                />
                )
            })
        }

        <div className='member-wrapper'>

        <div class="subtitle" style={{marginTop: "10vh", position: "relative", width: "100vw", wordWrap: "break-word", backgroundColor: "transparent"}}>
            <Fade top delay={200}>
                Officers
            </Fade>
        </div>  
            {
                members.map((value) => { 
                    // console.log(value.name + " : " + (modalShow == value.name));
                    const name = value.name;
                    return (

                    <Card style={{ width: '18rem', height: "min-content", margin: "1rem", borderRadius: "20px"}}>
                        <Card.Img variant="top" src={value.picture} />
                        <Card.Body>
                        <Card.Title> {name}</Card.Title>
            
                        <Button variant="outline-primary" onClick={() => buttonHandler(name)}>
                            Learn More  
                        </Button>                
                        
                        </Card.Body>
                    </Card>
                    
                    );
                })
            }
        
        </div>

    </div>

    )
}

export default AboutPage;
