import React from 'react'
import { Link } from 'react-router-dom'
import ButtonFilter from '../../components/ButtonFilter'
import Button from '../../components/button/Button'
import Card from '../../components/Card'
import east from '../../assets/easts.png'
import west from '../../assets/west.png'
import topImage from '../../assets/topImage.png'
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
      <div className='border w-full flex flex-col items-center bg-[#ffffff]'>
        <div className='w-[90%] flex flex-row md:flex justify-between grid grid-cols-1 lg:gap-0 border '>
          {/* Checkout */}
          <div className=' flex flex-col md:flex grid grid-cols-1 lg:gap-0 lg:w-[50%]  m-4 border rounded-xl bg-[#FAFAFA] px-3'>
                {/* flex justify-between bg-yellow-600 grid grid-col-1  */}
                <h3 className='font-[600px] text-[32px] my-2'>Checkout</h3>
                <h5 className='font-[600px] text-[24px] my-2' >How would your like your order</h5>
                <div className='flex flex-row justify-between my-2'>
                  {/* later up flex-col items-center flex md:flex-row justify-between */}
                  <button>
                  <Link to='/checkout'> 
                    <div className="md:w-[250px] w-[140px] border border-[#840032] rounded-[100px] text-xs font-[400px] leading-[1.6] text-[#f8f8f8] bg-[#840032] text-center py-2">
                      <p className=''>Delivery</p>		
                    </div>
                    </Link>
                  </button>
                  <button>
                    <Link to='/checkout'>
                      <div className="md:w-[250px] w-[140px] border border-[#840032] rounded-[100px] text-xs font-[400px] leading-[1.6] text-[#840032] bg-[#f8f8f8] text-center py-2">
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
                    <div className='my-2  '>
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
                      <button className='w-[100%] '>
                        <Link to='/checkout'>
                            <div className="flex mt-12 justify-end">
                              
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
                </div>
                <h3 className="font-[600px] text-2xl">$315.00</h3>
              </div>
                {/* mercedes */}
              <div className=' hidden lg:flex justify-between  '>
                <div className=' w-[100%] lg:flex flex-col items-center gap-1 '>
                  {/* heading */}
                    <p>Arrives mon, sept 10 - fri, sept 15</p>                  
                  {/* <div className=""> */}
                  <div className='  w-[90%] flex flex-row md:flex justify-center gap-20 '>
                    <img src={topImage} alt="" className='w-auto h-30'/> 
                    <div>
                      <p className='font-[500px] text-[24px]'>Mercedes Benz Cls</p>
                      <div className='font-[400px] text-[16px] py-3'>
                        <p>battery operated ride</p>
                        <p>Colour: black</p>
                        <p>Quantity: 1</p>
                      </div>
                    </div>
                    </div>                  
                </div>              
              </div>
            </div>        
        </div>

        {/* Recommendations  w-full flex items-center justify-between py-8 bg-[#fcfcfc] mx-auto */}

      </div>
      <div className='lg:px-12'>
        <div className='flex flex-col items-start gap-8   h-[786.2px] p-6 rounded-3xl left-20 top-[1047px] bg-yellow-800' >
          <div className="w-[90%] lg:w-[45%] flex flex-col p-2 bg-red-500 ">
            {/* flex flex-col mx-auto flex-none order-none  grow-0 p-0 gap-6 */}
            <h3 className='font-[600px] text-[32px]'>Payment</h3>
            <div>
              <p>Billing country/Region</p>
              <p>Nigeria</p>
              <span>Edit</span>
              {/* checkbox */}
              <p>Do you have a gift card, product voucher or promo code?</p>
            </div>
            <div className="">
              <p>Select payment method</p>
              {/* radio */}
              <p>Credit or Debit Card</p>
              <p>paypal</p>
              <p>Gpay</p>
            </div>
            <div>
              <h5>Add Card</h5>
              <div>
                <div>
                  <p>Card Number</p>
                  {/* input */}
                </div>
                <div>
                  <p>Expiration Date</p>
                  {/* input */}
                </div>
                <div>
                  <p>CVV</p>
                  {/* input */}
                </div>
              </div>
            </div>
            {/* order review */}
            <div className=' '>
              <h3 className='font-[600px] text-[32px]'>Order Review</h3>
              {/* <div className=''> */}
                <p className=''>
                  By clicking The “place order” button, you confirm that you 
                  have read, understand, and accept our  
                  {/* <div> */}
                    <Link to='/checkout' className='link link-hover font-medium'> Terms of Use</Link>
                    <span> , </span>
                    <Link to='/checkout' className='link link-hover font-medium'>Terms of Sale</Link>
                    <span> , </span>
                    <Link to='/checkout' className='link link-hover font-medium'>Privacy Policy</Link> 
                    <span> and </span>
                    <Link to='/checkout' className='link link-hover font-medium'>Return Policy</Link>
                    <span>.</span>
                  {/* </div> */}
                
                </p>
              {/* </div> */}
                  <Link to='/checkout'>
                            <div className="flex mt-12 justify-end">                            
                            <p className="   md:w-[250px] w-[143px] border border-[#840032] rounded-[100px] text-xs font-[400px] leading-[1.6] text-[#f8f8f8] bg-[#840032] text-center py-2">
                            Place Order</p>
                            </div>
                        </Link>
            </div>

            {/* flex justify-between */}
            {/* <div className=' w-[100%] flex  bg-yellow-400 '> */}
              {/* hello */}
              {/* <div className=' lg:flex flex-row items-center bg-green-500 '>
                <div className='  flex flex-col gap-5'>
                  <p>Arrives mon, sept 10 - fri, sept 15</p>
                  <h3 className=" font-semibold text-2xl my-6 ">Recommendations for you</h3>
                </div>   
              </div>              
              <div className=' lg:flex flex-row items-center bg-green-500 '>
                <div className='  flex flex-col gap-5'>
                  <p>Arrives mon, sept 10 - fri, sept 15</p>
                  <h3 className=" font-semibold text-2xl my-6 ">Recommendations for you</h3>
                </div>   
              </div>               */}
            {/* </div>        */}
          </div> 
        </div>
      </div>
    </>
  )
}

export default Checkout
