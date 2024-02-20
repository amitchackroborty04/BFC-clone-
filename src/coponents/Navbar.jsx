import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

const navbar = () => {
  return (
    <div className='w-[1140px]'>
      <div className='absolute top-10 right-11 '>
        <ul className='flex gap-[54px]'>
          <li className='font-oswald text-[16px] font-normal text-[white] leading-[24px] tracking-[3px] hover:text-[#D4A40A] hover:text-[14px] transition-[4s]'>HOME</li>
          <li className='font-oswald text-[16px] font-normal text-[white] leading-[24px] tracking-[3px] hover:text-[#D4A40A] hover:text-[14px] transition-[4s]'>ABOUT</li>
          <li className='font-oswald text-[16px] font-normal text-[white] leading-[24px] tracking-[3px] hover:text-[#D4A40A] hover:text-[14px] transition-[4s]'>MENU</li>

          <div>
          <li className='font-oswald text-[16px] font-normal text-[white] leading-[24px] tracking-[3px]'>DROPDWON</li>
          </div>

          <li className='font-oswald text-[16px] font-normal text-[white] leading-[24px] tracking-[3px] hover:text-[#D4A40A] hover:text-[14px] transition-[4s]'>SEND FEEDBACK </li>
          <li className='font-oswald text-[16px] font-normal text-[white] leading-[24px] tracking-[3px] hover:text-[#D4A40A] hover:text-[14px] transition-[4s]'>REVIWES</li>
          <li className='font-oswald text-[16px] font-normal text-[white] leading-[24px] tracking-[3px] hover:text-[#D4A40A] hover:text-[14px] transition-[4s]'>CONTACT</li>

        </ul>
      </div>
    </div>
  )
}

export default navbar