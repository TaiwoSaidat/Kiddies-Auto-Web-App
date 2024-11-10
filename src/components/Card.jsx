import React from 'react'
import rCart from '../assets/bytesize_cart.png'
import heart from '../assets/favorite.png'
import rating from '../assets/rating.png'

const Card = ({image, text, priceblack, pricered, rate, price}) => {
  return (
    <>
      <div className=" w-full rounded-xl border border-1  p-4 flex flex-col justify-between ">
        <img src={image} alt="" className=" w-full " />
        <div className="flex items-center mt-2">
          <p className=" w-[70%] font-semibold text-lg lg:text-2xl my-2 flex-wrap">
            {text}
          </p>
          <img src={rCart} className="w-14 h-14 ml-20" alt="" />
        </div>
        <div className="flex justify-between items-center my-2">
          <h4 className="font-[600px] text-[26px] ">{priceblack}</h4>
          <p className="font-[500px] text-2xl pt-2 text-[#EF4261] line-through">
            {pricered}
          </p>
        </div>

        <div className="flex items-center justify-between font-semibold mt-auto">
          <p>
            <img src={rating} alt=""  />
          </p>
          <div className="flex mb-2 text-lg">{rate}</div>
        </div>
      </div>
      {/* enddddddd */}
      {/* <div className="rounded-xl border border-1 bg-red-700 w-full h-[400px] p-4 flex flex-col justify-between">
        <img
          src={image}
          alt=""
          className="w-full h-1/2 object-cover rounded-t-xl"
        />

        <div className="flex items-center mt-2">
          <p className="w-[70%] font-semibold text-lg lg:text-2xl flex-wrap">
            {text}
          </p>
          <img src={rCart} className="w-12 h-12 ml-2" alt="" />
        </div>

        <div className="flex justify-between items-center my-2">
          <h4 className="font-semibold text-2xl">{priceblack}</h4>
          <p className="font-semibold text-xl text-[#EF4261] line-through">
            {pricered}
          </p>
        </div>

        <div className="flex items-center justify-between font-semibold mt-auto">
          <img src={rating} alt="rating" className="w-6 h-6" />
          <div className="flex mb-2 text-lg">{rate}</div>
        </div>
      </div> */}
    </>
  );
}

export default Card
