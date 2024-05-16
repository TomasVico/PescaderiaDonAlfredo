import React from 'react'
import ProductCard from '../../common/productcard/ProductCard'
import "./ItemListContainer.css"
const ItemList = ({items}) => {
  return (
    <div className='productos'>
        
        {items.map(({id,title,description,img,category,price})=>{
            return <ProductCard
            
              key={id}
             title={title} 
             description={description} 
             category={category} 
             price={price}
             img={img}
             id={id} />

         })
        }
         
    </div>
  )
}

export default ItemList