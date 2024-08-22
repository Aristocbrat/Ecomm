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
      <div className=''>
         <div className="card w-[350px] bg-gray-300 sp font-bold   ">
        <figure>
    <img
      src={SS.img}
      alt="clothing/asses" className='hover:scale-125 duration-500' />
  </figure>
  <div className="card-body dark:text-black">
    <h2 className="card-title">{SS.title}</h2>
    <h2 className="card-price flex"><FaNairaSign className='mt-[6px] ml-1 text-[13px]' />{SS.price}</h2>
    <h2 className="card-desc">
     {SS.desc}
    </h2>

    <p></p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Sporting & Outdoors</div>
      <div className="badge badge-outline"></div>
    </div>
    <div className="ratings flex text-[16px] justify-between">
                <div className="stars flex gap-2 text-yellow-500">
                <RiStarSFill />
               <RiStarSFill />
               <RiStarSFill />
               <RiStarSFill />
               <RiStarSFill />
                </div>
              
               <div className="shareluv flex gap-2 text-xl cursor-pointer">
               <FaShare className='hover:scale-125 duration-500 hover:text-black' />
               <FaHeart className='hover:scale-125 duration-500 hover:text-red-600' onClick={()=>addItem(SS.item)}/>

               </div>
               </div>
               <div className="flex">
               <button className="btn btn-success mx-auto rounded-full text-white" onClick={()=>addItem(SS.item)} ><IoMdAdd className='text-xl font-extrabold' /></button>
               <button className="btn bg-red-600  mx-auto rounded-full text-white" onClick={()=>removeItem(SS.item.id)} ><GrSubtract /></button>
               </div>
               </div>
            
</div>
</div>
    </div>
  )
}

export default Sportbs
