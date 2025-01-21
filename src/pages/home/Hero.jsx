import React from 'react'
import car1 from '../../assets/5 1.png'
import Button from '../../components/button/Button'
// import ButtonFilter from '../../components/ButtonFilter'


const Hero = ({}) => {
  return (
    <>
      <div className=" w-full px-4 lg:px-12 3xl:px-0 py-3 bg-[#fcfcfc]  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center border-2 gap-6">
          <div className=" ">
            <h1 className="font-bold text-4xl md:text-7xl lg:text-9xl mb-6">
              Luxury Rides for Little Drivers
            </h1>
            <p className=" font-normal text-lg md:text-xl lg:text-3xl mb-6">
              Our kids' luxury automobiles are designed to offer an unparalleled
              driving experience that captivates both children and parents
              alike.
            </p>
            <Button />
          </div>
          <div className=" flex justify-end ">
            <img src={car1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero
