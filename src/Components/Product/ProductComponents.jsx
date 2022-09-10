import React from "react";
import { useSelector } from "react-redux";
import './Product.css'
import { Link } from "react-router-dom";

const ProductComponents = () => {
  const products = useSelector(state => state.allProducts.products)
  const renderList = products.map(product => {
    const {id, brand, title, image, category, price}  = product;
    return(
      <div className="container" key={id}>
        <h3>{title}</h3>
        <img src={image} alt={title}/>
       
       <div>
       <p>{brand}</p>
        <p>{category}</p>
        <p>$ {price}</p>
       </div>
       <Link to = "/EditPage"><button>Edit Details</button></Link>
      </div>
  )
  })
   return <> {renderList} </>
    }
  
  
 


export default ProductComponents;