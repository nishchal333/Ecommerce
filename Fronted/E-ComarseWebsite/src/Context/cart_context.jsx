import React from 'react'
import reducer from "../Reducer/cart_reducer";

import {  createContext, useContext, useEffect ,useReducer} from "react";
import { json } from 'react-router-dom';

const CartContext = createContext();

const getLocalCartData = ()=>{
  let localCartData = localStorage.getItem("BharatData");
  // if(localCartData == []){
  //   return [];
  // }else {
  //   return JSON.parse(localCartData);
  // }
  const parseData = JSON.parse(localCartData);
  if(! Array.isArray(parseData)) return [];

  return parseData;
}


const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 4000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (_id, color, amount, product) => { 
    
    dispatch({ type: "ADD_TO_CART", payload: { _id, color, amount, product } });
  };
  // remove Item function
  const removeItem = (_id) => {
    dispatch({ type: "REMOVE_ITEM", payload: _id });
  };

// add to local storage  save data using set/ get
useEffect(() => {
  // // total price
  // dispatch({type: "CART_TOTAL_PRICE"});
  // // update cart value
  // dispatch({type : "CART_TOTAL_ITEM"});

// combined both 
dispatch({type: "CART_ITEM_PRICE_TOTAL"});

  // save local storage
 localStorage.setItem("BharatData", JSON.stringify(state.cart));
}, [state.cart]);

// clear cart all data 
const clearcart = (()=>{
  dispatch({type:"CLEAR_CART"});
})
// defiend incresment and decreasement function

const setDecrease =(_id)=>{
  dispatch({type: "SET_DECRESEMENT", payload: _id});
}
const setIncrease =(_id)=>{
  dispatch({type: "SET_INCREMENT", payload: _id});
}
  return ( 
    <CartContext.Provider value={{ ...state, addToCart,removeItem ,clearcart,setDecrease,setIncrease}}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
