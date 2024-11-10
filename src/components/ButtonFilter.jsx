import React from "react";

const ButtonFilter = ({ text }) => {
  return (
    <>
      <div className="w-[143px] border rounded-[100px] bg-[#F6F6F6] text-center p-2.5 m-5 bg-red-500">
        <p className="">{text}</p>
      </div>
    </>
  );
};

export default ButtonFilter;
