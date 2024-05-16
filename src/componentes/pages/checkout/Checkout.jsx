import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import React, { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import Swal from "sweetalert2";
import "./Checkout.css";

const Checkout = () => {
  const { cart, getTotalPrice } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    email: "",
    confirmEmail: "",
  });
  const [emailError, setEmailError] = useState(false);

  let total = getTotalPrice();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };
  const orderDetails = cart.map((product) => (
    <div style={{backgroundColor:"lightblue"}}key={product.id}>
      <h2>{product.title}</h2>
      <p>Precio por kg: ${product.price}</p>
      <p>Cantidad: {product.quantity}</p>
    </div>
  ))
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!info.name || !info.phone || !info.email || !info.confirmEmail) {
      Swal.fire({
        text: "Por favor, complete todos los campos!",
        icon: "info",
      });
      return;
    }
    ;
    if (info.email !== info.confirmEmail) {
      setEmailError(true);
      Swal.fire({
        text: "Los correos electrónicos no coinciden",
        icon: "error",
      });
    } else {
      setEmailError(false);
      let obj = {
        buyer: info,
        items: cart,
        total,
      };
      try {
        const ordersCollection = collection(db, "orders");
        const docRef = await addDoc(ordersCollection, obj);
        setOrderId(docRef.id);

        cart.forEach(async (product) => {
          const productDoc = doc(db, "products", product.id);
          await updateDoc(productDoc, {
            stock: product.stock - product.quantity,
          });
        });

        setInfo({
          name: "",
          phone: "",
          email: "",
          confirmEmail: "",
        });
      } catch (error) {
        console.error("Error al crear la orden: ", error);
      }
    }
  };

  return (
    <div className="general">
      {orderId ? (
        <div className="orden"> 
        <h1 style={{fontFamily:"cursive"}}>Su orden de compra es: {orderId}</h1>
        <h3>Acabas de comprar:{orderDetails}</h3>
        <h2>Por un precio total de : ${total}</h2>
        </div>
          
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="formulario">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              value={info.name}
              onChange={handleChange}
              name="name"
              placeholder="Nombre"
            />
          </div>
          <div className="formulario">
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="text"
              id="phone"
              value={info.phone}
              onChange={handleChange}
              name="phone"
              placeholder="Teléfono"
            />
          </div>
          <div className="formulario">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={info.email}
              onChange={handleChange}
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="formulario">
            <label htmlFor="confirmEmail">Confirmar Email:</label>
            <input
              type="text"
              id="confirmEmail"
              value={info.confirmEmail}
              onChange={handleChange}
              name="confirmEmail"
              placeholder="Confirmar Email"
            />
          </div>
          {emailError && (
            <p style={{ color: "red" }}>
              Los correos electrónicos no coinciden
            </p>
          )}
          <button>Enviar</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
