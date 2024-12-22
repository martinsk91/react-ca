import React, { useEffect, useState, useContext  } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../CartContext.js";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container d-flex flex-column align-items-center">
      <h1 className="fw-bold">{product.title}</h1>
      <div className="col-12 col-md-6">
      <img src={product.image.url} alt={product.title} className="img-fluid rounded" />
      </div>
      <div className="d-flex col-12 col-md-6">
      <p className="me-1 fs-5 border">{product.description}</p>
        <div className="d-flex flex-column align-items-center justify-content-center">
            <p className="fs-3">Price: <span className="text-success">${product.price}</span></p>
            <button className="btn btn-success" onClick={() => addToCart(product)}>Add to cart</button>
        </div>
        
    </div>
      
    </div>
  );
};

export default ProductDetail;