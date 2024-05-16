import React from 'react'
import './Inicio.css'
import {Link} from "react-router-dom"

const Inicio = () => {
  return (
    <div className='inicio-container'>
      <div className='inicio'>
      <h1 className='titulo'>Bienvenidos a pescadería Don Alfredo</h1>
      <h3 className='descripcion'>Realiza tu pedido a través de nuestra nueva página web!</h3>
      <h3 className='descripcion'>Navegá y chequeá todos los productos que tenemos para ofrecerte a precios increíbles!</h3>
      
      
      </div>
    </div>
  )
}

export default Inicio