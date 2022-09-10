import React, { useEffect } from "react";
import ProductComponents from "./ProductComponents";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../../Redux/Products/actions";

const ProductListing =() => {
   const dispatch = useDispatch();
   const fetchProducts = async () => {
     const response = await axios.get('http://localhost:3002/products')
                                 .catch(err => console.log(err));
     dispatch(setProducts(response.data));
   }

   useEffect(() => {
      fetchProducts();
   });

     return (
       <div>
       <ProductComponents/>
       </div>
     )
   }

   export default ProductListing;
