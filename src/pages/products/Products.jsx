import React from "react";
import { useState } from "react";
// import BestDeals from './BestDeals'
import ButtonFilter from "../../components/ButtonFilter";
import Card from "../../components/Card";
import bolt from "../../assets/bolt.png";
import east from "../../assets/easts.png";
import west from "../../assets/west.png";
import dealsFilter from "../../data/deal.js";
import hello from "../../assets/topImage.png";
import {flashSales, topDeals, // productDeals, product
} from "../../data/productDeals.js";
import Timer from '../../components/Timer.jsx'
import CardCarousel from '../../components/CardCarousel.jsx'
import TopDeals from "../../components/TopDeals.jsx";

const Products = () => {
  // const itemsPerPage = 4;
  // const [currentIndex, setCurrentIndex] = useState(0);

  // // Calculate the subset of items to display based on currentIndex
  // const currentItems = flashSales.slice(
  //   currentIndex,
  //   currentIndex + itemsPerPage
  // );

  //  const handleNext = () => {
  //    // Move to the next set, or wrap around if at the end
  //    if (currentIndex + itemsPerPage < flashSales.length) {
  //      setCurrentIndex(currentIndex + itemsPerPage);
  //    } else {
  //      setCurrentIndex(0); // Reset to start when end is reached
  //    }
  //  };

  //  const handlePrevious = () => {
  //    // Move to the previous set, or wrap around if at the beginning
  //    if (currentIndex - itemsPerPage >= 0) {
  //      setCurrentIndex(currentIndex - itemsPerPage);
  //    } else {
  //      setCurrentIndex(flashSales.length - itemsPerPage); // Show last set if going backwards from start
  //    }
  //  };
  return (
    <>
      <div className=" w-full flex items-center justify-between py-8 bg-[#fcfcfc] mx-auto ">
        <div className="w-[90%] flex flex-col mx-auto flex-none order-none  grow-0 p-0 gap-6">
          <div className=" flex justify-between  ">
            <div className=" lg:flex flex-row items-center ">
              {/* flash sales */}
              <div className="  flex gap-10">
                <img src={bolt} alt="" className="w-20 h-20" />
                <h3 className=" font-semibold text-2xl my-6 ">Flash Sales</h3>
              </div>
              <div className="flex gap-4">
                <Timer />
              </div>
            </div>
            {/* <div className="flex gap-2 items-center h-full ">
              <button onClick={handlePrevious}>
                <img src={east} alt="" />
              </button>
              <button onClick={handleNext}>
                <img src={west} alt="" />
              </button>
            </div> */}
          </div>
          <CardCarousel />
        </div>
      </div>

      {/* Top Deals */}
      <div className=" w-full flex items-center justify-between py-8 bg-[#fcfcfc] mx-auto ">
        <div className="w-[90%] flex flex-col mx-auto flex-none order-none  grow-0 p-0 gap-6">
          <div className=" w-full flex items-center justify-between  bg-[#fcfcfc]  ">
            <div className=" flex flex-col lg:flex-row justify-between items-center  ">
              <div className="grid grid-cols-2 justify-between items-center ">
                <h3 className="  flex justify-start font-semibold text-2xl ">
                  Today's best deal for you
                </h3>
                <div className=" flex flex-wrap justify-center bg-[#fcfcfc] ">
                  {dealsFilter.map((button, i) => {
                    return <ButtonFilter key={i} {...button} />;
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Today Deals cards */}
          <TopDeals />
        </div>
      </div>
    </>
  );
};



export default Products;
