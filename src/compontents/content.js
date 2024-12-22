import React from "react"
import Products from "./products.js";


const content = [
  <>
    <div className="bg-dark rounded">
      <h1 className="fw-bold text-white p-4">Welcome to the Store</h1>
      <p className="text-white p-4">in this store we have many different things</p>
    </div>
    <div className="border border-2 rounded border-black fs-1 container"><Products></Products></div>
    <div className="bg-primary text-white mt-5 rounded fs-1"><p>we could also have some commercial shit and information at the bottom</p></div>
 
    </>
    




    , <div>this is the about page</div>,




    <div>this is the contact page</div>
]



function Main({ currentPage }) {
    return <main className=" mt-5 container">{content[currentPage]}</main>;
  }

export default Main;