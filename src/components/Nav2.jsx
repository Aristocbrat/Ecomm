import React,{useState,useEffect} from 'react'
import { useCart } from 'react-use-cart'
import { BiCategory } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { CiGift } from "react-icons/ci";
import { MdComputer } from "react-icons/md";;
import { IoSettings } from "react-icons/io5";
import { GiImperialCrown } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { MdSell } from "react-icons/md";


const Nav2 = () => {
    const {totalItems , totalWish} = useCart();
  return (
    <div className=''>
      <div className="nav2 bg-[#1f4550] dark:bg-black dark:text-white flex flex-wrap justify-between
 text-white font-bold border-white border-t-2 w-full">
        <div className="all flex gap-1 px-4">
        <div className="dropdown dropdown-hover">
           <div tabIndex={0} role="button" className="py-2"><CiMenuKebab className='text-3xl font-bold text-white' /></div>
          <ul tabIndex={0} className="dropdown-content menu bg-[#1f4550]  dark:bg-black dark:text-white rounded-box z-[50] w-50 p-2 border-white border-2 shadow">
          <li><a href='/'><MdOutlinePayment /> Payment</a></li>
          <hr  className='p-1 border-white'/>
          <li><a href='/Shop'><FaBagShopping /> Shop</a></li>
          <hr  className='p-1 border-white'/>
          <li><a href=''><RiCustomerService2Fill />Customer service</a></li>
          <hr  className='p-1 border-white'/>
         <li><a href='/'><MdComputer /> Online service</a></li>
         <hr  className='p-1 border-white'/>
         <li><a href='/'><IoSettings />Settings</a></li>
        </ul>
      </div>
     </div>
         
         <div className="Nav3 flex xl:gap-8 sm:gap-4 text-[13px] xl:px-4 sm:px-2  py-2 ">
            <a href="/" className='hover:underline hover:scale-105 py-1 flex tooltip tooltip-top' data-tip="Home">
            <FaHome className='text-xl ' />
            <span className='sm:hidden xl:block'>Home</span></a>

            <a href="/Cart" className='hover:underline hover:scale-105 flex tooltip tooltip-top' data-tip="Cart"><i className="ri-shopping-cart-line text-lg"></i>
            <span className='sm:hidden xl:block mt-1'>Cart</span>
            <span className='xl:ml-0 mt-1 '>({totalItems})</span></a>


             <a href="#"><div className="dropdown dropdown-hover tooltip tooltip-top" data-tip="Category">
            <div tabIndex={0} role="button" className="flex  py-1 "><BiCategory className='text-xl '  />
            <span className='sm:hidden xl:block'>Category</span>
            </div>
             <ul tabIndex={0} className="dropdown-content menu bg-[#1f4550]  dark:bg-black dark:text-white 
             rounded-box z-[50] xl:w-20 sm:w-20 p-2  xl:text-[] sm:text-[12px]">
                <li className='hover:underline duration-500 ml-[-10px] mt-3'><a href='/BeautyandSkincare'>Beauty & Skincare</a></li>
                <hr className="p-1 border-white sm:w-16" />
                 <li className='hover:underline duration-500 ml-[-14px]'><a href='/ClothingandAcesserories'>Clothing & Accessories</a></li>
                 <hr className="p-1 border-white sm:w-16" />
                 <li className='hover:underline duration-500 ml-[-12px]'><a href='/Electronics'>Electronics</a></li>
                 <hr className="p-1 border-white sm:w-16" />
                 <li className='hover:underline duration-500 ml-[-10px]'><a href='/Sporty'>Sports & Outdoors</a></li>
                 <hr className="p-1 border-white sm:w-16" />
                 <li className='hover:underline duration-500 ml-[-10px]'><a href='/Furniture'>Furnitures & Interior</a></li>
                 </ul>
               </div></a>
            <a href="/Bestsellers" className='hover:underline hover:scale-105 py-1 flex tooltip tooltip-top ' data-tip=" Bestsellers">
            <GiImperialCrown className=' text-xl '/>
            <span  className='sm:hidden xl:block'>BestSellers</span> </a>
            <a href="/Gift1"><div className=" tooltip tooltip-top flex" data-tip="Gift">
            <CiGift className='text-xl mt-1'/><span className='sm:hidden xl:block mt-1'>Gift</span> </div></a>
            <a href="/Discount" className='hover:underline hover:scale-105 py-1 flex  tooltip tooltip-top' data-tip="Sell"><MdSell className='text-xl ' />
            <span className='sm:hidden xl:block'>Sell</span> </a>
          
            
          

         </div>
         </div>
    </div>
  )
}

export default Nav2
