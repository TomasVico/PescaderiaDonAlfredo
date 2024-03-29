import React from 'react'
import './ItemListContainer.css'
const ItemListContainer = (x) => {
    const {greeting}= x
  return (
    <>
        <h1 style={{ color: 'blue', fontSize: '24px', fontFamily: 'Arial, sans-serif',textAlign:'center' }}>{greeting}</h1>
    </>
  )
}

export default ItemListContainer

/*
const ItemListContainer = (x) => {
    const {producto,precio}= x
  return (
    <>
        <div id='container'>
          <div id='productos'>
            <h3>{producto}</h3>
            
            <p>Precio por kg: ${precio}</p>
          </div>  
            <button id='agregar'>Agregar al carrito</button>
        </div>
    </>
  )
}
*/