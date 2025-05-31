import React from 'react'
import { useState } from 'react';
import FormatPrice from './Helper/FormatePrice';
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../Context/cart_context";
import CartToggle from './CartToggle';

function CartItem({ _id, name, image, color, price, amount }) {


    const { removeItem,setIncrease,setDecrease } = useCartContext();
   

  return (
    <div className="cart_heading grid grid-five-column">
    <div className="cart-image--name">
      <div>
        <figure>
          <img src={image} alt={_id} />
        </figure>
      </div>
      <div>
        <p>{name}</p>
        <div className="color-div">
          <p>color:</p>
          <div
            className="color-style"
            style={{ backgroundColor: color, color: color }}></div>
        </div>
      </div>
    </div>
    {/* price   */}
    <div className="cart-hide">
      <p>
        <FormatPrice price={price} />
      </p>
    </div>
    {/* Quantity */}
<CartToggle 
        amount={amount}
        setDecrease={()=>{setDecrease(_id)}}
        setIncrease={()=>{setIncrease(_id)}}

/>
{/* subtotal */}
<div className="cart-hide">
    <p>
        <FormatPrice price={price * amount}/>
    </p>
</div>
<div>
        <FaTrash className="remove_icon" onClick={() => removeItem(_id)} />
      </div>
    </div>
  )
}

export default CartItem