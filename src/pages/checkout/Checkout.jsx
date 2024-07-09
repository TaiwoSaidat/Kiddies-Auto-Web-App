import React from 'react'
import { Link } from 'react-router-dom'
import ButtonFilter from '../../components/ButtonFilter'
import Button from '../../components/button/Button'
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

const Checkout = () => {
  return (
    <>
      <div className='border border-green-800 w-full flex flex-col items-center bg-[#ffffff]'>
        <div className='w-[90%] flex flex-row md:flex justify-between grid grid-cols-1 lg:gap-0 border '>
          {/* Checkout */}
          <div className=' flex flex-col md:flex grid grid-cols-1 lg:gap-0 lg:w-[50%]  m-4 border rounded-xl bg-[#FAFAFA]'>
                {/* flex justify-between bg-yellow-600 grid grid-col-1  */}
                <h3 className='font-[600px] text-[32px] my-2'>Checkout</h3>
                <h5 className='font-[600px] text-[24px] my-2' >How would your like your order</h5>
                <div className='flex flex-row justify-between my-2'>
                  {/* later up flex-col items-center flex md:flex-row justify-between */}
                  <button>
                  <Link to='/checkout'> 
                    <div className="md:w-[250px] w-[143px] border border-[#840032] rounded-[100px] text-xs font-[400px] leading-[1.6] text-[#f8f8f8] bg-[#840032] text-center py-2">
                      <p className=''>Delivery</p>		
                    </div>
                    </Link>
                  </button>
                  <button>
                    <Link to='/checkout'>
                      <div className="md:w-[250px] w-[143px] border border-[#840032] rounded-[100px] text-xs font-[400px] leading-[1.6] text-[#840032] bg-[#f8f8f8] text-center py-2">
                        <p className=''>Payment on Delivery</p>		
                      </div>
                    </Link>
                  </button>
                </div>
                {/* end of heading */}
                {/* form */}
                <div className='flex flex-col  '>
                  <h5 className=" className='font-[600px] text-[24px]">Enter your details</h5>
                  <div>
                  <form action="#">
                    <div className='my-2'>
                      <label className="  input input-bordered rounded-3xl items-center text-[#696969]  ">
                          <input type="text"
                              className=" "
                              placeholder="First Name"/> 
                      </label>
                      <label className=" input input-bordered rounded-3xl items-center text-[#696969] ">
                          <input type="text"
                              className=" "
                              placeholder="Last Name"/> 
                      </label>
                    </div>
                    <div>
                      <label className=" w-[85%] flex h-6 input input-bordered rounded-3xl items-center text-[#696969] gap-0 my-2 ">
                          <input
                              type="text"
                              className=" "
                              placeholder="Email address"
                          /> 
                      </label>
                      <label className="w-[85%] flex h-6 input input-bordered rounded-3xl items-center text-[#696969] gap-0 my-2 ">
                          <input
                              type="text"
                              className=" "
                              placeholder="Address"
                          /> 
                      </label>
                      <div className='my-2'>
                      <label className="  input input-bordered rounded-3xl items-center text-[#696969] ">
                          <input type="text"
                              className=" "
                              placeholder="City"/> 
                      </label>
                      <label className=" input input-bordered rounded-3xl items-center text-[#696969]">
                          <input type="text"
                              className=" "
                              placeholder="Post Code"/> 
                      </label>
                    </div>
                      <div>
                        <label className=" input input-bordered rounded-3xl items-center text-[#696969] my-2">
                        <select name="" id="">
                          <option value="" className=''disabled selected>State/Province</option>
                          <option value="" className=''>State/Province</option>
                          <option value="" className=''>State/Province</option>
                          <option value="" className=''>State/Province</option>
                          <option value="" className=''>State/Province</option>
                          <option value="" className=''>State/Province</option>
                      </select>
                      </label>

                      <label className=" input input-bordered rounded-3xl items-center text-[#696969] my-2">
                        <select name="" id="">
                          <option value="" className='' disabled selected>Country</option>
                          <option value="" className=''>Country</option>
                          <option value="" className=''>Country</option>
                          <option value="" className=''>Country</option>
                          <option value="" className=''>Country</option>
                          <option value="" className=''>Country</option>
                        </select>
                      </label>
                      </div>
                      <div>
                    </div>
                    <div>
                      <button className=' my-2'>
                        <Link to='/checkout'>
                            <div className="">
                            <p className="   md:w-[250px] w-[143px] border rounded-[100px] text-xs font-[400px] leading-[1.6] text-[#696969] bg-[#f6f6f6] text-center py-2">
                            Save and Continue</p>
                            </div>
                        </Link>
                      </button>
                    </div>
                    </div>
                  </form>
                  {/* end of form */}
                  </div>
                </div>

          </div>

          {/* Summmary */}
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
                  <h3 className="font-[600px] text-2xl">$0.00</h3>
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

              
            </div>
  
          
            
  
          </div> 
        </div>
      </div>
    </>
  )
}

export default Checkout
