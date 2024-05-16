import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (objetoCompleto) => {
    let exist = verificar(objetoCompleto.id);
    if (exist) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === objetoCompleto.id) {
          return { ...elemento, quantity: objetoCompleto.quantity };
        } else {
          return elemento;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, objetoCompleto]);
    }
    
    
  };
  const cleanCart = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    const newArray = cart.filter((product) => product.id !== id);
    setCart(newArray);
  };

  const verificar = (id) => {
    let bool = cart.some((product) => product.id === id);
    return bool;
  };

  const getQuantityById = (id) => {
    let x = cart.find((elemento) => elemento.id === id);
    return x?.quantity;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price;
    }, 0);
    return total;
  };

  const getTotalItems = () => {
    let totalItems = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return totalItems;
  };

  let data = {
    cart,
    addToCart,
    cleanCart,
    deleteById,
    getQuantityById,
    getTotalPrice,
    getTotalItems,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
