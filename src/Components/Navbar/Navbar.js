import React, { useEffect, useState } from "react";
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaShoppingBasket, FaSearch } from 'react-icons/fa'
import { useGlobalCheckoutContext } from "../CheckoutContextReducer/CheckoutContext";
import { auth, db } from '../Firebase'
import { ref, onValue } from 'firebase/database'
import { signOut } from 'firebase/auth'
import {UseGlobalContext} from '../Context/Context'

let Navbar = () => {
    let { Basket, SignOutCart, SignInCart } = useGlobalCheckoutContext();
    let [Init, setInit] = useState("Hello");
    let [Sin, setSin] = useState("Sign In");
    let {GetSearchText}=UseGlobalContext();
    let [Typo,setTypo]=useState("");

    useEffect(() => {
        auth.onAuthStateChanged((User) => {
            if (User != null) {
                onValue(ref(db, `${auth.currentUser.uid}`), (snapshot) => {
                    if (snapshot.exists()) {
                        let Data = snapshot.val();
                        SignInCart(Data)
                    }
                });
                let Ema = User.email.slice(0, 3);
                setInit(`${Ema}..`);
                setSin("");
            }
        })
    }, [])

    let SignOut = () => {
        signOut(auth)
            .then(() => {
                SignOutCart();
                setInit("Hello");
                setSin("Sign In");
            })
            .catch(() => {
                alert("Error Occurred");
            })
    }

    let Gather=(Inp)=>
    {
        setTypo(Inp);
        GetSearchText(Inp);
    }
    return (
        <div className="Navbar" >
            <Link to='/'>
                <div className="Logo"><img src="/Logo/Amazon.png" alt="" /></div>
            </Link>

            <div className="Input-Search">
                <input type="search" value={Typo} onChange={(E)=>{Gather(E.target.value);}}/>
                <FaSearch className="Search-Icon Icon" />
            </div>

            <div className="Links">
                <div className="A">
                    <span className="Caller mb-0 pb-0">{Init} </span>
                    <Link to='/login' className="Links">
                        <span className="Actions">{Sin}</span>
                    </Link>
                </div>
                <div className="B">
                    <span className="Caller">Good By </span>
                    <span className="Actions" onClick={() => { SignOut() }}>Sign Out</span>
                </div>
                <div>
                    <Link to='/checkout' className="C Links">
                        <span className="Caller">{Basket.length}</span>
                        <span><FaShoppingBasket className="Icon" /></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar