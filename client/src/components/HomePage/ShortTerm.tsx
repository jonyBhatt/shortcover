interface CardProps {
  title: string;
  description: string[];
}

const Card: React.FC<CardProps> = ({ title, description }) => (
  <div className="bg-[#F5FBFC] p-8 rounded-lg shadow-lg mb-6">
    <h3 className="text-xl font-semibold mb-7">{title}</h3>
    <ul className="list-inside text-gray-700">
      {description.map((item, index) => (
        <li key={index} className="py-1.5">
          {item}
        </li>
      ))}
    </ul>
  </div>
);
export const ShortTerm = () => {
  return (
    <div className="py-16 ">
      <div className="container mx-auto">
        <div className="text-center flex flex-col justify-center items-center   mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Short-term insurance to suit you
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5">
          <Card
            title="Quick and easy temporary car insurance quotes"
            description={[
              "It couldn’t be simpler to get a temporary car insurance policy ",
              "You can buy a policy online anytime you need it and with our straight forward quote process, you can get a price in just 90 seconds.",
            ]}
          />
          <Card
            title="Quick and easy temporary car insurance quotes"
            description={[
              "We all know that comparing prices is the best way to save money.",
              "We compare prices from a panel of temporary car insurance providers and show you their cheapest price.",
            ]}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5">
          <div className="border  border-black  p-8"></div>
          <div className="flex flex-col gap-4">
            <div className="border border-black  rounded-md p-4">
              <span className="font-lato">The car's reg number.</span>
            </div>
            <div className="border border-black  rounded-md p-4">
              <span className="font-lato">
                Your details (name, address, D.O.B etc)
              </span>
            </div>
            <div className="border border-black  rounded-md p-4">
              <span className="font-lato">
                Your licence type and how long you've held it.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
