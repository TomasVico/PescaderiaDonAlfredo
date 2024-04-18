import React from 'react'

const Contador = ({sumar,restar,contador}) => {
  
  return (
    <div>
        <button onClick={sumar}>Sumar</button>
        <h2>{contador}</h2>
        <button onClick={restar}>Restar</button>
      
    </div>
  )
}

export default Contador