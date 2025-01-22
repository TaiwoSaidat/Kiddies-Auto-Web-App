import React from "react";
import { Link } from "react-router-dom";
import topImage from "../../assets/topImage.png";
import help from "../../assets/help.png";
import creditCard from "../../assets/credit_card.png";
import gpay from "../../assets/gpay.png";
import pp from "../../assets/pp.png";

const Checkout = () => {
  return (
    <>
      <div className=" px-14 space-y-4">
        {/*checkout and summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 py-4">
          {/* checkout div */}
          <div className="md:col-span-2 space-y-4 border border-neutral-300 rounded-xl px-2">
            <h3 className=" text-[32px] ">Checkout</h3>
            <h5 className=" text-[24px] ">How would your like your order</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
              <button className="w-full border border-[#840032] rounded-[100px] text-xs font-[400px] leading-[1.6] text-[#f8f8f8] bg-[#840032] text-center py-2">
                <Link to="/checkout">
                  {/* <div> */}
                    <p className="">Delivery</p>
                  {/* </div> */}
                </Link>
              </button>
              <button className="w-full border border-[#840032] rounded-[100px] text-xs font-[400px] leading-[1.6] text-[#840032] bg-[#f8f8f8] text-center py-2">
                <Link to="/checkout">
                  {/* <div className="w-full border border-[#840032] rounded-[100px] text-xs font-[400px] leading-[1.6] text-[#840032] bg-[#f8f8f8] text-center py-2"> */}
                    <p className="">Payment on Delivery</p>
                  {/* </div> */}
                </Link>
              </button>
            </div>
            <div className="">
              <h5 className=" className=' text-[24px]">Enter your details</h5>
              <div className=" space-y-4">
                <form action="#" className="space-y-2">
                  {/* names */}
                  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4">
                    {/* <label htmlFor=""> */}
                    <input
                      type="text"
                      name="fname"
                      placeholder="First Name"
                      aria-label="First Name"
                      className="w-full md:mr-1 py-0.5 px-3 border border-neutral-700  bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded-3xl "
                      required
                    />
                    {/* </label> */}
                    {/* <label htmlFor=""> */}
                    <input
                      type="text"
                      name="lname"
                      placeholder="Last Name"
                      className="w-full md:ml-1 py-0.5 px-3 border border-neutral-700  bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded-3xl "
                      required
                    />
                    {/* </label> */}
                  </div>
                  {/* addresses */}
                  <div className=" grid grid-cols-1 gap-2 ">
                    {/* <label htmlFor="" className=""> */}
                    <input
                      type="text"
                      name="lname"
                      placeholder="Email Address"
                      className="w-full  py-0.5 px-3 border border-neutral-700  bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded-3xl "
                      required
                    />
                    {/* </label> */}
                    {/* <label htmlFor=""> */}
                    <input
                      type="text"
                      name="lname"
                      placeholder="Address"
                      className="w-full py-0.5 px-3 border border-neutral-700  bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded-3xl "
                      required
                    />
                    {/* </label> */}
                  </div>
                  {/* options / select */}
                  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4">
                    <select
                      name="state"
                      id=""
                      className="w-full md:mr-1 py-0.5 px-3 border border-neutral-700  bg-transparent text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded-3xl "
                    >
                      <option value="" className="" selected>
                        State/Province
                      </option>
                      <option value="" className="">
                        State/Province
                      </option>
                      <option value="" className="">
                        State/Province
                      </option>
                      <option value="" className="">
                        State/Province
                      </option>
                      <option value="" className="">
                        State/Province
                      </option>
                      <option value="" className="">
                        State/Province
                      </option>
                    </select>
                    <select
                      name=""
                      id=""
                      className="w-full md:mr-1 py-0.5 px-3 border border-neutral-700  bg-transparent text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded-3xl "
                    >
                      <option value="" className="" selected>
                        Country
                      </option>
                      <option value="" className="">
                        Country
                      </option>
                      <option value="" className="">
                        Country
                      </option>
                      <option value="" className="">
                        Country
                      </option>
                      <option value="" className="">
                        Country
                      </option>
                      <option value="" className="">
                        Country
                      </option>
                    </select>
                  </div>
                </form>
              </div>
            </div>

            <div className=" flex justify-end ">
              <Link to="/">
                <button className="text-[#696969] mt-12 bg-[#f6f6f6] border border-neutral-300 rounded-2xl px-16 py-2 text-xs">
                  Save and Continue
                </button>
              </Link>
            </div>
          </div>
          {/* summary div */}
          <div className="border border-neutral-300 rounded-xl space-y-3 px-2">
            <h3 className=" text-[32px]">Summary</h3>
            <div className="">
              <div className="grid grid-cols-2">
                <div className="flex items-center space-x-2 ">
                  <p>Subtotal </p>
                  <img src={help} alt="" className="w-5 h-5" />
                </div>
                <h3 className=" text-2xl flex justify-end">$270.00</h3>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex items-center space-x-2 ">
                  <p className="items-center">
                    Estimated delivery and handling
                  </p>
                </div>
                <h3 className=" text-2xl flex items-center justify-end">
                  $0.00
                </h3>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex items-center space-x-2 ">
                  <p>Estimated Taxes </p>
                  <img src={help} alt="" className="w-5 h-5" />
                </div>
                <h3 className=" text-2xl flex justify-end">$5.00</h3>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex items-center space-x-2 ">
                  <p>Promo Code </p>
                  <img src={help} alt="" className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="">
              <form action="">
                <input
                  type="text"
                  name="promoCode"
                  placeholder="Enter your promo code"
                  className="w-full py-0.5 px-3 border border-neutral-700 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded-3xl "
                  required
                />
              </form>
            </div>
            <div className="grid grid-cols-2">
                <p>Total</p>
              <h3 className=" text-2xl flex justify-end">$315.00</h3>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2">
              <p className="">Arrives Mon, Sept 10 - Fri, Sept 15</p>
              <div className="grid grid-cols-2 space-x-2 items-center">
                <img src={topImage} alt="" className="w-auto h-auto  " />
                <div>
                  <p className="font-[500px] text-[24px]">Mercedes Benz Cls</p>
                  <div className="font-[400px] text-[16px] py-3">
                    <p>Battery Operated Ride</p>
                    <p>Colour: Black</p>
                    <p>Quantity: 1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* payment */}
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  py-4 ">
          <div className="md:col-span-2 space-y-3 border border-neutral-300 rounded-xl p-2">
            <h3 className=" text-[32px] py-1">Payment</h3>
            {/* billing county region */}
            <div className=" ">
              <form action="" method="post" className="space-y-2">
                <div className="flex items-center space-x-3">
                  <p>Billing country / Region </p>
                  <img src={help} alt="" className="w-5 h-5" />
                </div>
                <div className="flex items-center space-x-3">
                  <p>Nigeria</p>
                  <span className="underline">Edit</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className=" ">
                    <label className="label cursor-pointer">
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </div>
                  <p>Do you have a gift card, product voucher or promo code?</p>
                  <img src={help} alt="" className="w-5 h-5" />
                </div>
                <div className=" space-y-3">
                  <p className="font-medium text-sm">Select payment method</p>
                  <div className=" space-y-2 ">
                    <div className=" flex flex-row space-x-3">
                      <input
                        type="radio"
                        name="radio-6"
                        className="radio radio-black"
                        defaultChecked
                      />
                      <div className=" flex flex-row gap-2">
                        <img src={creditCard} alt="" className="w-4 h-5 pt-1" />
                        <label htmlFor="">Credit or Debit Card</label>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <input
                        type="radio"
                        name="radio-6"
                        className="radio radio-black"
                      />
                      <img src={pp} alt="" className="w-16  gap-2 my-2" />
                    </div>
                    <div className="flex space-x-3">
                      <input
                        type="radio"
                        name="radio-6"
                        className="radio radio-black"
                      />
                      <img src={gpay} alt="" className="w-12 " />
                    </div>
                  </div>
                  <div className=" space-y-2">
                    <h5 className="font-medium text-md">Add Card</h5>
                    <div className="flex space-x-2">
                      <label htmlFor="" className="">
                        Card Number:
                      </label>
                      <input
                        type="number"
                        name=""
                        id=""
                        className=" border-2 border-neutral-400 rounded-xl px-2 "
                        placeholder=" 0000-0000-0000-0000"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <label htmlFor="" className="">
                        Expiration Date:
                      </label>
                      <input
                        type="number"
                        name=""
                        id=""
                        className=" border-2 border-neutral-400 rounded-xl px-2 "
                        placeholder=" MM / YY"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <label htmlFor="" className="">
                        CVV:
                      </label>
                      <input
                        type="number"
                        name=""
                        id=""
                        className=" border-2 border-neutral-400 rounded-xl px-2 "
                        placeholder=" XXX"
                      />
                    </div>
                    <div className=" flex items-center space-x-3">
                      <input type="checkbox" className="checkbox" />
                      <label className="label cursor-pointer">
                        Save card for later
                      </label>
                      <img src={help} alt="" className="w-5 h-5" />
                    </div>
                    <div className="flex items-center space-x-3 ">
                      <input type="checkbox" className="checkbox" />
                      <label className="label cursor-pointer">
                        Billing address same as shipping
                      </label>
                    </div>
                  </div>
                </div>
                <div className="">
                  <h3 className="text-[32px]">Order Review</h3>
                  <p className="">
                    By clicking The “place order” button, you confirm that you
                    have read, understand, and accept our
                    <span> </span>
                    <Link
                      to="/checkout"
                      className="link link-hover font-medium"
                    >
                      Terms of Use
                    </Link>
                    <span> , </span>
                    <Link
                      to="/checkout"
                      className="link link-hover font-medium"
                    >
                      Terms of Sale
                    </Link>
                    <span> , </span>
                    <Link
                      to="/checkout"
                      className="link link-hover font-medium"
                    >
                      Privacy Policy
                    </Link>
                    <span> and </span>
                    <Link
                      to="/checkout"
                      className="link link-hover font-medium"
                    >
                      Return Policy
                    </Link>
                    <span>.</span>
                    <div className=" flex justify-end ">
                      <Link to="/">
                        <button className="border border-[#840032]  mt-24  text-[#f8f8f8] bg-[#840032] rounded-2xl px-16 py-2 text-xs">
                          Place Order
                        </button>
                      </Link>
                    </div>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
