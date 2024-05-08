import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Button,Typography} from "@mui/material"
import "./ItemDetail.css"
import ContadorContainer from '../../common/contador/ContadorContainer'


const ItemDetail = ({item, agregarCarrito, inicial}) => {
  
  return (
    <div id='container'>
      <Card className='producto' >
        <CardMedia
          className='imagen'
          image={item.img}
          title={item.title}
        />
      <CardContent>
        
        <Typography gutterBottom variant="h5" component="div">
          <h3>{item.title}</h3>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Categoría: {item.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        
          <h4>Precio (por kilogramo) : ${item.price}</h4>
        
        <ContadorContainer stock={item.stock} inicial={inicial} agregarCarrito={agregarCarrito} />
      </CardContent>
      
      </Card>
    
    </div>
    
    
  )
}

export default ItemDetail

/*
<h1>{item.title}</h1>
      <h2>{item.price}</h2>
      
      <h2>{item.description}</h2>
      <h2>{item.category}</h2>
      <img src={item.img} alt="" />
*/