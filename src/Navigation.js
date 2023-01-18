import React from 'react';
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom"

export default function Navigation(){
        const handleToggle = (e) => {
        e.preventDefault();
        console.log('The link was clicked.');
        const navMenu = document.getElementById("nav-menu")
        navMenu.classList.add("show-menu");
      }
      const handleExit= (e) => {
        const navMenu = document.getElementById("nav-menu")
        navMenu.classList.remove("show-menu");
     
      }


        
        return (
        <>
        <header class="header" id="header">
            <nav class="nav container">
            
                <div class="nav__menu" id="nav-menu">
                    <ul class= "nav__list grid">
                        <li class="nav__item"><a class="nav__link" id="home" href="/">
                            <i class="nav__icon uil uil-estate"></i>HOME</a></li>
                            <li class="nav__item"><a class="nav__link" id="shop" href="/shop">
                                <i class="nav__icon uil uil-shopping-bag"></i> SHOP</a></li>
                            <li class="nav__item"><a class="nav__link" id="about" href="/about">
                            <i class="nav__icon uil uil-wrench"></i> CUSTOM</a></li>
                            <li class="nav__item"><a class="nav__link" id="contact" href="/contact" >
                            <i class="nav__icon uil uil-phone"></i> CONTACT</a></li>
                      
                        
                    </ul>
                    <button class="nav-close" onClick={handleExit}><i class="uil uil-times nav__close" id="nav-close"></i></button>
                </div>
         
                
            </nav>
        </header>
        <button class="nav__toggle" onClick={handleToggle}><i class="uil uil-list-ui-alt"></i></button>
        </>
        );
    
}