import React from 'react'
import { IoMdPricetag } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const Loading1 = () => {
  return (
    <div>
      
    <div className="cardn p-4 bg-[#1f4550] w-[770px] ml-5 rounded-2xl">
     <div className="loaderh text-white font-extrabold text-4xl">
    <p className='flex'><IoMdPricetag />3rdGB makes your shopping </p>
    <div className="words overflow-hidden relative font-extrabold ml-5">
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
