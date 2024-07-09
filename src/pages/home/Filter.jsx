import React from 'react'
import ButtonFilter from '../../components/ButtonFilter'
import SortButton from '../../components/button/SortButton'

const Filter = () => {
  return (
    <>
      <div className=' w-full flex items-center justify-between py-8 bg-[#fcfcfc] mx-auto ' >
        <div className="w-[90%] flex flex-col lg:flex-row justify-between items-center mx-auto flex-none order-none self-stretch grow-0 p-0 gap-6">
         <div className=' lg:flex justify-between w-full sm:grid grid-cols-2'>
            <div className="flex flex-wrap justify-between ">
                    {arr.map((button, i) => {
                        return <ButtonFilter key={i} {...button} />;
                    })}
			</div>
            < SortButton />
        </div>

        </div>
       
      </div>
        
    </>
  )
}

const arr = [
	{
		text: "compatible",
	},
	{
		text: "compatible",
	},
	{
		text: "compatible",
	},
	{
		text: "compatible",
	},
	{
		text: "compatible",
    }
]; 

export default Filter
