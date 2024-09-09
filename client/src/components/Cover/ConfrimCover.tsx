import React, { useEffect, useState } from "react";
import { baseUrl } from "../../lib/utils";
import { useQuery } from "@tanstack/react-query";
interface ConfrimCoverProps {
  step1: {
    reason: string;
    durationType: string;
    length: string;
    date: string;
    time: string;
    endDate: string;
  };
  step2: {
    driverTitle: string;
    driverFirstName: string;
    driverLastName: string;
    firstLineAddress: string;
    secondLineAddress: string;
    town: string;
    postCode: string;
    county: string;
    dob: string;
    job: string;
  };
  step3: {
    country: string;
    licenseType: string;
    drivingLicenseNumber: string;
    mobile: string;
    email: string;
    confirmEmail: string;
    extraDriver: string;
    totalPayable: string;
  };
  regNumber: string;
}
export const ConfrimCover = ({
  step1,
  step2,
  step3,
  regNumber,
}: ConfrimCoverProps) => {
const [totalMoney, setTotalMoney] = useState("")
  const { data, isLoading } = useQuery({
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


    useEffect(() => {
      const totalPay = calculateTotalPay(step1.durationType, parseInt(step1.length), step3.extraDriver);
      setTotalMoney(totalPay.toString());

      step3.totalPayable = totalPay.toString();
      
    }, [step1.durationType, step1.length, step3.extraDriver, step3]);


  function calculateTotalPay(durationType: string, length: number, extraDriver:string): number {
    // Define price list
    const prices = {
      hours: [25, 62, 110, 190, 270], // 1 hour, 3 hours, 6 hours, 12 hours, 24 hours
      days: [800, 880, 930, 1010],    // 7 days, 14 days, 21 days, 28 days
    };
  
    let totalPay = 0;
  
    if (durationType === "hours") {
      // Calculate pay for hours
      if (length >= 1 && length <= 23) {
        if (length <= 1) {
          totalPay = prices.hours[0]; // 1 hour
        } else if (length <= 3) {
          totalPay = prices.hours[1]; // 3 hours
        } else if (length <= 6) {
          totalPay = prices.hours[2]; // 6 hours
        } else if (length <= 12) {
          totalPay = prices.hours[3]; // 12 hours
        } else if (length <= 24) {
          totalPay = prices.hours[4]; // 24 hours (1 day)
        }
      }
    } else if (durationType === "days") {
      // Calculate pay for days
      if (length >= 1 && length <= 28) {
        if (length <= 7) {
          totalPay = prices.days[0]; // 7 days (1 week)
        } else if (length <= 14) {
          totalPay = prices.days[1]; // 14 days (2 weeks)
        } else if (length <= 21) {
          totalPay = prices.days[2]; // 21 days (3 weeks)
        } else if (length <= 28) {
          totalPay = prices.days[3]; // 28 days (1 month)
        }
      }
    } else if (durationType === "weeks") {
      // Calculate pay for weeks
      if (length >= 1 && length <= 4) {
        if (length === 1) {
          totalPay = prices.days[0]; // 1 week (7 days)
        } else if (length === 2) {
          totalPay = prices.days[1]; // 2 weeks (14 days)
        } else if (length === 3) {
          totalPay = prices.days[2]; // 3 weeks (21 days)
        } else if (length === 4) {
          totalPay = prices.days[3]; // 4 weeks (28 days)
        }
      }
    }

    if (extraDriver === "Yes") {
      totalPay += 500;
    }

  
    return totalPay;
  }


  if (isLoading) return <div>Loading...</div>;
  // console.log(data);
  // console.log("Step 1", step1);
  // console.log("Step 2", step2);
  // console.log("Step 3", step3);

  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-2">
      <div className="flex flex-col gap-1.5 bg-gray-200 text-black p-4 rounded">
        <h4 className="text-lg font-semibold font-lato">
          Costs & Breakdown of Costs
        </h4>
        <div className="flex items-center justify-between">
          <p className="text-lg font-normal font-lato">Total to pay</p>
          <input className="w-1/2 text-2xl font-bold text-right font-lato" value={`£${totalMoney}`} readOnly name="totalPayable" id="totalPayable" />
        </div>
      </div>
      {/** Vehicle & Insurance Details */}
      <div className="flex flex-col gap-1.5 bg-gray-200 text-black p-4 rounded">
        <h4 className="text-lg font-semibold font-lato">
          Vehicle & Insurance Details
        </h4>
        <div className="flex flex-col items-start gap-4">
          {/** Registration Number */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-base font-normal font-lato">Regstration</h5>
            <p className="text-sm font-semibold font-lato">{regNumber}</p>
          </div>

          {/** Vehicle Type */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-base font-normal font-lato">Vehicle</h5>
            <p className="text-xs font-semibold text-wrap font-lato">
              {data?.desc}
            </p>
          </div>

          {/** Insurer */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-base font-normal font-lato">Insurer</h5>
            <p className="text-sm font-semibold font-lato">Allianz</p>
          </div>

          {/** Cover Type */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-base font-normal font-lato">Cover Type</h5>
            <p className="text-sm font-semibold font-lato">Comprehensive</p>
          </div>

          {/** Length of Cover */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-base font-normal font-lato">Length of Cover</h5>
            <p className="text-sm font-semibold font-lato">{step1.length}{step1.durationType}</p>
          </div>

          {/** Cover To Start */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-base font-normal font-lato">Cover To Start</h5>
            <p className="text-sm font-semibold font-lato">{step1.date}</p>
          </div>

          {/** Cover To End */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-base font-normal font-lato">Cover To End</h5>
            <p className="text-sm font-semibold font-lato">{step1.endDate}</p>
          </div>

          {/** Compulsory Excess */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-base font-normal font-lato">
              Compulsory Excess
            </h5>
            {
              step3.extraDriver === "Yes" ? (
                <p className="text-sm font-semibold font-lato">£500</p>
              ) : (
                <p className="text-sm font-semibold font-lato">£0</p>
              )
            }
          </div>
        </div>
      </div>
      {/** Driver Details */}
      <div className="flex flex-col gap-1.5 bg-gray-200 text-black p-4 rounded">
        <h4 className="text-lg font-semibold font-lato">Driver Details</h4>
        <div className="flex flex-col items-start gap-4">
          {/** Driver Name */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-base font-normal font-lato">Driver Name</h5>
            <p className="text-sm font-semibold font-lato">
              {step2.driverFirstName} {step2.driverLastName}
            </p>
          </div>
          {/** Driver Date of Birth */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-base font-normal font-lato">
              Driver Date of Birth
            </h5>
            <p className="text-sm font-semibold font-lato">{step2.dob}</p>
          </div>
          {/** Driver Age */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-base font-normal font-lato">Driver age</h5>
            <p className="text-sm font-semibold font-lato">
              {new Date().getFullYear() - new Date(step2.dob).getFullYear()}
            </p>
          </div>
          {/** Driver Address */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-base font-normal font-lato">Driver Address</h5>
            <div className="flex flex-col items-end justify-end">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold font-lato">
                  {step2.firstLineAddress}
                </p>
                <p className="text-sm font-semibold font-lato">
                  {step2.secondLineAddress}
                </p>
                <p className="text-sm font-semibold font-lato">
                  {step2.town}
                </p>
              </div>
              <div className="flex items-center gap-1.5">
               
                <p className="text-sm font-semibold font-lato">
                  {step2.postCode}
                </p>
                <p className="text-sm font-semibold font-lato">{step2.county}</p>
              </div>
            </div>
          </div>
          {/** Driver Email */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-base font-normal font-lato">Driver Email</h5>
            <p className="text-sm font-semibold font-lato">
              {" "}
              {step3.email
                .trim()
                .split("@")
                .map((part, index) => (
                  <React.Fragment key={index}>
                    {index === 0 ? (
                      <>
                        <p className="m-0 text-right">{part}</p>@
                      </>
                    ) : (
                      part
                    )}
                  </React.Fragment>
                ))}
            </p>
          </div>
          {/** Driver Phone Number */}
          <div className="flex items-center justify-between w-full">
            <h5 className="text-base font-normal font-lato">
              Driver Phone Number
            </h5>
            <p className="text-sm font-semibold font-lato">
              {step3.mobile}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
