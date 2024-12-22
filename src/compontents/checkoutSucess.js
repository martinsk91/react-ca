import React, { useContext } from 'react';
import { CartContext } from '../CartContext'; 
import { Link } from 'react-router-dom';

const CheckoutSuccess = () => {
  const { order } = useContext(CartContext); 

  const totalAmount = order.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ).toFixed(2);

  return (
    <div className="container my-5 d-flex flex-column align-items-center">
      <h1 className="text-center text-success">Thank You for Your Purchase!</h1>
      <p className="text-center">Your order has been successfully placed.</p>

      <h2>Your Order Summary</h2>

      {order.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="list-group col-lg-4 col-md-6 col-12">
          {order.map((item) => (
            <div
              key={item.id}
              className="list-group-item d-flex justify-content-center align-items-center my-3"
            >
              <div>
                <h5>{item.title}</h5>
                <img
                  src={item.image.url}
                  alt={item.title}
                  className="img-thumbnail"
                  style={{ width: '100px', height: '100px' }}
                />
                <p>
                  ${item.price} x {item.quantity} = $
                  {Math.round(item.price * item.quantity * 100) / 100}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4">
        <h4>Total Amount: ${totalAmount}</h4>
      </div>

      <div className="mt-4 text-center">
        <Link to="/" className="btn btn-primary">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccess;