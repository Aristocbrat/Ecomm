import React from 'react'
import {useCart} from "react-use-cart"
import { IoMdAddCircle } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import { GrSubtract } from "react-icons/gr";
import { FaCheck } from "react-icons/fa";

const Deals = (Dls) => {
  const {addItem} = useCart();
  const {removeItem} = useCart();
  return (
    <div>
      
      <div className="card bg-[#538faf] w-[350px] text-white font-bold dl ">
  <figure>
    <img
      src={Dls.img}
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{Dls.title}</h2>
    <h2 className="card-title">{Dls.desc}</h2>
    <div className="prices flex gap-4">
    <h2 className="card-oldPrice flex gap-2 border-r-2 px-3 border-white"><ImCancelCircle  className='text-red-600 text-2xl bg-white rounded-full px-1 '/> #{Dls.oldPrice} </h2>
    <h2 className="card-newPrice flex gap-2"> <FaCheck className='text-green-500 text-2xl bg-white rounded-full px-1' />  #{Dls.newPrice}</h2>
    </div>
    
    <div className="card-actions justify-end">
    <button className="btn btn-success mx-auto rounded-full text-white" onClick={()=>addItem(Dls.item)} ><IoMdAddCircle /></button>
    <button className="btn bg-red-600  mx-auto rounded-full text-white" onClick={()=>removeItem(Dls.item)} ><GrSubtract /></button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Deals
