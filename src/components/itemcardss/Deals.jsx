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
      
      <div className="card bg-[#538faf] dark:bg-[#1f4550] w-[350px] text-white font-bold dl ">
  <figure>
    <img
      src={Dls.img}
       className='hover:scale-125 duration-500'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{Dls.title}</h2>
    <h2 className="card-title">{Dls.desc}</h2>
    <div className="prices flex gap-4">
    <h2 className="card-oldPrice flex border-r-2 px-3 line-through decoration-4 decoration-red-500 border-white"><ImCancelCircle  className='text-red-600 text-2xl bg-white rounded-full px-1 '/>
     <FaNairaSign className='mt-[6px] ml-1 text-[13px]'/>{Dls.oldPrice} </h2>
    <h2 className="card-newPrice flex gap"> <FaCheck className='text-green-500 text-2xl bg-white rounded-full px-1' />  <FaNairaSign className='mt-[6px] ml-1 text-[13px]'/>{Dls.newPrice}</h2>
    </div>
    <div className="shareluv flex gap-6 text-xl justify-center cursor-pointer">
               <FaShare className='hover:scale-125 duration-500 hover:text-black' />
               <FaHeart className='hover:scale-125 duration-500 hover:text-red-600'/>
          </div>
    <div className="card-actions justify-end">
    <button className="btn btn-success mx-auto rounded-full text-white" onClick={()=>addItem(Dls.item)} ><IoMdAdd className='text-xl font-extrabold' /></button>
    <button className="btn bg-red-600  mx-auto rounded-full text-white" onClick={()=>removeItem(Dls.item)} ><GrSubtract /></button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Deals
