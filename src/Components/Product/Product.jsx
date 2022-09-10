import {Text,Button} from "@chakra-ui/react"
import { useParams } from 'react-router-dom';
import { useState,useEffect } from "react";
import { additem } from "../features/cart";
import { useDispatch } from 'react-redux'
import React from 'react'

const Product = () => {
    var dis=useDispatch()
    var id=useParams().id
    console.log(id)
    const[product,setp]=useState([])
    const[ss]=useState(false)
    // console.log(cart)
    useEffect(() => {
    fetch(`http://localhost:3002/products/${id}`)
    .then(product=>product.json())
    .then(product=>{setp(product)
    ss(true)
    })

    },[]);
    console.log(product)
    const item=(e)=>{
    return(<>

    <img src={e.image}
    />
    <Text>
    {e.title}
    </Text>
    <Text>
    {e.price}
    </Text>
    <Button  onClick={()=>dis(additem(e))}>
    add cart
    </Button>


    </>)
    }
  return (
    <div>
        ss?item(product):''
    </div>
  )
}

export default Product