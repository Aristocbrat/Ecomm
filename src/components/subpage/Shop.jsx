import React from 'react'
import Footer from '../constants/Footer.jsx'
import Carousel from '../Carousl/Carousel.jsx'
import Nav from '../constants/Nav.jsx'
import Nav2 from '../constants/Nav2.jsx'

const Shop = () => {
  return (
    <div>
      
      <Carousel/>
      <div className="w-[30%] xl:absolute xl:right-3 xl:mt-[-27%]">
        <h1 className='font-extrabold xl:text-4xl text-blue-950 xl:px-3'>Why you should Shop here</h1>
      </div>
    
    </div>
  )
}

export default Shop
