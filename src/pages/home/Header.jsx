import React from "react";
import { useState } from "react";
import applogo from "../../assets/applogo.png";
import arrowDown from "../../assets/arrowdownblack.png";
import search from "../../assets/searchblack.png";
import account from "../../assets/profileblack.png";
import cart from "../../assets/cartblack.png";
import menu from "../../assets/menu.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  {/* <label htmlFor="categories"></label> */ }
          {/* <div className="hidden lg:flex  gap-10 ">
            <div className="flex  ">
              
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
          </div> */}
  return (
    <>
      <div className="w-full px-4 lg:px-12 3xl:px-0 py-3 bg-[#fcfcfc]   ">
        <div className=" flex items-center justify-between  ">
          <div className="">
            <Link to="/">
              <img src={applogo} alt="" />
            </Link>
          </div>

          <div>
            <div className="hidden lg:flex gap-10">
              <div className="flex">
                {/* Select Dropdown for Categories */}
                <select name="categories" id="categories">
                  <option value="">Categories</option>
                  <option value="convertible">Convertible</option>
                  <option value="jeep">Jeep</option>
                  <option value="motorbike">Motorbike</option>
                  <option value="bicycle">Bicycle</option>
                </select>
              </div>
              <div className="hidden lg:flex gap-10">
                {/* <div className="lg:flex gap-10"> */}
                  <p>Deals</p>
                  <p>What's New</p>
                  <p>Delivery</p>
                {/* </div> */}
              </div>
            </div>

            {/* Hamburger Menu for Small Screens */}
            <div className="lg:hidden flex items-center ">
              <button onClick={toggleMenu} className="p-2">
                <img src={menu} alt="Menu" />
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full bg-white shadow-lg p-5">
                  <div className="flex justify-between items-center">
                    {/* Close Button */}
                    <button onClick={closeMenu} className="text-2xl">
                      x
                    </button>
                  </div>
                  <ul className="flex flex-col gap-4 mt-4">
                    <li>
                      {/* <p>Deals</p> */}
                      <Link to="/" className="flex gap-1">
                        <p className=" lg:flex ">Deals</p>
                      </Link>
                      <NavLink></NavLink>
                    </li>
                    <li>
                      <p>What's New</p>
                    </li>
                    <li>
                      <p>Delivery</p>
                    </li>
                    <li>
                      <Link to="/" className="flex gap-1">
                        <p className=" lg:flex ">Account</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart" className=" flex gap-1 ">
                        <p className=" lg:flex ">Cart</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className=" flex flex-row items-center gap-10 ">
            <form action="#">
              <label className="hidden input input-bordered rounded-3xl lg:flex items-center gap-2 bg-[f6f7f8] ">
                <input type="text" className="" placeholder="Search" />
                <img className="" src={search} alt="search" />
              </label>
            </form>
            <div className="hidden  md:flex  gap-28 lg:flex lg:gap-5 ">
              <Link to="/" className="flex gap-1">
                <img src={account} alt="account icon" className="w-4 h-5" />
                <p className=" hidden lg:flex ">Account</p>
              </Link>
              <Link to="/cart" className=" flex gap-1 ">
                <img src={cart} alt="cart icon" className="w-4 h-5" />
                <p className=" lg:flex ">Cart</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
