
import './App.css';
import Navigation from './Navigation';

import React,{useState,useEffect} from 'react';
import { ImageData } from './image-data';



import Footer from './Footer';
import ProductSlider from './ProductSlider';


function Shop() {
    
      
    
  return (
    <>
    <Navigation />
    <ProductSlider slides={ImageData}/>
    
    <Footer />

    </>
  );
}

export default Shop;
