import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import Cart from './Cart'
import Swal from 'sweetalert2'

const CartContainer = () => {
    const {cart, cleanCart, deleteById,getTotalPrice,addToCart}=useContext(CartContext)
    const limpiarItem=(producto)=>{
      Swal.fire({
        title:"Deseas eliminar este item?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Si, eliminar ítem",
        denyButtonText: `No`
      }).then((result) => {
        
        if (result.isConfirmed) {
          deleteById(producto.id)
          Swal.fire({
            text:"Item eliminado correctamente",
            icon:"success"
          });
        } else if (result.isDenied) {
          Swal.fire({
            text:"El item se mantiene en tu carrito",
            icon:"info"
          });
        }
      });
    }

    const limpiarAlert=()=>{
      Swal.fire({
        title: "¿Queres limpiar el carrito por completo?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Si, limpiar",
        denyButtonText: `No`
      }).then((result) => {
        
        if (result.isConfirmed) {
          cleanCart()
          Swal.fire({
            text:"Tu carrito fue limpiado correctamente",
            icon:"info"
          });
        } else if (result.isDenied) {
          Swal.fire({
            text:"Podes seguir comprando"
          });
        }
      });
    }
    let total= getTotalPrice()
  return (

    <Cart cart={cart} addToCart={addToCart} cleanCart={cleanCart} deleteById={deleteById} total={total} limpiarAlert={limpiarAlert} limpiarItem={limpiarItem} />
  )
}

export default CartContainer