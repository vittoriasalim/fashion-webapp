
import './App.css';
import Navigation from './Navigation';


import Footer from './Footer';


function About() {
    
  return (
    <>
    <Navigation />
    <div class="container-bespoke">
    <div class="bespoke__container container grid">
        <div class="">
        
            <p class="product-bespoke" id="">BESPOKE PROCESS 1</p>
            <p class="" id="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
            <p class="product-bespoke" id="">BESPOKE PROCESS 2</p>
            <p class="" id="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
            <button class="but-classic product-button"><a class="but-link product-link-but" href="https://form.jotform.com/230085853801454">CUSTOM BOOK NOW</a></button>
        
       

        {/* <img src="asset/product-sample.png" class="slider-image" alt="product-images"></img> */}
        </div>
        
        <div class="">
            {/* <img src="asset/Dot1.png" class="dot1 dot1-product" alt="dot"></img> */}
            {/* <img src="asset/Dot2.png" class="dot2 dot2-product" alt="dot"></img>  */}
            <img src="asset/bespoke1.png" class="slider-image" id="product_image" alt="product-images"></img>
        </div>
    </div>
    <div class="bespoke__container container grid">
        
        
        <div class="">
            {/* <img src="asset/Dot1.png" class="dot1 dot1-product" alt="dot"></img> */}
            {/* <img src="asset/Dot2.png" class="dot2 dot2-product" alt="dot"></img>  */}
            <img src="asset/bespoke2.png" class="slider-image" id="product_image" alt="product-images"></img>
        </div>
        <div class="">
        
            <p class="product-bespoke" id="">BESPOKE PROCESS 1</p>
            <p class="" id="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
            <p class="product-bespoke" id="">BESPOKE PROCESS 2</p>
            <p class="" id="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
            <button class="but-classic product-button"><a class="but-link product-link-but" href="https://form.jotform.com/230085853801454">CUSTOM BOOK NOW</a></button>
       

        {/* <img src="asset/product-sample.png" class="slider-image" alt="product-images"></img> */}
        </div>
    </div>
   
   
    </div>
    <Footer />
    </>
  );
}

export default About;
