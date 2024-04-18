import React from 'react'
import { useState,useEffect } from 'react'
import Contador from './Contador'
const ContadorContainer = ()=>{
    const [contador, setContador] = useState ( 0 )
    
    const sumar= ()=>{
        setContador (contador + 1)
    }
    const restar =()=>{
        if (contador > 1){
            setContador (contador - 1)
        }
        
    }
    
  return <Contador sumar={sumar} restar={restar} contador={contador}/>
}

export default ContadorContainer