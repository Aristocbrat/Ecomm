import React from 'react'
import img1 from './../../assets/images/tr13.jpg'
import img2 from './../../assets/images/tr6.jpg'
import img3 from './../../assets/images/tr7.jpg'
import img4 from './../../assets/images/tr16.jpg'
import img5 from './../../assets/images/pf.jpg'
import img6 from './../../assets/images/pf2.jpg'
import img7 from './../../assets/images/bt11.jpg'
import img8 from './../../assets/images/bt18.jpg'
import img9 from './../../assets/images/tr9.jpg'
import img10 from './../../assets/images/tr11.jpg'
import img11 from './../../assets/images/tr12.jpg'
import img12 from './../../assets/images/spt5.jpg'
import img13 from './../../assets/images/tr4.jpg'
import img14 from './../../assets/images/tr5.jpg'
import img15 from './../../assets/images/int7.jpg'
import img16 from './../../assets/images/int10.jpg'
import img17 from './../../assets/images/amg.jpg'
import img18 from './../../assets/images/tr18.jpg'
import img19 from './../../assets/images/tr21.jpg'
import img20 from './../../assets/images/tr20.jpg'
import img21 from './../../assets/images/tr1.jpg'
import img22 from './../../assets/images/tr2.jpg'
import img23 from './../../assets/images/tr3.jpg'
import img24 from './../../assets/images/phx.jpg'


const Trending = () => {
  return (
    <div className='py-6  dark:bg-[#1f4550] sm:overflow-hidden' id='Trending'>
        <h1 className='font-extrabold xl:text-5xl sm:text-3xl flex justify-center py-3'>Trending</h1>
      <div className="flex xl:w-[95%] sm:w-full  h-full trend xl:mx-auto sm:ml-3 gap-20 justify-center
       xl:flex-row sm:flex-col flex-wrap rounded-lg  ">
         <div className="fashTren bg-[#00ADB5] xl:w-[24%] sm:w-[87%] sm:ml-3
          xl:ml-0 flex flex-wrap xl:gap-2 sm:gap-[9px] xl:px-6 sm:px-11 py-3 rounded-lg">
           <img src={img1} alt="" />
           <img src={img2} alt="" />
           <img src={img3} alt="" />
           <img src={img4} alt="" />
           <div className="mx-auto text-white font-extrabold cursor-pointer hover:text-blue-950 duration-300">
            <h1><a href="/ClothingandAcesserories">Clothing & Accessories</a></h1>
           </div>

         </div>
         <div className="beautyTren bg-[#2d6164] xl:w-[24%] sm:w-[87%] sm:ml-3 xl:ml-0 flex flex-wrap xl:gap-2
          sm:gap-[9px] xl:px-6 sm:px-11 py-3 rounded-lg">
         <img src={img5} alt="" />
           <img src={img6} alt="" />
           <img src={img7} alt="" />
           <img src={img8} alt="" />
           <div className=" mx-auto text-white font-extrabold cursor-pointer hover:text-blue-950 duration-300">
            <h1><a href="/BeautyandSkincare">Beauty & Skincare</a></h1>
           </div>

         </div>
         <div className="sportsTren bg-[#D1E9F6] xl:w-[24%] sm:w-[87%] sm:ml-3 xl:ml-0 flex flex-wrap xl:gap-2
          sm:gap-[9px] xl:px-6 sm:px-11 py-3 rounded-lg ">
           <img src={img9} alt="" />
           <img src={img10} alt="" />
           <img src={img11} alt="" />
           <img src={img12} alt="" />
           <div className="mx-auto text-[#2d6164] font-extrabold cursor-pointer hover:text-blue-950 duration-300">
            <h1><a href="/Sporty">Sports & Outdoors</a></h1>
           </div>

         </div>
         <div className="deviceTren bg-[#6482AD] xl:w-[24%] sm:w-[87%] sm:ml-3 xl:ml-0 flex flex-wrap
          xl:gap-2 sm:gap-[9px] xl:px-6 sm:px-11 py-3 rounded-lg">
         <img src={img13} alt="" />
           <img src={img14} alt="" />
           <img src={img15} alt="" />
           <img src={img16} alt="" />
           <div className="mx-auto text-white font-extrabold cursor-pointer hover:text-blue-950 duration-300 ">
            <h1><a href="/Furniture">Furnitures & Interior</a></h1>
           </div>
         </div>
         <div className="deviceTren bg-[#5e3f72] xl:w-[24%] sm:w-[87%] sm:ml-3 xl:ml-0
          flex flex-wrap xl:gap-2 sm:gap-[9px] xl:px-6 sm:px-11  py-3 rounded-lg">
           <img src={img17} alt="" />
           <img src={img18} alt="" />
           <img src={img19} alt="" />
           <img src={img20} alt="" />
           <div className="mx-auto text-white font-extrabold cursor-pointer hover:text-blue-950 duration-300">
            <h1>Cars & Automobile</h1>
           </div>
         </div>
         <div className="deviceTren bg-[#ad9964af] xl:w-[24%] sm:w-[87%] sm:ml-3 xl:ml-0 flex 
         flex-wrap xl:gap-2 sm:gap-[9px] xl:px-6 sm:px-11 py-3 rounded-lg">
           <img src={img21} alt="" />
           <img src={img22} alt="" />
           <img src={img23} alt="" />
           <img src={img24} alt="" />
           <div className="mx-auto text-white font-extrabold cursor-pointer hover:text-blue-950 duration-300">
            <h1><a href="/Electronics">PC & Mobile Device</a></h1>
           </div>
         </div>
         
        
      </div>
    </div>
  )
}

export default Trending
