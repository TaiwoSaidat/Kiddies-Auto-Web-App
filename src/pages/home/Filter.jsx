import React from 'react'
import ButtonFilter from '../../components/ButtonFilter'
import SortButton from '../../components/button/SortButton'

const Filter = () => {
  return (
    <>
      {/* flex items-center justify-between  */}
      <div className="w-full px-4 lg:px-12 3xl:px-0 py-3  bg-[#fcfcfc] ">
        {/* flex  flex-col lg:flex-row justify-between items-center  */}
        {/* <div className="  "> */}
          {/* justify-between items-center */}
          <div className="grid grid-cols-2 justify-between">
            <div className="flex flex-wrap  justify-start gap-3 ">
              {arr.map((button, i) => {
                return <ButtonFilter key={i} {...button} />;
              })}
            </div>
            <div className=" flex justify-end">
              <SortButton />
            </div>
          </div>
        {/* </div> */}
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
