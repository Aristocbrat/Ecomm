import React from 'react'
import { RiDiscountPercentFill } from "react-icons/ri";

const Discountnav = () => {
  return (
    
      <div className="regis sticky top-0 z-30 w-full bg-white dark:bg-black dark:text-white
         flex justify-between xl:px-7 sm:px-2 py-4">
  <h1 className='xl:text-3xl sm:text-[12px] font-bold sm:mt-2'>Sell with 3rdGB</h1>
  <h1 className='flex py-2 font-semibold sm:text-[10px] xl:text-lg xl:w-[250px] sm:w-[120px]'>
    <RiDiscountPercentFill className='xl:text-3xl sm:text-[20px] text-green-500' /> 
    Get up to 10% on your first #50,000 in branded sales.
    
  </h1>
  <a href="#" className='underline font-bold hover:text-green-500 duration-500 sm:text-[12px] xl:text-lg mt-2'>Learn more</a>
  <button className='flex bg-yellow-500 btn rounded-full text-white hover:bg-slate-600 hover:scale-90 duration-300 hover:text-white'>
    Sign Up
  </button>
</div>
  )
}

export default Discountnav
