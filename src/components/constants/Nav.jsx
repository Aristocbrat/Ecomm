import React,{useState,useEffect} from 'react'
import france from "./../../assets/images/france.png"
import germany from "./../../assets/images/germany.png"
import uk from "./../../assets/images/united-kingdom.png"
import spain from "./../../assets/images/spain.png"

import { CiMenuBurger } from "react-icons/ci"

const Nav = () => {

    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [darkMode]);
   
    const Countries = ()=>{
        const [selectedCountry,setSelectedCountry] = useState("english")
        const [isDropdownOpen, setIsDropdownOpen] = useState(false)
        const options= [
            { value: 'english', label: 'ENG', imgSrc: uk },
          { value: 'german', label: 'DEU', imgSrc: germany },
          { value: 'french', label: 'FRE', imgSrc: france },
          { value: 'spanish', label: 'ESP', imgSrc: spain },
        ]

        const toggleDropdown = () => {
          setIsDropdownOpen(!isDropdownOpen);
        };
    
        const handleOptionClick = (value) => {
          setSelectedCountry(value);
          setIsDropdownOpen(false);
        };
  
        return (
          <div className="relative inline-block sm:hidden xl:block w-32 ml-6 text-white">
            <div 
              className="flex items-center gap-2 p-2 border w-32 border-gray-300 rounded cursor-pointer" 
              onClick={toggleDropdown}
            >
              <span>{options.find(option => option.value === selectedCountry)?.label}</span>
              <img src={options.find(option => option.value === selectedCountry)?.imgSrc} alt="" className="w-[30px]" />
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
    }

  return (
    <div className=''>
      <div className="navbar bg-[#1f4550] dark:bg-black  text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <CiMenuBurger className='text-3xl font-bold text-white' />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-[#1f4550] rounded-box z-[50] mt-3 xl:w-56 dark:bg-black sm:w-44 p-2 shadow">
        <li><a href='#'>Sign in</a></li>
        <li>
          <a></a>
          <ul className="p-2">
            <li><a href="#">Payment Plan <i className="ri-bank-card-line"></i></a></li>
            <li><a href="#">Delivery <i className="ri-truck-line"></i></a></li>
          </ul>
        </li>
        <li><a href='#'> Log Out <i className="ri-logout-circle-line"></i></a></li>
        <div className="search xl:hidden sm:block ">
         <input type="search" 
          placeholder='Search'
          className=' sm:w-[150px] h-11 bg-gray-400 placeholder:text-white text-center placeholder:opacity-75 font-bold form-control rounded-lg ' />
         <a href="" className=' py-[9px] px-2  hover:scale-105 duration-700 absolute  sm:mt-[-25%] eye'>
          <i className="ri-search-eye-line text-white text-xl"></i></a>
         </div>
      </ul>
    </div>
    <a href='/' className="btn btn-ghost text-4xl font-extrabold"><i className="ri-price-tag-3-fill"></i>3rdGB</a>
    <Countries/>
    <div className="search sm:hidden xl:block  ml-32 flex ">
         <input type="search" 
          placeholder='Search'
          className='xl:w-[200px]  h-11 bg-gray-400 placeholder:text-white text-center placeholder:opacity-75 font-bold form-control rounded-lg ' />
         <a href="" className=' py-[9px] px-2  hover:scale-105 duration-700 absolute xl:mt-[-3.3%] sm:mt-[-20%] eye'>
          <i className="ri-search-eye-line text-white text-xl"></i></a>
         </div>
    
  </div>
  <div className="navbar-center hidden lg:flex ml-20">
    <ul className="menu menu-horizontal px-1">
      <li></li>
      <li>
        <details>
          <summary><a href="#">Subscription</a></summary>
          <ul className="p-2 w-24 absolute z-30 bg-[#1f4550] border-white border-2">
            <li className='flex ml-3 py-1'>Premium </li>
            <hr className='border-1 border-white '/>
            <li className='flex ml-3 py-1'>Regular</li>
          </ul>
        </details>
      </li>
      <li><a></a></li>
    </ul>
   
  </div>
  <div className="navbar-end">
  <div className="cart text-white py-1 flex">
    <div className="tooltip text-white  tooltip-bottom font-bold " 
        data-tip="Welcome customer">
        <button className="">
        <i className="ri-user-fill text-3xl"></i>
    </button>
    </div>
    <input type="checkbox" className="toggle mt-2 ml-2" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />

      </div>
  </div>
</div>
    </div>
  )
}

export default Nav
