import React from 'react'
import styled from 'styled-components'
import HeroSection from "./HeroSection";
import Services from './Services';
import Trusted from './Trusted';
import FeatureProduct from './FeatureProduct';
import Slider from './SlidePage';
function Home() {
  const data ={
    name: "ElectroMart",
  }
  return (
    <>
    <Slider/>
    <HeroSection myData={data}/>
    <FeatureProduct/>
    <Services/>
    <Trusted/>
    </>

  )
}

export default Home