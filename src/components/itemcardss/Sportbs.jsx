import React from 'react'
import { useCart } from 'react-use-cart';
import { IoMdAdd } from "react-icons/io";
import { GrSubtract } from "react-icons/gr";
import { ImCancelCircle } from "react-icons/im";
import { RiStarSFill } from "react-icons/ri";
import { FaShare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";
const Sportbs = (SS) => {
  const {addItem} = useCart();
  const {removeItem} = useCart();
  return (
    <div>
      <div className='sm:py-4'>
         <div className="card xl:w-[350px] sm:w-[150px] xl:h-full sm:h-[210px] bg-gray-300 sp font-bold   ">
        <figure>
    <img
      src={SS.img}
      alt="clothing/asses" className='hover:scale-125 duration-500' />
  </figure>
  <div className="card-body dark:text-black">
    <h2 className="card-title xl:text-lg sm:text-[11px] sm:mt-2 xl:w-full sm:w-[100%] sm:ml-[-7%]">{SS.title}</h2>
    <h2 className="card-price flex xl:text-lg sm:text-[7px]">
      <FaNairaSign className='xl:mt-[6px] sm:mt-[2px] ml-1 xl:text-[15px] sm:text-[7px]' />
      {SS.price}.00</h2>
    <h2 className="card-desc xl:text-lg sm:text-[9px]">
     {SS.desc}
    </h2>

    <p></p>
    <div className="card-actions justify-end xl:block sm:hidden">
      <div className="badge badge-outline">Sporting & Outdoors</div>
      <div className="badge badge-outline xl:block sm:hidden"></div>
    </div>
    <div className="ratings flex xl:text-[16px] sm:text-[9px] justify-between">
                <div className="stars flex xl:gap-2 text-yellow-500 ">
                <RiStarSFill />
               <RiStarSFill />
               <RiStarSFill />
               <RiStarSFill />
               <RiStarSFill />
                </div>
              
               <div className="shareluv flex gap-2 xl:text-xl cursor-pointer">
               <FaShare className='hover:scale-125 duration-500 hover:text-black' />
               <FaHeart className='hover:scale-125 duration-500 hover:text-red-600' onClick={()=>addItem(SS.item)}/>

               </div>
               </div>
               <div className="flex">
               <button className="xl:btn btn-success mx-auto rounded-full text-blue-950" onClick={()=>addItem(SS.item)} ><IoMdAdd className='text-xl font-extrabold' /></button>
               <button className="xl:btn xl:bg-red-600  mx-auto rounded-full text-blue-950" onClick={()=>removeItem(SS.item.id)} ><GrSubtract /></button>
               </div>
               </div>
            
</div>
</div>
    </div>
  )
}

export default Sportbs
