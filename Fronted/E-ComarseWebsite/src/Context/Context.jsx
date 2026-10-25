import {  createContext, useContext, useEffect ,useReducer} from "react";
import axios from "axios";
const AppContext = createContext();
// const API= "https://api.pujakaitem.com/api/products";
// Set the backend API endpoint
const API = "http://localhost:3000/api/products"; // Your local backend URL


import reducer from "../Reducer/ProductReducer"
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    currentPage: 1,
    totalPages: 1,
    productsPerPage: 12,
    isSingleLoading: false,
    singleProduct:{}
  };
  
  
const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts= async (url)=>{
      
 dispatch({type:"SET_LOADING"});
   try {

      const res = await axios.get(url);
      
      const products = Array.isArray(res.data) ? res.data : res.data.products;
      const pagination = res.data.pagination;

         dispatch({type:"SET_API_DATA", payload: { products, pagination }})
   
   } catch (error) {
    dispatch({type:"API_ERROR"})
   }
}
// 2nd data
const getSingleproduct = async (url) =>{
  dispatch({type:"SET_SINGLE_LOADING"});
  try {
    const res= await axios.get(url);
    const products = Array.isArray(res.data) ? res.data : res.data.products;
    const singleProduct = products.find(product => product._id === url.split('=')[1]);

    dispatch({type:"SET_SINGLE_PRODUCT", payload: singleProduct})
  } catch (error){
    dispatch({type:"Set_SINGLE_ERROR"});
  }
}


const goToPage = (page) => {
  if (page >= 1 && page <= state.totalPages) {
    dispatch({ type: "SET_PAGE", payload: page });
  }
};

useEffect(()=>{
  getProducts(`${API}?page=${state.currentPage}&limit=${state.productsPerPage}`);
}, [state.currentPage]);

    return <AppContext.Provider value={{ ...state, getSingleproduct, goToPage }}>{children}</AppContext.Provider>
};

// custem hooks
const useProductcontext = () =>{
    return useContext(AppContext);
}


export {AppProvider,AppContext,useProductcontext};
