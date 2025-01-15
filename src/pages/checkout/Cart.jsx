import React from "react";
import { Link } from "react-router-dom";
import ButtonFilter from "../../components/ButtonFilter";
import Card from "../../components/Card";
import east from "../../assets/easts.png";
import west from "../../assets/west.png";
import topImage from "../../assets/5 1.png";
import fav from "../../assets/favorite.png";
import help from "../../assets/help.png";
import plus from "../../assets/plus.png";
import dash from "../../assets/dash.png";
import basket from "../../assets/basket.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import search from "../../assets/searchblack.png";
import CardCarousel from "../../components/CardCarousel";

const Cart = () => {
  return (
    <>
      <div className="border w-full flex flex-col items-center bg-[#fff] ">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-2 gap-2">
          {/* 1st card!!!!!! */}
          <div className=" bg-[#FAFAFA] border rounded-xl p-4 space-y-2  ">
            {/* <div className="">
              <img src={fav} alt="" />
            </div> */}
            <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {/* border rounded-xl border-gray-300 */}
              <div className="flex flex-row items-start justify-end   bg-[#FAFAFA] p-2">
                <img src={topImage} alt="" className="w-full h-full" />
                <img src={fav} alt="" width={32} height={32} />
              </div>
              <div>
                <div className=" space-y-8">
                  <div className="flex justify-between ">
                    <p className="font-[500px] text-[26px] ">
                      Mercedes Benz Cls
                    </p>
                    <p className=" flex items-center font-[600px] text-[28px]">
                      $270.00
                    </p>
                  </div>
                  <div className=" space-y-1">
                    <p>Battery Operated Ride</p>
                    <p>Age: 1-3 year(s)</p>
                    <p>Colour: Black</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="grid grid-cols-2">
                      <a href="/">
                        <img src={fav} alt="" />
                      </a>
                      <a href="/">
                        <img src={basket} alt="" />
                      </a>
                    </div>
                    <div className="flex flex-between justify-end gap-2">
                      <a href="/">
                        <img src={dash} alt="" />
                      </a>
                      <p>1</p>
                      <a href="/">
                        <img src={plus} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd card */}
          <div className="bg-[#FAFAFA] border rounded-xl p-2">
            <h3 className="font-[600px] text-[32px]">Summary</h3>
            <div>
              <div className=" flex justify-between ">
                <div className="flex gap-2 font-[500px] text-base">
                  <p>Subtotal </p>
                  <img src={help} alt="" className="w-5 h-5" />
                </div>
                <h3 className="font-[600px] text-2xl">$270.00</h3>
              </div>
              <div className=" flex justify-between">
                <div className="flex gap-2 font-[500px] text-base ">
                  <p>Estimated delivery and handling </p>
                </div>
                <h3 className="font-[600px] text-2xl">$40.00</h3>
              </div>
              <div className=" flex justify-between">
                <div className="flex gap-2 font-[500px] text-base w-[50%] ">
                  <p>Estimated Taxes </p>
                  <img src={help} alt="" className="w-5 h-5" />
                </div>
                <h3 className="font-[600px] text-2xl">$5.00</h3>
              </div>
              <div className=" flex justify-between">
                <div className="flex gap-2 font-[500px] text-base ">
                  <p>Promo code </p>
                  <img src={help} alt="" className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="mt-2">
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
            <div className="flex justify-between my-4">
              <div className="flex gap-2 font-[500px] text-base ">
                <p>Total </p>
              </div>
              <h3 className="font-[600px] text-2xl">$315.00</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 ">
              <button>
                <Link to="/checkout">
                  <div className="w-full border border-[#840032] rounded-[100px] text-xs font-[400px] leading-[1.6] text-[#f8f8f8] bg-[#840032] text-center py-2">
                    <p className="">Check out your cart</p>
                  </div>
                </Link>
              </button>
              <button>
                <a href="">
                  <div className=" w-full border border-[#840032] rounded-[100px] text-xs font-[400px] leading-[1.6] text-[#840032] bg-[#f8f8f8] text-center py-2">
                    <p className="">Paypal</p>
                  </div>
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className=" w-full flex items-center justify-between py-8 bg-[#fcfcfc] mx-auto ">
          <div className="w-[90%] flex flex-col mx-auto flex-none order-none  grow-0 p-0 gap-6">
            <div className=" flex flex-col  ">
              <div className=" lg:flex flex-row items-center ">
                {/* recommndation */}
                <div className="  flex gap-10">
                  <h3 className=" font-semibold text-2xl my-6 ">
                    Recommendations for you
                  </h3>
                </div>
              </div>
              {/* arrows */}
              <div>
                <CardCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
