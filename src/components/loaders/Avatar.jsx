import React from 'react'
import img1 from './../../assets/images/teach2.jpg'
import img2 from './../../assets/images/myface.jpg'
const Avatar = () => {
  return (
    <div className='mt-8  px-6 '>
     <div className="avatar-group -space-x-6 rtl:space-x-reverse ml-5">
  <div className="avatar">
    <div className="w-12">
      <img src={img2} />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src={img1} />
    </div>
  </div>
  <div className="avatar placeholder flex gap-3">
    <div className="bg-neutral text-neutral-content w-12">
      <span className='xl:text-lg sm:text-[9px]'>+15k</span>
    </div>

  </div>
  <span className='font-extrabold text-white xl:w-[470px] sm:w-[250px]  sm:text-[11px] xl:text-lg flex xl:left-10 sm:left-6  relative z-0 '>Visitors monthly , You can join Our Online community on Social-media</span>
</div>

    </div>
  )
}

export default Avatar
