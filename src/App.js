
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom"
import './App.css';
import Navigation from './Navigation';

import Home from './Home';
import Shop from './Shop';
import About from './About';
import Contact from './Contact';



function App() {
  return (

    <Router>

      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>

 
    
  );
}

export default App;
