import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import ItemListContainer from "./componentes/pages/itemlistcontainer/ItemListContainer";

import Layout from "./componentes/layout/Layout";
import Cart from "./componentes/common/cart/Cart";
import Inicio from "./componentes/pages/Inicio/Inicio";
import ItemDetailContainer from "./componentes/pages/itemdetail/ItemDetailContainer";
import "./index.css";
import Checkout from "./componentes/pages/checkout/Checkout";

import CartContextProvider from "./context/CartContext";
import CartContainer from "./componentes/common/cart/CartContainer";
import Historia from "./componentes/pages/historia/Historia";
import Horarios from "./componentes/pages/horarios/Horarios";




function App() {
  return (
    <Router>
      <CartContextProvider>
        <div id="general">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/Cart" element={<CartContainer />} />
              <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/category" element={<ItemListContainer />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/historia" element={<Historia />} />
              <Route path="/horarios" element={<Horarios />} />
            </Route>
          </Routes>
        </div>
      </CartContextProvider>
    </Router>
  );
}

export default App;
