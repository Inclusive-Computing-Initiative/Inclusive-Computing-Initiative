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
        // picture: Brandon,  
        text: "As someone with personal experience caring for a loved one with special needs, I found myself deeply moved when Joshua, the founder of CS for Special Education, spoke passionately about the club's mission in front of my class. The desire to aid and uplift those with special needs has always been close to my heart, and becoming a member of this club felt like a natural step towards fulfilling that goal. As someone with a passion for computer science, I believe that by collaborating with CS for Special Education, we can develop innovative approaches that incorporate creativity and intelligence to better serve all students in the program. Ultimately, my goal is to contribute my skills and knowledge towards building a more inclusive and equitable future for individuals with special needs."
    },

    {
        name: "Robel Abraham",
        text: "CS for Special Education is a club I found on posters around the school and was immediately interested; I decided to give it a shot. I joined this club because I am passionate about helping others, and I feel fulfilled in sharing my knowledge. I wish to make a difference in these students with special needs by giving them a skill that can be invaluable in today’s world and can help provide them with future opportunities. Overall, joining this club could be a way for me to make a positive impact on society and contribute to a meaningful cause. I have high hopes for the future of this program.",
    },

    {
        name: "Richard Jang",
        picture: null,
        text: "I joined the CS for Special Education program in order to help people understand and appreciate computer science. Computer science has always acted as a mental playground where I could express my creativity. It has also allowed me to think in many different ways. To solve real world problems, computer scientists often have to think in a different way, and learning computer science has allowed me to think outside the box more effectively. I want to assist students on their journey through computer science, assist learners in the field of computer science, and help them discover their own path.",
    },

    {
        name: "William Turner",
        picture: null,
        text: "I became a member of CS for special education after noticing a poster in the hall for it. Seeing the poster made me think about how Ive had the priviledge of having access to tons of computer science resources to learn from and I realized that I wanted to make that same journey accessable to everyone. I decided I would join CS for special education so that I could further the CS community and make resources that anybody could learn from regardless of learning disabilities. Another great reason I saw to joining this club is to allow myself to polish up on my own skills, understand everything fully, and fill cracks in my knowledge.",
    },



    {
        name: "Jayadeep Velugapadi",
        text: "With over three years of experience in computer science, I am passionate about teaching the subject to individuals with special educational needs. Unfortunately, many learners with disabilities do not have access to computer science education, which puts them at a disadvantage in today's technology-driven world. I am motivated to bridge this gap and make computer science education more accessible to these learners, so that they can develop valuable skills that will help them succeed. By joining CS for Special Education, I hope to use my knowledge and expertise to empower students and make a positive impact in their lives        ",
    },

    {
        name: "Namay Saini",
        text: "My decision to join Computer Science for Special Education stemmed from my genuine passion for the field and my love for tutoring others. I believe that everyone should have access to quality education, regardless of their background or abilities. I find great joy in sharing my knowledge and helping others overcome their learning challenges. My commitment to special education and computer science is driven by a desire to make a positive impact in the lives of students who may face additional obstacles in their learning journey.",
    },

    // {
    //     name: "Sara Vaughan",
    //     text: "I will change this later",
    // }

    ]

    return (
        <div className='page-wrapper'>

            <div style = {{
                marginTop: "0",
                // paddingLeft: "10vw",
                width: "100vw",
                paddingTop: "10vh",
                paddingBottom: "10vh",
            }} className='about-title'>
                <h1> Our Team </h1>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                paddingLeft: "10vw",
                paddingTop: "10vh",
                paddingRight: "10vw",
                paddingBottom: "10vh"
            }}> 
                { content.map(person => <Card border = "primary" style = {{
                    margin: "1rem",
                }}>
                    <Card.Header  style = {{fontSize: "1.5rem"}} > <b> {person.name} </b> </Card.Header>
                    <Card.Body>
                        {person.picture != null ? <Card.Img src = {person.picture}></Card.Img> : ""}
                        <Card.Text> 
                            <p style = {{fontSize: "1.2vw"}} > {person.text} </p>
                        </Card.Text>
                    </Card.Body>
                </Card>)
                }
            </div>
        </div>
    )
}

export default AboutPage;