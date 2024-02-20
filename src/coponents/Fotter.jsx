import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";

const Fotter = () => {
    return (
        <div className='bg-[url("/banner2.jpg")] w-full h-screen bg-cover mt-[150px] '>
            <div className='w-full h-screen mx-auto bg-[rgba(0,0,0,.8)]'>
                <div className='w-[1140px] mx-auto'>
                    <div className='py-[100px]'>
                    <div className='flex'>
                        <div>
                            <h3 className='text-[38px] font-oswald font-bold text-[#D1A50D]'>HB</h3>
                        </div>
                        <div className='ml-[200px]'>
                            <div className='border-b border-[#d2bdbd] w-[500px]'>
                                <h4 className='text-[19px] font-oswald text-white font-normal tracking-[2px] pb-3'>OUTLET OPENING HOURS</h4>
                            </div>
                            <div className='border-b border-[#d2bdbd] w-[500px] mt-6'>
                                <h4 className='text-[14px] font-oswald text-white font-normal tracking-[2px] pb-3'>Saturday - Friday 10.00 am - 10.00 pm</h4>
                            </div>
                        </div>

                        <div className='ml-10'>
                            <h3 className='text-[19px] font-oswald text-white font-normal tracking-[2px] pb-3'>CONTACT US</h3>
                            <h3 className='text-[14px] font-oswald text-white font-normal tracking-[2px] pb-3'>info@bfcbd.com <br/>
                            <br/>
                                09666 70 77 70 <br/>
                                <br/>
                                House 56/1, Road-1, Block-C, Section -13 <br/>
                                <br/>
                                Mirpur, Dhaka 1216
                            </h3>
                        </div>
                    </div>
                    <h4 className='text-center font-oswald text-[16px] font-normal text-white mt-[100px] tracking-[2px]'>© 2002 BFC. All Rights Reserved | Powered by BFC IT Team</h4>
                    <div className='flex justify-center  mt-[50px]'>
                    <ul className='flex gap-7 '>
                  <li><FaFacebookF className='text-white' /></li>
                  <li><IoLogoTwitter className='text-white' /></li>
                  <li><FaGooglePlusG className='text-white' /></li>
                  <li><FaLinkedinIn className='text-white' /></li>
                  <li><BsBrowserChrome  className='text-white' /></li>
                    </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fotter