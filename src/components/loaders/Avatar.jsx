import React from 'react'
import img1 from './../../assets/images/teach2.jpg'
import img2 from './../../assets/images/myface.jpg'
const Avatar = () => {
  return (
    <div className='mt-8 ml-[50%]'>
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
      <span>+15k</span>
    </div>

  </div>
  <span className='font-extrabold text-white w-[370px]  flex left-10  relative '>Visitors monthly , You can join Our Online community on Social-media</span>
</div>

    </div>
  )
}

export default Avatar
