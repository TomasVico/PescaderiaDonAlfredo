import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import ItemListContainer from "./componentes/pages/itemlistcontainer/ItemListContainer";
import Layout from "./componentes/layout/Layout";
import Cart from "./componentes/common/cart/Cart";
import Inicio from "./componentes/pages/Inicio/Inicio";
import ItemDetailContainer from "./componentes/pages/itemdetail/ItemDetailContainer";
import Horarios from "./componentes/pages/horarios/Horarios";
import Checkout from "./componentes/pages/checkout/Checkout";
import CarnesContainer from "./componentes/pages/carnes/CarnesContainer";
import CartContextProvider from "./context/CartContext";
import CartContainer from "./componentes/common/cart/CartContainer";
function App() {
  return (
    <>
      <Router>
        <CartContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Inicio />} />
              <Route path="/Cart" element={<CartContainer />} />
              <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/category" element={<ItemListContainer />} />
              <Route path="/horarios" element={<Horarios />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/carniceria" element={<CarnesContainer />} />
              <Route path="/carniceria/:id" element={<CarnesContainer />} />
            </Route>
          </Routes>
        </CartContextProvider>
      </Router>
    </>
  );
}

export default App;
