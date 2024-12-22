import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const ProductSearch = () => {
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
          console.log(data.data); 
          setProducts(data.data); 
        } catch (error) {
          console.error("Error:", error);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, []);


  const [searchQuery, setSearchQuery] = useState('');

  const searchProducts = (query) => {
    return products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
  };

  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

 
  const filteredProducts = searchQuery ? searchProducts(searchQuery) : [];

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="form-control mb-3"
      />
      <div>
        {filteredProducts.length === 0 && searchQuery !== '' ? (
          <p>No products found.</p>
        ) : (
          <ul className='searchlist border border-black list-unstyled'>
            {filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} className=''>
              <li key={product.id} className='d-flex my-2 border border-5'>
                <div className="img-container">
                  <img src={product.image.url} alt={product.title} className="img-fluid" />
                </div>
                <div>
                  <h5>{product.title}</h5>
                  <p>{product.description}</p>
                </div>
               
              </li>
            </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;

