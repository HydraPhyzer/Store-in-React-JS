import React from 'react'
import Carousal from './Carousal/Carousal'
import './Home.css'
import Navbar from './Navbar/Navbar'

const Home = () => {
  return (
    <div className="Home">
      <Navbar/>
      <Carousal/>
    </div>
  )
}

export default Home