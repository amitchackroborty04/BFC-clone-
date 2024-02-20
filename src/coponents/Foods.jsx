import React from 'react'

const Foods = () => {
  return (
    <div className='bg-[#C20D00]'>
        <div className='w-[1140px] mx-auto'>
            <h3 className=' pt-[90px] font-oswald text-[36px] font-normal text-center text-white'>WHAT KIND OF FOODS WE SERVE FOR YOU</h3>
            <div className='flex justify-between py-[100px]'>
                <div>
                    <img className='w-[160px] rounded-full' src="1.png" alt="1" />
                    <h3 className='text-center font-oswald text-[16px] font-normal  text-[#FFC807] mt-5'>CRISPY FRIED CHICKEN</h3>
                    <h2 className='text-center font-oswald text-[16px] font-normal  text-[white]'>Price Starts from BDT ৳120</h2>
                </div>
                <div>
                <img className='w-[160px] rounded-full' src="2.png" alt="1" />
                <h3 className='text-center font-oswald text-[16px] font-normal  text-[#FFC807] mt-5'>BURGER</h3>
                    <h2 className='text-center font-oswald text-[16px] font-normal  text-[white]'>Price Starts from BDT ৳175</h2>
                </div>
                <div>
                <img className='w-[160px] rounded-full' src="3.png" alt="1" />
                <h3 className='text-center font-oswald text-[16px] font-normal  text-[#FFC807] mt-5'>RICE ITEMS</h3>
                    <h2 className='text-center font-oswald text-[16px] font-normal  text-[white]'>Price Starts from BDT ৳200</h2>
                </div>
                <div>
                <img className='w-[160px] rounded-full' src="4.png" alt="1" /> <h3 className='text-center font-oswald text-[16px] font-normal  text-[#FFC807] mt-5'>SIDE ITEMS</h3>
                    <h2 className='text-center font-oswald text-[16px] font-normal  text-[white]'>Price Starts from BDT ৳65</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Foods