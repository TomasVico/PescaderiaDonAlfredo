import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { products } from '../../../productsMock'
import ItemList from './ItemList'
const ItemListContainer = () => {
    const {id}= useParams()
    
    const[items,setItems]=useState([])

    useEffect(()=>{
      let productsFiltered = products.filter( product => product.category === id)

      const getProducts= new Promise ((resolve,reject)=>{
        let x= true
        x ? resolve (id ? productsFiltered : products) : reject ("salio mal")})
        
      getProducts.then((res)=>{setItems(res)}).catch((e)=>{console.log(e)})
    },[id])
    console.log(items)

  return <ItemList items={items}/>
}

export default ItemListContainer

