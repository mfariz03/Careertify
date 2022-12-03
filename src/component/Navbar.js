import React from "react"
import logo from '../Images/logo_kecil.jpg';
import {Link} from 'react-router-dom'
import '../CSS/Navbar.css'

const Navbar=()=>{
  return(
  <>
    <header>
        <div className="container container-flex">
            <div className="logoContainer">
                <img src={logo} alt="Logo" className="logo"/>
            </div>
            <nav>
                <div className="list">
                    <Link to='/' className="listItem" >Home</Link>
                    <Link to='/Jobs' className="listItem" >Jobs</Link>
                    <Link to='/Wishlist' className="listItem" >Wishlist</Link>
                    <Link to='/AboutUs' className="listItem">AboutUs</Link>
                </div>
            </nav>
        </div>
    </header>

  </>
  )
}
export default Navbar;