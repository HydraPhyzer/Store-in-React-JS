import React, { useState } from 'react'
import './ProductsDisplay.css'
import {FaStar} from 'react-icons/fa'

const ProductsDisplay = ({ Products }) => {

    let StarCount=(Star,Count)=>
    {
        let String="";

        for(Star ; Star>=0 ; Star--)
        {
            if(Star>1)
            {
                String+="⭐";
                console.log(Star)
            }
        }
        return `Rating  :${String} (${Count})`
    }

    return (
        <div className="ProductsDiplay row w-100">
            {
                Products.map((Elem) => {
                    return (
                        <div className="col-3 AllProducts" key={Elem.id}>
                            <div className="Image">
                                <img src={Elem.image} alt="" />
                            </div>
                            <div className="Title">
                                <p>{Elem.title}</p>
                            </div>
                            <div className="Price">
                                <span>Price &nbsp;&nbsp; : {Elem.price} $</span>
                            </div>
                            <div className="Rating-Count">
                                <span>
                                    {StarCount(Elem.rating.rate , Elem.rating.count)}
                                </span>
                            </div>
                            <div className="Button">
                                <button className='Btn'>Add to Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductsDisplay