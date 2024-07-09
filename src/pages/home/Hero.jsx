import React from 'react'
import car1 from '../../assets/5 1.png'
import Button from '../../components/button/Button'
import ButtonFilter from '../../components/ButtonFilter'


const Hero = ({}) => {
  return (
    <>
      <div className=' w-full flex items-center justify-between py-8 bg-[#fcfcfc] mx-auto ' >
        <div className="w-[90%] flex flex-col lg:flex-row justify-between items-center mx-auto flex-none order-none self-stretch grow-0 p-0 gap-6">
          <div className=' w-[579px] mx-auto '>
            <h1 className='font-bold text-7xl mb-6'>Luxury Rides for Little Drivers</h1>
            <p className=' font-normal text-xl mb-6'>Our kids' luxury automobiles are designed to offer an 
              unparalleled driving experience that captivates both children and parents alike.
            </p>
            <Button />
          </div>
          <div>
            <img src={car1} alt="" />
          </div>

        </div>
       
      </div>
      {/* <ButtonFilter /> */}


     

      
    </>
  )
}

export default Hero
