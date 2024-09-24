import React from 'react'
import {useCart} from "react-use-cart"
import { IoMdAdd } from "react-icons/io";
import { GrSubtract } from "react-icons/gr";
import { RiStarSFill } from "react-icons/ri";
import { FaShare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";

const ClothingBs = (Bs) => {
  const {addItem} = useCart();
  const {removeItem} = useCart();
  return (
    <div className='sm:py-4'>
         <div className="card xl:w-[350px] sm:w-[150px] xl:h-full sm:h-[210px] bg-gray-300 cl font-bold   ">
        <figure>
    <img
      src={Bs.img}
      alt="clothing/asses" className='hover:scale-125 duration-500'/>
  </figure>
  <div className="card-body dark:text-black">
    <h2 className="card-title xl:text-lg sm:text-[13px] sm:mt-2 xl:w-full sm:w-[100%] sm:ml-[-7%]">{Bs.title}</h2>
    <h2 className="card-price flex xl:text-lg sm:text-[9px]">
      <FaNairaSign className='xl:mt-[6px] sm:mt-[2px] ml-1 xl:text-[15px] sm:text-[9px] ' />{Bs.price}</h2>
    <h2 className="card-desc xl:text-lg sm:text-[10px]">
     {Bs.desc}
    </h2>
   
   
    <p></p>
    <div className="card-actions justify-end xl:block sm:hidden">
      <div className="badge badge-outline ">Clothing & Accesories</div>
    
    </div>
    <div className="ratings flex xl:text-[16px] sm:text-[9px] justify-between">
                <div className="stars flex xl:gap-2 text-yellow-500">
                <RiStarSFill />
               <RiStarSFill />
               <RiStarSFill />
               <RiStarSFill />
               <RiStarSFill />
                </div>
              
               <div className="shareluv flex gap-2 xl:text-xl cursor-pointer">
               <FaShare className='hover:scale-125 duration-500 hover:text-black' />
               <FaHeart className='hover:scale-125 duration-500 hover:text-red-600' onClick={()=>addItem(Bs.item)}/>

               </div>
               </div>
               <div className="card-actions">
               <div className="flex xl:gap-5 sm:gap-2">
               <button className="xl:btn btn-success mx-auto rounded-full text-blue-950" onClick={()=>addItem(Bs.item)} ><IoMdAdd className='text-xl font-extrabold' /></button>
               <button className="xl:btn xl:bg-red-600  mx-auto rounded-full text-blue-950" onClick={()=>removeItem(Bs.item.id)} ><GrSubtract /></button>
               </div>
         
    </div>
  </div>
</div>
    </div>
  )
}

export default ClothingBs
