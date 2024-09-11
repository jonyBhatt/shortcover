import CarImage from "../../assets/carImage.png";
import CarMech from "../../assets/carMech.png";
import { useRouteContext } from "../../context/NavLinkProvider";
import { Button } from "../ui/button";
import Union from "../../assets/Union.png";
import { Link } from "react-router-dom";
export const About = () => {
  const { currentRoute } = useRouteContext();
  const aboutCarInsurance = [
    {
      title: "Get the cover you need with policies that last from just 1 hour",
    },
    {
      title:
        "No long -term contracts ,just a separate policy for the time you need",
    },
    {
      title:
        "No long -term contracts ,just a separate policy for the time you need",
    },
    {
      title:
        "No impact on your No claims Discount.plus, get fully comprehensive cover as standard",
    },
  ];
  return (
    <div className="py-24 bg-[#DFF2F6]  ">
      <div className="container flex flex-col items-center justify-center mx-auto md:flex-row ">
        {currentRoute === "/cars" ? (
          <>
            <div className="px-5 md:w-1/2">
              <div className="mb-4">
                <h2 className="mb-4 text-3xl font-bold font-work">
                  Why Choose Our hourly car insurance?
                </h2>
                <div className="flex flex-col items-start gap-6 py-4">
                  {aboutCarInsurance.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <img src={Union} alt="" className="w-6 h-6" />
                      <p className="text-sm text-gray-700 font-lato">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-5 md:w-1/2">
              <img
                src={CarMech}
                alt="About Us Image"
                className="w-full h-auto shadow-lg"
              />
            </div>
          </>
        ) : (
          <>
            <div className="px-5 md:w-1/2">
              <div className="mb-4">
                <h2 className="mb-4 text-3xl font-bold font-work">About Us</h2>
                <p className="text-lg font-bold font-lato">
                  Get temporary car insurance quotes <br /> in just 90 seconds.{" "}
                </p>
              </div>
              <p className="mb-2 text-sm text-gray-700 font-lato">
                ShortCover is short-term cover that’s ideal for when you need to
                borrow a car, pick up a new vehicle, or just share a long drive.
                Whenever you need to use a car that you’re not already insured
                to drive, ShortCover is a flexible and affordable option.
              </p>
              <p className="text-sm text-gray-700 font-lato">
                ShortCover is an ideal choice for drivers looking for a
                flexible, cost-effective option. It can help you get the cover
                you need for the time you want and is unbelievably quick and
                easy.
              </p>

              <Link to="/about">
                <Button className="mt-6" size="lg">
                  Learn More
                </Button>
              </Link>
              
            </div>
            <div className="px-5 pt-4 md:w-1/2 md:pt-0">
              <img
                src={CarImage}
                alt="About Us Image"
                className="w-full h-auto shadow-lg"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
