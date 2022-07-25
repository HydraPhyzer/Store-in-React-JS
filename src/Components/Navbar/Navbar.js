import React,{useEffect, useState} from "react";
import './Navbar.css'
import {Link} from 'react-router-dom'
import {FaShoppingBasket,FaSearch} from 'react-icons/fa'
import { useGlobalCheckoutContext } from "../CheckoutContextReducer/CheckoutContext";
import {auth} from '../Firebase'
import {signOut} from 'firebase/auth'
let Navbar=()=>
{
    let {Basket}=useGlobalCheckoutContext();
    let [Init,setInit]=useState("Hello")

    useEffect(() => {
        auth.onAuthStateChanged((User)=>
        {
          if(User)
          {
            let Ema=User.email.slice(0,3);

            setInit(`${Ema}..`);
          }
        })
      }, [])

      let SignOut=()=>
      {
        signOut(auth)
        .then(()=>
        {
            setInit("Hello")
        })
        .catch(()=>
        {
            alert("Error Occurred");
        })
      }
    return(
        <div className="Navbar" >
            <Link to='/'>
                <div className="Logo"><img src="/Logo/Amazon.png" alt="" /></div>
            </Link>

            <div className="Input-Search">
                <input type="search" />
                <FaSearch className="Search-Icon Icon"/>
            </div>

            <div className="Links">
                <Link to='/login'>
                    <div className="A">
                        <span className="Caller">{Init} </span>
                        <span className="Actions">Sign In</span>
                    </div>
                </Link>
                <div className="B">
                    <span className="Caller">Good By </span>
                    <span className="Actions" onClick={()=>{SignOut()}}>Sign Out</span>
                </div>
                <div>
                    <Link to='/checkout' className="C Links">
                        <span className="Caller">{Basket.length}</span>
                        <span><FaShoppingBasket className="Icon"/></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar