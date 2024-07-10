import React from 'react'
import { Link } from 'react-router-dom'
// import ButtonFilter from '../../components/ButtonFilter'
// import Button from '../../components/button/Button'
// import Card from '../../components/Card'
// import east from '../../assets/easts.png'
// import west from '../../assets/west.png'
import topImage from '../../assets/topImage.png'
import help from '../../assets/help.png'
import creditCard from '../../assets/credit_card.png'
import gpay from '../../assets/gpay.png'
import pp from '../../assets/pp.png'
import box from '../../assets/box.png'
// import paypal from '../../assets/paypal.svg'
// import fav from '../../assets/favorite.png'
// import plus from '../../assets/plus.png'
// import dash from '../../assets/dash.png'
// import basket from '../../assets/basket.png'
// import image1 from '../../assets/image1.png'
// import image2 from '../../assets/image2.png'
// import image3 from '../../assets/image3.png'
// import image4 from '../../assets/image4.png'

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
                    <img src={help} alt="" className='w-5 h-5'/>
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
                    <img src={help} alt=""  className='w-5 h-5'/>
                  </div>
                  <h3 className="font-[600px] text-2xl">$5.00</h3>
                </div>
                <div className=' flex justify-between'>
                  <div className='flex gap-2 font-[500px] text-base '>
                    <p>Promo code </p>
                    <img src={help} alt=""  className='w-5 h-5'/>
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

      </div>
      <div className='lg:px-12 text-base'>
        <div className='flex flex-col items-start gap-8   h-[786.2px] p-6 rounded-3xl left-20 top-[1047px] bg-[#fcfcfc]' >
          <div className="w-[90%] lg:w-[45%] flex flex-col p-2  ">
            <h3 className='font-[600px] text-[32px] py-4'>Payment</h3>
            <div className=''>
              <div className='flex gap-2 font-[500px] text-base w-[50%] '>
                <p>Billing country/Region </p>
                <img src={help} alt=""  className='w-5 h-5'/>
              </div>
              <div className='flex gap-2'>
                <p>Nigeria</p>
                <span className='underline'>Edit</span>
              </div>
              <div className="flex gap-2">
              <div className="form-control gap-2">
                <label className="label cursor-pointer">
                  <input type="checkbox"  className="checkbox" />
                </label>
              </div>
              <p>Do you have a gift card, product voucher or promo code?</p>
              <img src={help} alt=""  className='w-5 h-5'/>
            </div>
            </div>
            <div className="my-2">
              <p className='font-medium text-sm'>Select payment method</p>
              {/* radio */}
              <div className='my-4'>
                <div className='flex gap-2 text-sm '>
                  <input type="radio" name="radio-6" className="radio radio-black" defaultChecked />
                  <img src={creditCard} alt="" className='w-4 h-5 pt-1' />
                  <p>Credit or Debit Card</p>
                </div>
                <div className='flex my-2'>
                  <input type="radio" name="radio-6" className="radio radio-black" />
                  <img src={pp} alt="" className='w-16  gap-2 my-2' />
                </div>
                <div className='flex my-2 gap-2'>
                  <input type="radio" name="radio-6" className="radio radio-black" />
                  <img src={gpay} alt="" className='w-12 ' />
                </div>
              </div>
            </div>
            <div>
              <h5 className='font-medium text-md'>Add Card</h5>
              <div>
                <div>
                  <div>
                    <p>Card Number
                <label className=" input input-bordered rounded-3xl items-center text-[#696969] ">
                  
                    <input type="text"
                      className=" "
                      placeholder="0000-0000-0000-0000"/> 
                </label></p>
                    
                    <p>Expiration Date
                <label className=" input input-bordered rounded-3xl items-center text-[#696969] ">
                  
                    <input type="text"
                      className=" "
                      placeholder="MM/YY"/> 
                </label></p>
                <p>CVV
                <label className=" input input-bordered rounded-3xl items-center text-[#696969] ">
                  
                    <input type="text"
                      className=" "
                      placeholder="XXX"/> 
                </label></p>
                  </div>       
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="form-control gap-2">
                <label className="label cursor-pointer">
                  <input type="checkbox"  className="checkbox" />
                </label>
              </div>
                <p>Save card for later</p>
                <img src={help} alt=""  className='w-5 h-5'/>
            </div>
            <div className="flex gap-2 my-8">
            <div className="form-control gap-2">
              <label className="label cursor-pointer">
                <input type="checkbox" defaultChecked className="checkbox" />
                <p className="text-base">Billing address same as shipping.</p>
              </label>
            </div>
            </div>
            {/* order review */}
            <div className=' my-4'>
              <h3 className='font-[600px] text-[32px]'>Order Review</h3>
                <p className=' mt-3'>
                  By clicking The “place order” button, you confirm that you 
                  have read, understand, and accept our  
                    <Link to='/checkout' className='link link-hover font-medium'> Terms of Use</Link>
                    <span> , </span>
                    <Link to='/checkout' className='link link-hover font-medium'>Terms of Sale</Link>
                    <span> , </span>
                    <Link to='/checkout' className='link link-hover font-medium'>Privacy Policy</Link> 
                    <span> and </span>
                    <Link to='/checkout' className='link link-hover font-medium'>Return Policy</Link>
                    <span>.</span>
                
                </p>
                  <Link to='/checkout'>
                    <div className="flex mt-12 justify-end">                            
                    <p className="   md:w-[250px] w-[143px] border border-[#840032] rounded-[100px] text-xs font-[400px] leading-[1.6] text-[#f8f8f8] bg-[#840032] text-center py-2">
                      Place Order</p>
                    </div>
                  </Link>
            </div>
          </div> 
        </div>
      </div>
    </>
  )
}

export default Checkout
