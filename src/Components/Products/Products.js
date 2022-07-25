import React from 'react'
import './Products.css'
import ProductsDisplay from '../DisplayProduct/ProductsDisplay'


const Products = ({children}) => {
    return (
        <div className='Products'>
            <h4>Grab New Products</h4>
            <ProductsDisplay/>
        </div>

    );
};

export default Products