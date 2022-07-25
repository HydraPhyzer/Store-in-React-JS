import React from 'react'
import './Checkout.css'
import Navbar from './Navbar/Navbar'
import { useGlobalCheckoutContext } from './CheckoutContext'
const Checkout = () => {
  let { Basket } = useGlobalCheckoutContext();

  
  return (
    <div className='See'>
      <Navbar />

      {
        Basket.map((Elem, Ind) => {
          return (
            <div className="Checkout" key={Ind}>
              <div className="Img">
                <img src={Elem.image} alt="" />
              </div>
              <div className="Block">
                <span>Price : {Elem.price}</span>
                <span>Rating: ****({Elem.rating.count})</span>
                <div className="Inc-Dec">
                  <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                    <button type="button" className="btn btn-outline-dark">-</button>
                    <button type="button" className="btn btn-outline-dark">{0}</button>
                    <button type="button" className="btn btn-outline-dark">+</button>
                  </div>
                </div>
              </div>
              {window.matchMedia("(max-width: 450px)").matches ? <button className='Btn'>Remove</button> : <button className='Btn'>Remove From Cart</button>}
            </div>
          )
        })
      }
    </div>
  )
}

export default Checkout