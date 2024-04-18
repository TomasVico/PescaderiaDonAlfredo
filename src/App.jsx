
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import ItemListContainer from "./componentes/pages/itemlistcontainer/ItemListContainer"
import Layout from "./componentes/layout/Layout"
import Cart from './componentes/common/cartwidget/CartWidget';
import Inicio from './componentes/pages/Inicio/Inicio';
import ItemDetailContainer from './componentes/pages/itemdetail/ItemDetailContainer';
import Horarios from './componentes/pages/horarios/Horarios';
;


function App() {
;
    
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            
              <Route path="/" element={<Inicio/>}/>
              <Route path='/Cart' element={<Cart/>}/>
              <Route path='/ItemDetail/:id' element={<ItemDetailContainer/>}/>
              <Route path='/category/:id' element={<ItemListContainer/>}/>
              <Route path='/category' element={<ItemListContainer/>}/>
              <Route path='/horarios' element={<Horarios/>}/>
              
            
          </Route>
        </Routes> 
      </Router>
           
  </>
  )
}

export default App
