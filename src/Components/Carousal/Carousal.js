import React from 'react'
import './Carousal.css'
import {AiFillLeftCircle} from 'react-icons/ai'
import {AiFillRightCircle} from 'react-icons/ai'

const Carousal = () => {
    return (
        <div className='Carousal'>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/Posters/A.jpg" className="d-block" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='Carousal-Heading'>Checkout With Cards</h5>
                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/Posters/B.jpg" className="d-block" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='Carousal-Heading'>Get Beauty Products</h5>
                            <p className='mt-3'>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/Posters/C.jpg" className="d-block" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='Carousal-Heading'>Get Baby Toys</h5>
                            <p className='mt-3'>Fuga sequi aliquam enim incidunt rerum ipsam totam repellat minima placeat.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <AiFillLeftCircle className="carousel-control-prev-icon Right" aria-hidden="true"></AiFillLeftCircle>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <AiFillRightCircle className="carousel-control-next-icon Right" aria-hidden="true"></AiFillRightCircle>
                </button>
            </div>
        </div>
    )
}

export default Carousal