import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './Components/Checkout/Checkout'
import Home from './Components/Home/Home'
import { Context } from './Components/Context/Context'
import {CheckoutContext} from './Components/CheckoutContextReducer/CheckoutContext'
import Login from './Components/LoginPage/Login'
import Signup from './Components//Signup/Signup'

let App = () => {
    return (
        <Router>
            <div className="App">
                <Context>
                    <CheckoutContext>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/checkout' element={<Checkout />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/signup' element={<Signup />} />
                        </Routes>
                    </CheckoutContext>
                </Context>
            </div>
        </Router>
    )
}
export default App