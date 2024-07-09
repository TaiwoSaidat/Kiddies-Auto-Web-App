import React from 'react'
import jeep from '../assets/jeep2.png'
import rCart from '../assets/bytesize_cart.png'
import heart from '../assets/favorite.png'

const Card = ({image, text, priceblack, pricered, rate, price}) => {
  return (
    <>
        <div className=" shadow-special rounded-xl border border-[#3992ED] p-2 flex flex-col justify-between gap-2 ">
			<img src={image} alt="" className=" w-" />
            <div className='flex'>
                <p className=" w-[70%] font-semibold text-lg lg:text-2xl my-2 flex">{text}</p>
                <img src={rCart} className='w-16' alt="" />
            </div>
            <div className='flex justify-between' >
                <h4 className="font-[500px] text-[28px] ">{priceblack}</h4>
                <p className="font-[500px] text-2xl pt-2 text-[#EF4261] line-through">{pricered}</p>
            </div>
			<div className=" flex mb-2">{rate}</div>
			<p>{price}</p>
		</div>
        
       
    </>
  )
}

export default Card
