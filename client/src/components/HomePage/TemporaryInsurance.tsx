/* eslint-disable no-irregular-whitespace */
import Image1 from "../../assets/img1.png";
import Image2 from "../../assets/img2.png";
export const TemporaryInsurance = () => {
  return (
    <div className="py-16 container mx-auto">
      <h2 className="font-bold text-3xl md:text-4xl text-center  mb-8">
        Am I eligible for temporary car insurance?
      </h2>
      <div className="flex flex-col gap-16 pt-8">
        {/** 1st Div */}
        <div className="flex lg:justify-between flex-col items-start lg:flex-row  lg:items-center bg-[#6C57EF]">
          <div className="p-16 flex flex-col items-start ">
            <h3 className="text-white font-bold text-lg !font-lato mb-4">
              To get temporary car insurance, you must:
            </h3>
            <ul className="list-disc px-4 insuranceList">
              <li className="text-white font-lato">
                Fully comprehensive on policies from 1 hour to 14 days
              </li>
              <li className="text-white  font-lato">
                Accidental and malicious damage to your car  
              </li>
              <li className="text-white  font-lato">
                Cover for injury or damage to another person or their property
              </li>
              <li className="text-white  font-lato">Driving in the UK</li>
              <li className="text-white  font-lato">
                In some instances driving in the EU with the third-party or
                equivariant level
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 w-full  h-full hidden md:block">
            <img
              src={Image1}
              alt={""}
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>
        {/** 2nd Div */}
        <div className="flex lg:justify-between flex-col items-start lg:flex-row  lg:items-center bg-[#6C57EF]">
          <div className="lg:w-1/2 w-full  h-full hidden md:block">
            <img
              src={Image2}
              alt={""}
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
          <div className="p-16 flex flex-col items-start max-w-2xl">
            <h3 className="text-white font-bold text-lg !font-lato mb-4">
              To get temporary car insurance, you must:
            </h3>
            <ul className="list-disc px-4 insuranceList">
              <li className="text-white font-lato">
                Be valued between £1,500 and £65,000.
              </li>
              <li className="text-white  font-lato">
                Be in a roadworthy condition with a current and valid
                MOT (unless you are using the insurance policy to take the
                vehicle to a pre-booked MOT). 
              </li>
              <li className="text-white  font-lato">
                The vehicle must be taxed (unless you are using the insurance
                policy to obtain tax for the vehicle immediately after
                purchase).
              </li>

              <li className="text-white  font-lato">
                Not be modified in any way except for those designed to aid
                disabled
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
