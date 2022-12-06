import React from "react";
import { Link } from 'react-router-dom'
import homeimg from '../Images/Logo3.png';
import '../CSS/HomeAbout.css'


const Home = () => {
  return (
    <>
      <div className="mainSection">
        <div className="ContentBox">
          <h1>Find Work Easier</h1>
          <p> Careertify merupakan suatu platform penyedia informasi lowongan kerja yang membantu
            masyarakat untuk menerima kesempatan kerja yang tepat.</p>
          <div className="btnBox">
            <div className="btn">
              <Link to='/AboutUs' className="ReadMore">Read More</Link>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src={homeimg} alt="home" />
        </div>
      </div>

    </>
  )
}
export default Home;