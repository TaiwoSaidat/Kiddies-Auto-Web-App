import React from 'react'
import { Link } from 'react-router-dom'
import ButtonFilter from '../../components/ButtonFilter'
import Card from '../../components/Card'
import east from '../../assets/easts.png'
import west from '../../assets/west.png'
import topImage from '../../assets/5 1.png'
import fav from '../../assets/favorite.png'
import help from '../../assets/help.png'
import plus from '../../assets/plus.png'
import dash from '../../assets/dash.png'
import basket from '../../assets/basket.png'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import search from '../../assets/searchblack.png'

const Cart = () => {
  return (
    <>
    {/* grid-col-2 lg:grid grid-col-1 mx-auto flex-none order-none  grow-0 p-0 gap-6 */}
      <div className='border border-green-800 w-full flex flex-col items-center bg-[#ffffff]'>
        <div className='w-[90%] flex flex-row md:flex justify-between grid grid-cols-1 lg:gap-0 border border-red-600 '>
          <div className=' flex flex-row md:flex justify-between grid grid-cols-1 lg:gap-0 lg:w-[50%] bg-[#FAFAFA] border border-xl'>
              <div>
                {/* flex justify-between bg-yellow-600 grid grid-col-1  */}
                <img src={fav} alt="" className=''/>
                <img src={topImage} alt="" /> 
              </div>
              <div className='flex justify-between bg-gray-400'>
                <p>Mercedes Benz Cls</p> 
                <p>$270.00</p> 
              </div>
              <div>
                <p>battery operated ride</p>
                <p>Age 1-3 years</p>
                <p>Colour black</p>
              </div>
              <div className='flex gap-20 px-6 pr-4'>
                <div className='flex w-[50%] justify-between '>
                  <a href=""><img src={fav} alt="" /></a>
                  <a href=""><img src={basket} alt="" /></a>
                </div>
                <div className='flex w-[50%] justify-between '>
                <a href=""><img src={dash} alt="" /></a>
                  <p>1</p>
                  <a href=""><img src={plus} alt="" /></a>
                </div>
              </div>
          </div>

          <div className='lg:w-[50%] m-4 bg-[#FAFAFA] border rounded-xl '>
              <h3 className='font-[600px] text-[32px]'>Summary</h3>
              <div>
                <div className=' flex justify-between '>
                  <div className='flex gap-2 font-[500px] text-base'>
                    <p>Subtotal </p>
                    <img src={help} alt="" />
                  </div>
                  <h3 className="font-[600px] text-2xl">$270.00</h3>
                </div>
                <div className=' flex justify-between'>
                  <div className='flex gap-2 font-[500px] text-base '>
                    <p>Estimated delivery and handling </p>
                    {/* <img src={help} alt="" /> */}
                  </div>
                  <h3 className="font-[600px] text-2xl">$40.00</h3>
                </div>
                <div className=' flex justify-between'>
                  <div className='flex gap-2 font-[500px] text-base w-[50%] '>
                    <p>Estimated Taxes </p>
                    <img src={help} alt="" />
                  </div>
                  <h3 className="font-[600px] text-2xl">$5.00</h3>
                </div>
                <div className=' flex justify-between'>
                  <div className='flex gap-2 font-[500px] text-base '>
                    <p>Promo code </p>
                    <img src={help} alt="" />
                  </div>
                  {/* <p>$270.00</p> */}
                </div>
              </div>
              <div className='mt-2' >
                <form action="#">
                    <label className=" flex h-8 input input-bordered rounded-3xl items-center gap-0  ">
                        <input
                            type="text"
                            className=" "
                            placeholder="Enter your promo code"
                        /> 
                    </label>
                </form>
              </div>

              <div className='flex justify-between my-4'>
                <div className='flex gap-2 font-[500px] text-base '>
                  <p>Total </p>
                  {/* <img src={help} alt="" /> */}
                </div>
                <h3 className="font-[600px] text-2xl">$315.00</h3>
              </div>
              <div className=' flex flex-col items-center justify-center'>
                <button>
                  <Link to='/checkout'>
                      <div className="md:w-[250px] w-[143px] border border-[#840032] rounded-[100px] text-xs font-[400px] leading-[1.6] text-[#f8f8f8] bg-[#840032] text-center py-2">
                        <p className=''>Check out your cart</p>		
                      </div>
                  </Link>
                </button>
                <button>
                  <a href=""> 
                    <div className="md:w-[250px] w-[143px] border border-[#840032] rounded-[100px] text-xs font-[400px] leading-[1.6] text-[#840032] bg-[#f8f8f8] text-center py-2">
                      <p className=''>Paypal</p>		
                    </div>
                  </a>
                </button>
              </div>
          </div>
        </div>

        {/* Recommendations */}
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
