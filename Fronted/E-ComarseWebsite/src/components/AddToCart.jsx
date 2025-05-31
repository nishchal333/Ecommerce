import React from 'react'
import { Button } from "../Style/Button";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CartToggle from './CartToggle';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
 import { useCartContext} from "../Context/cart_context";
function AddToCart({product}) {

  const {addToCart} =useCartContext();
    const {_id, colors,stock} = product;
   
    const [color, setColor] = useState(colors[0]);
    
    const [amount, setAmount]= useState(0);
    const setDecrease = () => {
      amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };
  
    const setIncrease = () => {
      amount < stock ? setAmount(amount + 1) : setAmount(stock);
    };
  return (
    <Wrapper>
        <div className='colors'>
            {/* <p>
                Colors:
                {
                   colors.map((curColor,index)=>{
                    return <Button key={index}style={{ backgroundColor: curColor }}
                    className={color === curColor ? "btnStyle active" : "btnStyle"}
                    onClick={() => setColor(curColor)}>
                    {color === curColor ? <FaCheck className="checkStyle" /> : null}
</Button>
                   })    
                }
            </p> */}
        </div>
        {/* add to cart */}

<CartToggle 
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}

/>
<NavLink to="/cart" onClick={() => addToCart(_id, color, amount, product)}>
        <Button className="btn">Add To Cart</Button>
      </NavLink>

    </Wrapper>
  )
}
const Wrapper = styled.section`   
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 3rem;
    height: 4rem;
    background-color: #000;
    border-radius:300px;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    
    font-size: 2rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddToCart