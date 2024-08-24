import React from 'react'
import img1 from './../../assets/images/food1.jpg'
import img2 from './../../assets/images/delry.jpg'
import img3 from './../../assets/images/soles.jpg'
import img4 from './../../assets/images/back2.jpg'
import img5 from './../../assets/images/phone3.jpg'

const Bottom = () => {
  return (
    <div className='bg-[#0f2c3fb9] '>
      <div className="bg-[#0f2c3fb9] flex flex-wrap gap-4 py-5 px-3 text-white font-extrabold text-[12px] ">
               <div className=" bg-[#134b706b] w-[250px] h-[250px] rounded-b-full mx-auto ">
                  <img src={img1} alt="" className='w-full h-[200px] object-cover rounded-lg' />
                  <a href="/Shop" className='flex justify-center hover:animate-bounce duration-700 py-2'>Food</a>
               </div>
               <div className=" bg-[#134b706b] w-[250px] h-[250px] rounded-b-full mx-auto">
                  <img src={img2} alt="" className='w-full  h-[200px] object-cover rounded-lg' />
                  <a href="/Shop" className='flex justify-center hover:animate-bounce duration-700 py-2'>Delivery</a>
                  <p></p>
               </div>
               <div className=" bg-[#134b706b] w-[250px] h-[250px] rounded-b-full mx-auto">
                  <img src={img3} alt="" className='w-full  h-[200px] object-cover rounded-lg' />
                  <a href="/Shop" className='flex justify-center hover:animate-bounce duration-700 py-2'>Fashion</a>
               </div>
               <div className=" bg-[#134b706b] w-[250px] h-[250px] rounded-b-full mx-auto">
                  <img src={img4} alt="" className='w-full  h-[200px] object-cover rounded-lg' />
                  <a href="/Shop" className='flex justify-center hover:animate-bounce duration-700 py-2'>Cart</a>
               </div>
               <div className=" bg-[#134b706b] w-[250px] h-[250px] rounded-b-full mx-auto">
                  <img src={img5} alt="" className='w-full  h-[200px] object-cover rounded-lg' />
                  <a href="/Shop" className='flex justify-center hover:animate-bounce duration-700 py-2'>Phones</a>
               </div>
             
      </div>
      <button className='btn text-white bg-[#134b706b] hover:bg-[#134b706b] flex mx-auto py-4'><a href="/Shop">See more</a></button>
    </div>
  )
}

export default Bottom
