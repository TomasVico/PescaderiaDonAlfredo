import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import "./ItemDetail.css";
import ContadorContainer from "../../common/contador/ContadorContainer";

const ItemDetail = ({ item, agregarCarrito, inicial }) => {
  return (
    <div id="container">
      <div className="imagen">
      <CardMedia
          component="img"
          height="300"
          
          image={item.img}
          
        />

      </div>
      <div className="detalles">
        <h1>{item.title}</h1>
        <h4>{item.description}</h4>
        <h3>Precio por Kg: ${item.price}</h3>
      </div>
      <div className="contador">
        <ContadorContainer
          stock={item.stock}
          inicial={inicial}
          agregarCarrito={agregarCarrito}
        />
      </div>
    </div>
  );
};

export default ItemDetail;

/*
<h1>{item.title}</h1>
      <h2>{item.price}</h2>
      
      <h2>{item.description}</h2>
      <h2>{item.category}</h2>
      <img src={item.img} alt="" />
*/
