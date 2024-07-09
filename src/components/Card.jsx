import React from 'react'
import jeep from '../assets/jeep2.png'
import rCart from '../assets/bytesize_cart.png'
import heart from '../assets/favorite.png'
import rating from '../assets/rating.png'

const Card = ({image, text, priceblack, pricered, rate, price}) => {
  return (
    <>
        <div className=" rounded-xl border border-1 bg-[#DAE0EF33] p-3  ">
			<img src={image} alt="" className=" w-full" />
            <div className='flex'>
                <p className=" w-[70%] font-semibold text-lg lg:text-2xl my-2 flex">{text}</p>
                <img src={rCart} className='w-16' alt="" />
            </div>
            <div className='flex justify-between' >
                <h4 className="font-[600px] text-[26px] ">{priceblack}</h4>
                <p className="font-[500px] text-2xl pt-2 text-[#EF4261] line-through">{pricered}</p>
            </div>

            <div className='flex items-center justify-between font-semibold'>
                <p><img src={rating} alt="" /></p>
                <div className=" flex mb-2">{rate}</div> 
            </div>
			
		</div>
        
       
    </>
  )
}

export default Card
