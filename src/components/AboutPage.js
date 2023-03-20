import './AboutPage.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Brandon from './brandon.png'
const AboutPage = () => {

    const content = [
    {
        name: "Joshua Vigel",
        picture: null,
        text: "I founded CS for Special Education because I noticed a lack of leaders in STEM coming from the Special Needs community. Having a brother with special needs, I was bothered by the fact that the school curriculum rarely focused or emphasized STEM subjects. While I was bombarded with online courses, classes at school, and competitions for computer science, I found that he and many of his classmates were left ignorant. It's the reason I founded this club, to make sure that no child is denied the opportunity to learn and be passionate about something"
    },

    // {
    //     name: "Ishita Chowdhury",
    //     text: "I will change this later",
    // },

    {
        name: "Tiffany Wang",
        picture: null,
        text: "I joined CS for Special Education because I wanted an opportunity to learn more about coding while gaining experience from teaching others. Since this is my first year learning about computer science, I wanted to find a way to apply my knowledge in real-world situations. Being in the club allowed me to reflect on what I was learning in class and repurpose the knowledge into material for teaching other students. CS for Special Education gives me the chance to meet with fellow peers with similar interests and work collaboratively on building a valuable resource to younger students with special needs who may not have access to as many opportunities in this field. It is a gratifying experience to contribute a project that fulfills my own interests along with supporting the education of other students. ",
    },

    { 
        name: "Brandon Bedolla",
        picture: Brandon,  
    },

    // {
    //     name: "Robel William",
    //     text: "I will change this later",
    // },

    {
        name: "Richard Jang",
        picture: null,
        text: "I joined the CS for Special Education program in order to help people understand and appreciate computer science. Computer science has always acted as a mental playground where I could express my creativity. It has also allowed me to think in many different ways. To solve real world problems, computer scientists often have to think in a different way, and learning computer science has allowed me to think outside the box more effectively. I want to assist students on their journey through computer science, assist learners in the field of computer science, and help them discover their own path.",
    },

    // {
    //     name: "Jayadeep Velugapadi",
    //     text: "I will fix his name and change this later",
    // },

    // {
    //     name: "Namay Saini",
    //     text: "I will change this later",
    // },

    // {
    //     name: "Sara Vaughan",
    //     text: "I will change this later",
    // }

    ]

    return (
        <div className='page-wrapper'>

            <div style = {{
                paddingLeft: "10vw",
                paddingTop: "5vh",
                paddingBottom: "5vh",
            }} className='about=title'>
                <h1> Our Team </h1>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                paddingLeft: "10vw",
                paddingRight: "10vw",
            }}> 
                { content.map(person => <Card style = {{
                    margin: "1rem",
                }}>
                    <Card.Header style = {{fontSize: "1.5rem"}}> <b> {person.name} </b> </Card.Header>
                    <Card.Body>
                        {person.picture != null ? <Card.Img src = {person.picture}></Card.Img> : ""}
                        <Card.Text>
                            {person.text}
                        </Card.Text>
                    </Card.Body>
                </Card>)
                }
            </div>
        </div>
    )
}

export default AboutPage;