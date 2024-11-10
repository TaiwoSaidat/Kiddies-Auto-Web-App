import React, { useState, useEffect, useRef } from "react";

const CountdownTimer = () => {
  // Set initial countdown to 7 hours, 0 minutes, 0 seconds
  const [hours, setHours] = useState(7);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const timerRef = useRef(null);

  useEffect(() => {
    // Set up the timer
    timerRef.current = setInterval(() => {
      setSeconds((prevSec) => {
        if (prevSec > 0) return prevSec - 1;
        else {
          setMinutes((prevMin) => {
            if (prevMin > 0) {
              setSeconds(59);
              return prevMin - 1;
            } else {
              setHours((prevHr) => {
                if (prevHr > 0) {
                  setMinutes(59);
                  setSeconds(59);
                  return prevHr - 1;
                } else {
                  clearInterval(timerRef.current); // Stop the timer when it reaches 0
                  return 0;
                }
              });
              return 0;
            }
          });
          return 0;
        }
      });
    }, 1000);

    // Clear the interval when component unmounts
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="flex gap-5 text-center  items-center mx-5">
      <h4 className="w-14 h-14 border rounded-full text-xl  text-[#F6F6F6] bg-[#EF4261] text-center justify-center py-3 ">
        {String(hours).padStart(2, "0")}
      </h4>
      <span className="flex items font-[800px] text-[52px] "> : </span>

      <h4 className="w-14 h-14 border rounded-full text-xl  text-[#F6F6F6] bg-[#EF4261] text-center py-3 ">
        {String(minutes).padStart(2, "0")}{" "}
      </h4>
      <span className="flex items-center font-[800px] text-[52px] "> : </span>

      <h4 className="w-14 h-14 border rounded-full text-xl  text-[#F6F6F6] bg-[#EF4261] text-center py-3 ">
        {String(seconds).padStart(2, "0")}{" "}
      </h4>
    </div>
  );
};

export default CountdownTimer;
