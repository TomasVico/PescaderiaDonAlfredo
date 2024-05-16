import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

import ItemList from "./ItemList";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";

import { Skeleton } from "@mui/material";

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
 

  return (
    <>
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <div style={{display:"flex", gap:"20px"}}>
          <div>
            <Skeleton variant="rectangular" width={300} height={210} />
          </div>
          <div>
          <Skeleton variant="rectangular" width={300} height={210} />
          </div>
          <div>
          <Skeleton variant="rectangular" width={300} height={210} />
          </div>
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
