import React from "react";
import applogo from "../../assets/applogo.png";
import arrowDown from "../../assets/arrowdownblack.png";
import search from "../../assets/searchblack.png";
import account from "../../assets/profileblack.png";
import cart from "../../assets/cartblack.png";
import menu from "../../assets/menu.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* bg-[#fcfcfc] */}
      {/* <nav className=' w-full h-28 flex items-center justify-between py-8 bg-[#fcfcfc] ' >
        <div className="w-[90%] h-12 flex justify-between items-center mx-auto flex-none order-none self-stretch grow-0 p-0;"> */}
      <div className="w-full  bg-[#fcfcfc]  ">
        <div className=" flex items-center justify-between  mx-5">
          <div className="">
            <img src={applogo} alt="" />
          </div>
          <div className="hidden lg:flex  gap-10 ">
            <div className="flex ">
              <p>Categories</p>
              <img src={arrowDown} alt="" />
            </div>
            <p>Deals</p>
            <p>Whats New</p>
            <p>Delivery</p>
          </div>

          <div className=" flex flex-row items-center gap-10 ">
            <form action="">
              <label className="hidden input input-bordered rounded-3xl lg:flex items-center gap-2 bg-[f6f7f8] ">
                <input type="text" className=" " placeholder="Search" />
                <img className="" src={search} alt="" />
              </label>
            </form>
            <div className="flex justify-between gap-5">
              <Link to="/" className="flex gap-1">
                <img src={account} alt="" />
                <p className=" hidden lg:flex ">Account</p>
              </Link>
              <Link to="/cart" className=" flex gap-1 ">
                <img src={cart} alt="" />
                <p className=" hidden lg:flex ">Cart</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
