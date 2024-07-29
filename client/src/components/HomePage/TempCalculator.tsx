import { useState } from "react";

export const TempCalculator = () => {
  const [duration, setDuration] = useState<string>("");
  return (
    <div className="py-24 bg-[#BCBFF0]">
      <div className="py-8 container mx-auto">
        <h2 className="font-bold text-white  text-2xl md:text-5xl font-work text-center">
          Temporary Car Insurance Calculator
        </h2>
        <div className="flex justify-evenly items-center mt-8">
          <div className="flex flex-col gap-2 items-center">
            <button
              className={`py-3 px-12  shadow-xl rounded-lg flex items-center justify-center ${
                duration === "hour" ? "bg-primary text-white" : "bg-white"
              }`}
              onClick={() => setDuration("hour")}
            >
              Hour
            </button>
            <span
              className={`font-work text-2xl  py-1 px-8 rounded-lg  ${
                duration === "hour" ? "bg-primary text-white" : "bg-white"
              }`}
            >
              1
            </span>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <button
              className={`py-3 px-12  shadow-xl rounded-lg flex items-center justify-center ${
                duration === "day" ? "bg-primary text-white" : "bg-white"
              }`}
              onClick={() => setDuration("day")}
            >
              Day
            </button>
            <span
              className={`font-work text-2xl  py-1 px-8 rounded-lg   ${
                duration === "day" ? "bg-primary text-white" : "bg-white"
              }`}
            >
              1
            </span>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <button
              className={`py-3 px-12  shadow-xl rounded-lg flex items-center justify-center ${
                duration === "week" ? "bg-primary text-white" : "bg-white"
              }`}
              onClick={() => setDuration("week")}
            >
              Week
            </button>
            <span
              className={`font-work text-2xl  py-1 px-8 rounded-lg   ${
                duration === "week" ? "bg-primary text-white" : "bg-white"
              }`}
            >
              1
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
