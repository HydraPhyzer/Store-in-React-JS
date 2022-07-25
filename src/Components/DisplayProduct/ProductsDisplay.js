import React from 'react'
import './ProductsDisplay.css'
import { UseGlobalContext } from '../Context/Context'
import { useGlobalCheckoutContext } from '../CheckoutContextReducer/CheckoutContext'

const ProductsDisplay = () => {

    let { Products } = UseGlobalContext();
    let { AddtoCart } = useGlobalCheckoutContext();

    let StarCount = (Star, Count) => {
        let String = "";

        for (Star; Star >= 0; Star--) {
            if (Star > 1) {
                String = String + "⭐";
            }
        }
        return `Rating  :${String} (${Count})`
    }
    return (
        <div className="ProductsDiplay row w-100">
            {
                Products.map((Elem, Ind) => {
                    return (
                        <div className={Ind % 5 === 0 ? `col-12 AllProducts` : `col-3 AllProducts`} key={Elem.id}>
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
                                    {StarCount(Elem.rating.rate, Elem.rating.count)}
                                </span>
                            </div>
                            <div className="Button">
                                <button onClick={() => { AddtoCart(Elem)}} className='Btn'>Add to Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductsDisplay