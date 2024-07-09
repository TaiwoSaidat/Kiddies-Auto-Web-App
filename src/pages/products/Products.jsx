import React from 'react'
import Card from '../../components/Card'
import jeep from '../../assets/jeep2.png'
import bolt from '../../assets/bolt.png'
import east from '../../assets/easts.png'
import west from '../../assets/west.png'

const Products = () => {
  return (
    <>
      <div className=' w-full flex items-center justify-between py-8 bg-[#fcfcfc] mx-auto ' >
        <div className="w-[90%] flex flex-col mx-auto flex-none order-none  grow-0 p-0 gap-6">
          <div className=' flex justify-between  '>
            <div className=' lg:flex flex-row items-center  gap-6 w-[459px] '>
              <div className=' w-full flex gap-10'>
                <img src={bolt} alt="" className='' />
                <h3 className=" font-semibold text-2xl my-6 ">Flash Sales</h3>
              </div>
              <div className='flex gap-4'>
                <h4 className="w-14 h-14 border rounded-full text-xl  text-[#F6F6F6] bg-[#EF4261] text-center py-3 ">07</h4>
                <h3 className="font-[800px] text-[52px] leading-9">:</h3>
                <h4 className="w-14 h-14 border rounded-full text-xl  text-[#F6F6F6] bg-[#EF4261] text-center py-3 ">10</h4>
                <h3 className="font-[800px] text-[52px] leading-9">:</h3>
                <h4 className="w-14 h-14 border rounded-full text-xl  text-[#F6F6F6] bg-[#EF4261] text-center py-3 ">43</h4>
              </div>
            </div>
            <div className="">
              <ul className='flex gap-2 items-center h-full   '>
                <li><a href="">
                  <img src={east} alt="" />
                </a></li>
                <li ><a href="">
                  <img src={west} alt="" />
                </a></li>
              </ul>
            </div>
          </div>

          {/* cards */}
          <div className="md:flex justify-between gap-3 grid grid-cols-1 lg:gap-3 w-full items-center ">
            {arr.map((card, i) => {
              return <Card key={i} {...card} />;
            })}
          </div>

        </div>
       
      </div>
      
    </>
  )
}

const arr = [
	{
		image: jeep,
		text: "Thar 888 jeep, battery operated jeep",
    priceblack: "$200.00",
    pricered: "$260.00",
		rate: "7/10 Sales",
		price: "From ₦20,000 ",
	},
	{
		image: jeep,
		text: "Thar 888 jeep, battery operated jeep",
    priceblack: "$200.00",
    pricered: "$260.00",
		rate: "7/10 Sales",
		price: "From ₦20,000 ",
	},
	{
		image: jeep,
		text: "Thar 888 jeep, battery operated jeep",
    priceblack: "$200.00",
    pricered: "$260.00",
		rate: "7/10 Sales",
		price: "From ₦20,000 ",
	},
	{
		image: jeep,
		text: "Thar 888 jeep, battery operated jeep",
    priceblack: "$200.00",
    pricered: "$260.00",
		rate: "7/10 Sales",
		price: "From ₦20,000 ",
	},

];

export default Products
