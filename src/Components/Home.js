import React from 'react'
import Carousal from './Carousal'
import './Home.css'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className="Home">
      <Navbar/>
      <Carousal/>
    </div>
  )
}

export default Home