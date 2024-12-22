import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log("Rendering products:", products)
  return (
   <div className="row">
      <h2 className="fs-1 fw-bolder">Our Products</h2>
     
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-lg-4 col-xl-3 border relative">
            <h3 className="fs-2 fw-bold">{product.title}</h3>
            <img src ={product.image.url} alt={product.title} className="img-fluid"></img>
            <p className="mb-5">Price:<span className="text-success"> ${product.price}</span></p>
            <button className="btn btn-primary prodbutton" onClick={() => navigate(`/product/${product.id}`)}>See More</button>
          </div>
        ))}
    </div>
  
  );
};

export default Products;