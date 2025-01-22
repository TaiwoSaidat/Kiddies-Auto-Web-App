import React from "react";

const ButtonFilter = ({ text }) => {
  return (
    <>
      <div className=" border rounded-[100px] bg-[#F6F6F6] flex items-center px-6 ">
        <p className=" text-xl">{text}</p>
      </div>
    </>
  );
};

export default ButtonFilter;
