import React , {useEffect,useState}from 'react'
import { GiLindenLeaf } from "react-icons/gi";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { GiCampfire } from "react-icons/gi";
import { RiDiscountPercentFill } from "react-icons/ri";
import Itemcard from './../itemcardss/Itemcard'
import productdata from './../datasfolder/Data'
import productdata5 from './../datasfolder/Data5';
import Deals from './../itemcardss/Deals';
import img1 from './../../assets/images/homebg.jpg'
import { IoMdPricetag } from "react-icons/io";
import Loading1 from './../loaders/Loading1';
import Dropd from './../loaders/Dropd';
import Avatar from './../loaders/Avatar';
import Bottom from './../extras/Bottom';
import Summary from './../extras/Summary';
import Trending from './../extras/Trending';
import Socialicons from './../client/Socialicons';






const Home = () => {
  
  return (
    <div id='top' >
        <div className="div overflow-hidden ">
        
         <div className="backg rounded-b-3xl sm:h-[300px]" style={{
          backgroundImage:`url(${img1})`, 
          backgroundPosition:'center',
          width:"100%",
          backgroundSize:"cover",
          height:'390px',
          opacity:"",
          color:"blue"
          
         }}>
          
         <h1 data-aos="slide-right" data-aos-duration="2000" className='xl:text-7xl sm:text-2xl font-extrabold py-4 text-[#1e3136]
          flex xl:ml-6 px-3 sm:ml-12 wel'><GiLindenLeaf />Welcome to
          <IoMdPricetag className='sm:mt-[8px] xl:mt-0'/>3rdGB</h1>
         <h1 data-aos="slide-down" data-aos-duration="2000"  className='xl:text-3xl sm:text-lg font-extrabold py-4 text-[#1e3136]
           flex xl:flex-row sm:flex-col xl:ml-0  justify-center px-4 gap-4'>
          Have an Account already? if not <span><Dropd/></span> </h1>
         <Avatar />
         <div className="lnkss flex justify-center text-white xl:gap-16 sm:gap-10 mt-5 font-extrabold  ">
          <a href="#Trending" className='underline xl:hover:scale-150 sm:hover:scale-95 duration-500 sm:text-[9px] xl:text-lg'>Trending</a>
          <a href="#Review" className='underline xl:hover:scale-150 sm:hover:scale-95 duration-500 sm:text-[9px] xl:text-lg' >Reviews</a>
          <a href="#" className='underline xl:hover:scale-150 sm:hover:scale-95 duration-500 sm:text-[9px] xl:text-lg'> Call Center</a>
          <a href="#" className='underline xl:hover:scale-150 sm:hover:scale-95 duration-500 sm:text-[9px] xl:text-lg'> Customer Care</a>
         </div>
         <div className="flex justify-center py-3 gap-6">
          <img src="/App Store.png" alt="" className='xl:h-[40px] sm:h-[30px]' />
          <img src="/Play Store.png" alt="" className='xl:h-[40px] sm:h-[30px]' />
         </div>
         {/* <HiChevronDoubleDown /> */}
         </div>
         </div>
        
          <div className="new sticky top-0 w-full z-20 bg-white text-black dark:bg-black dark:text-white ">
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
        
        <div className="deals  dark:bg-[#2f6e80] mt-4">
          <section>
            <div className="headi flex xl:gap-20 sm:gap-4 justify-center
             xl:px-20 py-4 sticky top-0 w-full z-20 bg-[#538faf] dark:bg-[#1f4550]">
            <h1 className='xl:text-5xl font-bold text-white xl:ml-14 
              py-4 flex xl:gap-3 sm:w-[25%] xl:w-[30%]'>Today <IoCalendarNumberSharp className='xl:mt-0 sm:mt-1 sm:text-xl xl:text-5xl '/></h1>
            <h1 className='xl:text-5xl font-bold text-white 
             py-4 flex sm:w-[25%] xl:w-[28%] sm:gap-2 xl:gap-0 xl:ml-10'>
              <GiCampfire className='text-yellow-300 xl:mt-0 sm:mt-1  animate-pulse duration-500 sm:text-xl  xl:text-5xl'/> Hot </h1>
            <h1 className='xl:text-5xl font-bold text-white  py-4 flex sm:w-[28%] sm:gap-2 xl:gap-0'>
              <RiDiscountPercentFill className='xl:mt-0 sm:mt-1 sm:text-xl  xl:text-5xl'/>Discount</h1>
           
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
        <Trending/>
        <Summary/>
        <Bottom/>
        
    </div>
  )
}

export default Home
