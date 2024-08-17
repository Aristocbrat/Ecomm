import React ,{useState}from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { RiDiscountPercentFill } from "react-icons/ri";
import { TiLocationArrow } from "react-icons/ti";
import { MdOutlineComputer } from "react-icons/md";
import { FaPenFancy } from "react-icons/fa";
import { GiCardPickup } from "react-icons/gi";
import { FaTruckPickup } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { GiLindenLeaf } from "react-icons/gi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowTurnDown } from "react-icons/fa6";
import img1 from "../assets/images/yw1.jpg"
import img2 from "../assets/images/yw2.jpg"
import img3 from "../assets/images/ww1.jpg"
import img4 from "../assets/images/mn2.jpg"
import img5 from "../assets/images/login.jpg"
import img6 from "../assets/images/gdsp.jpg"
import img7 from "../assets/images/gdsp1.jpg"

const Discount = () => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
       <Navbar />
       <div className="regis sticky top-[0%] z-20 w-full bg-white flex justify-between px-7 py-4">
  <h1 className='text-3xl font-bold'>Sell with 3rdGB</h1>
  <h1 className='flex py-2 font-semibold'>
    <RiDiscountPercentFill className='text-3xl text-green-500' /> 
    Get up to 10% on your first #50,000 in branded sales.
    <a href="#" className='underline font-bold hover:text-green-500 duration-500'>Learn more</a>
  </h1>
  <button className='flex bg-yellow-500 btn rounded-full text-white hover:bg-slate-600 hover:scale-90 duration-300 hover:text-white'>
    Sign Up
  </button>
</div>

          <div className="main mt-8 py-4 bg-[#f1efef] [clip-path:ellipse(900px_400px_at_10%_9%)] w-full">
             <h1 className='text-7xl px-4 py-3 w-[800px] font-bold ms-7'>Create a 3rdGB seller's account</h1>
             <p className='text-xl font-bold px-3 ms-9'>Sell with the fastest-growing & preferred acquisition channel.</p>
             <button className='flex bg-yellow-500  px-12 py-3 ms-20 mt-5 text-white font-bold rounded-full  hover:bg-slate-600  hover:scale-90 duration-300 hover:text-white'>Sign Up</button>
            <p className='text-[11px] px-9 font-semibold ms-10'>#2,500 a month + selling fees</p>
          </div>
          <div class="container">
	         <div class="loader"></div>
	         <div class="loader"></div>
	         <div class="loader"></div>
          </div>
          <div className="tt mt-[-7%] bg-[#f1efef] w-[400px] ml-[69%] rounded-r-full py-3">
           <h1 className=' text-2xl font-bold px-4'> Register now and get the best selling experience </h1>
           </div>
          <div className="submain mt-8 py-7">
            <button className='flex bg-green-500 text-white font-bold p-2 rounded-[10px] mx-auto'><RiDiscountPercentFill className='text-xl text-white'/>New Sellers Incentive </button>
            <div className="inc mt-2 flex gap-2 px-5">
              <img src={img1} alt="" className='w-[300px] rounded-b-full object-cover' />
              <img src={img2} alt="" className='w-[300px] rounded-t-full object-cover'/>
            <div className="inctext mt-10 ml-4">
               <h1 className='text-6xl font-bold pb-4'>Get started with #50,000 in Incentive</h1>
               <p className='w-[590px] font-bold'>Ready to sell with 3rdGB ? Well get ready to have your mind blown with Our Series of Incentives.</p>
               <div className="inctt2 bg-[#f1efef] py-4 px-4 rounded-lg mt-5">
                <ul>
                  <li className='py-2 flex gap-2'><FaCheck /> <span className='font-bold'>10% back</span>on your first #50,000 on branded sales. </li>
                  <li className='py-2 flex gap-2'><FaCheck /><span className='font-bold'>5% back </span> through your first year until you reach #1,000,000. </li>
                  <li className='py-2 flex gap-2'><FaCheck /><span className='font-bold'>#10,000 off </span> shipments into the 3rdGB fufillment network </li>
                  <li className='py-2 flex gap-2'><FaCheck /><span className='font-bold'>#5,000 credit </span> to create Sponsored products or Sponsored brand ads </li>
                </ul>
                <a href="#" className='flex hover:underline font-semibold'>See all Incentives <TiLocationArrow className='hover:translate-y-3 duration-300 text-2xl' /> </a>
               </div>
            </div>
            </div>
            <div className="ske ml-[4%] mt-9 flex gap-[98px] flex-wrap">
            <div className="flex w-52 flex-col gap-4 ">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
              </div>
              <div className="flex w-52 flex-col gap-4 ">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
              </div>
              <div className="flex w-52 flex-col gap-4 ">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
              </div>
              <div className="flex w-52 flex-col gap-4 ">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
              </div>
            </div>

           <div className="why bg-[#f1efef] flex mt-8 px-3 rounded-[40px] w-[87%] mx-auto">
              <div className="part1 w-[59%] py-5 px-4">
                <h1 className='text-5xl px-7 font-extrabold py-4' >Why Create a 3rdGB Selling Account ?</h1>
                <p className='font-semibold px-7 flex gap-3 py-3'>There are endless reasons,So I will share a few.<FaPenFancy className='text-xl' /></p>
                <p className='px-7 py-3 flex gap-3 font-semibold'><MdOutlineComputer className='text-xl'/>Sell Your Products From Your Comfort Zone.</p>
                <p className='px-7 py-3 flex gap-3 font-semibold'><GiCardPickup className='text-xl'/>Select any plan you want based your choice.</p>
                <p className='px-7 py-3 flex gap-3 font-semibold'><FaTruckPickup className='text-xl'/>Free delivery to your top 10 customer's for the month.</p>
                <p className='px-7 py-3 flex gap-3 font-semibold w-[400px]'><FaGlobeAmericas className='text-2xl'/>No boundaries to your business , you can sell your product to different parts of the world. </p>
                <div className="avatar-group -space-x-6 rtl:space-x-reverse mt-6">
  <div className="avatar">
    <div className="w-12">
      <img src={img4} />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src={img3} />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src={img2} />
    </div>
  </div>

