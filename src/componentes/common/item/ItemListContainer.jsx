import React from 'react'

const ItemListContainer = (x) => {
    const {producto,precio}= x
  return (
    <div>
        <div>
            <h1>{producto}</h1>
            
            <h2>Precio por kg: ${precio}</h2>
        </div>
    </div>
  )
}

export default ItemListContainer