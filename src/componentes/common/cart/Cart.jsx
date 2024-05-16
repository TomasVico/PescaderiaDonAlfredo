import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import "./Cart.css";

const Cart = ({
  cart,
  cleanCart,
  addToCart,
  deleteById,
  total,
  limpiarAlert,
  limpiarItem,
}) => {
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems) {
      cartItems.forEach((item) => {
        addToCart(item);
      });
    }
  }, []);

  return (
    <div>
      {cart.length > 0 ? ( 
        <div className="carrito">
          <h1 className="h1carrito">Tu carrito: </h1>
          {cart.map((producto) => (
            <div
              key={producto.id}
              style={{ width: "300px", marginBottom: "10px" }}
            >
              <Card>
                <CardContent>
                  <CardMedia className="imagencarrito" image={producto.img} />
                  <Typography gutterBottom variant="h5" component="div">
                    {producto.title}
                  </Typography>
                  <Typography>Precio: ${producto.price}</Typography>
                  <Typography>Cantidad: {producto.quantity}</Typography>
                </CardContent>
  
                <Button onClick={() => limpiarItem(producto)}>Eliminar</Button>
              </Card>
            </div>
          ))}
  
          {cart.length > 0 && (
            <div>
              <h2 style={{ fontStyle: "italic" }}>
                Precio total a pagar: ${total}
              </h2>
              <Link to={"/checkout"}>
                <Button variant="contained">Finalizar Compra</Button>
              </Link>
            </div>
          )}
          <Button onClick={limpiarAlert}>Limpiar carrito</Button>
        </div>
      ) : ( 
        <div style={{textAlign:"center"}}><h1 style={{fontStyle:"italic"}}>Tu carrito todavía esta vacío, agrega algunos productos!</h1></div> 
      )}
    </div>
  );
}

export default Cart