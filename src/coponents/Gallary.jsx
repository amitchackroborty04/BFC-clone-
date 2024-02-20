import React from 'react'

const Gallary = () => {
  return (
    <div>
        <div className='w-[1140px] mx-auto'>
        <h3 className='text-center font-oswald text-[36px] font-normal mt-[70px]'>OUR GALLERY</h3>
            <div className='flex justify-between mt-[50px]'>
                
                <div>
                    <img src="1.png" alt="1" />
                </div>
                <div>
                <img src="2.png" alt="1" />
                </div>
                <div>
                <img src="3.png" alt="1" />
                </div>
                <div>
                <img src="4.png" alt="1" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallary