/* eslint-disable react/prop-types */
import reducer from "../Reducer/cart_reducer";

import {  createContext, useContext, useEffect ,useReducer} from "react";

const CartContext = createContext();

const getLocalCartData = ()=>{
  if (!localStorage.getItem("token")) {
    return [];
  }

  let localCartData = localStorage.getItem("BharatData");
  if (!localCartData) {
    return [];
  }

  let parseData;
  try {
    parseData = JSON.parse(localCartData);
  } catch {
    return [];
  }

  if(! Array.isArray(parseData)) return [];

  return parseData;
}


const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 40,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const clearCartOnLogout = () => {
      dispatch({ type: "CLEAR_CART" });
      localStorage.removeItem("BharatData");
    };

    window.addEventListener("auth:logout", clearCartOnLogout);

    if (!localStorage.getItem("token")) {
      clearCartOnLogout();
    }

    return () => {
      window.removeEventListener("auth:logout", clearCartOnLogout);
    };
  }, []);

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

// eslint-disable-next-line react-refresh/only-export-components
export { CartProvider, useCartContext };
