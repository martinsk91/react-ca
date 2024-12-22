import React from "react";
import Products from "./products.js";

function Home() {
  return (
    <>
      <div className="bg-primary rounded">
        <h1 className="fw-bold text-white p-4">Welcome to the Store</h1>
        <p className="text-white p-4">In this store we have many different things</p>
      </div>
      <div className="border border-2 rounded border-black fs-1 container">
        <Products />
      </div>
     
    </>
  );
}

export default Home;