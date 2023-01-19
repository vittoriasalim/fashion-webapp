


import '../index.css';
import Papa from 'papaparse';
import React, {useState} from 'react';




const Shop =()=>{
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
    <section class="menu section bd-container" id="menu">
        <div class="menu-slider">
            <a class="prev" onClick={prevSlide}>❮</a>
                <div>
                    <span class="section-subtitle">GALLERY</span>
                    <h2 class="section-title">Hall Of Gowns</h2>
                </div>
            <a class="next" onClick={nextSlide}>❯</a>
        </div>

        {slides.map((slide,index)=>{

        return(
    
        <div class="menu__container bd-grid" className={index===current? 'menu__container bd-grid slides fade active' : 'slides'} key={index}>
            {index === current && (
            
            
            <div class="menu__content">
            <img src={slide.image} alt="" class="menu__img"></img>
                

                <h3 class="menu__name">{slide.title}</h3>
                <span class="menu__detail">Deposit : {slide.deposit}</span>
                <span class="menu__preci">{slide.price}</span>
                <a href="https://form.jotform.com/230085853801454" class="button menu__button">BOOK NOW <i class='menu-icon bx bx-cart-alt'></i></a>
            </div>)}
        </div>
        );
            
        })}
    </section>
       

      

  );
}

export default Shop;