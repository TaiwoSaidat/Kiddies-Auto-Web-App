import React from 'react'
// import BestDeals from './BestDeals'
import ButtonFilter from '../../components/ButtonFilter'
import Card from '../../components/Card'
import bolt from '../../assets/bolt.png'
import east from '../../assets/easts.png'
import west from '../../assets/west.png'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'
import image6 from '../../assets/image6.png'
import image7 from '../../assets/image7.png'
import image8 from '../../assets/image8.png'
import image9 from '../../assets/image9.png'
import image10 from '../../assets/image10.png'
import image11 from '../../assets/image11.png'
import image12 from '../../assets/image12.png'


const Products = () => {
  return (
    <>
      <div className=' w-full flex items-center justify-between py-8 bg-[#fcfcfc] mx-auto ' >
        <div className="w-[90%] flex flex-col mx-auto flex-none order-none  grow-0 p-0 gap-6">
          <div className=' flex justify-between  '>
            <div className=' lg:flex flex-row items-center '>
              {/* flash sales */}
              <div className='  flex gap-10'>
                <img src={bolt} alt="" className='w-20 h-20' />
                <h3 className=" font-semibold text-2xl my-6 ">Flash Sales</h3>
              </div>
              {/* red circles */}
              <div className='flex gap-4'>
                <h4 className="w-14 h-14 border rounded-full text-xl  text-[#F6F6F6] bg-[#EF4261] text-center py-3 ">07</h4>
                <h3 className="font-[800px] text-[52px] leading-9">:</h3>
                <h4 className="w-14 h-14 border rounded-full text-xl  text-[#F6F6F6] bg-[#EF4261] text-center py-3 ">10</h4>
                <h3 className="font-[800px] text-[52px] leading-9">:</h3>
                <h4 className="w-14 h-14 border rounded-full text-xl  text-[#F6F6F6] bg-[#EF4261] text-center py-3 ">43</h4>
              </div>
            </div>
            {/* arrows */}
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
      
      {/* Top Deals */}
      <div className=' w-full flex items-center justify-between py-8 bg-[#fcfcfc] mx-auto ' >
        <div className="w-[90%] flex flex-col mx-auto flex-none order-none  grow-0 p-0 gap-6">
          <div className=' flex justify-between  '>
            <div className=' flex flex-row items-center  gap-6 w-[459px] '>
                <div className=' w-full flex gap-10'>
                  <h3 className=" font-semibold text-2xl my-6 ">Today's best deal for you</h3>
                </div>
                <div className=' w-full flex items-center justify-between py-8 bg-[#fcfcfc] mx-auto ' >
                  <div className="w-[90%] flex flex-col lg:flex-row justify-between items-center mx-auto flex-none order-none self-stretch grow-0 p-0 gap-6">
                    <div className=' lg:flex justify-between w-full sm:grid grid-cols-2'>
                      <div className="flex flex-wrap justify-between ">
                              {array.map((button, i) => {
                                  return <ButtonFilter key={i} {...button} />;
                              })}
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          {/* Top Deals cards */}
          <div className="md:flex justify-between gap-3 grid grid-cols-1 lg:gap-3 w-full items-center ">
            {arrays.map((card, i) => {
              return <Card key={i} {...card} />;
            })}
          </div>
          <div className="md:flex justify-between gap-3 grid grid-cols-1 lg:gap-3 w-full items-center ">
            {arr1.map((card, i) => {
              return <Card key={i} {...card} />;
            })}
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center mb-10'>
        <div className="w-[143px] border rounded-[100px] text-base font-[400px]  text-[#696969] bg-[#ffffff] text-center py-2.5">
            <p className=''>Load More</p>		
        </div>
      </div>
      
    </>
  )
}

const arr = [
	{
		image: image1,
		text: "Thar 888 jeep, battery operated jeep",
    priceblack: "$200.00",
    pricered: "$260.00",
		rate: "7/10 Sales",
	},
	{
		image: image2,
		text: "Mercedes Benz 12V, battery operated ride",
    priceblack: "$270.00",
    pricered: "$300.00",
		rate: "7/10 Sales",
	},
	{
		image: image3,
		text: "super bike, battery operated",
    priceblack: "$90.00",
    pricered: "$110.00",
		rate: "7/10 Sales"
	},
	{
		image: image4,
		text: "Rolls Royce, battery operated ride",
    priceblack: "$300.00",
    pricered: "$320.00",
		rate: "7/10 Sales",
	},

];
const arrays = [
	{
		image: image5,
		text: "Ferrari, battery operated ride",
    priceblack: "$101.00",
    pricered: "$101.00",
		rate: "7/10 Sales",
	},
	{
		image: image6,
		text: "Rolls Royce, battery operated ride",
    priceblack: "$101.00",
    pricered: "$101.00",
		rate: "7/10 Sales"
	},
	{
		image: image7,
		text: "Kiddies power bike, battery operated ride",
    priceblack: "$101.00",
    pricered: "$101.00",
		rate: "7/10 Sales",
	},
  {
		image: image8,
		text: "Mercedes Benz 12V, battery operated ride",
    priceblack: "$101.00",
    pricered: "$101.00",
		rate: "7/10 Sales",
	},
];
const arr1 = [
	{
		image: image9,
		text: "24V Mercedes Benz Unimog",
    priceblack: "$101.00",
    pricered: "$101.00",
		rate: "7/10 Sales",
	},
	{
		image: image10,
		text: "Lamborghini Urus, battery operated ride",
    priceblack: "$101.00",
    pricered: "$101.00",
		rate: "7/10 Sales"
	},
	{
		image: image11,
		text: "Benz AMG G63 electric ride",
    priceblack: "$101.00",
    pricered: "$101.00",
		rate: "7/10 Sales",
	},
  {
		image: image12,
		text: "Rambo bicycle, for kids",
    priceblack: "$101.00",
    pricered: "$101.00",
		rate: "7/10 Sales",
	},
];

const array = [
	{
		text: "Best Seller",
	},
	{
		text: "Special Discount",
	},
	{
		text: "Official Store",
	},
	{
		text: "Coveted Product",
	},
]; 

export default Products
