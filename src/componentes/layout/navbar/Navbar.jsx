import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import "./Navbar.css";
import Cart from "../../common/cart/Cart";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
const Navbar = () => {
  const { cart , getTotalItems} = useContext(CartContext);
  let total=getTotalItems()

  return (
    <div>
      <div className="Navbar">
        <Link to={"/"}>
          <h1 id="titulo">Pescadería Don Alfredo</h1>
        </Link>
        <ul className="categorias">
          <Link id="item" to={"/category"}>
            Todos
          </Link>
          <Link id="item" to={"/category/mar"}>
            De mar
          </Link>
          <Link id="item" to={"/category/rio"}>
            De río
          </Link>
          <Link id="item" to={"/category/enlatados"}>
            Enlatados
          </Link>
          <Link id="item" to={"/category/mariscos"}>
            Mariscos
          </Link>
          <Link to="/Cart" id="item">
            <Badge badgeContent={total} color="primary">
              <ShoppingCartIcon color="action" />
            </Badge>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
