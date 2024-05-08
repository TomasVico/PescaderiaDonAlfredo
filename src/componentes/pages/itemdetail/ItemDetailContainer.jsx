import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, getDoc, doc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);

  const { addToCart, getQuantityById } = useContext(CartContext);

  let inicial = getQuantityById(+id);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    getDoc(refDoc).then((res) => {
      setItem({ id: res.id, ...res.data() });
    });
  }, [id]);

  const agregarCarrito = (cantidad) => {
    let objetoCompleto = { ...item, quantity: cantidad };
    addToCart(objetoCompleto);
  };

  return item ? (
    <ItemDetail item={item} agregarCarrito={agregarCarrito} inicial={inicial} />
  ) : null;
};

export default ItemDetailContainer;
