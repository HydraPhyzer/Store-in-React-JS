import React from "react";
import './Navbar.css'
import {Link} from 'react-router-dom'
import {FaShoppingBasket,FaSearch} from 'react-icons/fa'

let Navbar=()=>
{
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
                <div className="A">
                    <span className="Caller">Hello </span>
                    <span className="Actions">Sign In</span>
                </div>
                <div className="B">
                    <span className="Caller">Good By </span>
                    <span className="Actions">Sign Out</span>
                </div>
                <div>
                    <Link to='/checkout' className="C Links">
                        <span className="Caller">0</span>
                        <span><FaShoppingBasket className="Icon"/></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar