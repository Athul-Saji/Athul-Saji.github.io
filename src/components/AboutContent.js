import "./AboutContentStyles.css"
import { Link } from "react-router-dom"
import React from 'react'
import profile from "../assets/profile.png"
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <div className="image-container">
                <div className="img">
                <img src={profile} alt="profile"
                    className="prof" />
                </div>
            </div>
        
        <h1 className="heading">Who Am I?</h1>
        
        </div>



        <div className="right">
            
            <p>A passionate coder and B.Tech graduate from <Link  className="sjcet" to="https://sjcetpalai.ac.in/" target="_blank">SJCET</Link>, who loves taking on pressure. Embracing continuous learning, collaboration, and a love for Football and Tech. In my journey to being the best version of myself. Find more about me through <Link to="https://www.instagram.com/the_visionary_monk/" target="_blank" className="insta">Instagram</Link> or <Link to="https://www.linkedin.com/in/athul-saji/" target="_blank" className="linked">LinkedIn</Link></p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        
    </div>
  )
}

export default AboutContent