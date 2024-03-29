import React from "react";
import "./Navbar.css";
import CartWidget from "./cartwidget/CartWidget";
const Navbar = () => {
  
  return (
    <div className="Navbar">
      <h1 id="titulo">Pescadería Don Alfredo</h1>
      <ul>
        <li id="item">Productos</li>
        <li id="item">Nosotros</li>
        <li id="item">Contacto</li>
        <li id="item"><CartWidget/></li>
      </ul>
    </div>
  );
};

export default Navbar;
