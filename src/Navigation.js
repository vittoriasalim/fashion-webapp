import React from 'react';
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom"

export default function Navigation(){

    
    return (
        <div class="nav-bar">
        <ul>
        <li><a id="contact" href="/contact" >CONTACT</a></li>
        <li><a id="about" href="/about">CUSTOM</a></li>
        <li><a id="shop" href="/shop">SHOP</a></li>
        <li><a id="home" href="/">HOME</a></li>
        </ul>

    </div>
        
    );
}