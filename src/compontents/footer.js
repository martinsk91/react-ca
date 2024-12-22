import React from 'react';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
         
          <div className="col-12 col-md-4 mb-4">
            <h5>About Us</h5>
            <p>
              The Store offers a wide range of products, including electronics, toys, perfumes, and much more. We pride ourselves on providing quality products and exceptional customer service.
            </p>
          </div>

     
          <div className="col-12 col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </div>

       
          <div className="col-12 col-md-4 mb-4">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Email: <a href="mailto:info@thestore.com" className="text-white text-decoration-none">info@thestore.com</a></li>
              <li>Phone: +123 456 789</li>
              <li>Address: 123 Store Street, City, Country</li>
            </ul>
          </div>
        </div>

    
        <div className="row">
          <div className="col-12 text-center mt-4">
            <p>&copy; {new Date().getFullYear()} The Store. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;