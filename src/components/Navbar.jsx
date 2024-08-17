import React,{useEffect,useState,useRef}from 'react'
import { useCart } from 'react-use-cart'
import { RiMenu5Fill } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { CiMenuBurger } from "react-icons/ci"
import { MdOutlinePayment } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { CiGift } from "react-icons/ci";
import { MdComputer } from "react-icons/md";;
import { IoSettings } from "react-icons/io5";
import france from "./../assets/images/france.png"
import germany from "./../assets/images/germany.png"
import uk from "./../assets/images/united-kingdom.png"
import spain from "./../assets/images/spain.png"

const Navbar = () => {
    const CustomDropdown = () => {
        const [selectedOption, setSelectedOption] = useState('english');
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
        const options = [
          { value: 'english', label: 'ENG', imgSrc: uk },
          { value: 'german', label: 'DEU', imgSrc: germany },
          { value: 'french', label: 'FRE', imgSrc: france },
          { value: 'spanish', label: 'ESP', imgSrc: spain },
        ];
        const toggleDropdown = () => {
            setIsDropdownOpen(!isDropdownOpen);
          };
      
          const handleOptionClick = (value) => {
            setSelectedOption(value);
            setIsDropdownOpen(false);
          };
    
          return (
            <div className="relative inline-block w-23 text-white">
              <div 
                className="flex items-center gap-2 p-2 border border-gray-300 rounded cursor-pointer" 
                onClick={toggleDropdown}
              >
                <span>{options.find(option => option.value === selectedOption)?.label}</span>
                <img src={options.find(option => option.value === selectedOption)?.imgSrc} alt="" className="w-[30px]" />
                <span><i className="ri-arrow-down-s-fill"></i></span>
              </div>
              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-2 bg-slate-950 border border-gray-300 rounded shadow">
                  {options.map(option => (
                    <div
                      key={option.value}
                      className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleOptionClick(option.value)}
                    >
                      <span>{option.label}</span>
                      <img src={option.imgSrc} alt="" className="w-[30px]" />
                      <span><i className="ri-arrow-down-s-fill"></i></span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        };
        const [opendropDown, setIsOpenDropdownOpen] = useState(false);
        /-----------------------------------------------------------------------------------/ 
        const [catdropDown, setIsCatDropdownOpen] = useState(false);
        const dropdownRef = useRef(null);

        const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
         setIsCatDropdownOpen(false);
         }
          };

        useEffect(() => {
       document.addEventListener('mousedown', handleClickOutside);
         return () => {
         document.removeEventListener('mousedown', handleClickOutside);
          };
          }, []);
          
       /--------------------------------------------------------/ 
       const {totalItems} = useCart();
      /-------------------------------------------------------------/  
  return (
    <div className='bg-[#1f4550] py-3 border-b-2 border-white'>
      <div className="menu flex flex-row justify-between  px-4 ">
        <div className="logo font-bold text-white flex  ">
            <h1 className='text-4xl'><a href="/"> <i className="ri-price-tag-3-fill"></i>3rdGB</a></h1>
        </div>

        <div className="lang relative z-30">
         <CustomDropdown/>
        </div>
        
        <div className="search">
         <input type="search" placeholder='Search' className='w-[300px] h-11 bg-gray-400 placeholder:text-white text-center opacity-25' />
         <a href="" className='bg-orange-600 p-3 rounded-r-lg hover:bg-orange-700 duration-700'><i className="ri-search-eye-line text-white text-xl"></i></a>
         </div>


       <div className="signin bg-[#73b2c4] shadow-slate-950 text-white px-2 py-1 rounded-lg cursor-pointer font-bold">
       <p>Hello & Welcome</p>
       <p>Accounts & Lists <span><i className="ri-arrow-down-s-fill text-xl animate-pulse" onClick={() => setIsOpenDropdownOpen((prev) => !prev)}></i></span></p>
       {opendropDown && (
        <div className="hoverdrop w-[200px] bg-[#73b2c4] text-white top-[75px] z-50 absolute border-2 flex flex-col rounded-[15px] py-3 text-[14px]">
          <button className="   py-1 ml-3  text-white hover:scale-110  duration-300 ">
            Sign-in
          </button>
          <hr className="p-1 border-white" />
          <p className="font-bold mx-auto">
            New Customer?{' '}
            <a href="#" className="text-white underline  text-[12px]">
              Start here
            </a>
          </p>
          <hr className="p-1 border-white" />
          <ul className="mx-auto">
            <li className="hover:scale-110 duration-300">
              <a href="#">Premium <i className="ri-vip-crown-2-line"></i></a>
            </li>
            <hr className="p-1 border-white" />
            <li className="hover:scale-110 duration-300">
              <a href="#">Subscription</a>
            </li>
            <hr className="p-1 border-white" />
            <li className="hover:scale-110 duration-300">
              <a href="#">Payment Plan <i className="ri-bank-card-line"></i></a>
            </li>
            <hr className="p-1 border-white" />
            <li className="hover:scale-110">
              <a href="#">Delivery <i className="ri-truck-line"></i></a>
            </li>
          </ul>
          <hr className="p-1 border-white" />
          <p className="mx-auto hover:scale-110 duration-300">
            Log Out <i className="ri-logout-circle-line"></i>
          </p>
        </div>
      )}
</div>
<div className="cart text-white py-1">
<div className="tooltip text-white  tooltip-bottom font-bold " data-tip="Welcome customer">
  <button className=""><i className="ri-user-fill text-3xl"></i></button>
</div>
      
      <i className="ri-add-line text-3xl hover:bg-black rounded-full cursor-pointer duration-500"></i>
      <i className="ri-heart-3-fill text-3xl hover:text-red-600 duration-500 hover:scale-125 cursor-pointer"></i>
      </div>

<div className="hamburger text-white text-5xl py-1">
<RiMenu5Fill />
        </div>
</div>
<div className="nav2 bg-[#1f4550] flex justify-between text-white font-bold border-white border-t-2">
        <div className="all flex gap-1 px-4">
        <div className="dropdown dropdown-hover">
           <div tabIndex={0} role="button" className="py-2"><CiMenuBurger className='text-3xl font-bold text-white' /></div>
          <ul tabIndex={0} className="dropdown-content menu bg-[#1f4550] rounded-box z-[30] w-50 p-2 border-white border-2 shadow">
          <li><a><MdOutlinePayment /> Payment</a></li>
          <hr  className='p-1 border-white'/>
          <li><a><FaBagShopping /> Shop</a></li>
          <hr  className='p-1 border-white'/>
          <li><a><RiCustomerService2Fill />Customer service</a></li>
          <hr  className='p-1 border-white'/>
         <li><a><MdComputer /> Online service</a></li>
         <hr  className='p-1 border-white'/>
         <li><a><IoSettings />Settings</a></li>
        </ul>
      </div>
        <h1 className='text-2xl ps-2 py-1'>All</h1>
         
        </div>
         
         <div className="Nav3 flex gap-8 text-[13px] px-4 py-2 ">
            <a href="/" className='hover:underline hover:scale-105 py-1'>Home</a>
            <a href="/Cart" className='hover:underline hover:scale-105'><i className="ri-shopping-cart-line text-lg"></i>Cart ({totalItems}) </a>
             <a href="#"><div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="flex gap-2 py-1"><BiCategory className='text-xl'  />Category</div>
             <ul tabIndex={0} className="dropdown-content menu bg-[#1f4550] rounded-box z-[50] w-32 p-2 shadow">
                <li><a>Beauty & Skincare</a></li>
                <hr className="p-1 border-white" />
                 <li><a>Clothing & Accessories</a></li>
                 <hr className="p-1 border-white" />
                 <li><a>Electronics</a></li>
                 <hr className="p-1 border-white" />
                 <li><a>Sports & Outdoors</a></li>
                 <hr className="p-1 border-white" />
                 <li><a>Home Equipments</a></li>
                 </ul>
               </div></a>
            <a href="/Bestsellers" className='hover:underline hover:scale-105 py-1'>BestSellers</a>
            <a href="#"><div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="flex gap-2 py-1"><CiGift className='text-xl' />Gift List</div>
             <ul tabIndex={0} className="dropdown-content menu bg-[#1f4550] rounded-box z-[50] w-24 p-2 shadow border-2 border-white">
                <li><a>Find & Create</a></li>
                <hr className="p-1 border-white" />
                 <li><a>Apply</a></li>
                </ul>
               </div></a>
            <a href="/Discount" className='hover:underline hover:scale-105 py-1'>Sell</a>
          
            
          

         </div>
         </div>
</div>
    
  )
}

export default Navbar
