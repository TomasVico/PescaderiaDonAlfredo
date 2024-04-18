import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from "react-router-dom"
import { products } from '../../../productsMock'
const ItemDetailContainer = () => {
   const {id}= useParams()

   console.log(id)
    
   const [item,setItem]=useState({})
   useEffect(()=>{

    
    let ItemEncontrado=products.find((producto)=>producto.id === +id)
    const getProduct= new Promise ((resolve,reject)=>{
        resolve(ItemEncontrado)
    })
    getProduct.then((res)=>setItem(res))
   },[id])
   console.log(item)




  return <ItemDetail item={item}/>
}

export default ItemDetailContainer