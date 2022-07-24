import React from 'react'
import './Checkout.css'
import Navbar from './Navbar/Navbar'
import { useGlobalCheckoutContext } from './CheckoutContext'
const Checkout = () => {
  let {Basket} = useGlobalCheckoutContext();
  return (
    <div>
      <Navbar/>
      {

      }
    </div>
  )
}

export default Checkout