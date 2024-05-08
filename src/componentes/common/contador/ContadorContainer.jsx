import React from 'react'
import { useState,useEffect } from 'react'
import Contador from './Contador'
const ContadorContainer = ({stock,inicial=1,agregarCarrito})=>{
    const [contador, setContador] = useState ( inicial )
    
    const sumar= ()=>{
        if (contador < stock){  
            setContador (contador + 1)
        }
    }
    const restar =()=>{
        if (contador > 1){
            setContador (contador - 1)
        }
        
    }
    
  return <Contador sumar={sumar} restar={restar} contador={contador} agregarCarrito={agregarCarrito} inicial={inicial}/>
}

export default ContadorContainer