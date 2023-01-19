
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom"
import './index.css';
import './main.js';
// import Header from "./components/Header";
import Home from "./components/Home";

import About from "./components/About";
import Service from './components/Service';
import Shop from "./components/Shop";
import Contact from './components/ Contact';

function App() {
  return (

    // <Router>

    //   <Routes>
    //   <Route path="/" element={<Home />}/>
    //   <Route path="/shop" element={<Shop />}/>
    //   <Route path="/about" element={<About />}/>
    //   <Route path="/contact" element={<Contact />}/>
    //   </Routes>
    // </Router>
    <>
    {/* <Router>
      <Routes>
      <Route path="/bespoke" element={<Bespoke />}/>
      </Routes>
    </Router> */}
    <Home></Home>
    <Service></Service>
    <Shop></Shop>
    <About></About>
    <Contact></Contact>    
    </>
  );
}

export default App;
