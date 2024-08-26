import React from 'react'
import {useCart} from "react-use-cart"
import { IoMdAdd } from "react-icons/io";
import { GrSubtract } from "react-icons/gr";
import { RiStarSFill } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";
import { FaShare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";

const Itemcard = (props) => {
  const {addItem} = useCart();
  const {removeItem} = useCart();
  return (
     <div className=''>
        <div className="card bg-[#1f4550] xl:w-[350px] xl:h-full sm:h-[150px] sm:w-[150px] text-white  dl">
           <figure>
             <img src={props.img} className='hover:scale-125 duration-500 ' />
           </figure>
         <div className="card-body">
               <h2 className="card-title hover:underline justify-center flex xl:text-lg sm:text-[9px] sm:mt-2 xl:w-full sm:w-[100%] sm:ml-[-7%]">{props.title}</h2>
               <h2 className="card-price flex sm:text-[11px] mt-1 xl:text-lg"><FaNairaSign className='xl:mt-[6px] sm:mt-[2px] ml-1 xl:text-lg sm:text-[11px]' />
               {props.price}.00</h2>
               <h2 className="card-text">{props.desc}</h2>
               <div className="ratings flex xl:text-[16px] sm:text-[9px] sm:mt-[-4%] justify-between">
                <div className="stars flex xl:gap-2 text-yellow-500">
                <RiStarSFill />
               <RiStarSFill />
               <RiStarSFill />
               <RiStarSFill />
               <RiStarSFill />
                </div>
              
               <div className="shareluv flex gap-2 xl:text-xl sm:text-[11px] cursor-pointer">
               <FaShare className='hover:scale-125 duration-500 hover:text-black ' />
               <FaHeart className='hover:scale-125 duration-500 hover:text-red-600' onClick={()=>addItem(props.item)}/>

               </div>
               </div>
         <div className="card-actions">
         <div className="flex xl:gap-5 sm:gap-3 ">
               <button className="xl:btn xl:btn-success mx-auto rounded-full text-white " onClick={()=>addItem(props.item)} ><IoMdAdd className='xl:text-xl font-extrabold' /></button>
               <button className="xl:btn xl:bg-red-600 mx-auto rounded-full text-white" onClick={()=>removeItem(props.item.id)} ><GrSubtract /></button>
               </div>
         
    </div>
  </div>
</div>
    </div>
  )
}

export default Itemcard
