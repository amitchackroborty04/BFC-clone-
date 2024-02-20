import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";



const Comment = () => {
  return (
    <div className='bg-[url("/banner3.jpg")] w-full h-[500px] bg-cover mt-[100px]'>
        <div className='w-full h-[500px] bg-[rgba(0,0,0,.8)]'>
        <div className='w-[1140px] mx-auto'>
            <div className='py-[150px]'>
            <h3 className='text-white font-oswald text-[22px] font-normal text-center  tracking-[2px]'>MR. SAKLAINE</h3>
            <ul className='flex justify-center gap-2 mt-4'>
                <li><FaStar  className='text-[#FEC70A]'/></li>
                <li><FaStar  className='text-[#FEC70A]'/></li>
                <li><FaStar  className='text-[#FEC70A]'/></li>
                <li><FaStar  className='text-[#FEC70A]'/></li>
                <li><FaStar  className='text-[#FEC70A]'/></li>
            </ul>
            <div className='text-center mt-[80px] relative'>
                <h2 className='text-white  font-railway text-[14px] font-normal'>Best Fried Chicken Items in the Town </h2>
                <FaQuoteLeft className='text-white text-2xl absolute top-[-6px] left-[421px]' />
                <FaQuoteRight className='text-white text-2xl absolute top-[-6px] right-[421px]' />
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Comment