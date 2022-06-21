import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import React, {useState} from 'react';
import NavBar from "./components/NavBar";
import Products from './components/Products';
import Contact from './components/Contact'
import Cart from './components/Cart'

const RouteSwitch = () => {
    const [cartNumber, setCartNumber] = useState(0);
    const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
    <NavBar cartNumber={cartNumber}/>
      <Routes>
        <Route path="/shopping-cart" element={<App />} />
        <Route path="/products" element={<Products cartNumber={cartNumber} setCartNumber={setCartNumber} cartItems={cartItems} setCartItems={setCartItems}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cartNumber={cartNumber} setCartNumber={setCartNumber} cartItems={cartItems} setCartItems={setCartItems}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;