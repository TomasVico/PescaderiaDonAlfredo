import React from 'react'
import ProductCard from '../../common/productcard/ProductCard'

const Carnes = ({items}) => {
  return (
    <div>
      {items.map(({id, description, price, category, title}) => (
        <ProductCard 
          key={id}
          title={title}
          description={description}
          price={price}
          category={category}
          id={id}
        />
      ))}
    </div>
  )
}

export default Carnes
