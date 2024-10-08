import BorrowCar from "../../assets/borCar.png";
import BuySellingCar from "../../assets/bsCar.png";
import LongJourneyCar from "../../assets/ljCar.png";
export const WhyUseShortCover = () => {
  return (
    <div className="bg-[#565ACD] py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl text-white font-bold mb-4 text-center">
          Why use our ShortCover car insurance?
        </h2>
        <div className="flex flex-col gap-6 w-full max-w-lg lg:max-w-full my-16">
          <div className="flex justify-start bg-white rounded-lg max-w-2xl relative py-6 px-8">
            <div className="flex flex-col gap-4 items-start">
              <h5 className="text-xl">Borrowing a car</h5>
              <span className="font-lato">
                Get the cover you need for the time you’re actually driving with
                no long-term commitments.
              </span>
            </div>
            <div className="absolute -top-4 -right-32 hidden md:block">
              <img src={BorrowCar} alt="" className="w-[90%]" />
            </div>
          </div>

          <div className="flex justify-around items-center">
            <div></div>
            <div className="flex justify-center bg-white rounded-lg max-w-2xl relative mt-16  py-6 px-8">
              <div className="flex flex-col gap-4 items-start">
                <h5 className="text-xl">Buying or selling a car</h5>
                <span className="font-lato">
                  When looking to change your car, if you only need a few hours,
                  days, or weeks insurance, save money by only paying for the
                  time you need with short-term car insurance.
                </span>
              </div>
              <div className="absolute -top-4 -right-32 hidden md:block">
                <img src={BuySellingCar} alt="" className="w-[90%]" />
              </div>
            </div>
          </div>

          <div className="flex justify-start bg-white rounded-lg max-w-2xl mt-16 relative py-6 px-8">
            <div className="flex flex-col gap-4 items-start">
              <h5 className="text-xl">Long journey car sharing</h5>
              <span className="font-lato">
                Get the highest level of cover available and peace of mind that
                there’s no impact on existing No Claims Discount.
              </span>
            </div>
            <div className="absolute -top-4 -right-32 hidden md:block">
              <img src={LongJourneyCar} alt="" className="w-[90%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
