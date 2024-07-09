import React from 'react'
import ButtonFilter from '../../components/ButtonFilter'
import Card from '../../components/Card'
import east from '../../assets/easts.png'
import west from '../../assets/west.png'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'

const Cart = () => {
  return (
    <>
      <div>
        <div>
        
        </div>
        <div className=' w-full flex items-center justify-between py-8 bg-[#fcfcfc] mx-auto ' >
          <div className="w-[90%] flex flex-col mx-auto flex-none order-none  grow-0 p-0 gap-6">
            <div className=' flex justify-between  '>
              <div className=' lg:flex flex-row items-center '>
                {/* recommndation */}
                <div className='  flex gap-10'>
                  <h3 className=" font-semibold text-2xl my-6 ">Recommendations for you</h3>
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

export default Cart
