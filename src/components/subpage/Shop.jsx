import React from 'react'
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
import Carousel from '../Carousl/Carousel.jsx'

const Shop = () => {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <div className="w-[30%] xl:absolute xl:right-3 xl:mt-[-27%]">
        <h1 className='font-extrabold xl:text-4xl text-blue-950 xl:px-3'>Why you should Shop here</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default Shop
