import React from "react";
import "./Navbar.css";
import Cart from "./cart/Cart";
const Navbar = () => {
  
  return (
    <div className="Navbar">
      <ul>
        <li id="item">Productos</li>
        <li id="item">Nosotros</li>
        <li id="item">Contacto</li>
        <li id="item"><Cart/></li>
      </ul>
    </div>
  );
};

export default Navbar;
