import './HomePage.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide'
import TeacherImage from './teacher.jpg'
import Flash from 'react-reveal/Flash';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from './pic1crop.png'
import pic2 from './pic3crop.png'
import pic3 from './one.jpg'
import pic4 from './two.jpg'

const HomePage = () => {    

	return(
	<div>
		<div className="home-wrapper">
			<div className="home-carousel">
				<div className="title-wrapper" style={{backgroundColor: "transparent", top: "20vh"}}>
					<div class="title" style={{position: "relative", wordWrap: "break-word", backgroundColor: "transparent", fontWeight:"bold"}}>
						<Fade top>
						Inclusive Computing Initiative                                
						</Fade>
					</div>
					
					<div class="subtitle" style={{position: "relative", wordWrap: "break-word", backgroundColor: "transparent"}}>
						<Fade top delay="400"> Everyone can learn and create. </Fade>
					</div>
					
					<Slide left>
						<div className='button-wrapper'>
							<Button style = {{marginRight:'1vw'}} variant='outline-primary' size='lg' as = {Link} to = {"/classes"} > Upcoming Classes </Button>
							<Button variant='outline-dark' size='lg' as={Link} to={'https://hcb.hackclub.com/donations/start/inclusive-computing-initiative'}> Donate Now! </Button>
						</div> 
					</Slide>
				</div>
				
				<Carousel className="carousel" style={{borderRadius:'20px'}}>
					<Carousel.Item interval={3000}>
						<img className="carousel-img" src={pic1}/>
					</Carousel.Item>
					<Carousel.Item interval={3000}>
						<img className="carousel-img" src={pic2}/>
					</Carousel.Item>
					<Carousel.Item interval={3000}>
						<img className="carousel-img" src={pic4}/>
					</Carousel.Item>		
					</Carousel>
			</div>
			
			<div className="testimonial-wrapper">
				<div className='test-left'> 
					<img className='pic3' src={pic3}/>
				</div>
				<div className='test-right'> 
					<div className="test-title"> <p> Testimonials </p> </div>
					<div className="testimonial"> 
						<p>
						The class you took for my son was amazing he learned a valuable skill and I am hoping this class will make way for further learning & development. The personalized attention to students was very encouraging and motivated my son to attend the sessions. 
						</p>
					</div>
				</div>
			</div>	


			<div className="about-wrapper">
				<div className='about-top'>
					<div className="about-left" >
						<Fade left delay={100}>
							<div className="about-title">
								<p> About Us </p>
							</div>
						</Fade>
						<Fade left delay={400}>
							<div className="about-content">
								<p> The Inclusive Computing Initiative is a non-profit organization that aims to increase knowledge of Computer Science among students with Special Needs. We believe that everyone deserves an equal opportunity to learn and create. </p>
							</div>
							<Button variant='outline-dark' size='lg' as = {Link} to = {"/about"} > Learn More </Button>
						</Fade>
					</div>
					<Fade>
						<div className='about-right'> <img src={TeacherImage}/> </div>
					</Fade>
				</div>

				<Fade top>
					<div className='line'></div>
				</Fade>
			</div>



			<div className = "approach-wrapper  " style = {{paddingLeft: "12vw", display: "flex", width: "100vw", flexDirection: "column", paddingTop: "25vh", paddingBottom: "20vh", backgroundColor: "#ffffff"}}>
				<Fade top>
					<h1 style = {{fontSize: "3rem", fontWeight: "bold", textAlign: "left", backgroundColor: "transparent", marginBottom: "15vh"}}> Our Approach </h1>
				</Fade>

				<div className = "cards">
					<Fade top delay = {200}>
						<Card className="content-cards" style={{borderRadius: "20px"}}>
							<Card.Body>
								<Card.Title> <p style={{fontSize: "1.8rem", fontWeight:"bold"}}> Visual Learning </p> </Card.Title>
								<Card.Text>
									<p style={{fontSize: "1.4rem"}}> Many children are visual learners. That's why our curriculum focuses on represeting topics in a tangible and engaging way to ensure that every student sufficiently understands the topics. </p>
								</Card.Text>
							</Card.Body>
						</Card>
					</Fade>
					
					<Fade top delay = {400}>
						<Card className="content-cards" style={{borderRadius: "20px"}}>
							<Card.Body>
								<Card.Title> <p style={{fontSize: "1.8rem", fontWeight:"bold"}}> Individual Attention </p>  </Card.Title>
								<Card.Text>
									<p style={{fontSize: "1.4rem"}}> We ensure that every student gets individual attentione from our highly qualified teachers. This attention is necessary to create a safe and welcoming environment and to understand and care to the needs of each and every student. </p>
								</Card.Text>
							</Card.Body>
						</Card>
					</Fade>
					
					<Fade top delay = {600}>
						<Card className="content-cards" style={{borderRadius: "20px"}}>
							<Card.Body>
								<Card.Title> <p style={{fontSize: "1.8rem", fontWeight:"bold"}}> Custom Pace </p> </Card.Title>
								<Card.Text>
									<p style={{fontSize: "1.4rem"}}> Is the student eager to learn, or not? Do they grasp concepts quickly, or do they need some time to think over? Either way, we can accomodate. We allow each student to learn at whatever pace they are comfortable in while still challenging them to improve.
									</p>
								</Card.Text>
							</Card.Body>
						</Card>
					</Fade>

				</div>  
			</div>

			<div className='interested-wrapper' style={{
				width: "100vw",
				paddingBottom: "10vh",
				backgroundColor: "#ffffff",
				display: "flex",
				flexDirection: "column",
				alignItems: "center"
			}}>
				<Flash>
					<h1 style={{ fontWeight: "bold", textAlign:"center", letterSpacing: "1px", marginBottom: "5vh"}}>
						Interested? Take a look at our upcoming classes. 
					</h1>
				</Flash>

				<Slide left>
					<Button style={{width: "20vw", minWidth: "200px"}} variant='outline-dark' size='lg' as = {Link} to = {"/classes"} > Click Here ⇒ </Button>
				</Slide>
			</div>
		</div>
	</div>
	)   
}


export default HomePage
