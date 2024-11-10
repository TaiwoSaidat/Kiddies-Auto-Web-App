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
      <div className=" bg-[#fcfcfc]  ">
        <div className=" flex items-center justify-between  mx-5">
          <div className="">
            <Link to="/">
              <img src={applogo} alt="" />
            </Link>
          </div>
          <div className="hidden lg:flex  gap-10 ">
            <div className="flex  ">
              {/* <label htmlFor="categories"></label> */}
              <select name="categories" id="categories">
                <option value="">Categories</option>
                <option value="convertible">Convertible</option>
                <option value="jeep">Jeep</option>
                <option value="motorbike">Motorbike</option>
                <option value="bicycle">Bicycle</option>
              </select>
            </div>
            <div className="lg:flex  gap-10 ">
              <img className="lg:hidden" src={menu} alt="" />
              <div className="hidden lg:flex gap-10">
                <p>Deals</p>
                <p>What's New</p>
                <p>Delivery</p>
              </div>
            </div>
          </div>

          <div className=" flex flex-row items-center gap-10 ">
            <form action="#">
              <label className="hidden input input-bordered rounded-3xl lg:flex items-center gap-2 bg-[f6f7f8] ">
                <input type="text" className="" placeholder="Search" />
                <img className="" src={search} alt="search" />
              </label>
            </form>
            <div className=" flex gap-28 lg:flex lg:gap-5">
              <Link to="/" className="flex gap-1">
                <img src={account} alt="account icon" className="w-4 h-5" />
                <p className=" hidden lg:flex ">Account</p>
              </Link>
              <Link to="/cart" className=" flex gap-1 ">
                <img src={cart} alt="cart icon" className="w-4 h-5" />
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
