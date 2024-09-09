import { useCallback, useEffect, useState } from "react";
import { TempModal } from "../modal/TempModal";
import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../../lib/utils";

interface AboutVehicleProps {
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  reason: string;
  date: string;
  durationType: string;
  length: string;
  time: string;
  regNumber: string;
  endDate: string;
}

const reasons = [
  {
    title: "Borrowing A Car",
  },
  {
    title: "Drive away cover",
  },
  {
    title: "Learning to drive someone's else car",
  },
  {
    title: "Learning to drive in your own car",
  },
  {
    title: "Obtain road tax",
  },
  {
    title: "Need cover in a emergency",
  },
  {
    title: "back from working away ",
  },
  {
    title: "Problem with annual policy",
  },
  {
    title: "Sharing driving on a long trip",
  },
  {
    title: "Test Drive",
  },
  {
    title: "Temp cover for business use",
  },
  {
    title: "Moving House",
  },
  {
    title: "Back from or going to university, college, school",
  },
  {
    title: "Courtesy vehicle",
  },
  {
    title: "Pre-Booked MOT",
  },
  {
    title: "Drive own vehicle",
  },
  {
    title: "Add a driver",
  },
  {
    title: "Buying a vehicle",
  },
  {
    title: "Impound vehicle release",
  },
  {
    title: "Immediate Start",
  },
];

const hours = Array.from({ length: 23 }, (_, i) => i + 1);
const days = Array.from({ length: 28 }, (_, i) => i + 1);

export default function AboutVehicle({
  onChange,
  reason,
  date,
  durationType,
  length,
  time,
  regNumber,
}: AboutVehicleProps) {
  const [dates, setDates] = useState<Array<{ value: string; label: string }>>(
    []
  );
  const [endDates, setEndDates] = useState<string>("");

  //fetch the vehicle details from the database

  const { data } = useQuery({
    queryKey: ["fetchPlateById"],
    queryFn: () => fetchPlateDetails(),
  });
  const fetchPlateDetails = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/plate/${regNumber}`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  //generate dates for the start date dropdown
  const generateDates = useCallback(() => {
    const today = new Date();
    const nextMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      today.getDate()
    );
    const dateArray: { value: string; label: string }[] = [];

    for (let d = new Date(today); d <= nextMonth; d.setDate(d.getDate() + 1)) {
      const value = d.toISOString().split("T")[0];
      let label = "";

      if (d.getDate() === today.getDate()) {
        label = `Today, the ${d.getDate()}${getOrdinalSuffix(
          d.getDate()
        )} of ${d.toLocaleString("default", { month: "long" })}`;
      } else if (d.getDate() === today.getDate() + 1) {
        label = `Tomorrow, the ${d.getDate()}${getOrdinalSuffix(
          d.getDate()
        )} of ${d.toLocaleString("default", { month: "long" })}`;
      } else {
        label = `${d.toLocaleString("default", {
          weekday: "short",
        })} the ${d.getDate()}${getOrdinalSuffix(
          d.getDate()
        )} of ${d.toLocaleString("default", { month: "long" })}`;
      }
      console.log(label);
      

      dateArray.push({ value, label });
    }

    setDates(dateArray);
  }, []);

  //get the ordinal suffix for the day
  const getOrdinalSuffix = (day: number): string => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  //generate the dates when the component mounts

  useEffect(() => {
    generateDates();
  }, [generateDates]);
  useEffect(() => {
    function formatEndDate(endDate: Date): string {
      const day = endDate.getDate();
      const ordinalSuffix = getOrdinalSuffix(day);
      const weekday = endDate.toLocaleString("default", { weekday: "short" });
      const month = endDate.toLocaleString("default", { month: "long" });
      return `${weekday} ${day}${ordinalSuffix} of ${month}`;
    }
    function calculateEndDate(
      startDate: string,
      durationType: string,
      length: number
    ): string {
  
      if (startDate === "") {
         return ""
      }
  
      // Convert the start date from string to Date object
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
    
      // Convert the start date from string to Date object
      const start = new Date(startDate);
      const endDate = new Date(start);
      
    
      if (durationType === "hours") {
        // Add the specified number of hours
        endDate.setHours(endDate.getHours() + length);
      } else if (durationType === "days") {
        // Add the specified number of days
        endDate.setDate(endDate.getDate() + length);
      } else if (durationType === "weeks") {
        // Add the specified number of weeks (weeks * 7 days)
        endDate.setDate(endDate.getDate() + length * 7);
      }
    
      // Check if the start date is today or tomorrow
      const isToday = start.toDateString() === today.toDateString();
      const isTomorrow = start.toDateString() === tomorrow.toDateString();
    
      if (isToday || isTomorrow) {
        const now = new Date();
        const timeDifference = endDate.getTime() - now.getTime();
        const hoursLeft = Math.ceil(timeDifference / (1000 * 60 * 60)); // Convert milliseconds to hours
        return `Ends in ${hoursLeft} hours`;
      }
      setEndDates(formatEndDate(endDate));
  
    
      // Return formatted date for other days
      return formatEndDate(endDate);
    }
    const calculatedEndDate = calculateEndDate(date, durationType, parseInt(length))
    onChange({
      target: { name: 'endDate', value: calculatedEndDate }
    } as React.ChangeEvent<HTMLInputElement>);
  }, [onChange,date,durationType,length]);

 
  
  console.log(endDates);
  

  

  return (
    <div className="flex flex-col items-center justify-center w-full gap-7">
      <h4 className="font-lato">Your Cover Details</h4>
      <div className="flex flex-col items-start w-full max-w-md gap-4 p-6 bg-white md:gap-7">
        <div className="flex items-center justify-center w-full h-auto border border-black rounded max-w-56">
          <div className="flex flex-col items-center w-20 bg-blue-600 border-r border-black">
            <div>
              <img src="/uk.svg" alt="uk flag" className="w-8 h-8" />
            </div>
            <span className="text-base font-semibold text-center uppercase font-work">
              Uk
            </span>
          </div>
          <div className="w-full py-3 pl-3 bg-yellow-400 ">
            <h4 className="text-2xl text-black uppercase font-work">
              {regNumber}
            </h4>
          </div>
        </div>
        <div className="flex flex-col items-start gap-1">
          <p className="text-xl text-black font-lato">AUDI A4 S4 QUATTRO</p>
          <span className="text-xs font-normal text-black font-lato">
            {data?.desc}
          </span>
        </div>
        <TempModal
          triggerButton="Change Vehicle"
          className="text-base text-blue-500 underline bg-transparent"
        />
      </div>
      {/** Reason */}
      <div className="flex flex-col w-full max-w-md gap-1">
        <label
          htmlFor="reasonforcover"
          className="text-lg font-semibold font-lato"
        >
          Reason for Cover
        </label>
        <select
          id="reasonforcover"
          name="reason"
          value={reason}
          onChange={onChange}
          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 text-black"
        >
          <option value="" className="text-muted-foreground">
            -Select-
          </option>
          {reasons.map((rs, index) => (
            <>
              <option value={rs.title} key={index}>
                {rs.title}
              </option>
            </>
          ))}
        </select>
      </div>
      {/** Duration Type */}
      <div className="flex flex-col w-full max-w-md gap-1">
        <label
          htmlFor="durationtype"
          className="text-lg font-semibold font-lato"
        >
          Duration Type
        </label>
        <select
          id="durationtype"
          name="durationType"
          value={durationType}
          onChange={onChange}
          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 text-black"
        >
          <option value="" disabled className="text-muted-foreground">
            -Select-
          </option>
          <option value="hours">Hours</option>
          <option value="days">Days</option>
          <option value="weeks">Weeks</option>
        </select>
      </div>
      {/** Length*/}
      <div className="flex flex-col w-full max-w-md gap-1">
        <label
          htmlFor="durationtype"
          className="text-lg font-semibold font-lato"
        >
          How long do you need cover for?
        </label>
        <select
          id="durationtype"
          name="length"
          value={length}
          onChange={onChange}
          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 text-black"
        >
          <option value="" disabled className="text-muted-foreground">
            -Select-
          </option>
          {durationType === "hours" &&
            hours.map((hour) => (
              <option value={`${hour}`} key={hour}>
                {hour} hours
              </option>
            ))}
          {durationType === "days" &&
            days.map((day, i) => (
              <option value={`${day}`} key={day}>
                {/* {day} days */}
                {i === 1 ? <>{day} day</> : <>{day} days</>}
              </option>
            ))}
          {durationType === "weeks" && (
            <>
              <option value="1">1 week</option>
              <option value="2">2 weeks</option>
              <option value="3">3 weeks</option>
              <option value="4">4 weeks</option>
            </>
          )}
        </select>
      </div>

      {/**Start Date*/}
      <div className="flex flex-col w-full max-w-md gap-1">
        <label htmlFor="startdate" className="text-lg font-semibold font-lato">
          Start Date
        </label>
        <select
          id="startdate"
          name="date"
          value={date}
          onChange={onChange}
          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 text-black"
        >
          <option value="" disabled className="text-muted-foreground">
            -Select-
          </option>
          {dates.map((date) => (
            <option value={date.value} key={date.value}>
              {date.label}
            </option>
          ))}
        </select>
      </div>

      {/**Start Time*/}
      <div className="flex flex-col w-full max-w-md gap-1">
        <label htmlFor="startdate" className="text-lg font-semibold font-lato">
          Start time
        </label>
        <input
          type="time"
          id="time"
          name="time"
          value={time}
          onChange={onChange}
          className="w-full px-3 py-2 text-sm text-black border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-5"
        />
      </div>

      {/** End Time */}
      <div className="flex flex-col w-full max-w-md gap-1">
        <label htmlFor="startdate" className="text-lg font-semibold font-lato">
          End Date
        </label>
        <div className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 text-black">
         <input type="text" name="endDate" id="endDate" value={endDates} readOnly className="w-full py-2 text-sm text-black border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-5"/>

        </div>
        
      </div>
    </div>
  );
}
