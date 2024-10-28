import React from "react";
import call from "../../assets/call.png";
import arrowDown from "../../assets/arrowdownwhite.png";

const TopContactHeader = () => {
  return (
    <>
      <div className="w-full h-12 bg-[#1E2019] text-white flex flex-col justify-center ">
        <div className=" flex items-center justify-between mx-5 ">
            <div className=" flex">
                <img src={call} alt="" />
                <p>+234903874698</p>
            </div>

            <div className=" hidden lg:block">
                <p>Get 10% off on selected items | Shop Now</p>
            </div>

            <div className="flex gap-6 ">
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
