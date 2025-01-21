import React from "react";
import ButtonFilter from "../../components/ButtonFilter";
import bolt from "../../assets/bolt.png";
import dealsFilter from "../../data/deal.js";
import Timer from "../../components/Timer.jsx";
import CardCarousel from "../../components/CardCarousel.jsx";
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
      <div className=" w-full px-4 lg:px-12 3xl:px-0 py-3  bg-[#fcfcfc] space-y-4">
        <div className=" space-y-6">
            <div className=" lg:flex flex-row items-center ">
              {/* flash sales */}
              <div className="  flex gap-10">
                <img src={bolt} alt="" width={70} />
                <h3 className=" font-semibold text-2xl my-6 ">Flash Sales</h3>
              </div>
              <div className="flex gap-4">
                <Timer />
              </div>
            </div>
          <CardCarousel />
        </div>

        {/* Top Deals */}
        <div className=" space-y-6">
            <div className="grid grid-cols-2 justify-between items-center ">
              <h3 className="  flex justify-start font-semibold text-2xl ">
                Today's best deal for you
              </h3>
              <div className=" flex flex-wrap justify-end bg-[#fcfcfc] gap-4 ">
                {dealsFilter.map((button, i) => {
                  return <ButtonFilter key={i} {...button} />;
                })}
              </div>
            </div>
            <TopDeals />              
        </div>
      </div>
    </>
  );
};

export default Products;