</div>
<span className='ml-[27%]  mt-[-8%] flex gap-4 w-[350px] font-semibold'>+99k members Join Our Online Community . Become a Member <GiLindenLeaf  className='text-4xl'/> </span>
  <div className="yourviews mt-9">
    <h1 className='text-2xl font-bold'>Your Views</h1>
    <textarea name=""
     className='w-[60%] h-32 focus:outline-none px-4  focus:ring-2 focus:ring-white' 
    placeholder="Enter your message here..."
    value={message}
    onChange={handleChange}>

    </textarea>
  </div>
  <button className='btn bg-yellow-500 text-white flex mx-auto'> Submit</button>
 </div> 


              
              <div className="part2 py-4">
              <div className="card card-compact bg-base-100 w-96 shadow-xl py-3 ">
                <figure>
                  <img
                    src={img3}
                      alt="femaleclient" className='w-[150px] rounded-full' />
                         </figure>
                       <div className="card-body">
                        <div className="cardname"><h1 className='font-bold ml-[37%]'>Gilberto Vifi</h1></div>
                      <h2 className="card-title text-[13px] font-bold mx-auto ">Co-founder of ilikemyGoods.com </h2>
                        <p className='font-semibold'> "I was looking for a community i could trust and i am really happy i found it.All I needed to do was find them" </p>
                         <div className="card-actions">
                           <a href="#" className='flex text-xl hover:underline'>See Vifi's story here  <TiLocationArrow className='hover:translate-y-3 duration-300 text-2xl' /></a>
                          </div>
                       </div>
                     </div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl py-3 mt-3">
                   <figure>
                     <img
                      src={img4}
                       alt="maleclient" className='w-[150px] rounded-[99px]' />
                         </figure>
                     <div className="card-body">
                     <div className="cardname"><h1 className='font-bold ml-[35%]'>Femi Odegbami</h1></div>
                      <h2 className="card-title text-[13px] font-bold mx-auto">CEO Look9ice INC</h2>
                       <p>"Not many people know's the struggle of finding new ways of selling your product ,I am so lucky i found this and this is a game changer"</p>
                       <div className="card-actions ">
                       <a href="#" className='flex text-xl hover:underline'>See Femi's story here  <TiLocationArrow className='hover:translate-y-3 duration-300 text-2xl' /></a> </div>
                      </div>
                   </div>
              </div>
           </div>
           <div className="bg-[#f1efef] flex w-[95%] justify-between mt-[4%] mx-auto px-6 py-5 font-extrabold text-4xl text-blue-950">
               <div className="div1 px-4 py-4 border-r-2 border-white">
                <h1 className='justify-center flex'>#2,300,000+</h1>
                < p className='text-xl font-semibold w-[350px]'>Average sales for Nigerian-based sellers monthly.</p>
               </div>
               <div className="div1 px-4 py-4 border-r-2 border-white">
                <h1 className='justify-center flex'>+70%</h1>
                < p className='text-xl font-semibold w-[350px]'>Percentage of sales at 3rdGB store from independent sellers.
                Mostly small & medium-sized businesses.</p>
               </div>
               <div className="div1 px-4 py-4 ">
                <h1 className='justify-center flex'>+10</h1>
                < p className='text-xl font-semibold w-[350px]'>Countries and regions 3rdGB ships to customers.</p>
               </div>
            </div>
          </div>
          <div className="getstarted bg-[#f1efef] w-[93%] mx-auto text-blue-950 rounded-xl">
            <div className="ready flex justify-between px-5 py-4">
              <div className="gs1">
                <h1 className='text-5xl font-extrabold'>Ready to get started ?</h1>
                <div className="subt ml-5 px-6 w-[650px]">
                <p className='mt-[5%] flex gap-2 font-bold text-xl'><span className='font-bold  px-4'>Step 1.</span> Choose a selling plan :</p>
                <p className='w-[450px] font-semibold ml-[17%] opacity-70'>- We offer two type of selling plans so you can choose the right package of tools and services for the right price.</p>
                <ul className='ml-[20%] font-semibold opacity-70'>
                  <li className='flex gap-2 py-3'><FaArrowAltCircleRight className='text-xl mt-[2px]' />The <span className='font-bold'>Individual</span> selling plan costs #2,500 per sale</li>
                  <li className='flex gap-2 py-3'><FaArrowAltCircleRight className='text-xl mt-[2px]'/>The <span className='font-bold'>Professional</span> selling plan costs #5,500 per sale</li>
                </ul>
                <p className='py-4 ml-[19%] font-semibold'>You can change or cancel your plan at anytime </p>
                <p className='w-[400px] ml-[19%] font-semibold'>3rdGB also collects <span className='hover:underline duration-500 hover: font-extrabold'>referral fee</span> on each item sold and other selling fees can apply in some cases</p>
                <a href="#" className='flex gap-3 ml-[19%] py-4 hover:translate-x-2 duration-500 font-bold'>Pick your selling plan <TiLocationArrow className='hover:translate-y-3 duration-300 text-2xl' /> </a>
                </div>
                  
                
                <div className="subt ml-5 px-6 w-[650px] mt-[7%]">
                <p className='mt-[5%] flex gap-2 font-bold text-xl'><span className='font-bold  px-4'>Step 2.</span> Create your 3rdGB seller's account :</p>
                <p className='w-[450px] font-semibold ml-[17%] opacity-70'>- Click the sign up button on this page to Create a seller's account. You are to use your email associated to your customer's account</p>
                <ul className='ml-[20%] font-semibold opacity-70'>
                  <li className='flex gap-2'>You will need the following to Verify your account <FaArrowTurnDown className='text-xl mt-[6px]'/> </li>
                  <li className='flex gap-2 py-3'><FaArrowAltCircleRight className='text-xl mt-[2px]' />The <span className='font-bold'>Individual</span> selling plan costs #2,500 per sale</li>
                  <li className='flex gap-2 py-3'><FaArrowAltCircleRight className='text-xl mt-[2px]'/>The <span className='font-bold'>Professional</span> selling plan costs #5,500 per sale</li>
                </ul>
                <p className='py-4 ml-[19%] font-semibold'>You can change or cancel your plan at anytime </p>
                <p className='w-[400px] ml-[19%] font-semibold'>3rdGB also collects <span className='hover:underline duration-500 hover: font-extrabold'>referral fee</span> on each item sold and other selling fees can apply in some cases</p>
                <a href="#" className='flex gap-3 ml-[19%] py-4 hover:translate-x-2 duration-500 font-bold'>Create your 3rdGB seller's account <TiLocationArrow className='hover:translate-y-3 duration-300 text-2xl' /> </a>
                </div>

                
                <div className="subt ml-5 px-6 w-[650px]">
                <p className='mt-[5%] flex gap-2 font-bold text-xl'><span className='font-bold  px-4'>Step 3.</span> Start selling :</p>
                <p className='w-[450px] font-semibold ml-[17%] opacity-70'>- We offer two type of selling plans so you can choose the right package of tools and services for the right price.</p>
                <ul className='ml-[20%] font-semibold opacity-70'>
                  <li className='flex gap-2 py-3'><FaArrowAltCircleRight className='text-xl mt-[2px]' />The <span className='font-bold'>Individual</span> selling plan costs #2,500 per sale</li>
                  <li className='flex gap-2 py-3'><FaArrowAltCircleRight className='text-xl mt-[2px]'/>The <span className='font-bold'>Professional</span> selling plan costs #5,500 per sale</li>
                </ul>
                <p className='py-4 ml-[19%] font-semibold'>You can change or cancel your plan at anytime </p>
                <p className='w-[400px] ml-[19%] font-semibold'>3rdGB also collects <span className='hover:underline duration-500 hover: font-extrabold'>referral fee</span> on each item sold and other selling fees can apply in some cases</p>
                <a href="#" className='flex gap-3 ml-[19%] py-4 hover:translate-x-2 duration-500 font-bold'>Learn how to sell <TiLocationArrow className='hover:translate-y-3 duration-300 text-2xl' /> </a>
                </div>
              </div>
              <div className='gs2 mr-8'>
                 <img src={img5} alt="" className='w-[390px] h-[400px] object-cover py-2 rounded-[20px]'/> 
                 <img src={img6} alt="" className='w-[390px] h-[400px] object-cover py-2 rounded-[20px]' />
                 <img src={img7} alt="" className='w-[390px] h-[400px] object-cover py-2 rounded-[20px]' />
              </div>
            </div>
             
          </div>
       <Footer/>
    </div>
  )
}

export default Discount
