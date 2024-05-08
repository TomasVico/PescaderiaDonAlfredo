import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

import ItemList from "./ItemList";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { products } from "../../../productsMock";

const ItemListContainer = () => {
  const { id } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const productsCollection = collection(db, "products");
    let x = productsCollection;
    if (id) {
      x = query(productsCollection, where("category", "==", id));
    }

    getDocs(x).then((res) => {
      let newArray = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setItems(newArray);
    });
  }, [id]);
  // const addDocProducts = () => {
  //   let productsCollection=collection(db,"products")
  //   products.forEach((product)=>addDoc(productsCollection,product))
    
  // };

  return (
    <div>
      
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
