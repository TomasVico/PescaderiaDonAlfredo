import React from 'react'

const Contador = ({sumar,restar,contador,agregarCarrito, inicial}) => {
  
  return (
    <div>
        <button onClick={sumar}>Sumar</button>
        <h2>{contador}</h2>
        <button onClick={restar}>Restar</button>
        <button onClick={()=>agregarCarrito(contador)}>Agregar al carrito</button>
      
    </div>
  )
}

export default Contador