import React from 'react'
import { FaGlobe,FaFacebook,FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='bg-red-500 pt-7 pb-14 flex flex-col items-center gap-5 md:flex-row md:justify-around mt-6'>
      <p className='flex items-end gap-4 text-white font-semibold'><span className='rounded-full bg-white'><FaPhoneAlt size={35} className='text-red-500 px-2 py-2'/></span>www.facebook.com/cripumps</p>
        <p className='flex items-end gap-4 text-white font-semibold'><FaFacebook size={35} color='white'/>www.facebook.com/cripumps</p>
        <p className='flex items-end gap-4 text-white font-semibold'><FaGlobe size={35} color='white'/>www.crigroups.com</p>
    </div>
  )
}

export default Footer