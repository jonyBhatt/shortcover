import CarCostImage from "../../assets/CarCost.png";

export const CarCost = () => {
  return (
    <div className="py-24">
      <div className="container mxaut[ flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 px-5">
          <div className="mb-4">
            <h2 className="text-3xl font-bold mb-4 font-work">
              How much does temporary <br /> car insurance cost?
            </h2>
            <p className="font-lato text-sm font-normal">
              Temporary car insurance can be a cost-effective option for both
              new and experienced drivers. The exact cost will vary depending on
              certain factors. These include:
            </p>
          </div>

          <ul className="list-disc">
            <li className="font-lato text-sm mb-4 ">
              <span className="font-medium text-lg">Previous accidents</span> –
              Even if an accident wasn’t your fault, prior claims can affect the
              cost of short-term car insurance.
            </li>
            <li className="font-lato text-sm mb-4 ">
              <span className="font-medium text-lg">Personal details</span> – At
              SHORTCOVER, we pride ourselves on our attractive acceptance
              criteria, which means we’re able to insure more people. That said,
              your personal circumstances
            </li>
            <li className="font-lato text-sm mb-4 ">
              <span className="font-medium text-lg">Location</span> – It’s a
              fact of life that you’re more likely to make a claim depending on
              where you are. Some locations are deemed to be higher risk than
              others, which will be taken into account when you receive your
              quote. 
            </li>
            <li className="font-lato text-sm mb-4 ">
              <span className="font-medium text-lg">Type of vehicle</span> –
              Your vehicle size and model can impact your quote.
            </li>
            <li className="font-lato text-sm mb-4 ">
              <span className="font-medium text-lg">Car insurance excess</span>{" "}
              – The amount of excess you choose to pay can impact the cost of
              your claim. Make sure not to select an excess over your budget.
            </li>
            <li className="font-lato text-sm  ">
              <span className="font-medium text-lg">Length of policy</span> –
              Naturally, the longer you need cover for, the more your policy is
              likely to cost.
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 px-5">
          <img
            src={CarCostImage}
            alt="About Us Image"
            className="w-full h-auto  shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
