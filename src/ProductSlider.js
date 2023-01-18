import React, {useState} from 'react';
import Papa from "papaparse";

const ProductSlider = ()=>{
    const [data, setData] = useState({});
    Papa.parse("https://docs.google.com/spreadsheets/d/17QoJbVYXoWbxJDHtv303OeDaMXaU7PsPds4IbSN53Hs/export?format=csv", {
        download: true,
        header:true,
        complete: (results) => {
        setData(results.data);
        },
    });
    const slides = Array.from(data);
    const [current , setCurrent] =useState(0);
    
    

    const length = slides.length;
    const prevSlide = () => {
        setCurrent(current===0 ? length-1 : current-1);
    };
    const nextSlide = () => {
        setCurrent(current===length-1 ? 0 : current+1);
    };
    if (!Array.isArray(slides)|| slides.length === 0){
        return null;
    }

    return (

        <section class="section">
            <a class="prev" onClick={prevSlide}>❮</a>
            <a class="next" onClick={nextSlide}>❯</a>

                {slides.map((slide,index)=>{

                    return(<div class="product__container container grid slides fade" className={index===current? 'product__container container grid slides fade active' : 'slides'} key={index}>
                        {index === current && (<>
                        <div class="product__data">
                            <p class="product-title" id="product_title">{slide.title}</p>
                            <div class="product-subs">
                            <p class="product-subtitle" id="">PRICE   : {slide.price}</p>
                            <p class="product-subtitle" id="">DEPOSIT : {slide.deposit}</p>
                            <button class="but-classic product-button"><a class="but-link product-link-but" href="https://form.jotform.com/230085853801454">BOOK NOW</a></button>
                        </div>
                        </div>
                        <img src={slide.image} alt = "product-images" class="slider-image" id="product_image" />
                        <button class="but-classic product-button product-active"><a class="but-link product-link-but" href="https://form.jotform.com/230085853801454">BOOK NOW</a></button></>)}
                    </div>);
                        
                })}

        </section>
        
    );
}
export default ProductSlider;