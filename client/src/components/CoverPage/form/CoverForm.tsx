// import { Link, useLocation, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { Button } from "../../ui/button";

import { NextPreviousProps } from "../../../lib/types";
import { useFormData } from "../../../hooks/useFormData";

interface CoverProps extends NextPreviousProps {
  regNumber: string;
}
export default function CoverDetailsForm({ nextStep, regNumber }: CoverProps) {
  const { formData, updateFormData } = useFormData("coverDetails");
  const [durationType, setDurationType] = useState("Days");
  const [dates, setDates] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    const generateDates = () => {
      const today = new Date();
      const nextMonth = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        today.getDate()
      );
      const dateArray: { value: string; label: string }[] = [];

      for (
        let d = new Date(today);
        d <= nextMonth;
        d.setDate(d.getDate() + 1)
      ) {
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

        dateArray.push({ value, label });
      }

      setDates(dateArray);
    };

    generateDates();
  }, []);

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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const handleDurationTypeChange = (type: string) => {
    setDurationType(type);
    updateFormData({ durationType: type });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nextStep) nextStep();
  };

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

  return (
    <div className="bg-white max-w-xl  mx-auto my-20">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        About the Vehicle you want to insure
      </h1>
      <div className="bg-[#2f3349] text-white p-6 rounded-lg">
        <h2 className="text-xl mb-4">Your Cover Details</h2>

        <div className="bg-white text-black p-4 rounded-lg mb-4">
          <div className="flex items-center mb-2">{regNumber}</div>
          <div className="text-sm">
            <p className="font-bold">BMW 420D M SPORT</p>
            <p className="text-gray-600">
              420D M SPORT, 1995CC, DIESEL, 2017-2020
            </p>
          </div>
          <a href="#" className="text-blue-500 text-sm">
            Change Vehicle
          </a>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm">Reason for cover</label>
          <select
            name="reasonForCover"
            value={formData.reasonForCover || ""}
            onChange={handleChange}
            className="w-full p-2 rounded text-black"
          >
            {reasons.map((reason, i) => (
              <option value={reason.title} key={i}>
                {reason.title}
              </option>
            ))}
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm">Duration type?</label>
          <div className="flex space-x-2">
            {["Hours", "Days", "Weeks"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => handleDurationTypeChange(type)}
                className={`py-2 px-4 rounded ${
                  durationType === type
                    ? "bg-primary text-white"
                    : "bg-white text-black"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm">
            How long do you need cover for?
          </label>
          <select
            name="coverDuration"
            value={formData.coverDuration || ""}
            onChange={handleChange}
            className="w-full p-2 rounded text-black"
          >
            {durationType === "Days" && (
              <>
                <option value="1 days">1 day</option>
                <option value="3 days">3 days</option>
                <option value="5 days">5 days</option>
                <option value="other">Other</option>
              </>
            )}
            {durationType === "Hours" && (
              <>
                <option value="1 hour">1 hour</option>
                <option value="3 hours">3 hours</option>
                <option value="5 hours">5 hours</option>
                <option value="other">Other</option>
              </>
            )}
            {durationType === "Weeks" && (
              <>
                <option value="1 week">1 Week</option>
                <option value="3 weeks">3 weeks</option>
                <option value="5 weeks">5 weeks</option>
                <option value="other">Other</option>
              </>
            )}
          </select>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm">Start date?</label>
          <select
            name="startDate"
            value={formData.startDate || ""}
            onChange={handleChange}
            className="w-full p-2 rounded text-black"
          >
            {dates.map((date, i) => (
              <option value={date.value} key={i} className="py-4">
                {date.label}
              </option>
            ))}
            {/* Add more options as needed */}
          </select>
        </div>

        <Button
          type="submit"
          onClick={handleSubmit}
          className="w-full py-3 rounded font-bold mb-4"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
