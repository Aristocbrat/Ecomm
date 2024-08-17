import React from 'react'
import { GiLindenLeaf } from "react-icons/gi";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaArrowsToDot } from "react-icons/fa6";
import { GiCampfire } from "react-icons/gi";
import { FaRegSmileWink } from "react-icons/fa";
import tdimg from "./../assets/images/smman.png"
import Itemcard from './Itemcard'
import productdata from './Data'
import productdata5 from './Data5';
import Navbar from "./Navbar"
import Footer from "./Footer"
import Socialicons from './Socialicons';
import Deals from './Deals';



const Home = () => {
  return (
    <div>
        <div className="div  ">
         <Navbar />
        
        <div className="container">
        <h1 className='text-4xl flex justify-center font-bold py-3'>New Arrivals <GiLindenLeaf /></h1>
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
        <div className="deals bg-[#77bbe9] mt-4">
          <section>
            <div className="headi flex gap-12 px-6 py-4">
            <h1 className='text-5xl font-bold text-white  py-4 flex gap-3'>Today's Deals <IoCalendarNumberSharp /></h1>
            <h1 className='text-5xl font-bold text-white  py-4 flex'><GiCampfire className='text-yellow-300'/> Hottest Deals</h1>
            <h1 className='text-5xl font-bold text-white  py-4 flex'><FaRegSmileWink /> Best Deals</h1>
            <img src={tdimg} alt=""  className='w-[100px] h-[100px]  object-fill hover:rotate-[360deg] duration-500'/>
            </div>
            <div className="flex justify-center flex-wrap gap-12 mt-4 pd py-4">
                {productdata5.map((item,index)=>{
                   return(
                    <Deals
                    title={item.title}
                    oldPrice={item.oldprice}
                    newPrice={item.newPrice}
                    item={item} 
                    img={item.img}
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
