import React from "react";
import Navbar from "./navbar/Navbar";

import { Outlet } from "react-router-dom";
import "./Layout.css";
const Layout = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <div className="outletcontainer">
        <Outlet />
      </div>

      
    </div>
  );
};

export default Layout;
/*
<div className='content'>
          <Outlet/>
</div>
*/
