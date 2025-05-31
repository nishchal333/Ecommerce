import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './Context/Context.jsx'


import {FilterContextProvider} from './Context/Filter_product.jsx';
import { CartProvider } from './Context/cart_context';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <FilterContextProvider>
    
       <CartProvider>
       <App />
       </CartProvider>

      </FilterContextProvider>
   </AppProvider>
  
     

  </React.StrictMode>,
)
