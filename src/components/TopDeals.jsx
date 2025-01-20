import React, { useState } from "react";
import { topDeals } from "../data/productDeals"; // Import topDeals array
import rCart from "../assets/bytesize_cart.png";
import rating from "../assets/rating.png";

const TopDeals = () => {
  const itemsPerPage = 4; // Number of items to load at a time
  const [currentIndex, setCurrentIndex] = useState(itemsPerPage); // Start with 4 items

  // Get the items to display based on the currentIndex
  const currentItems = topDeals.slice(0, currentIndex);

  // Function to load more items
  const loadMore = () => {
    if (currentIndex + itemsPerPage <= topDeals.length) {
      setCurrentIndex(currentIndex + itemsPerPage); // Increase currentIndex to load next items
    } else {
      setCurrentIndex(topDeals.length); // Set to the total number of items to show all
    }
  };

  return (
    <div id="deals" className="w-full" >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {currentItems.map((card, i) => (
          <div
            key={i}
            className="w-full rounded-xl border p-4 flex flex-col justify-between"
          >
            <img src={card.image} alt="" className="w-full" />
            <div className="flex items-center mt-2">
              <p className="w-[70%] font-semibold text-lg lg:text-2xl my-2 flex-wrap">
                {card.text}
              </p>
              <img src={rCart} className="w-14 h-14 ml-20" alt="" />
            </div>
            <div className="flex justify-between items-center my-2">
              <h4 className="font-[600px] text-[26px] ">{card.priceblack}</h4>
              <p className="font-[500px] text-2xl pt-2 text-[#EF4261] line-through">
                {card.pricered}
              </p>
            </div>
            <div className="flex items-center justify-between font-semibold mt-auto">
              <img src={rating} alt="" />
              <div className="flex mb-2 text-lg">{card.rate}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={loadMore}
          className="md:w-[143px] border border-[#840032] rounded-[100px] text-base font-[600px] leading-[1.6]  text-[#696969] bg-[#F6F6F6] text-center py-2.5"
          disabled={currentIndex >= topDeals.length} // Disable button if all items are displayed
        >
          {currentIndex >= topDeals.length ? "No More Items" : "Load More"}
        </button>
        
      </div>
    </div>
  );
};

export default TopDeals;
