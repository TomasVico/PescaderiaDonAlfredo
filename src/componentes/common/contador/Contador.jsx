import React from 'react'
import "./Contador.css"

const Contador = ({sumar,restar,contador,agregarCarrito, inicial}) => {
  
  return (
    <div className='contenidocontador'>
      <h3>Elige la cantidad que deseas:</h3>
      <div style={{ textAlign: 'center' }}>

        <button className="boton" onClick={sumar}>Sumar</button>
        <h2 className='numerocentral'>{contador}</h2>
        <button className="boton" onClick={restar}>Restar</button>
        <p><button className="agregar" onClick={()=>agregarCarrito(contador)}>Agregar al carrito</button></p>
       
        

        
      </div>
      
    </div>
  )
}

export default Contador