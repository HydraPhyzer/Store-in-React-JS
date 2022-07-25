import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './Components/Checkout/Checkout'
import Home from './Components/Home/Home'
import { Context } from './Components/Context/Context'
import {CheckoutContext} from './Components/CheckoutContextReducer/CheckoutContext'

let App = () => {
    return (
        <Router>
            <div className="App">
                <Context>
                    <CheckoutContext>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/checkout' element={<Checkout />} />
                        </Routes>
                    </CheckoutContext>
                </Context>
            </div>
        </Router>
    )
}
export default App