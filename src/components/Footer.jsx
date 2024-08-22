import React,{useEffect,useState} from 'react'
import france from "./../assets/images/france.png"
import germany from "./../assets/images/germany.png"
import uk from "./../assets/images/united-kingdom.png"
import spain from "./../assets/images/spain.png"
import Nig from "./../assets/images/nigeria.png"
import Gha from "./../assets/images/ghana.png"
import rsa from "./../assets/images/south-africa.png"
import bra from "./../assets/images/brazil-.png"
import keny from "./../assets/images/kenya.png"


const Footer = () => {
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
                      className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200 hover:text-black"
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
        const CustomDropdown2 = () => {
            const [selectedOption, setSelectedOption] = useState('Nigeria');
            const [isDropdownOpen, setIsDropdownOpen] = useState(false);
            const options = [
              { value: 'Nigeria', label: 'NIG', imgSrc: Nig },
              { value: 'Ghana', label: 'GHA', imgSrc: Gha },
              { value: 'Kenya', label: 'KEN', imgSrc: keny },
              { value: 'Brazil', label: 'BRA', imgSrc:bra },
              { value: 'South Africa', label: 'RSA', imgSrc:rsa },
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
                          className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200 hover:text-black"
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
          useEffect(()=>{
            const Time = () =>{
              document.getElementById("year").innerHTML= new Date().getFullYear();
            }
            Time()

          },[])

  return (
    <div>
        <div className="foot mt-4 bg-[#1f4550]  dark:bg-black dark:text-white text-white font-bold">
            <div className="sign border border-l-0 border-r-0 py-4  border-white ">
                <p className='flex justify-center text-[14px]'>See personalized recommendations</p>
                <button className='flex bg-yellow-500  px-12 rounded-full  py-2 mx-auto mt-2 hover:bg-slate-600  hover:scale-90 duration-300 hover:text-white'>Sign in</button>
                <p className='flex justify-center py-2 text-[14px]'>New Customer? <span className='text-[12px] ps-2 hover:underline'><a href="#"> Start here</a></span></p>
            </div>
            <div className="backtotop w-full bg-[#13282eb9] border-l-0 border-r-0 border-white border-b-2">
                 <a href="" className='flex justify-center py-3 hover:underline hover:scale-90 duration-300 '>Back to top</a>
            </div>
             <div className="footext flex justify-center py-7 gap-16 border-b-2 border-white  ">
                <ul className='w-[16%]'>
                    <h1>Get to Know Us</h1>
                    <li className='text-[13px] py-1'><a href="">Careers</a></li>
                    <li className='text-[13px] py-1'><a href="">Products</a></li>
                    <li className='text-[13px] py-1'><a href="">Services</a></li>
                    <li className='text-[13px] py-1'><a href="">Delivery</a></li>
                    <li className='text-[13px] py-1'><a href="">Investor Relations</a></li>
                    <li className='text-[13px] py-1 hover:underline'><a href="">Talk to Us</a></li>
                </ul>
                <ul className='w-[16%]'>
                    <h1>Make Money with Us</h1>
                    <li className='text-[13px] py-1'><a href="">Sell Products on 3rdGB</a></li>
                    <li className='text-[13px] py-1'><a href=""> Advertise your products</a>  </li>
                    <li className='text-[13px] py-1'><a href="">Become an Affliate</a> </li>
                    <li className='text-[13px] py-1'><a href=""> Sell Apps on 3rdGB</a> </li>
                    <li className='text-[13px] py-1'><a href="">Sell Your Music on 3rdGB</a> </li>
                    <li className='text-[13px] py-1'><a href="">Self-Publish with Us</a></li>
                    <li className='text-[13px] py-1 hover:underline'><a href=""><i className="ri-arrow-right-s-line"></i>See more ways to Make Money with us</a> </li>
                </ul>
                <ul className='w-[16%]'>
                    <h1>3rdGB Payment Products</h1>
                    <li className='text-[13px] py-1'><a href="">3rdGB Voucher</a> </li>
                    <li className='text-[13px] py-1'><a href="">Shop with Points</a></li>
                    <li className='text-[13px] py-1'><a href="">Reload Your Balance</a></li>
                    <li className='text-[13px] py-1'><a href="">3rdGB Currency Converter</a></li>
                    <li className='text-[13px] py-1'><a href=""></a></li>
                    <li className='text-[13px] py-1'><a href=""></a></li>
                </ul>
                <ul className='w-[16%]'>
                    <h1>Let Us Help You</h1>
                    <li className='text-[13px] py-1'><a href="">Your Account</a></li>
                    <li className='text-[13px] py-1'><a href="">Your Order</a></li>
                    <li className='text-[13px] py-1'><a href=""> Shipping rates & Policies</a></li>
                    <li className='text-[13px] py-1'><a href="">Returns & Replacements</a></li>
                    <li className='text-[13px] py-1'><a href="">Manage Your Content & Device</a></li>
                    <li className='text-[13px] py-1 hover:underline'><a href="">Help</a></li>
                </ul>
             </div>
             <div className="langhead flex justify-center py-4 gap-7 border-b-2 border-white">
                  <h1 className='text-4xl px-5'> <i class="ri-price-tag-3-fill"></i>3rdGB</h1>
                  <CustomDropdown/>
                  <span className='pt-3'>Shop from </span>
                  <CustomDropdown2/>
             </div>
             <div className="footerlast bg-[#13282eb9]  dark:bg-black dark:text-white py-8">
      <div className="ftlast flex justify-center gap-12 flex-wrap mt-5 w-[75%] items-center mx-auto">
         <ul className='hover:underline w-30'>
            <h1 className='text-xl'>3rdGB Music</h1>
            <li className='font-thin text-[12px]'><a href="">Stream millions of Songs</a></li>
         </ul>
         <ul className='hover:underline w-28'>
            <h1 className='text-xl'>3rdGB Ads</h1>
            <li className='font-thin text-[12px]'><a href="">Reach Customers wherever they are</a></li>
            
         </ul>
         <ul className='hover:underline w-28'>
            <h1 className='text-xl'>Hot Deals</h1>
            <li className='font-thin text-[12px]'><a href="">Score deals on Fashion Brands</a></li>
         
         </ul>
         <ul className='hover:underline w-28' >
            <h1 className='text-xl'> Bookstores</h1>
            <li className='font-thin text-[12px]'><a href="">Books,Art & Collectibles</a></li>
         </ul>
         <ul className='hover:underline w-28' >
            <h1 className='text-xl'>Sell on 3rdGB</h1>
            <li className='font-thin text-[12px]'><a href="">Opening a Selling Account</a></li>
         </ul>
         <ul className='hover:underline w-30' >
            <h1 className='text-xl'>3rdGB Global</h1>
            <li className='font-thin text-[12px]'><a href=""></a>Ship goods internationally</li>
         </ul>
         <ul className='hover:underline w-28' >
            <h1 className='text-xl'>Home Services</h1>
            <li className='font-thin text-[12px]'><a href="">Customer's Happiness</a></li>
         </ul>
         <ul className='hover:underline w-28' >
            <h1 className='text-xl'>Web services</h1>
            <li className='font-thin text-[12px]'><a href=""></a>Scalable Cloud Computer Services</li>
         </ul>
         <ul className='hover:underline w-28' >
            <h1 className='text-xl'>Audibles</h1>
            <li className='font-thin text-[12px]'><a href="">Listen to books & Original Audio performances</a></li>
         </ul>
         <ul className='hover:underline w-28' >
            <h1 className='text-xl'>Goodreads</h1>
            <li className='font-thin text-[12px]'><a href="">Book reviews & Recommendations</a></li>
         </ul>
         <ul className='hover:underline w-28' >
            <h1 className='text-xl'>KeepFit</h1>
            <li className='font-thin text-[12px]'><a href="">Sport collections & Recommendations</a></li>
         </ul>
         <ul className='hover:underline w-28' >
            <h1 className='text-xl'>Tick-Tock</h1>
            <li className='font-thin text-[12px]'><a href="">Watches Guide</a></li>
         </ul>
         <ul className='hover:underline w-28' >
            <h1 className='text-xl'>Savings</h1>
            <li className='font-thin text-[12px]'><a href="">Discount Guide</a></li>
         </ul>
         <ul className='hover:underline w-30' >
            <h1 className='text-xl'>3rdGB Subscriptions</h1>
            <li className='font-thin text-[12px]'><a href="">Get Premium Service</a></li>
         </ul>
         <ul className='hover:underline w-28' >
            <h1 className='text-xl'>3rdGB Business</h1>
            <li className='font-thin text-[12px]'><a href="">Business Guides</a></li>
         </ul>
         </div>
         <div className="linksf flex text-[12px] py-7 gap-6 w-[60%] mx-auto mt-4 ">
          <a href="" className='hover:underline'>Condition of use</a>
          <a href="" className='hover:underline'>Privacy Notice</a>
          <a href="" className='hover:underline'>Your ADs Privacy</a>
          <a href="" className='hover:underline'>Customers Reviews</a>
          <a href="" className='hover:underline'>Customers Complaints</a>
          <a href="" className='hover:underline'>Customer Care</a>
         </div>
         <div className="date flex justify-center gap-3 mt-8 text-[12px]">
         <i className="ri-copyright-line"></i>
         <span>3rdGB Group Inc</span>
         <span id='year'> </span>
         <span className='ps-3'> All rights reserved</span>
         </div>
        </div>
    </div> 
    </div>
  )
}

export default Footer
