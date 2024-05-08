import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import Cart from './Cart'

const CartContainer = () => {
    const {cart, cleanCart, deleteById,getTotalPrice}=useContext(CartContext)

    let total= getTotalPrice()
  return (

    <Cart cart={cart} cleanCart={cleanCart} deleteById={deleteById} total={total} />
  )
}

export default CartContainer