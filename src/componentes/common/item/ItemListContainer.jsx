import React from 'react'
import './ItemListContainer.css'
const ItemListContainer = (x) => {
    const {producto,precio}= x
  return (
    <>
        <div id='container'>
          <div >
            <h3>{producto}</h3>
            
            <p>Precio por kg: ${precio}</p>
          </div>  
            <button id='agregar'>Agregar al carrito</button>
        </div>
    </>
  )
}

export default ItemListContainer