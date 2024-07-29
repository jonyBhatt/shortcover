import { Link, useLocation, useNavigate } from "react-router-dom";
import { SelectComp } from "../components/CoverPage/SelectComp";
import { useState } from "react";
import { Button } from "../components/ui/button";

export default function CoverPage() {
  const [duration, setDuration] = useState<string>("");
  const [day, setDays] = useState<string>("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const regNumber = searchParams.get("reg");

  const [regNumberDriver, setRegNumberDriver] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegNumberDriver(e.target.value.toUpperCase());
  };

  const handleGetQuote = () => {
    if (regNumberDriver) {
      // Encode the registration number to handle special characters
      const encodedRegNumber = encodeURIComponent(regNumberDriver);
      // Navigate to the cover page with the registration number as a URL parameter
      navigate(`/cover?reg=${encodedRegNumber}`);
      // console.log(encodedRegNumber);
    }
  };

  return (
    <div className="h-svh flex flex-col  items-center my-32">
      {regNumber ? (
        <>
          <h2 className="font-bold font-work text-3xl">
            About the Vehicle you want to insure
          </h2>
          <div className=" max-w-2xl w-full">
            <div className="my-6 p-6 rounded-lg bg-[#353752] w-full">
              <div className="flex flex-col items-center justify-center  gap-6">
                <h4 className="font-medium text-white text-lg text-center">
                  Your Cover Details
                </h4>
                <div className="container mx-auto">
                  <div className="p-4 bg-white   flex flex-col gap-4 ">
                    <p>{regNumber}</p>

                    <span>
                      {" "}
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae fuga provident placeat dicta inventore debitis
                      dolor autem ipsum modi. Harum, aut? Distinctio sint eaque
                      iusto architecto alias quos error vel!
                    </span>
                    <Link to="#" className="font-bold text-primary underline">
                      Change Vehicle
                    </Link>
                  </div>
                </div>

                <div className="container mx-auto">
                  <div className="mt-4 flex flex-col items-start w-full gap-1">
                    <h2 className="text-white">Reason for cover</h2>
                    <SelectComp />
                  </div>
                </div>

                <div className="container mx-auto">
                  <div className="mt-4 flex flex-col items-start w-full gap-1">
                    <h2 className="text-white">Duration Type</h2>
                    <div className="flex gap-4 justify-between items-center">
                      <div className="flex flex-col gap-2 items-center">
                        <button
                          className={`py-3 px-12  shadow-xl rounded-lg flex items-center justify-center ${
                            duration === "hour"
                              ? "bg-primary text-white"
                              : "bg-white"
                          }`}
                          onClick={() => setDuration("hour")}
                        >
                          Hours
                        </button>
                      </div>

                      <div className="flex flex-col gap-2 items-center">
                        <button
                          className={`py-3 px-12  shadow-xl rounded-lg flex items-center justify-center ${
                            duration === "day"
                              ? "bg-primary text-white"
                              : "bg-white"
                          }`}
                          onClick={() => setDuration("day")}
                        >
                          Days
                        </button>
                      </div>

                      <div className="flex flex-col gap-2 items-center">
                        <button
                          className={`py-3 px-12  shadow-xl rounded-lg flex items-center justify-center ${
                            duration === "week"
                              ? "bg-primary text-white"
                              : "bg-white"
                          }`}
                          onClick={() => setDuration("week")}
                        >
                          Weeks
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container mx-auto">
                  <div className="mt-4 flex flex-col items-start w-full gap-4">
                    <h2 className="text-white">How long dou need a cover?</h2>
                    <div className="flex gap-4 items-center justify-between">
                      <div className="flex flex-col gap-2 items-center">
                        <button
                          className={`py-3 px-6  shadow-xl rounded-lg flex items-center justify-center ${
                            day === "1day"
                              ? "bg-primary text-white"
                              : "bg-white"
                          }`}
                          onClick={() => setDays("1day")}
                        >
                          1{" "}
                          {duration === "hour"
                            ? "Hour"
                            : duration === "day"
                            ? "Day"
                            : "Week"}
                        </button>
                      </div>

                      <div className="flex flex-col gap-2 items-center">
                        <button
                          className={`py-3 px-6 shadow-xl rounded-lg flex items-center justify-center ${
                            day === "3days"
                              ? "bg-primary text-white"
                              : "bg-white"
                          }`}
                          onClick={() => setDays("3days")}
                        >
                          3{" "}
                          {duration === "hour"
                            ? "Hours"
                            : duration === "day"
                            ? "Days"
                            : "Weeks"}
                        </button>
                      </div>

                      <div className="flex flex-col gap-2 items-center">
                        <button
                          className={`py-3 px-6 shadow-xl rounded-lg flex items-center justify-center ${
                            day === "5days"
                              ? "bg-primary text-white"
                              : "bg-white"
                          }`}
                          onClick={() => setDays("5days")}
                        >
                          5{" "}
                          {duration === "hour"
                            ? "Hours"
                            : duration === "day"
                            ? "Days"
                            : "Weeks"}
                        </button>
                      </div>

                      <div className="flex flex-col gap-2 items-center">
                        <button
                          className={`py-3 px-6  shadow-xl rounded-lg flex items-center justify-center ${
                            day === "other"
                              ? "bg-primary text-white"
                              : "bg-white"
                          }`}
                          onClick={() => setDays("other")}
                        >
                          Other
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container mx-auto">
                  <div className="mt-4 flex flex-col items-start w-full gap-1">
                    <h2 className="text-white">Start Date</h2>
                    <SelectComp />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-4 bg-gray-200 p-4 rounded-lg">
            <div className="py-2 w-[230px] px-4  flex items-start gap-4">
              <span className="font-lato ">GB</span>
              <input
                type="text"
                placeholder="Enter Reg"
                className="font-lato font-light uppercase text-center outline-0 bg-transparent"
                value={regNumberDriver}
                onChange={handleInputChange}
              />
            </div>
            <Button
              className="py-2 w-[230px] px-4 bg-white flex items-center justify-center gap-10 group"
              onClick={handleGetQuote}
            >
              <span
                className="font-lato font-light 
                 capitalize text-center text-black group-hover:text-white"
              >
                Get a quote
              </span>
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
