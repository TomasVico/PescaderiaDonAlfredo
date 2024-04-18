import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import {Outlet} from "react-router-dom"
import './Layout.css'
const Layout = () => {
  return (
    <div className='layout-container'>
        <Navbar/>
        <div className='content'>
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout