import React from "react";
import call from "../../assets/call.png";
import arrowDown from "../../assets/arrowdownwhite.png";

const TopContactHeader = () => {
  return (
    <>
      <div className="w-full px-4 lg:px-12 3xl:px-0 py-3 flex flex-col justify-center bg-[#1E2019] text-white  ">
        <div className=" flex items-center justify-between  ">
          <div className=" flex text-sm">
            <img src={call} alt="" />
            <p>+234903874698</p>
          </div>

          <div className=" hidden lg:block text-sm">
            <p>Get 10% off on selected items | Shop Now</p>
          </div>

          <div className="flex gap-6 text-sm ">
            <div className="flex gap-3">
              <p>Eng</p>
              <div className=" flex items-center">
                <img src={arrowDown} alt="" />
              </div>
            </div>

            <div className="flex gap-3">
              <p>Location</p>
              <div className=" flex items-center">
                <img src={arrowDown} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopContactHeader;
