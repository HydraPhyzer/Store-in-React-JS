import React, { useEffect, useState } from 'react'
import './Products.css'
import ProductsDisplay from './ProductsDisplay'


const Products = () => {
    let [Products,setProducts]=useState([]);
    let FetchAPI=(API)=>
    {
        fetch(API)
        .then((Res)=>
        {
            return Res.json()
        })
        .then((Result)=>
        {
            setProducts(Result);
        })
    }
    useEffect(()=>
    {
        let API=`https://fakestoreapi.com/products`;
        FetchAPI(API);
    },[])
    return (
        <div className='Products'>
            <h4>Grab New Products</h4>
            <ProductsDisplay Products={Products}/>
        </div>
    )
}

export default Products