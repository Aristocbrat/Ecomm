import React from 'react'
import {useCart} from "react-use-cart"
import { IoMdAddCircle } from "react-icons/io";
import { GrSubtract } from "react-icons/gr";
import { RiStarSFill } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";
import { FaShare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Itemcard = (props) => {
  const {addItem} = useCart();
  const {removeItem} = useCart();
  return (
     <div className='flex flex-wrap gap-7 '>
        <div className="card bg-[#1f4550] w-[350px] h-full text-white">
           <figure>
             <img src={props.img} />
           </figure>
         <div className="card-body">
               <h2 className="card-title hover:underline justify-center flex">{props.title}</h2>
               <h2 className="card-price">#{props.price}</h2>
               <h2 className="card-text">{props.desc}</h2>
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
         <div className="card-actions">
         <div className="flex gap-5">
               <button className="btn btn-success mx-auto rounded-full text-white" onClick={()=>addItem(props.item)} ><IoMdAddCircle /></button>
               <button className="btn bg-red-600  mx-auto rounded-full text-white" onClick={()=>removeItem(props.item)} ><GrSubtract /></button>
               </div>
         
    </div>
  </div>
</div>
    </div>
  )
}

export default Itemcard
