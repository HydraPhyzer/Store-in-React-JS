import React from 'react'
import Carousal from '../Carousal/Carousal'
import Navbar from '../Navbar/Navbar'
import Products from '../Products/Products'



const Home = () => {
  return (
    <div className="Home">
        <Navbar />
        <Carousal />
        <Products />
    </div>
  )
}

export default Home