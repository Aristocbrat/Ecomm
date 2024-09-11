import React from 'react'
import { GiLindenLeaf } from "react-icons/gi";

import productdata2 from './../datasfolder/Data2';
import productdata3 from './../datasfolder/Data3';
import ClothingBs from './../itemcardss/Clothing';
import productdata4 from '../datasfolder/Data4';
import Furn from './../itemcardss/Furn';
import Sportbs from './../itemcardss/Sportbs';


const Bestsellers = () => {
  return (
    <div>
    
     <div className="hes bg-[#162b30]  dark:bg-black dark:text-white">
        <div className="hestext text-white flex justify-between px-5">
            <h1 className='xl:text-4xl font-bold py-3' ><i className="ri-price-tag-3-fill"></i>Shop here for the right price</h1>
            <div className="subtextt">
               <p className='text-center font-bold  xl:mt-6 sm:mt-3 sm:text-[11px] flex pe-5 gap-2'>This Month's Bestsellers <GiLindenLeaf className='text-3xl' /> </p>
            </div>
        </div>
     </div>
     <div className="clothing ps-3">
      <div className="sticky top-0 w-full bg-white  dark:bg-black dark:text-white z-20">
      <h1 className='xl:text-3xl c font-bold py-2 px-3 flex justify-center'>Clothing & Acessories</h1>
      </div>
        
        <div className="cloass flex flex-wrap gap-12 justify-center">
        {productdata2.map((item,index)=>{
                   return(
                    <ClothingBs
                    title={item.title}
                    price={item.price}
                    desc={item.desc}
                    img={item.img}
                    item={item}
                    key={index}/>
                   )  
                })}
        </div> 
     </div>
     <div className="Sports ps-3">
      <div className="sticky top-0 w-full bg-white dark:bg-black dark:text-white z-20">
      <h1 className='xl:text-3xl sm:text-xl font-bold py-2 px-3 flex justify-center'>Sports & Outdoors</h1>
      </div>
     
     <div className="cloass flex flex-wrap gap-12 justify-center">
        {productdata3.map((item,index)=>{
                   return(
                    <Sportbs
                    title={item.title}
                    price={item.price}
                    desc={item.desc}
                    img={item.img}
                    item={item}
                    key={index}/>
                   )  
                })}
        </div> 
     </div>
     <div className="Homefurn ps-3">
      <div className="sticky top-0 w-full bg-white z-20 dark:bg-black dark:text-white">
      <h1 className='xl:text-3xl sm:text-xl font-bold py-2 px-3 flex justify-center'>Furnitures & Home Appliances</h1>
      </div>
    
     <div className="cloass flex flex-wrap gap-12 justify-center">
        {productdata4.map((item,index)=>{
                   return(
                    <Furn
                    title={item.title}
                    price={item.price}
                    desc={item.desc}
                    img={item.img}
                    item={item}
                    key={index}/>
                   )  
                })}
        </div> 
     </div>
     <div className="but flex justify-center">
     {/* <button className='btn bg-slate-600 text-white mt-4 '>See more </button> */}
     </div>
     
     

    </div>
  )
}

export default Bestsellers
