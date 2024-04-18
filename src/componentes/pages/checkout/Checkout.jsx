import React from 'react'
import Contador from '../../common/contador/Contador'
import ContadorContainer from '../../common/contador/ContadorContainer'

const Checkout = ({sumar,restar,contador}) => {
    
  return (
    <div>
        <ContadorContainer sumar={sumar} restar={restar} contador={contador}/>
    </div>
  )
}

export default Checkout