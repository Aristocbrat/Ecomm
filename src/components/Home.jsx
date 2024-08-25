import React , {useEffect,useState}from 'react'
import { GiLindenLeaf } from "react-icons/gi";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { GiCampfire } from "react-icons/gi";
import { FaRegSmileWink } from "react-icons/fa";
import tdimg from "./../assets/images/smman.png"
import Itemcard from './itemcardss/Itemcard'
import productdata from './datasfolder/Data'
import productdata5 from './datasfolder/Data5';
import Navbar from "./Navbar"
import Footer from "./Footer"
import Socialicons from './Socialicons';
import Deals from './itemcardss/Deals';
import img1 from './../assets/images/homebg3.jpg'
import { IoMdPricetag } from "react-icons/io";
import Loading1 from './loaders/Loading1';
import Dropd from './loaders/Dropd';
import Avatar from './loaders/Avatar';
import Nav from './Nav';
import Nav2 from './Nav2';
import Bottom from './extras/Bottom';





const Home = () => {
  
  return (
    <div id='top' >
        <div className="div overflow-hidden ">
         {/* <Navbar /> */}
         <Nav/>
         <Nav2/>
         <div className="backg rounded-b-3xl sm:h-[300px]" style={{
          backgroundImage:`url(${img1})`, 
          backgroundPosition:'center',
          width:"100%",
          backgroundSize:"cover",
          height:'390px',
          opacity:"",
          color:"blue"
          
         }}>
          
         <h1 data-aos="slide-right" data-aos-duration="2000" className='xl:text-7xl sm:text-3xl font-extrabold py-4 text-white flex xl:ml-6 px-3'><GiLindenLeaf />Welcome to <IoMdPricetag />3rdGB</h1>
         <h1 data-aos="slide-down" data-aos-duration="2000"  className='xl:text-3xl sm:text-xl font-extrabold py-4 text-black  flex xl:flex-row sm:flex-col justify-center px-4 gap-4'>
          Have an Account already? if not <span><Dropd/></span> </h1>
         <Avatar />
         </div>
        <div className=" w-[100%]">
          <div className="new sticky bg-white top-0 w-full z-20 dark:bg-black dark:text-white ">
          <h1 className='text-4xl flex justify-center font-bold py-3'>New Arrivals <GiLindenLeaf /></h1>
          </div>
        
            <div className="flex justify-center flex-wrap gap-7 mt-4 pd w-[100%] ">
                {productdata.map((item,index)=>{
                   return(
                    <Itemcard
                    title={item.title}
                    price={item.price}
                    item={item} 
                    img={item.img}
                    key={index}/>
                   )  
                })}  
            </div>
        </div>
        </div>
        <div className="deals bg-[#77bbe9]  dark:bg-[#2f6e80] mt-4">
          <section>
            <div className="headi flex xl:gap-20 sm:gap-4 justify-center px-6 py-4 sticky top-0 w-full z-20 bg-[#538faf] dark:bg-[#1f4550]">
            <h1 className='xl:text-5xl font-bold text-white  py-4 flex xl:gap-3 sm:w-[25%] xl:w-[35%]'>Today's Deals <IoCalendarNumberSharp className='xl:mt-0 sm:mt-1 sm:text-xl xl:text-5xl '/></h1>
            <h1 className='xl:text-5xl font-bold text-white  py-4 flex sm:w-[25%] xl:w-[35%] sm:gap-2 xl:gap-0'><GiCampfire className='text-yellow-300 xl:mt-0 sm:mt-1 animate-pulse duration-500 sm:text-xl  xl:text-5xl'/> Hottest Deals</h1>
            <h1 className='xl:text-5xl font-bold text-white  py-4 flex sm:w-[28%] sm:gap-2 xl:gap-0'><FaRegSmileWink className='xl:mt-0 sm:mt-1 sm:text-xl  xl:text-5xl'/> Best Deals</h1>
            <img src={tdimg} alt=""  className='w-[100px] sm:hidden sm:h-[70px] h-[100px]  object-fill hover:rotate-[360deg] duration-500'/>
            </div>
            <div className="flex justify-center flex-wrap gap-12 mt-4 pd py-4 ">
                {productdata5.map((item,index)=>{
                  
                   return(
                    <Deals
                    title={item.title}
                    oldPrice={item.oldprice}
                    newPrice={item.newPrice}
                    item={item} 
                    img={item.img}
                    desc={item.desc}
                    key={index}/>
                   )  
                })}   
            </div>    
          </section>
        </div>
        <Socialicons/>
        
        <Loading1/>
        <Bottom/>
        <Footer/>
    </div>
  )
}

export default Home
