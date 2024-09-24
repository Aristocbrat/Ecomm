import React from 'react'
import { useCart } from 'react-use-cart'
import { FaShare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { FaNairaSign } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { GrSubtract } from "react-icons/gr";

const Furnint = (Fi) => {
    const {addItem} = useCart();
    const {removeItem} = useCart();
  return (
    <div>
          <section className=' py-4 xl:px-4 flex flex-wrap xl:gap-6'>

     
<div className="card bg-[#F4A261] xl:w-96 xl:h-[450px] sm:h-[190px] sm:w-[150px] text-white  shadow-xl">
    <figure className="px-1 xl:pt-10">
       <img
       src={Fi.img}
alt="beauty"
className="rounded-xl w-full object-cover hover:scale-125 duration-500 " />
</figure>
<div className="card-body items-center text-center dark:text-black">
<h2 className="card-title xl:text-lg sm:text-[11px]">{Fi.title}</h2>
<h2 className="card-price flex  xl:text-lg sm:text-[9px]">
  <FaNairaSign className='xl:mt-[6px] sm:mt-[3px] ml-1 xl:text-lg sm:text-[8px]' />
{Fi.price}.00</h2>
<p className='card-desc  xl:text-lg sm:text-[9px]'>{Fi.desc}</p>
<div className="badge badge-outline font-bold xl:block sm:hidden">Furniture & Interior</div>
<div className="stars flex xl:gap-2 text-white xl:text-lg sm:text-[10px]">
          <RiStarSFill />
         <RiStarSFill />
         <RiStarSFill />
         <RiStarSFill />
         <RiStarSFill />
          </div>
          
          <div className="shareluv flex gap-6 xll:text-xl cursor-pointer">
               <FaShare className='hover:scale-125 duration-500 hover:text-black' />
               <FaHeart className='hover:scale-125 duration-500 hover:text-red-600' onClick={()=>addItem(Fi.item)}/>
          </div>
        
<div className="card-actions">
<button className="xl:btn btn-success mx-auto rounded-full text-white" onClick={()=>addItem(Fi.item)} ><IoMdAdd className='text-xl font-extrabold' /></button>
<button className="xl:btn xl:bg-red-600  mx-auto rounded-full text-white" onClick={()=>removeItem(Fi.item.id)} ><GrSubtract /></button>
</div>
</div>
</div>
</section>
    </div>
  )
}

export default Furnint