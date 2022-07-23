import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './Components/Checkout'
import Home from './Components/Home'
let App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/checkout' element={<Checkout />} />
                </Routes>
            </div>
        </Router>
    )
}
export default App