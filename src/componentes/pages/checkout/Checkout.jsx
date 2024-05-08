import { addDoc,collection, doc, updateDoc } from "firebase/firestore";
import React, { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";

const Checkout = () => {
  const { cart, getTotalPrice } = useContext(CartContext);
  const [orderId,setOrderId]= useState(null)
  let total = getTotalPrice();
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    Email: "",
  });
  const handleChange = (event) => {
    let { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let obj = {
      buyer: info,
      items: cart,
      total,
    };
    let ordersCollection=collection(db,"orders")
    addDoc(ordersCollection,obj).then((res)=>setOrderId(res.id))
  };  

  cart.forEach((product)=>{
    let refDoc= doc(db,"products",product.id)
  updateDoc(refDoc,{stock:product.stock - product.quantity})

  })
  

  return (
    
    <div>
      {
        orderId ? <h1>Su orden de compra es : {orderId}</h1>
        : 
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          placeholder="Telefono"
          onChange={handleChange}
          name="phone"
        />
        <input
          type="text"
          placeholder="Email"
          onChange={handleChange}
          name="Email"
        />
        <button>Enviar</button>
      </form>

      }
      
    </div>
  );
};

export default Checkout;
