import React from 'react'
import { GiQueenCrown } from "react-icons/gi";

const Summarycard = (sc) => {
  return (
    <div>
      <div className="flex xl:w-52 flex-col xl:gap-6 xl:ml-0 sm:ml-[-22%] sumcard dark:text-black">
      <div className="flex items-center gap-4">
      <div className="skeleton xl:h-24 xl:w-24 sm:w-12 sm:h-12 shrink-0 rounded-full">
        <img src={sc.img} alt="" className='h-full w-full  object-cover rounded-full' />
        
        </div>
       <div className="flex flex-col xl:gap-4 sm:gap-2">
      <div className="skeleton xl:h-8 sm:h-4 xl:w-44 sm:w-24 xl:px-4 flex justify-center xl:text-[14px] sm:text-[9px] font-bold xl:pt-1">{sc.name}</div>
      <div className="skeleton xl:h-8 sm:h-3 xl:w-28 sm:w-11 flex justify-center font-extrabold xl:text-lg sm:text-[7px] ">
        <GiQueenCrown className='text-yellow-400 xl:mt-[6px] sm:mt-[2px]' />{sc.rank}</div>
    </div>
  </div>
  <div className="skeleton h-32 w-full px-4 items-center xl:text-[14px] sm:text-[9px] flex">
  {sc.rev}
  </div>
</div>
    </div>
  )
}

export default Summarycard
