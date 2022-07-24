import React from 'react'
import Carousal from './Carousal/Carousal'
import './Home.css'
import Navbar from './Navbar/Navbar'
import Products from './Products'

const Home = () => {
  return (
    <div className="Home">
      <Navbar/>
      <Carousal/>
      <Products />
    </div>
  )
}

export default Home