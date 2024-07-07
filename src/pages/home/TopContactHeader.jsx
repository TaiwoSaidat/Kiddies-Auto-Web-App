import React from 'react'
import call from '../../assets/call.png'
import arrowDown from '../../assets/arrowdown.png'

const TopContactHeader = () => {
  return (
    <>
        <div className='h-14 bg-[#1E2019] text-white flex items-center '>
            <div className='w-[90%] mx-auto flex items-center justify-between'>
                {/* phone no */}
                <div className=' flex'>
                    <img src={call} alt="" />
                    <p>+234903874698</p>
                </div>

                <div className='sm:hidden md:hidden'>
                    <p>Get 10% off on selected items | Shop Now</p>
                </div>

                <div className='flex h-6 gap-6 '>
                    <div className='flex mx-5 gap-3'>
                        <p>Eng</p>
                        <div className=' flex w-6 h-6 items-center'>
                            <img src={arrowDown} alt="" />
                        </div>
                    </div>
                    
                    <div className='flex mx-5 gap-3'>
                        <p>Location</p>
                        <div className=' flex w-6 h-6 items-center'>
                            <img src={arrowDown} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TopContactHeader
