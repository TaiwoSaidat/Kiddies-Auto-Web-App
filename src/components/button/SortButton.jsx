import React from 'react'
import arrow from '../../assets/arrowdownblack.png'

const SortButton = () => {
  return (
    <>
      <div className=" flex justify-center items-center  py-2 px-6 border rounded-[100px] text-base font-[400px]  text-[#696969] bg-[#F6F6F6]">
        <p className="">Sort By</p>
        <img src={arrow} alt="" className="w-10 h-10" />
      </div>
    </>
  );
}

export default SortButton
