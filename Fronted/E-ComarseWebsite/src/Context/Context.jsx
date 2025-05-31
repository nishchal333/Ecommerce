import {  createContext, useContext, useEffect ,useReducer} from "react";
import axios from "axios";
const AppContext = createContext();
// const API= "https://api.pujakaitem.com/api/products";
// Set the backend API endpoint
const API = "https://bharat-ecommarse-2.onrender.com/api/products"; // Update to your backend URL

// console.log(API);
import reducer from "../Reducer/ProductReducer"
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct:{}
  };
  
  
const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts= async (url)=>{
      
 dispatch({type:"SET_LOADING"});
   try {

      const res = await axios.get(url);
      
      const products = await res.data;

     dispatch({type:"SET_API_DATA", payload: products})
   
   } catch (error) {
    dispatch({type:"API_ERROR"})
   }
}
// 2nd data
const getSingleproduct = async (url) =>{
  dispatch({type:"SET_SINGLE_LOADING"});
  try {
    const res= await axios.get(url);
    const products= await res.data;
    const singleProduct = products.find(product => product._id === url.split('=')[1]);

    dispatch({type:"SET_SINGLE_PRODUCT", payload: singleProduct})
  } catch (error){
    dispatch({type:"Set_SINGLE_ERROR"});
  }
}


useEffect(()=>{
getProducts(API);
}, []);

    return <AppContext.Provider value={{ ...state ,getSingleproduct}}>{children}</AppContext.Provider>
};

// custem hooks
const useProductcontext = () =>{
    return useContext(AppContext);
}


export {AppProvider,AppContext,useProductcontext};
