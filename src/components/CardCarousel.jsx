import React, { useState } from "react";
import { flashSales } from "../data/productDeals"; // Import flashSales array
import rCart from "../assets/bytesize_cart.png";
import rating from "../assets/rating.png";
import east from "../assets/easts.png";
import west from "../assets/west.png";


const CardCarousel = () => {
  const itemsPerPage = 4;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate the subset of items to display based on currentIndex
  const currentItems = flashSales.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const handleNext = () => {
    // Move to the next set, or wrap around if at the end
    if (currentIndex + itemsPerPage < flashSales.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    } else {
      setCurrentIndex(0); // Reset to start when end is reached
    }
  };

  const handlePrevious = () => {
    // Move to the previous set, or wrap around if at the beginning
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    } else {
      setCurrentIndex(flashSales.length - itemsPerPage); // Show last set if going backwards from start
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between mb-4">
        <button onClick={handlePrevious}>
          <img src={east} alt="" />
        </button>
        <button onClick={handleNext}>
          <img src={west} alt="" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {currentItems.map((card, i) => (
          <div
            key={i}
            className="w-full rounded-xl border  p-4 flex flex-col justify-between"
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
    </div>
  );
};

export default CardCarousel;




// import React, { useState } from "react";
// import { flashSales } from "../data/productDeals"; // Import flashSales array
// import rCart from "../assets/bytesize_cart.png";
// import rating from "../assets/rating.png";

// const CardCarousel = () => {
//   const itemsPerPage = 4;
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Calculate the subset of items to display based on currentIndex
//   const currentItems = flashSales.slice(
//     currentIndex,
//     currentIndex + itemsPerPage
//   );

//   const handleNext = () => {
//     // If fewer than itemsPerPage items remain, go to the end of the array
//     if (currentIndex + itemsPerPage < flashSales.length) {
//       setCurrentIndex(currentIndex + itemsPerPage);
//     } else {
//       setCurrentIndex(flashSales.length - itemsPerPage); // Display the last full set
//     }
//   };

//   const handlePrevious = () => {
//     if (currentIndex - itemsPerPage >= 0) {
//       setCurrentIndex(currentIndex - itemsPerPage);
//     }
//   };

//   return (
//     <div className="w-full">
//       <div className="flex justify-between mb-4">
//         <button onClick={handlePrevious} disabled={currentIndex === 0}>
//           Previous
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={currentIndex + itemsPerPage >= flashSales.length}
//         >
//           Next
//         </button>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         {currentItems.map((card, i) => (
//           <div
//             key={i}
//             className="w-full rounded-xl border bg-green-800 p-4 flex flex-col justify-between"
//           >
//             <img src={card.image} alt="" className="w-full" />
//             <div className="flex items-center mt-2">
//               <p className="w-[70%] font-semibold text-lg lg:text-2xl my-2 flex-wrap">
//                 {card.text}
//               </p>
//               <img src={rCart} className="w-14 h-14 ml-20" alt="" />
//             </div>
//             <div className="flex justify-between items-center my-2">
//               <h4 className="font-[600px] text-[26px] ">{card.priceblack}</h4>
//               <p className="font-[500px] text-2xl pt-2 text-[#EF4261] line-through">
//                 {card.pricered}
//               </p>
//             </div>
//             <div className="flex items-center justify-between font-semibold mt-auto">
//               <img src={rating} alt="" />
//               <div className="flex mb-2 text-lg">{card.rate}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardCarousel;
