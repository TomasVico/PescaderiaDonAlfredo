import React from 'react'
import './ProductCard.css'
import {Card,CardMedia,CardContent,CardActions,Button,Typography} from "@mui/material"
import { Link } from 'react-router-dom'
const ProductCard = ({title,description,price,category,id,img}) => {
  return (
    <Card className='producto' >
      <CardMedia
        className='imagen'
        image={img}
        title={title}
      />
      <CardContent>
        
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        
       
        <Typography variant="body2" color="text.secondary">
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/ItemDetail/${id}`}>
        <Button size="small">Ver detalle</Button>
        </Link>
    
      </CardActions>
    </Card>
  )
}

export default ProductCard