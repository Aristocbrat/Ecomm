import React from 'react'
import { useCart } from 'react-use-cart'
import { FaShare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { GrSubtract } from "react-icons/gr";
import { FaNairaSign } from "react-icons/fa6";


const Clotandass = (clt) => {
    const {addItem} = useCart();
    const {removeItem} = useCart();
  return (
    <div>
        <section className=' py-4 px-4 flex flex-wrap gap-6'>

     
<div className="card bg-[#1b3b44] xl:w-96 sm:w-full h-[450px] text-white  shadow-xl">
    <figure className="px-10 pt-10">
       <img
       src={clt.img}
alt="beauty"
className="rounded-xl w-96 object-cover hover:scale-125 duration-500 " />
</figure>
<div className="card-body items-center text-center">
<h2 className="card-title">{clt.title}</h2>
<h2 className="card-price flex"><FaNairaSign className='mt-[6px] ml-1 text-[13px]'/>{clt.price}</h2>
<p className='card-desc'>{clt.desc}</p>
<div className="badge badge-outline font-bold"> Clothing & Accessories</div>
<div className="stars flex gap-2 text-yellow-500">
          <RiStarSFill />
         <RiStarSFill />
         <RiStarSFill />
         <RiStarSFill />
         <RiStarSFill />
          </div>
            
          <div className="shareluv flex gap-6 text-xl cursor-pointer">
               <FaShare className='hover:scale-125 duration-500 hover:text-black' />
               <FaHeart className='hover:scale-125 duration-500 hover:text-red-600' onClick={()=>addItem(clt.item)}/>

               </div>
<div className="card-actions">
<button className="btn btn-success mx-auto rounded-full text-white" onClick={()=>addItem(clt.item)} ><IoMdAdd className='text-xl font-extrabold' /></button>
<button className="btn bg-red-600  mx-auto rounded-full text-white" onClick={()=>removeItem(clt.item.id)} ><GrSubtract /></button>
</div>
</div>
</div>
</section>
    </div>
  )
}

export default Clotandass
