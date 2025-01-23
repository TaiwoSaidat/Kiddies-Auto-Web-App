import React from 'react'
import ButtonFilter from '../../components/ButtonFilter'
import SortButton from '../../components/button/SortButton'

const Filter = () => {
  return (
    <>
      <div className="w-full px-4 lg:px-12 3xl:px-0 py-6  bg-[#fcfcfc] ">
          <div className="grid grid-cols-2 justify-between">
            <div className="flex flex-wrap  justify-start gap-3 ">
              {arr.map((button, i) => {
                return <ButtonFilter key={i} {...button} />;
              })}
            </div>
            <div className=" flex justify-end items-center">
              <SortButton />
            </div>
          </div>
      </div>
    </>
  );
}

const arr = [
	{
		text: "Compatible",
	},
	{
		text: "Jeep",
	},
	{
		text: "Motorbike",
	},
	{
		text: "Bicycle",
	},
	{
		text: "Brand",
    }
]; 

export default Filter
