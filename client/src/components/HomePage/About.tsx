import CarImage from "../../assets/carImage.png";
import CarMech from "../../assets/carMech.png";
import { useRouteContext } from "../../context/NavLinkProvider";
import { Button } from "../ui/button";
import Union from "../../assets/Union.png";
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
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center ">
        {currentRoute === "/cars" ? (
          <>
            <div className="md:w-1/2 px-5">
              <div className="mb-4">
                <h2 className="text-3xl font-bold mb-4 font-work">
                  Why Choose Our hourly car insurance?
                </h2>
                <div className="flex flex-col gap-6 py-4 items-start">
                  {aboutCarInsurance.map((item, index) => (
                    <div key={index} className="flex gap-2  items-center">
                      <img src={Union} alt="" className="w-6 h-6" />
                      <p className="text-sm font-lato text-gray-700">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-1/2 px-5">
              <img
                src={CarMech}
                alt="About Us Image"
                className="w-full h-auto  shadow-lg"
              />
            </div>
          </>
        ) : (
          <>
            <div className="md:w-1/2 px-5">
              <div className="mb-4">
                <h2 className="text-3xl font-bold mb-4 font-work">About Us</h2>
                <p className="font-lato text-lg font-bold">
                  Get temporary car insurance quotes <br /> in just 90 seconds.{" "}
                </p>
              </div>
              <p className="text-sm font-lato text-gray-700 mb-2">
                ShortCover is short-term cover that’s ideal for when you need to
                borrow a car, pick up a new vehicle, or just share a long drive.
                Whenever you need to use a car that you’re not already insured
                to drive, ShortCover is a flexible and affordable option.
              </p>
              <p className="text-sm font-lato text-gray-700">
                ShortCover is an ideal choice for drivers looking for a
                flexible, cost-effective option. It can help you get the cover
                you need for the time you want and is unbelievably quick and
                easy.
              </p>

              <Button className="mt-6" size="lg">
                Learn More
              </Button>
            </div>
            <div className="md:w-1/2 px-5 pt-4 md:pt-0">
              <img
                src={CarImage}
                alt="About Us Image"
                className="w-full h-auto  shadow-lg"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
