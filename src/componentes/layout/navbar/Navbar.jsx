import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { Badge } from "@mui/material";
import "./Navbar.css";
import { CartContext } from "../../../context/CartContext";

const Navbar = () => {
  const { categoryId } = useParams();

  const { cart, getTotalItems } = useContext(CartContext);
  let total = getTotalItems();
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const alternarMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  return (
    <div>
      <div className="Navbar">
        <Link to={"/"}>
          <h1 id="titulo">Pescadería Don Alfredo</h1>
        </Link>
        <div className="buttons-container">
          <Link to={"/inicio"}>
            <button id="categorias">Inicio</button>
          </Link>
          <Link to={"/historia"}>
            <button id="categorias">Nuestra Historia</button>
          </Link>
          <Link to={"/horarios"}>
            <button id="categorias">Nuestros horarios</button>
          </Link>
          <button id="categorias" onClick={alternarMenu}>
            Nuestros productos
            {mostrarMenu && (
              <div className="desplegable">
                <ul className="ul">
                  <li className="item">
                    <Link to="/category">Todos</Link>
                  </li>
                  <li className="item">
                    <Link to="/category/mar">De mar</Link>
                  </li>
                  <li className="item">
                    <Link to="/category/rio">De río</Link>
                  </li>
                  <li className="item">
                    <Link to="/category/enlatados">Enlatados</Link>
                  </li>
                  <li className="item">
                    <Link to="/category/mariscos">Mariscos</Link>
                  </li>
                </ul>
              </div>
            )}
          </button>
          <Link to="/Cart" id="carrito">
            <Badge badgeContent={total} color="primary">
              <ShoppingCartIcon color="action" />
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
