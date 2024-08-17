import React from 'react'
import {useCart} from "react-use-cart"
import { RiStarSFill } from "react-icons/ri";
import { IoMdAddCircle } from "react-icons/io";
import { GrSubtract } from "react-icons/gr";
import { FaShare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
const Furn = (Fh) => {
  const {addItem} = useCart();
  const {removeItem} = useCart();
  return (
    <div>
       <div className=''>
         <div className="card w-[350px] bg-gray-300 cl font-bold   ">
        <figure>
    <img
      src={Fh.img}
      alt="clothing/asses" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{Fh.title}</h2>
    <h2 className="card-price">#{Fh.price}</h2>
    <h2 className="card-desc">
     {Fh.desc}
    </h2>

    <p></p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Furnitures & Home Service</div>
    
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
               <FaHeart className='hover:scale-125 duration-500 hover:text-red-600'/>

               </div>
               </div>
               <div className="card-actions ">
               <div className="flex gap-5">
               <button className="btn btn-success mx-auto rounded-full text-white" onClick={()=>addItem(Fh.item)} ><IoMdAddCircle /></button>
               <button className="btn bg-red-600  mx-auto rounded-full text-white" onClick={()=>removeItem(Fh.item)} ><GrSubtract /></button>
               </div>
         
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default Furn
