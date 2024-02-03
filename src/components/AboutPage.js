import './AboutPage.css'
import React from 'react';
import { Fade } from 'react-reveal';
import pic1 from './Picture1.jpg'
import pic2 from './Picture2.jpg'
import pic3 from './Picture3.webp'

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
                <div className='mission-statement' style={{marginBottom:"30vh"}}>
                    <p> <a href='https://www.cdc.gov/ncbddd/adhd/data.html'> From 2016-2019 there were about 6 million children ages 3-17 diagnosed with ADHD. </a> And ADHD isn't the only mental disorder affecting society. While hundreds of years ago, it was possible to ignore such issues, it's impossible to do the same at the current time. Many children with Special Needs lack the same opportunities as their peers, and it's our mission to ensure that 
                        <strong> everyone can learn and create. </strong>
                    </p>
                </div>
            </Fade>
    

            <div className='what-we-do' style={{display: 'flex', flexDirection:'row', marginBottom:'30vh'}}>
                <div className='left' style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <div className="title" style={{position: "relative", width: "35vw", wordWrap: "break-word", backgroundColor: "transparent", fontWeight:"bold"}}>
                        <Fade left>
                            What we do                                
                        </Fade>
                    </div>
                    
                    <div className='description' style={{width:'35vw'}}> 
                        <p> 
                            We host weekly classes on topics in STEM for student with special needs. We believe that every student learns differently, and by adapting to every student's individual needs, we can create successful education. 
                        </p> 
                    </div>
                </div>

                <div className='picture'> 
                    <div className="title" style={{position: "relative", width: "50vw", wordWrap: "break-word", backgroundColor: "transparent", fontWeight:"bold"}}>
                        <Fade left>
                            <div className='image'> 
                                <img style={{width:'50vw', borderRadius:"40px"}} src={pic1}/> 
                            </div> 
                        </Fade>
                    </div>
                </div>
            </div>
      </div>

    )
}

export default AboutPage;
