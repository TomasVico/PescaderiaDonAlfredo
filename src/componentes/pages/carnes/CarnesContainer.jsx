import React, { useEffect, useState } from 'react'
import Carnes from './Carnes'
import {products2} from "../../../productsMock"
import { useParams } from 'react-router-dom'

const CarnesContainer = () => {
    const {id}=useParams()
    const [items,setItems]=useState([])

    useEffect(()=>{
        let productosFiltrados= products2.filter((producto)=>producto.category === id)

        let getCarne= new Promise((resolve,reject)=>{
            let x= true
            x ? resolve ( id ? productosFiltrados : products2 ) : reject ("Algo salio para la mierda")})

        getCarne
        .then((res)=>{setItems(res)})
        .catch((e)=>console.log(e))



    },[id])
    console.log(items)

  return (
    <Carnes items={items}/>
  )
}

export default CarnesContainer