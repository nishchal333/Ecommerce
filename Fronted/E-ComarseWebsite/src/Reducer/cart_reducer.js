import cart from "../components/cart";

const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
let {_id, color, amount, product} = action.payload;
// tackle the existing product

let existingProduct = state.cart.find(
  (curItem) => curItem._id == _id + color
);

if(existingProduct){
  // increase the amount
  let updatedProduct = state.cart.map((curElem) => {
    if (curElem._id == _id + color) {
      let newAmount = curElem.amount + amount;
// handle stocke
      if (newAmount >= curElem.max) {
        newAmount = curElem.max;
      }
      return {
        ...curElem,
        amount: newAmount,
      };
    } else {
      return curElem;
    }
  });
  return {
    ...state,
    cart: updatedProduct,
  };
} else{


let cartProduct = {
  _id: _id + color,
  name: product.name,
  color,
  amount,
  image: product.image,

  price: product.price,
  max: product.stock,
};

return {
  ...state,
  cart: [...state.cart, cartProduct],
};
}

    }
  
    if (action.type === "REMOVE_ITEM") {
      let updatedCart = state.cart.filter(
        (curItem) => curItem._id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }
  // all data remove 
  if(action.type === "CLEAR_CART"){
    return {
      ...state,
      cart: [],
    }
  }

  // incresement and decreaement
 if(action.type === "SET_DECRESEMENT"){
  let updatedData = state.cart.map(
    (curElem) =>{if( curElem._id == action.payload){
      let decAmount = curElem.amount -1;
      if(decAmount <= 1){
        decAmount = 1;
      }
      return {
        ...curElem,
        amount: decAmount,
      }

    }
    else{
      return curElem;
    }}
  );
  return {
    ...state,
    cart: updatedData,
  };
 }
if(action.type == "SET_INCREMENT"){
  let updatedData = state.cart.map(
    (curElem) =>{if( curElem._id == action.payload){
      let decAmount = curElem.amount +1;
      if (decAmount >= curElem.max) {
        decAmount = curElem.max;
      }
      return {
        ...curElem,
        amount: decAmount,
      }

    }
    else{
      return curElem;
    }}
  );
  return {
    ...state,
    cart: updatedData,
  
 
  };
}
// // show total item
// if(action.type === "CART_TOTAL_ITEM"){
//   let updatedItemVal= state.cart.reduce((initialval, curElm)=>{
//     let {amount} = curElm;
//     initialval = initialval + amount;
//     return initialval;
//   },0);
//   return {
//     ...state,
//     total_item: updatedItemVal,
//   }
// }
// // total price
// if(action.type === "CART_TOTAL_PRICE"){
//   let TotalPrice = state.cart.reduce((initialval, curElem)=>{
//     let {price, amount} = curElem;
//     initialval = initialval + price *amount;
//     return initialval;
//   },0);

// return{
//   ...state,
//  total_price : TotalPrice,
// }
// combined both code
if (action.type === "CART_ITEM_PRICE_TOTAL") {
  let { total_item, total_price } = state.cart.reduce(
    (accum, curElem) => {
      let { price, amount } = curElem;

      accum.total_item += amount;
      accum.total_price += price * amount;

      return accum;
    },
    {
      total_item: 0,
      total_price: 0,
    }
  );
  return {
    ...state,
    total_item,
    total_price,
  };
}

    return state;
}

export default cartReducer;