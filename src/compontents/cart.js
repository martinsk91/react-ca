import React, { useState, useEffect } from "react";

function Cart() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
       
        setProducts(data.data); // Oppdater state med produktene
      } catch (error) {
        console.error("Error:", error);
        setError(error.message); // Oppdater feilstate
      } finally {
        setLoading(false); // Oppdater lastestate
      }
     
    };

    fetchProducts();
  }, []);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div className="container">
      <h1 className="my-4">Shopping Cart</h1>

      {/* Produkter */}
      <div>
        <h2>Products</h2>
        <div className="row">
          {loading && <p>Loading products...</p>}
          {error && <p className="text-danger">Error: {error}</p>}
          {!loading &&
            !error &&
            products.map((product) => (
              <div key={product.id} className="col-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Price: ${product.price}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Handlekurv */}
      <div className="mt-5">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="list-group">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <h5>{item.title}</h5>
                  <p>
                    Price: ${item.price} x {item.quantity} = $
                    {item.price * item.quantity}
                  </p>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <div className="mt-3">
            <h4>
              Total: $
              {cart.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;