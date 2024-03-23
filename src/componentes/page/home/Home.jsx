import React from 'react'
import ItemListContainer from '../../common/item/ItemListContainer'
import './Home.css'
const Home = () => {
  return (
    <div className='Home'>
        <h1 id='titulo'>Bienvenidos a Pescadería Don Alfredo</h1>
        <ItemListContainer
        producto={"Boga despinada"}
        precio={3900}/>
        <ItemListContainer
        producto={"Dorado"}
        precio={5000}/>
        <ItemListContainer
        producto={"Milanesas de surubi"}
        precio={3900}/>
        <ItemListContainer
        producto={"Empanadas "}
        precio={5000 + " (la docena)"}/>
    </div>
  )
}

export default Home