import React from 'react'
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
      <div className='border border-green-800 bg-green-800 w-full flex flex-col items-center bg-[#ffffff]'>
        <div className='w-[90%] flex flex-row md:flex justify-between grid grid-cols-1 lg:gap-0 border border-red-600 bg-red-600'>
          <div className=' flex flex-row md:flex justify-between grid grid-cols-1 lg:gap-0 lg:w-[50%] bg-yellow-300'>
                {/* flex justify-between bg-yellow-600 grid grid-col-1  */}
                <p>Checkout</p>
                <p>How would your like your order</p>
                {/* <img src={fav} alt="" className=''/> */}
                {/* <img src={topImage} alt="" /> */}
              <div className='flex'>
                <a href=""> <ButtonFilter /></a>
                <a href=""> <ButtonFilter /></a>
              </div>
              <div className='flex justify-between '>
                <p>Enter your details</p> 
                <form action="">

                </form>
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
                  <h3 className="font-[600px] text-2xl">$270.00</h3>
                </div>
                <div className=' flex justify-between'>
                  <div className='flex gap-2 font-[500px] text-base w-[50%] '>
                    <p>Estimated Taxes </p>
                    <img src={help} alt="" />
                  </div>
                  <h3 className="font-[600px] text-2xl">$270.00</h3>
                </div>
                <div className=' flex justify-between'>
                  <div className='flex gap-2 font-[500px] text-base '>
                    <p>Promo code </p>
                    <img src={help} alt="" />
                  </div>
                  {/* <p>$270.00</p> */}
                </div>
              </div>
              <div >
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
                <h3 className="font-[600px] text-2xl">$270.00</h3>
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
