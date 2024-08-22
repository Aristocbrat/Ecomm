import React, { useState } from 'react'
import { useCart } from 'react-use-cart'
import { PiMaskSadBold } from "react-icons/pi";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import Navbar from './Navbar'
import Footer from './Footer'
const Cart = () => {
 const [emptyWishlist,] = useState(0);
    const {
      isEmpty,
      totalUniqueItems,
      items,
      totalItems,
      cartTotal,
      updateItemQuantity,
      removeItem,
     
      
    } = useCart()
    if(isEmpty) return (
      <div>
        <Navbar/>
        <h1 className='font-bold text-3xl flex justify-center'>
          <PiMaskSadBold  className='text-4xl'/> Your Cart is empty
        </h1>
        <Footer/>
      </div>
    );
    
  return (
    <div>
      <Navbar/>
       <div className="main">
         <section className='container px-5'>
          <h3 className='font-bold text-3xl py-4 mx-auto'>Cart({totalUniqueItems}) Total Items : ({totalItems})</h3>
          <table className=' text-black font-bold w-[98%] px-5 bg-[#E7F0DC] py-3 mt-8 mx-auto'>
            <tbody>
            {items.map((item , index)=>{
              return(
              <tr key={index} className=' hover:bg-[#DAD4B5] duration-300 cursor-pointer'>
                <td className='' >
                  <img src={item.img} style={{height:"8rem", width:"10rem", objectFit:'cover'}} />
                </td>
                <td className=' px-4'>{item.title}</td>
                <td className='px-4'>#{item.price}</td>
                <td className=' px-4'>Quantity ({item.quantity})</td>
                <td className='text-xl ' >
                  <button className='px-2 hover:scale-150 duration-500'onClick={()=> updateItemQuantity(item.id , item.quantity +1)}><IoMdAdd /></button>
                  <button className='px-2 hover:scale-150 duration-500'onClick={()=> updateItemQuantity(item.id , item.quantity -1)}><RiSubtractFill /></button>
                  <button className='px-2 hover:scale-150 duration-500 text-red-600' onClick={()=> removeItem(item.id)}><MdCancel /></button>
                </td>
                  
              </tr>)
            })}
            </tbody>
          </table>
         </section>
         <div className="ti flex justify-center py-2 text-2xl font-bold ">
           <h1>Total Price =# {cartTotal} </h1>
         </div>
         <div className="em flex justify-center text-xl font-bold">
           <button className='btn bg-slate-600 text-white' onClick={()=> emptyWishlist()}>Clear Cart</button>
           <button className='btn bg-slate-600 text-white'>PayNow</button>
         </div>
       </div>
      <Footer/>
    </div>
  )
}

export default Cart
