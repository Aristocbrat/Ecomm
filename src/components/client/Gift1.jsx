import React from 'react'
import { MdCelebration } from "react-icons/md";
import { FcGlobe } from "react-icons/fc";
import { FaGifts } from "react-icons/fa";
import img1 from "./../../assets/images/gitftbg.jpg"
import { GiReturnArrow } from "react-icons/gi";
import img2 from "./../../assets/images/bd1.jpg"
import img3 from "./../../assets/images/wd1.jpg"
import img4 from "./../../assets/images/gd1.jpg"
import img5 from "./../../assets/images/ch1.jpg"
import img6 from "./../../assets/images/beach1.jpg"
import img7 from "./../../assets/images/ppods.jpg"
import img8 from "./../../assets/images/dves.jpg"
import img10 from "./../../assets/images/book4.jpg"




const Gift1 = () => {
  return (
    <div>
      
      <section className='sticky  top-0  z-30 '>
        <div className="seminav flex xl:gap-20 sm:gap-4 bg-white  dark:bg-black dark:text-white  xl:px-7 sm:px-4 py-4 w-full">
            <a href="#" className='font-bold hover:underline text-blue-950 dark:text-white xl:text-xl'>Find & Create (Gifting)</a>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className=" flex  font-semibold">Find a Gift-List</div>
                <ul tabIndex={0} className="dropdown-content menu bg-[#F7F9F2] rounded-box z-[1] xl:w-32 sm:w-24
                 text-blue-950  font-semibold p-2 shadow">
                   <li className='sm:ml-[-10px] xl:ml-0'><a>Children Gifts</a></li>
                    <li className='sm:ml-[-10px] xl:ml-0'><a>Wedding Gifts</a></li>
                    <li className='sm:ml-[-18px] xl:ml-0'><a>Graduation</a></li>
                    <li className='sm:ml-[-10px] xl:ml-0'><a>Birthday Gifts</a></li>
                 </ul>
              </div>
         <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="font-semibold">Create a Gift List</div>
         <ul tabIndex={0} className="dropdown-content menu bg-[#F7F9F2] rounded-box z-[1] w-42 text-blue-950 font-semibold p-2 shadow">
          <li><a>Your Choice</a></li>
        <li><a>Suggestions</a></li>
        </ul>
       </div>
       <a href="#" className='font-bold hover:underline text-blue-950 dark:text-white '>Help</a>
        </div>
      </section>
      <section className='mt-2 py-7' >
        <img src={img1} className='w-full h-[400px] object-cover' alt="" />
        <div className="bg-white xl:w-[700px] h-[190px] mx-auto rounded-2xl relative z-10 mt-[-3%] dark:text-black">
             <h1 className='py-4 mx-auto flex justify-center font-extrabold xl:text-5xl  sm:text-xl gap-3'> <MdCelebration /> Unwrap Joy </h1>
             <p className='ml-[8%] xl:text-xl text-[13px] font-semibold w-[86%] px-4'>For Weddings , Birthdays , Graduations or any Life-event we got you covered .</p>
             <p className='xl:ml-[32%] sm:ml-[28%] xl:text-xl text-[13px] font-semibold'>We ensure the perfect gifts</p>
             <button className='btn bg-yellow-400 text-white xl:ml-[38%] sm:ml-[28%] mt-2'>Create a gift list</button>
        </div>    
      </section>
      <div className=" py-4 mt-3 text-white">
      <div className="navbar bg-[#1f4550]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-[#1f4550] rounded-box z-[1] mt-3 w-52 p-2 shadow">
        
        <li>
          <a>Gift-List</a>
          <ul className="p-2">
          <li><a>Children Gifts</a></li>
            <li><a>Wedding Gifts</a></li>
            <li><a>Graduation Gifts</a></li>
            <li><a>Birthday Gifts</a></li>
          </ul>
        </li>
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Find</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a></a></li>
      <li>
        <details>
          <summary><a href="#" className='text-xl '> Search by</a></summary>
          <ul className="p-1 bg-[#1f4550] border-white border-2 z-20">
            <li><a>Children Gifts</a></li>
            <li><a>Wedding Gifts</a></li>
            <li><a>Graduation Gifts</a></li>
            <li><a>Birthday Gifts</a></li>
          </ul>
        </details>
      </li>
     
    </ul>
  </div>
  <div className="form-control">
      <input type="text" placeholder="Search by name"  className="input input-bordered w-32 md:w-auto text-blue-950" />
    </div>
  <div className="navbar-end">
    <a className="btn">Search</a>
  </div>
</div>
 </div>


      <div className="learn">
        <h1 className='flex justify-center xl:text-3xl sm:text-xl font-bold'>Learn More about our Gift-List </h1>

        <div className="learncard flex justify-evenly flex-wrap mt-6">
           <div  className="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#3d3c3d]">
           <div className="absolute flex  justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]">
          <img src={img2} alt="" className='h-[190px] object-cover' /> </div>
          <p className='z-20 text-white absolute mt-[105%] ml-5 text-xl font-bold'>Birthday Gifts</p>
         </div>

    <div className="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#3d3c3d]">
       <div className="absolute flex  justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]" >
     <img src={img5} alt="" className='w-full h-[190px] object-cover' /> </div>
       <p className='z-20 text-white absolute mt-[105%] ml-3 text-xl font-bold'>Any occasion Gift</p>
      </div>

     <div className="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#3d3c3d]">
        <div className="absolute flex  justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]">
     <img src={img3} alt="" className='h-[190px] object-cover' /> 
      </div>
     <p className='z-20 text-white absolute mt-[105%] ml-5 text-xl font-bold'>Wedding Gifts</p>
     </div>

     <div className="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#3d3c3d]">
   <div className="absolute flex  justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]">
     <img src={img4} alt="" className= 'w-full h-[190px] object-cover' /></div>
    <p className='z-20 text-white absolute mt-[105%] ml-5 text-xl font-bold'>Graduation Gifts</p>
   </div>
   </div>
  </div>
<div className="reasonsto px-5 mt-4 py-4">
    <h1 className='xl:text-4xl sm:text-xl font-bold px-3 text-blue-950 dark:text-white'>Reasons to with register 3rdGB</h1>
    <div className="reasoncard flex flex-wrap gap-9 py-5 ">
    <div className="card bg-base-100 xl:w-96 sm:w-full shadow-xl">
        <div className="card-body dark:text-black">
            <h2 className="card-title flex gap-4 text-2xl flex-col"><FcGlobe className='text-4xl' /> Global Reach </h2>
            <p className='mx-auto w-[300px] text-[14px]'>Add items from 3rdGB to create a gift registry for any occasion.</p>
        </div>
      </div>
      <div className="card bg-base-100 xl:w-96 sm:w-full shadow-xl">
        <div className="card-body dark:text-black">
            <h2 className="card-title flex gap-4 text-2xl flex-col"><FaGifts className='text-4xl'/> Easy to Share</h2>
            <p className='mx-auto w-[320px] text-[14px]'>Share your gift registry to friends and family so they will know what to get.</p>
         </div>
        </div>
      <div className="card bg-base-100 xl:w-96 sm:w-full shadow-xl">
        <div className="card-body dark:text-black">
            <h2 className="card-title flex gap-4 text-2xl flex-col"><GiReturnArrow className='text-4xl'/> Extended Returns</h2>
            <p className='mx-auto w-[300px] text-[14px]'>Don't like the gift? Registry gifts have an extended return period</p>
         </div>
        </div>
      </div>
    <div className="reasonend py-3">
      <h1 className='xl:text-3xl sm:text-xl font-bold px-3 text-blue-950  dark:bg-black dark:text-white'>Make Your Registry Unique to You</h1> 
      <div className="reasonendcards flex flex-wrap justify-between px-6 ml-7 mt-6 py-5 text-blue-950 font-bold dark:text-white ">
    
         <div className="group hover:-rotate-0 [transform:rotate3d(1_,-1,_1,_15deg)]
                 duration-500 overflow-hidden  p-6 rounded-lg hover:shadow-lg [box-shadow:12px_12px_0px_0px_#0d0d0d] 
                   backdrop-filter backdrop-blur-md border border-neutral-600">
               <div className="flex items-center justify-between">
                     <div>
                         <img src={img7} alt="" className='w-[180px] h-[120px] object-cover ' />
                         <h2 class="text-xl font-bold ml-6">Keep track</h2>
                        <p className="text-[13px] w-[170px]">We help you keep track of your gifts, So it is easy for you to send notes. </p>
                        </div>  
                        </div>
                   </div>
         <div className="group hover:-rotate-0 [transform:rotate3d(1_,-1,_1,_15deg)]
                 duration-500 overflow-hidden  p-6 rounded-lg hover:shadow-lg [box-shadow:12px_12px_0px_0px_#0d0d0d] 
                   backdrop-filter backdrop-blur-md border border-neutral-600">
               <div className="flex items-center justify-between">
                     <div>
                         <img src={img6} alt="" className='w-[180px] h-[140px] object-cover '/>
                         <h2  className="text-xl font-bold w-[190px] ">Personalize your Registry </h2>
                        <p className="text-[13px] w-[170px]">Add notes and highlight your Fav gifts.</p>
                        </div>  
                        </div>
                    </div>
         <div className="group hover:-rotate-0 [transform:rotate3d(1_,-1,_1,_15deg)]
                 duration-500 overflow-hidden  p-6 rounded-lg hover:shadow-lg [box-shadow:12px_12px_0px_0px_#0d0d0d] 
                   backdrop-filter backdrop-blur-md border border-neutral-600">
               <div className="flex items-center justify-between">
                     <div>
                         <img src={img8} alt="" className='w-[180px] h-[120px] object-cover '/>
                         <h2  className="text-xl font-bold w-[190px] " >Gifting made easy</h2>
                        <p className="text-[13px] w-[170px]">Use our recommendations or add items from our product pages.</p>
                        </div>  
                        </div>
                
         </div>
         <div className="group hover:-rotate-0 [transform:rotate3d(1_,-1,_1,_15deg)]
                 duration-500 overflow-hidden  p-6 rounded-lg hover:shadow-lg [box-shadow:12px_12px_0px_0px_#0d0d0d] 
                   backdrop-filter backdrop-blur-md border border-neutral-600">
               <div className="flex items-center justify-between">
                     <div>
                         <img src={img10} alt="books" className='w-[180px] object-cover '/>
                         <h2 className="text-xl font-bold w-[190px]">Organize your gifts</h2>
                        <p className="text-[13px] w-[170px]">Keep your notes and gifts organized , So you find it with ease.</p>
                        </div>  
                        </div>
                    </div>
                  </div>
                </div>
             </div>
          
         </div>
  )
}

export default Gift1
