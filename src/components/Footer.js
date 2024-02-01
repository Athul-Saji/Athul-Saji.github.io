import { FaHome, FaInstagram, FaLinkedinIn, FaMailBulk, FaPhone, FaWhatsapp } from "react-icons/fa";
import "./FooterStyles.css";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>Edapparambil House</p>
                        <p>Mundankal P.O, Payappar</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/> +91 75588 60887</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>athulsaji1317@gmail.com </h4>
                </div>
            </div>


            <div className="right">
                <h4>
                    About this website
                </h4>
                <p>Lorem ipsum dolor sit amet <br />
                    consectetur adipisicing elit.!</p>
                <div className="social">
                <FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaWhatsapp size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaLinkedinIn size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer