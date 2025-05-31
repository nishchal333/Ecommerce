import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { GlobalStyle } from './Style/GlobalStyle';
import Home from './components/Home';
import About from './components/About';
import SinglePage from './components/SinglePage';
import Contact from './components/contact';
import ProducrCard from './components/ProducrCard';
import Error from './components/Error';
import Cart from './components/cart';
import SignupPage from './components/Users/SignupPage';
import {BrowserRouter as Router , Routes,Route  } from "react-router-dom";
import Login from './components/Users/Login';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import PaymentPage from './components/PaymentPage';
import SuccessPage from './components/sucessPage';
function App() {

 const theme ={
  colors: {
    heading: "#2C3E50", // Dark blue for heading for a more professional and readable look
    text: "rgba(44, 62, 80, 0.9)", // Darker blue-gray text color for better readability
    white: "#FFFFFF",
    black: "#000000",
    helper: "#BDC3C7", // Light gray-blue helper color for subtlety
    bg: "#ECF0F1", // Very light blue-gray background for a modern, clean look
    footer_bg: "#AACCFF", // Same dark blue as heading for a cohesive design
    btn: "#3498DB", // Vibrant blue button for a pop of color
    border: "rgba(52, 152, 219, 0.5)", // Border matching button color
    hr: "#FFFFFF",
    gradient: "linear-gradient(0deg, #3498DB 0%, #2ECC71 100%)", // Blue to green gradient for vibrancy
    shadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px", // Subtle shadow for modern look
    shadowSupport: "rgba(0, 0, 0, 0.1) 0px 2px 4px",
  },
  media: {
    mobile: "768px",
    tab: "998px",
  },
 }

  return (
  
   
        <ThemeProvider theme={theme}>
       <Router>
        <GlobalStyle/>
        <Header/>
        <Routes>
       
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/Login" element={<Login />} />
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/ProducrCard' element={<ProducrCard/>}/>
          <Route path='/contact' element={<Contact/>}/>
        

          <Route path='/cart' element={<Cart/>}/>
          <Route path="/PaymentPage" element={<PaymentPage/>} />
          <Route path="/success" element={<SuccessPage/>} />
        


          <Route path='/singleproduct/:id' element={<SinglePage/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
        <Footer/>
       </Router>
       </ThemeProvider>
     

  )
}

export default App
