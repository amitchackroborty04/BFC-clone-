import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { IoIosPhonePortrait } from "react-icons/io";


const Contact = () => {
    return (
        <div className='w-[1140px] mx-auto'>
            <h3 className='text-center font-oswald text-[36px] mt-[70px]'>CONTACT US</h3>
            <div className='flex justify-between mt-[150px]'>
                <div>
                    <div className='flex justify-between'>
                        <div>
                            <IoLocationSharp className='text-[#46484C] text-2xl' />
                        </div>
                        <div className='ml-8'>
                            <h3 className='text-[#17202A] font-oswald tracking-[2px] text-[16px]'>HOUSE 56/1,</h3>
                            <p className='text-[#5A646B] font-oswald tracking-[2px] text-[14px] mt-5'>Road-1, Block-C, Section -13 <br/>
                            Mirpur, Dhaka-1216.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <div>
                            <TfiEmail className='text-[#46484C] text-2xl' />
                        </div>
                        <div className='ml-8'>
                            <h3 className='text-[#17202A] font-oswald tracking-[2px] text-[16px]'>HOUSE 56/1,</h3>
                            <p className='text-[#5A646B] font-oswald tracking-[2px] text-[14px]  mt-5'>Road-1, Block-C, Section -13 <br/>
                            Mirpur, Dhaka-1216.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <div>
                            <IoIosPhonePortrait className='text-[#46484C] text-2xl' />
                        </div>
                        <div className='ml-8'>
                            <h3 className='text-[#17202A] font-oswald tracking-[2px] text-[16px]'>HOUSE 56/1,</h3>
                            <p className='text-[#5A646B] font-oswald tracking-[2px] text-[14px]  mt-5'>Road-1, Block-C, Section -13 <br/>
                            Mirpur, Dhaka-1216.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact