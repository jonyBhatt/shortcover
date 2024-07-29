/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

interface CountdownProps {
  initialDays: number;
  initialHours: number;
  initialMinutes: number;
  start: boolean;
}

export const CountdownTimer: React.FC<CountdownProps> = ({
  initialDays,
  initialHours,
  initialMinutes,
  start,
}) => {
  // console.log(start);
  // console.log(initialMinutes);

  const [time, setTime] = useState({
    days: initialDays,
    hours: initialHours,
    minutes: initialMinutes,
    seconds: 0,
  });

  useEffect(() => {
    if (!start) {
      setTime({
        days: initialDays,
        hours: initialHours,
        minutes: 0,
        seconds: 0,
      });
      return;
    }

    if (start) {
      const timer = setInterval(() => {
        setTime((prevTime) => {
          const { days, hours, minutes, seconds } = prevTime;

          if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(timer);
            return prevTime;
          }

          let newDays = days;
          let newHours = hours;
          let newMinutes = minutes;
          let newSeconds = seconds;

          if (seconds > 0) {
            newSeconds--;
          } else {
            newSeconds = 59;
            if (minutes > 0) {
              newMinutes--;
            } else {
              newMinutes = 59;
              if (hours > 0) {
                newHours--;
              } else {
                newHours = 23;
                if (days > 0) {
                  newDays--;
                }
              }
            }
          }

          return {
            days: newDays,
            hours: newHours,
            minutes: newMinutes,
            seconds: newSeconds,
          };
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [start, initialDays, initialHours, initialMinutes]);

  return (
    <div className="text-left p-12 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Time Left to Deliver</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
        <div className="">
          <div className="text-3xl font-semibold">{time.days}</div>
          <div className="text-lg">Days</div>
        </div>
        <div className="border-l border-gray-300 h-8 mx-2 hidden lg:block"></div>
        <div className="">
          <div className="text-3xl font-semibold">{time.hours}</div>
          <div className="text-lg">Hours</div>
        </div>
        <div className="hidden lg:block border-l border-gray-300 h-8 mx-2"></div>
        <div className="flex-1">
          <div className="text-3xl font-semibold">{time.minutes}</div>
          <div className="text-lg">Minutes</div>
        </div>
        <div className="hidden lg:block border-l border-gray-300 h-8 mx-2"></div>
        <div className="flex-1">
          <div className="text-3xl font-semibold">{time.seconds}</div>
          <div className="text-lg">Seconds</div>
        </div>
      </div>
      <Button size={"lg"} className="w-full mt-8">
        Deliver Now
      </Button>
    </div>
  );
};
