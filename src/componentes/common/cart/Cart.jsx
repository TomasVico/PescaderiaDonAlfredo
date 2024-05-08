import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const Cart = ( {cart,cleanCart,deleteById,total} ) => {

  return (
    <div>
      <h1>Este es tu carrito: </h1>
      {cart.map(producto=>
      <div key={producto.id}>
        <h4>{producto.title}</h4>
        <p>{producto.price}</p>
        <p>cantidad: {producto.quantity}</p>
        
        <button onClick={()=>deleteById(producto.id)}>Eliminar</button>
        
      </div>)}
      <h2>El precio total a pagar es de {total}</h2>
      <Link to={"/checkout"}>

        <Button>Finalizar Compra</Button>
        
      </Link>
      <Button onClick={cleanCart}>Limpiar carrito</Button>
      
    </div>
  )
}

export default Cart