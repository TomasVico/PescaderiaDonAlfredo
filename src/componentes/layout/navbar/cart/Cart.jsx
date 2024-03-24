import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
const Cart = () => {
  return (
    <div>
      <Badge badgeContent={1} color="primary">
        <ShoppingCartIcon color="action" />
      </Badge>
             
    </div>
  )
}

export default Cart