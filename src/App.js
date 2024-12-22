import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./compontents/header2.js";
import Home from "./compontents/home.js";
import About from "./compontents/about.js";
import Contact from "./compontents/contact.js";
import ProductDetail from "./compontents/productDetails.js";
import { CartProvider } from "./CartContext.js";
import './App.css';


function App() {
  return (
    <CartProvider>
    <Router>
      <Header />
      <main className="mt-5 container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail/>}/>
        </Routes>
      </main>
    </Router>
    </CartProvider>
  );
}

export default App;