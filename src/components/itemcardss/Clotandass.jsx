import React from 'react'
import { useCart } from 'react-use-cart'
import { FaShare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { GrSubtract } from "react-icons/gr";
import { FaNairaSign } from "react-icons/fa6";


const Clotandass = (clt) => {
    const {addItem} = useCart();
    const {removeItem} = useCart();
  return (
    <div>
        <section className=' xl:py-4 sm:py-3 xl:px-4 sm:px-[2px] justify-center flex flex-wrap xl:gap-6'>

     
<div className="card bg-[#1b3b44] xl:w-96 sm:h-[190px] sm:w-[150px] xl:h-[450px] text-white  shadow-xl">
    <figure className="px-10 xl:pt-10">
       <img
       src={clt.img}
alt="beauty"
className="rounded-xl w-96 object-cover hover:scale-125 duration-500 " />
</figure>
<div className="card-body items-center text-center">
<h2 className="card-title xl:text-lg sm:text-[9px]">{clt.title}</h2>
<h2 className="card-price flex xl:text-lg sm:text-[7px]"><FaNairaSign className='xl:mt-[6px] sm:mt-[2px] ml-1 xl:text-[13px] sm:text-[7px]'/>
{clt.price}.00</h2>
<p className='card-desc xl:text-lg sm:text-[7px]'>{clt.desc}</p>
<div className="badge badge-outline font-bold xl:block sm:hidden"> Clothing & Accessories</div>
<div className="stars flex xl:gap-2 xl:text-lg sm:text-[7px] text-yellow-500">
          <RiStarSFill />
         <RiStarSFill />
         <RiStarSFill />
         <RiStarSFill />
         <RiStarSFill />
          </div>
            
          <div className="shareluv flex gap-6 xl:text-xl sm:text-[11px] cursor-pointer">
               <FaShare className='hover:scale-125 duration-500 hover:text-black' />
               <FaHeart className='hover:scale-125 duration-500 hover:text-red-600' onClick={()=>addItem(clt.item)}/>

               </div>
<div className="card-actions ">
<button className="xl:btn btn-success mx-auto rounded-full text-white" onClick={()=>addItem(clt.item)} ><IoMdAdd className='text-xl font-extrabold' /></button>
<button className="xl:btn xl:bg-red-600  mx-auto rounded-full text-white" onClick={()=>removeItem(clt.item.id)} ><GrSubtract /></button>
</div>
</div>
</div>
</section>
    </div>
  )
}

export default Clotandass
