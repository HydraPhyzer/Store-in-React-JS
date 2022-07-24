import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './Components/Checkout'
import Home from './Components/Home/Home'
import { Context } from './Components/Context/Context'
let App = () => {
    return (
        <Router>
            <div className="App">
                <Context>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/checkout' element={<Checkout />} />
                    </Routes>
                </Context>
            </div>
        </Router>
    )
}
export default App