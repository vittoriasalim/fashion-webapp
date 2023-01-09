
import React, {useState} from 'react';
import { ImageData } from './image-data';

const ProductSlider = ({slides})=>{
    const [current , setCurrent] =useState(0);

    const length = slides.length;
    const prevSlide = () => {
        setCurrent(current===0 ? length-1 : current-1);
    };
    const nextSlide = () => {
        setCurrent(current===length-1 ? 0 : current+1);
    };
    if (!Array.isArray(slides)|| slides.length == 0){
        return null;
    }

    return (
    
   
        <div class="container-slider">

                {ImageData.map((slide,index)=>{

                    return(<div class="container-product slides fade" className={index===current? 'container-product slides fade active' : 'slides'} key={index}>
                        {index === current && (<>
                        <div class="content1-product">
                            <p class="product-title" id="product_title">{slide.title}</p>
                            <div class="product-subs">
                            <p class="product-subtitle" id="product_price">PRICE   : {slide.price}</p>
                            <p class="product-subtitle" id="product_deposit">DEPOSIT : {slide.deposit}</p>
                            <button class="but-classic product-button"><a class="but-link product-link-but" href="https://forms.gle/pR6whCCizVBn9fVL7">BOOK NOW</a></button>
                            </div>
                        </div>
                        <div class="content2 content2-product">
                        <img src="asset/Dot1.png" class="dot1 dot1-product" alt="dot"></img>
                        <img src="asset/Dot2.png" class="dot2 dot2-product" alt="dot"></img> 
                        <img src= {slide.image} alt = "product-images" class="slider-image" id="product_image" />
                        </div></>)}
                        
                    
                    </div>);
                        
                })}

        
            <a class="prev" onClick={prevSlide}>❮</a>
            <a class="next" onClick={nextSlide}>❯</a>


        </div>
      
      
        
    );
}
export default ProductSlider;

