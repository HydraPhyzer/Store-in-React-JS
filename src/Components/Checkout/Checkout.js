import React from 'react'
import './Checkout.css'
import Navbar from '../Navbar/Navbar'
import { useGlobalCheckoutContext } from '../CheckoutContextReducer/CheckoutContext'
import { FaSadTear } from 'react-icons/fa'

const Checkout = () => {
  let { Basket, RemoveFromCart } = useGlobalCheckoutContext();
  let RemoveItem = (Id) => {
    RemoveFromCart(Id)
  }
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
    <div className='See'>
      <Navbar />
      {
        Basket.length !== 0 ?
          Basket.map((Elem, Ind) => {
            return (
              <div className="Checkout" key={Ind}>
                <div className="Img">
                  <img src={Elem.image} alt="" />
                </div>
                <div className="Block">
                  <span>Price : {Elem.price}$</span>
                  <span>{StarCount(Elem.rating.rate, Elem.rating.count)}</span>
                </div>
                {window.matchMedia("(max-width: 450px)").matches ? <button onClick={() => { RemoveItem(Elem.id) }} className='Btn'>Remove</button> : <button onClick={() => { RemoveItem(Elem.id) }} className='Btn'>Remove From Cart</button>}
              </div>
            )
          })
          :
          <div className="alert alert-info mt-1 g-0 text-white" style={{ backgroundColor: "#f39c12", borderRadius: "0px", color: "black" }} role="alert">
            Empty Cart <FaSadTear style={{ color: "#2c3e50", fontSize: "x-large" }} /> . Please Add Items in Me!
          </div>

      }
      {
        Basket.length !== 0 ? <div className="alert alert-primary Total" role={"alert"}>
        Total Bill :
        {
          Basket.reduce((Acc, Curr) => Acc += Curr.price, 0)
        }
        $
      </div> : ""
      }
    </div>
  )
}

export default Checkout