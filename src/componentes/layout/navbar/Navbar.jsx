import React from 'react'
import './Navbar.css'
import { FaCartShopping } from "react-icons/fa6"
const Navbar = () => {
  return (
    <div className='Navbar'>
        <ul>
            <li id='item'>Productos</li>
            <li id='item'>Nosotros</li>
            <li id='item'>Contacto</li>
            <FaCartShopping color="blue" size= "2em"/>

        </ul>
    </div>
  )
}

export default Navbar