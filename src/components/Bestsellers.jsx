import React from 'react'
import { GiLindenLeaf } from "react-icons/gi";
import Navbar from './Navbar'
import Footer from './Footer'
import productdata2 from './Data2';
import productdata3 from './Data3';
import ClothingBs from './Clothing';
import productdata4 from './Data4';
import Furn from './Furn';
import Sportbs from './Sportbs';

const Bestsellers = () => {
  return (
    <div>
     <Navbar/>
     <div className="hes bg-[#162b30]">
        <div className="hestext text-white flex justify-between px-5">
            <h1 className='text-4xl font-bold py-3' ><i className="ri-price-tag-3-fill"></i>Shop here for the right price</h1>
            <div className="subtextt">
               <p className='text-center font-bold  mt-6 flex pe-5 gap-4'>This Month's Bestsellers <GiLindenLeaf className='text-3xl' /> </p>
            </div>
        </div>
     </div>
     <div className="clothing ps-3">
        <h1 className='text-3xl font-bold py-2 px-3 flex justify-center'>Clothing & Acessories</h1>
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
     <h1 className='text-3xl font-bold py-2 px-3 flex justify-center'>Sports & Outdoors</h1>
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
     <h1 className='text-3xl font-bold py-2 px-3 flex justify-center'>Furnitures & Home Appliances</h1>
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
     <button className='btn bg-slate-600 text-white mt-4 '>See more </button>
     </div>
     
     
<Footer/>
    </div>
  )
}

export default Bestsellers
