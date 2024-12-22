import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import ProductSearch from "./productSearch.js";

function Header() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const { cart, removeFromCart } = useContext(CartContext); 

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <header className="bg-primary fixed w-100">
      <div className="headerdiv">
        <button onClick={toggleCart} className="cart btn btn-warning">
          🛒 <span className="d-none d-sm-inline">Cart</span> 
        </button>
        {cart.length > 0 ? (

<div className="bg-danger cart-dot">
<p>{cart.length}</p>
</div>
        ) :null }
       
      </div>

      <nav className="">
        <Link to="/" className="p-2 m-4 btn btn-secondary">
          Home
        </Link>
        <Link to="/about" className="p-2 m-4 btn btn-secondary">
          About
        </Link>
        <Link to="/contact" className="p-2 m-4 btn btn-secondary">
          Contact
        </Link>
      </nav>

   
      <div className={`cart-sidebar ${isCartVisible ? "open" : ""}`}>
        <button onClick={toggleCart} className="btn btn-warning cart">
          ❌ <span className="d-none d-sm-inline">Cart</span>
        </button>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="list-group">
            {cart.map((item) => (
              <div
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center flex-column my-1"
              >
                <div>
                  <h5>{item.title}</h5>
                  <img src={item.image.url} className="mx-auto d-block cart-img"></img>
                  <p>
                    ${item.price} x {item.quantity} = $
                    {Math.round(item.price * item.quantity * 100) / 100}
                  </p>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        {cart.length > 0 && (
          <div className="mt-3">
            <h4>
              Total: $
              {cart.reduce(
                (total, item) => total + Math.round(item.price * item.quantity * 100 / 100),
                0
              )}
            </h4>
          </div>
        )}
      </div>
      <ProductSearch />
    </header>
  );
}

export default Header;
