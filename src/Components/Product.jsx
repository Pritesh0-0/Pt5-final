import React from 'react'
import { useParams } from 'react-router'



const Product = () => {
    const { id } = useParams();

    const [data, setData] = React.useState([])

    const getdata = (id) => {
        fetch(`http://localhost:3002/products/${id}`)
            .then((res) => res.json())
            .then((res) => setData(res))
    }

    React.useEffect(() => {
        getdata(id)
    }, [])

    console.log(data)

   
    return (
        <div>
            <h1>Brand {data.brand}</h1>
            <h2>Brand {data.men}</h2>
            <img src={data.image} alt="" />
            <h2>{data.price}</h2>
            <h3>{data.title}</h3>
        </div>
    )
}

export default Product