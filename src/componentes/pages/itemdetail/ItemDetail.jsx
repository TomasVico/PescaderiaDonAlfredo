import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Button,Typography} from "@mui/material"
import "./ItemDetail.css"


const ItemDetail = ({item}) => {
  
  return (
    <div id='container'>
      <Card className='producto' >
      <CardMedia
        className='imagen'
        image={item.img}
        title="green iguana"
      />
      <CardContent>
        
        <Typography gutterBottom variant="h5" component="div">
          Producto: {item.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Categoría: {item.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Descripcíon: {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Precio (por kilogramo) : ${item.price}
        </Typography>
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