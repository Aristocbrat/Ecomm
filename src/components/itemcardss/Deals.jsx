import React from 'react'
import {useCart} from "react-use-cart"
import { IoMdAdd } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import { GrSubtract } from "react-icons/gr";
import { FaCheck } from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Deals = (Dls) => {
  const {addItem} = useCart();
  const {removeItem} = useCart();
  return (
    <div>
      
      <div className="card bg-[#538faf] dark:bg-[#1f4550] xl:w-[350px] xl:h-full sm:h-[150px] sm:w-[150px] text-white font-bold dl ">
  <figure>
    <img
      src={Dls.img}
       className='hover:scale-125 duration-500'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title xl:text-lg sm:text-[9px]">{Dls.title}</h2>
    <h2 className="card-title xl:text-lg sm:text-[7px] xl:mt-0 sm:mt-[-19%] xl:ml-0 sm:ml-[-9%]">{Dls.desc}</h2>
    <div className="prices flex gap-4 xl:text-lg sm:text-[7px] xl:ml-0 sm:ml-[-40%]">
    <h2 className="card-oldPrice flex border-r-2 px-3 line-through xl:decoration-4 decoration-red-500 border-white">
      <ImCancelCircle  className='text-red-600 text-2xl xl:block sm:hidden bg-white rounded-full px-1 '/>
     <FaNairaSign className='xl:mt-[6px] sm:mt-[2px] ml-1 xl:text-lg sm:text-[7px]'/>{Dls.oldPrice} </h2>
    <h2 className="card-newPrice flex gap">
       <FaCheck className='text-green-500 xl:text-2xl xl:block sm:hidden bg-white rounded-full px-1' /> 
        <FaNairaSign className='xl:mt-[6px] sm:mt-[2px] ml-1 xl:text-lg sm:text-[7px] '/>{Dls.newPrice}</h2>
    </div>
    <div className="shareluv flex gap-6 xl:text-xl sm:text-[11px]  justify-center cursor-pointer">
               <FaShare className='hover:scale-125 duration-500 hover:text-black' />
               <FaHeart className='hover:scale-125 duration-500 hover:text-red-600'/>
          </div>
    <div className="card-actions justify-end">
    <button className="xl:btn btn-success mx-auto rounded-full text-white" onClick={()=>addItem(Dls.item)} ><IoMdAdd className='text-xl font-extrabold' /></button>
    <button className="xl:btn xl:bg-red-600  mx-auto rounded-full text-white" onClick={()=>removeItem(Dls.item)} ><GrSubtract /></button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Deals
