import React,{useEffect,useState} from 'react'
import {useCart} from "react-use-cart"
import { FaShare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { GrSubtract } from "react-icons/gr";
import { FaNairaSign } from "react-icons/fa6";

const Elect = (El) => {
    const {addItem} = useCart();
    const {removeItem} = useCart();
  return (
    <div>
        <section className=' py-4 xl:px-4 flex flex-wrap xl:gap-6'>

     
<div className="card bg-[#b19e90] xl:w-96 xl:h-[450px] sm:h-[200px] sm:w-[150px]  shadow-xl">
    <figure className="px-10 xl:pt-10">
       <img
       src={El.img}
       alt="Electronics"
className="rounded-xl dl object-cover hover:scale-125 duration-500 object-center" />
</figure>
<div className="card-body items-center text-center">
<h2 className="card-title xl:text-lg sm:text-[9px]">{El.title}</h2>
<h2 className="card-price flex xl:text-lg sm:text-[9px]">
  <FaNairaSign className='xl:mt-[6px] sm:mt-[2px] ml-1 xl:text-lg sm:text-[9px]' />{El.price}.00</h2>
<p className='card-desc xl:text-lg sm:text-[7px]'>{El.desc}</p>
<div className="badge badge-outline font-bold xl:block sm:hidden">Electronics</div>
<div className="stars flex xl:gap-2 text-yellow-500 xl:text-lg sm:text-[9px]">
          <RiStarSFill />
         <RiStarSFill />
         <RiStarSFill />
         <RiStarSFill />
         <RiStarSFill />
          </div>
          <div className="shareluv flex gap-6 xl:text-xl sm:text-[11px] cursor-pointer">
               <FaShare className='hover:scale-125 duration-500 hover:text-black' />
               <FaHeart className='hover:scale-125 duration-500 hover:text-red-600' onClick={()=>addItem(El.item)}/>
          </div>       
<div className="card-actions">
<button className="xl:btn btn-success mx-auto rounded-full text-black" onClick={()=>addItem(El.item)} ><IoMdAdd className='text-xl font-extrabold' /></button>
<button className="xl:btn xl:bg-red-600  mx-auto rounded-full text-black" onClick={()=>removeItem(El.item.id)} ><GrSubtract /></button>
</div>
</div>
</div>
</section>
    </div>
  )
}

export default Elect
