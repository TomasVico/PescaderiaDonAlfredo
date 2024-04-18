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
          <li id='item'>Instagram</li>
          <li id='item'>Whatsapp</li>
          
        </ul>
        
      </div>
    </div>
    </footer>
  )
}

export default Footer