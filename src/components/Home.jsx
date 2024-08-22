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
import img1 from './../assets/images/int12.jpg'
import { IoMdPricetag } from "react-icons/io";
import Loading1 from './loaders/Loading1';
import Dropd from './loaders/Dropd';
import Avatar from './loaders/Avatar';





const Home = () => {
  
  return (
    <div>
        <div className="div  ">
         <Navbar />
         <div className="backg" style={{
          backgroundImage:`url(${img1})`, 
          backgroundPosition:'center',
          width:"100%",
          backgroundSize:"cover",
          height:'390px',
          opacity:""
         }}>
          
         <h1 data-aos="slide-right" data-aos-duration="2000" className='text-7xl font-extrabold py-4 text-white flex ml-9'>Welcome to <IoMdPricetag />3rdGB <span className='text-2xl border-8 border-white mt-2 ml-5 px-4 py-2 bg-[#1f4550] duration-500 animate-bounce'>Shopping Haven</span>  </h1>
         <h1 data-aos="slide-down" data-aos-duration="2000"  className='text-3xl font-extrabold py-4 text-white flex justify-center gap-4'>
          Have an Account already? if not <Dropd/> </h1>
         <Loading1/>
         <Avatar />
         </div>
        <div className="container">
          <div className="new sticky bg-white top-0 w-full z-20 dark:bg-black dark:text-white">
          <h1 className='text-4xl flex justify-center font-bold py-3'>New Arrivals <GiLindenLeaf /></h1>
          </div>
        
            <div className="flex justify-center flex-wrap gap-12 mt-4 pd">
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
            <div className="headi flex gap-12 px-6 py-4 sticky top-0 w-full z-20 bg-[#538faf] dark:bg-[#1f4550]">
            <h1 className='text-5xl font-bold text-white  py-4 flex gap-3'>Today's Deals <IoCalendarNumberSharp /></h1>
            <h1 className='text-5xl font-bold text-white  py-4 flex'><GiCampfire className='text-yellow-300'/> Hottest Deals</h1>
            <h1 className='text-5xl font-bold text-white  py-4 flex'><FaRegSmileWink /> Best Deals</h1>
            <img src={tdimg} alt=""  className='w-[100px] h-[100px]  object-fill hover:rotate-[360deg] duration-500'/>
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
        <Footer/>
    </div>
  )
}

export default Home
