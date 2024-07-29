import { useState } from "react";
import { CountdownTimer } from "./Countdown";

export const Calculator = () => {
  const [duration, setDuration] = useState<string>("");
  const [initialDays, setInitialDays] = useState<number>(0);
  const [initialHours, setInitialHours] = useState<number>(0);
  const [initialMinutes, setInitialMinutes] = useState<number>(0);
  const [startCountdown, setStartCountdown] = useState<boolean>(false);

  const handleDurationChange = (newDuration: string) => {
    setDuration(newDuration);
    if (duration === "hour") {
      setInitialDays(0);
      setInitialHours(0);
      setInitialMinutes(60);
    } else if (duration === "day") {
      setInitialDays(0);
      setInitialHours(24);
      setInitialMinutes(0);
    } else if (duration === "week") {
      setInitialDays(7);
      setInitialHours(0);
      setInitialMinutes(0);
    } else {
      setInitialDays(0);
      setInitialHours(0);
      setInitialMinutes(0);
    }
    setStartCountdown(true);
  };
  return (
    <div className="py-16 container mx-auto">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Short-term insurance to suit you
      </h2>
      <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center items-start gap-4 px-5 mt-16 w-full">
        <div className="p-8 shadow-lg rounded-md bg-white lg:max-w-lg w-full">
          <div className="flex flex-col w-full  gap-8">
            <h2 className="text-xl md:text-sm text-center  mb-4">
              Quick and easy temporary car insurance quotes
            </h2>
            <div className="my-8"></div>
            <div className="flex flex-col gap-4 items-center">
              <p className="font-lato text-sm">
                Please select a duration below
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <button
                  className={`py-3 px-12  shadow-xl rounded-lg flex items-center justify-center ${
                    duration === "hour" ? "bg-primary text-white" : "bg-white"
                  }`}
                  onClick={() => handleDurationChange("hour")}
                >
                  1hour
                </button>
                <button
                  className={`py-3 px-12  shadow-xl rounded-lg flex items-center justify-center ${
                    duration === "day" ? "bg-primary text-white" : "bg-white"
                  }`}
                  onClick={() => handleDurationChange("day")}
                >
                  1day
                </button>
                <button
                  className={`py-3 px-12  shadow-xl rounded-lg flex items-center justify-center ${
                    duration === "week" ? "bg-primary text-white" : "bg-white"
                  }`}
                  onClick={() => handleDurationChange("week")}
                >
                  1week
                </button>
              </div>
            </div>
            <span className="font-lato text-sm text-center">
              It couldn't be simpler get a short term insurance policy.
            </span>
            <span className="font-lato text-sm text-center">
              You can buy a policy online anytime you need it, and with our
              straightforward quote process, you can get a price in just 90
              seconds!
            </span>
          </div>
        </div>
        <div className="w-full">
          <CountdownTimer
            initialDays={initialDays}
            initialHours={initialHours}
            initialMinutes={initialMinutes}
            start={startCountdown}
          />
        </div>
      </div>
    </div>
  );
};
