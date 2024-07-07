import React from 'react'
import car1 from '../../assets/5 1.png'
import Button from '../../components/button/Button'

const Hero = ({}) => {
  return (
    <>
      <div className=' w-full flex items-center justify-between py-8 bg-[#fcfcfc] ' >
        <div className="w-[90%] flex flex-col lg:flex-row justify-between items-center mx-auto flex-none order-none self-stretch grow-0 p-0">
          <div className=' w-[579px] '>
            <h1 className='font-bold text-7xl'>Luxury Rides for Little Drivers</h1>
            <p className=' font-normal text-xl'>Our kids' luxury automobiles are designed to offer an 
              unparalleled driving experience that captivates both children and parents alike.
            </p>
            <Button />
          </div>
          <div>
            <img src={car1} alt="" />
          </div>
        </div>
      </div>

      
    </>
  )
}

export default Hero
