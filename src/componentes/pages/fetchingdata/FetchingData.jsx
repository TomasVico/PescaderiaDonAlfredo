import React, { useEffect, useState } from 'react'

const FetchingData = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    const getProducts=fetch('https://fakestoreapi.com/products')
    getProducts
      .then((res)=>res.json())
      .then((res)=> setProducts(res))
      .catch((error)=>console.log(error))
      
  },[])
   
  return <div>
    {
      products.map((product)=>(
        <div key={product.id}>
          <h1>{product.title}</h1>
          <img src={product.image}/>
        </div>
      ))
    }
    
    </div>
    
  
}

export default FetchingData