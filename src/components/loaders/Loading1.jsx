import React from 'react'
import { IoMdPricetag } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const Loading1 = () => {
  return (
    <div className='py-3'>
      
    <div className="cardn xl:p-4 sm:px-8 sm:py-1 sm:text-[16px] bg-[#1f4550] xl:w-[100%] sm:w-[75%] sm:mx-auto rounded-2xl">
     <div className="loaderh text-white font-extrabold xl:text-4xl sm:text-[14px] ">
    <p className='flex sm:w-[150px] xl:w-[770px] sm:pt-[-10px] xl:mx-auto xl:ps-[16%] '><IoMdPricetag />3rdGB makes your shopping </p>
    <div className="words overflow-hidden relative font-extrabold xl:mr-[250px] sm:ml-[3%] sm:text-[19px] xl:text-4xl  xl:w-[270px]">
      <span className="word text-white">Fun</span>
      <span className="word text-yellow-500">Fast </span>
      <span className="word text-red-600">Smart </span>
      <span className="word text-orange-600">Great</span>
      
    </div>
  </div>
</div>

    </div>
  )
}

export default Loading1
