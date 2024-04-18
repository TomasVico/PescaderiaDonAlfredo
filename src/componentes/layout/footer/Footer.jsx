import React from 'react'
import './Footer.css'
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <footer className='footer'>
        <div>
      
      <div className="Navbar">
        
        <ul className="categorias">
          <Link to={"/horarios"}><li id='item'>Horarios</li></Link>
          <li id='item'>Whatsapp</li>
          <Link to={"https://www.instagram.com/donalfredo_pescaderia?igsh=MWl6NG9ybnd5b3dsZA=="}><li id='item'>Instagram</li></Link> 
          
        </ul>
        
      </div>
    </div>
    </footer>
  )
}

export default Footer