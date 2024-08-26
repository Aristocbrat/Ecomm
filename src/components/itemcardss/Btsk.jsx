import React from 'react'
import {useCart} from "react-use-cart"
import { FaShare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { GrSubtract } from "react-icons/gr";
import { FaNairaSign } from "react-icons/fa6";


const Btsk = (Bt) => {
    const {addItem} = useCart();
    const {removeItem} = useCart();
  return (
    <div>
      
      
      <section className=' py-4 xl:px-4 flex flex-wrap xl:gap-6'>

     
      <div className="card bg-[#dab3a7] xl:w-96 xl:h-[450px] sm:h-[190px] sm:w-[150px]  shadow-xl">
          <figure className="px-10 xl:pt-10">
             <img
             src={Bt.img}
      alt="beauty"
      className="rounded-xl w-96 object-cover hover:scale-125 duration-500" />
  </figure>
  <div className="card-body items-center text-center dark:text-black">
    <h2 className="card-title xl:text-lg sm:text-[11px]">{Bt.title}</h2>
    <h2 className="card-price flex xl:text-lg sm:text-[7px]">
      <FaNairaSign className='xl:mt-[6px]  sm:mt-[2px] ml-1 xl:text-[13px] sm:text-[7px]' />
      {Bt.price}.00</h2>
    <p className='card-desc xl:text-lg sm:text-[7px]'>{Bt.desc}</p>
    <div className="badge badge-outline font-bold xl:block sm:hidden">Beauty & SkinCare</div>
    <div className="stars flex xl:gap-2 text-yellow-500 xl:text-lg sm:text-[9px]">
                <RiStarSFill />
               <RiStarSFill />
               <RiStarSFill />
               <RiStarSFill />
               <RiStarSFill />
                </div>
                  
               <div className="shareluv flex gap-6 xl:text-xl cursor-pointer">
               <FaShare className='hover:scale-125 duration-500 hover:text-black' />
               <FaHeart className='hover:scale-125 duration-500 hover:text-red-600' onClick={()=>addItem(Bt.item)}/>

               </div>
    <div className="card-actions">
    <button className="xl:btn btn-success mx-auto rounded-full text-white" onClick={()=>addItem(Bt.item)} ><IoMdAdd /></button>
    <button className="xl:btn xl:bg-red-600  mx-auto rounded-full text-white" onClick={()=>removeItem(Bt.item.id)} ><GrSubtract /></button>
    </div>
  </div>
</div>
</section>

    </div>
  )
}

export default Btsk
