import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./compontents/header2.js";
import Home from "./compontents/home.js";
import About from "./compontents/about.js";
import Contact from "./compontents/contact.js";
import ProductDetail from "./compontents/productDetails.js";
import { CartProvider } from "./CartContext.js";
import Footer from "./compontents/footer.js";
import './App.css';
import CheckoutSuccess from "./compontents/checkoutSucess.js";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <main className="my-5 container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkoutsuccess" element={<CheckoutSuccess />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;