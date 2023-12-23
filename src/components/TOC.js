import { Fade } from "react-reveal";
import './TOC.css'

const TOC = () => {
    return (
        <>
            <div className="toc-wrapper">
                <div className='title-wrapper'>
                    <div className="title" style={{position: "relative", width: "100vw", wordWrap: "break-word", backgroundColor: "transparent", fontWeight:"bold"}}>
                        <Fade top>
                            Privacy Policy                             
                        </Fade>
                    </div>
                </div>
                
                <div className="text-wrap">

Privacy Policy:  The Inclusive Computing Initiative takes very seriously and respects the privacy of personal information gathered from our supporters. This privacy policy was created to show our commitment to full transparency in how we collect and disseminate information about our donors and website visitors and how you can opt-out if you so choose.<br/>

<br/>
What Data We Collect: The Inclusive Computing Initiative collects personal information supplied to us voluntarily by supporters, volunteers, and visitors to our website. Whether signing up for a class, responding to a mailer, or subscribing for news and updates, The Inclusive Computing Initiative may ask you for personal contact information such as:<br/>

<br/>
Your first and last name, phone number, and e-mail address. Technical data collected may include internet protocol address, browser type, operating system, and platform, as well as other technology on the devices used to access this site. Collected data may include your preferences in receiving marketing communications from us and our third-party partners.<br/>

<br/>
Signup Information: The Inclusive Computing Initiative maintains prospective student's and their respective parent/gaurdian's name, telephone numbers, email addresses, and concerns about their child.<br/>

<br/>
The Inclusive Computing Initiative DOES NOT collect any sensitive data about you such as race, ethnicity, religious beliefs, sexual orientation, or political affiliations, nor do we collect any information on your health or interactions with law enforcement.<br/>

<br/>
How We Collect and Use Data: The Inclusive Computing Initiative uses automated technologies and third-party vendors to provide services on this website as well as offline activities. Information that you submit on this website or in response to our mailings may be provided to our vendors on a confidential basis to provide services that include: processing credit card transactions, maintaining our database, sending email messages, and facilitating fundraising activities on our behalf.<br/>

<br/>
How We Protect Your Data: We have added appropriate security measures to prevent your data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your data to those employees and third-party contractors to only those with a business need. They will only process your data on our instructions and are subject to confidentiality agreements.<br/>

<br/>
Third-Party Links: This website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we recommend you read the privacy policy notice of each website you visit.<br/>

<br/>
How to Opt-Out: If you wish to opt out of receiving future communications or to limit your information being shared by any of the methods described above, please contact The Inclusive Computing Initiative at the below contact info:<br/>

<br/>
E-mail: inclusivecompute@gmail.com<br/>
<br/>
Changes to Policy: We reserve the right to change this policy from time to time. When we do, we will note the last update at the top of this policy.<br/>

                </div>
        
            </div>
        </>
    )
}

export default TOC;
