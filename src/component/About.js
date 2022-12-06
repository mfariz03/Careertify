import React from "react";
import { Link } from 'react-router-dom'
import aboutimg from '../Images/2.jpg';
import '../CSS/About.css'
import AboutUs from "./AboutUs";

const About = () => {
    return (
        <>
            <div className="mainSection">
                <div className="ContentBox">
                    <h1> About Us</h1>
                    <p> Careertify apaan dah tu ye aaaaaaaaaaaaaaaaaaaaan Careertify merupakan suatu platform penyedia informasi lowongan kerja yang membantu masyarakat untuk menerima kesempatan kerja yang tepat.</p>
                    <div className="btnBox">
                        <div className="btn">
                            <Link to='/AboutUs' className="ReadMore">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="imgContainer">
                    <img src={aboutimg} alt="about" />
                </div>
            </div>
            <AboutUs />
        </>
    )
}
export default About;
