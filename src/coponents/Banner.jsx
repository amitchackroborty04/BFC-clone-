import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";

const Banner = () => {
  return (

    <div className='bg-[url("/banner1.jpg")] w-full h-screen bg-cover '>
        <div className='w-full h-screen mx-auto bg-[rgba(0,0,0,.5)]'>
          <div className='w-[1140px] mx-auto'>
            <div className='text-center mx-auto pt-[18em]'>
              <h3 className='font-oswald text-[1.2em] text-white font-light tracking-[7px]'>BFC (BEST FRIED CHICKEN)</h3>
              <button className='text-[14px] text-white font-bold bg-[#A10D01] tracking-[2px] py-[0.8em] px-[3em] mt-[1.2em] '>ORDER NOW</button>
            </div>
            <div className='pt-[150px]'>
            <div className='flex justify-between'>
              <div>
                <ul className='flex gap-7'>
                  <li><FaFacebookF className='text-white' /></li>
                  <li><IoLogoTwitter className='text-white' /></li>
                  <li><FaGooglePlusG className='text-white' /></li>
                  <li><FaLinkedinIn className='text-white' /></li>
                  <li><BsBrowserChrome  className='text-white' /></li>
                </ul>
              </div>
              <div className='relative'>
                <IoIosCall  className='text-white absolute top-1 left-[-20px]'/>
                <h2 className='font-oswald text-white text-[1em] tracking-[3px] font-bold'> ORDER NOW : 09666 70 77 70</h2>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
    
    
  )
}

export default Banner