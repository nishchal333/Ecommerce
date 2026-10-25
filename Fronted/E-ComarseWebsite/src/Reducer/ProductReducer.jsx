import { useContext } from "react";
const ProductReducer = (state,action) =>{
    switch (action.type) {
        case "SET_LOADING":
          return {
            ...state,
            isLoading: true,
          };
    
        case "SET_API_DATA":
          const products = action.payload.products || [];
          const featureData = products.filter((curElem) => {
            return curElem.featured === true;
          });
       
          return {
            ...state, 
            isLoading: false,
            products,
            featureProducts: featureData,
            totalPages: action.payload.pagination?.pages || 1,
          };

        case "SET_PAGE":
          return {
            ...state,
            currentPage: action.payload,
          };
    
        case "API_ERROR":
          return {
            ...state,
            isLoading: false,
            isError: true,
          };
          case "SET_SINGLE_LOADING":
            return {
              ...state,
              isSingleLoading: true,
            };
          case "SET_SINGLE_PRODUCT":
            return {
              ...state,
              isSingleLoading: false,
              singleProduct: action.payload,
            };
            case "SET_SINGLE_ERROR":
              return {
                ...state,
                isSingleLoading: false,
                isError: true,
              };


        default:
          return state;
      }
    };
    

export default ProductReducer; 