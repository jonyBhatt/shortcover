/* eslint-disable no-irregular-whitespace */
import { Button } from "../ui/button";
import StarIcon from "../../assets/star-icon.png";
import Star from "../../assets/yellow-start.png";
import { useRouteContext } from "../../context/NavLinkProvider";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GB from "../../assets/gb.png";
export const Hero = () => {
  const { currentRoute } = useRouteContext();
  const [regNumber, setRegNumber] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegNumber(e.target.value.toUpperCase());
  };

  const handleGetQuote = () => {
    if (regNumber) {
      // Encode the registration number to handle special characters
      const encodedRegNumber = encodeURIComponent(regNumber);
      // Navigate to the cover page with the registration number as a URL parameter
      navigate(`/cover?reg=${encodedRegNumber}`);
      // console.log(encodedRegNumber);
    }
  };
  return (
    <div className="bg-image flex justify-center">
      <div className="container mx-auto py-[125px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center  lg:gap-16 md:gap-8 gap-4">
          <div className="flex flex-col gap-4 items-start">
            {currentRoute === "/cars" ? (
              <>
                <h2 className="font-bold text-white  text-2xl md:text-5xl font-work">
                  Hourly Car Insurance
                </h2>
                <p className="text-white text-lg font-light font-work max-w-xs ">
                  Quotes for 1-12 hours in under 60 secend
                </p>
              </>
            ) : (
              <>
                <h2 className="font-bold text-white  text-2xl md:text-5xl font-work">
                  ShortCover <br />
                  Car Insurance
                </h2>
                <p className="text-white text-lg font-light font-work max-w-xs ">
                  Get temporary car insurance quotes in just 90 seconds.
                </p>
              </>
            )}

            <Button
              size={"lg"}
              className="bg-white text-blue-500 hover:text-white capitalize font-work "
            >
              <Link to={"/cover?register="}>Get a quote</Link>
            </Button>
          </div>
          <div className="glass-morphism items-center  flex flex-col gap-4 pb-8  max-w-lg">
            <h2 className="font-bold font-lato text-3xl text-white">
              Temporary Insurance
            </h2>
            <p className="text-muted-foreground font-lato font-medium text-lg">
              For Cars
            </p>
            <span className="font-lato text-sm text-muted-foreground">
              Cover from <b className="text-white">1 hour to 28 days</b> in an
              instant
            </span>

            <div className="flex items-start lg:items-center w-full flex-col lg:flex-row gap-4 ">
              <div className="  bg-white flex items-center w-full lg:w-auto gap-4 rounded">
                <img src={GB} alt="gb" className="w-12 h-12" />
                <input
                  type="text"
                  placeholder="Enter Reg"
                  className="font-lato font-light uppercase text-center outline-0"
                  value={regNumber}
                  onChange={handleInputChange}
                />
              </div>
              <Button
                className="py-6 w-[230px] px-4 bg-white flex items-center justify-center gap-10 group"
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

            <div className="flex flex-col text-white gap-4 justify-center items-center">
              <span className="font-lato text-sm  ">
                Don’t know the reg? <Link to={"/register"}>Click Here</Link>
              </span>
              <span className="font-lato text-sm  ">
                Get quotes, buy online and  be on your way in less than 60
                Second!
              </span>
            </div>
            <div className="flex items-center gap-2 md:mt-8 mt-0">
              <p className="font-medium text-white text-sm">Excellent</p>
              <div className="flex items-center gap-1">
                <img src={StarIcon} alt="staricon" className="w-4 h-4" />
                <img src={StarIcon} alt="staricon" className="w-4 h-4" />
                <img src={StarIcon} alt="staricon" className="w-4 h-4" />
                <img src={StarIcon} alt="staricon" className="w-4 h-4" />
                <img src={StarIcon} alt="staricon" className="w-4 h-4" />
                <img src={Star} alt="staricon" className="w-4 h-4" />
              </div>
              <p className="font-medium text-white text-sm">Trustpilot</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
