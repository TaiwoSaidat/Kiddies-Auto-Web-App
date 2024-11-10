import React from 'react'
import ButtonFilter from '../../components/ButtonFilter'
import SortButton from '../../components/button/SortButton'

const Filter = () => {
  return (
    <>
      <div className=" w-full flex items-center justify-between  bg-[#fcfcfc] ">
        <div className=" flex flex-col lg:flex-row justify-between items-center  ">
          <div className="grid grid-cols-2 justify-between items-center">
            <div className="flex flex-wrap justify-center ">
              {arr.map((button, i) => {
                return <ButtonFilter key={i} {...button} />;
              })}
            </div>
            <div className=" flex justify-end">
              <SortButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const arr = [
	{
		text: "compatible",
	},
	{
		text: "jeep",
	},
	{
		text: "motorbike",
	},
	{
		text: "Bicycle",
	},
	{
		text: "Brand",
    }
]; 

export default Filter
