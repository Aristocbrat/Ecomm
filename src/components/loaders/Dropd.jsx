import React from 'react'

const Dropd = () => {
  return (
    <div>
      <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn  bg-[#1f4550] text-white">Sign-up</div>
  <ul tabIndex={0} className="dropdown-content menu rounded-box z-50 bg-[#1f4550] w-32 p-2 shadow">
    <li><a>Premium</a></li>
    <hr className="p-1 border-white" />
    <li><a>Regular</a></li>
    <hr className="p-1 border-white" />
    <li><a>Newbie</a></li>
  </ul>
</div>
    </div>
  )
}

export default Dropd
