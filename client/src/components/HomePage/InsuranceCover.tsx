interface CardProps {
  title: string;
  description: string[];
}

const Card: React.FC<CardProps> = ({ title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
    <h3 className="text-xl font-semibold mb-7">{title}</h3>
    <ul className="list-disc list-inside text-gray-700">
      {description.map((item, index) => (
        <li key={index} className="py-1.5">
          {item}
        </li>
      ))}
    </ul>
  </div>
);
export const InsuranceCover = () => {
  return (
    <div className="py-16 bg-[#F5FBFC]">
      <div className="container mx-auto">
        <div className="text-center flex flex-col justify-center items-center   mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What does our temporary insurance cover?
          </h2>
          <h3 className="text-sm text-muted-foreground max-w-lg">
            With fully comprehensive cover as standard on temporary car
            insurance, you’re covered for any damage to yourself, the car,
            and/or any third parties involved in an accident.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5">
          <Card
            title="What's covered with short-term car insurance?"
            description={[
              "Fully comprehensive insurance on policies from 1 hour to 14 days ",
              "Accidental and malicious damage to your car  ",
              "Cover for injury or damage to another person or their property",
              "Driving in the UK",
              "In some instances driving in the EU with the third-party or equivariant level",
            ]}
          />
          <Card
            title="What’s optional with short-term car insurance?"
            description={[
              "Legal Expenses Cover providing up to £100,000 cover for legal costs including uninsured loss recovery for accidents that are not your fault",
              "Excess Reduction Cover, reducing your policy excess to as close as £100 as possible",
            ]}
          />
          <Card
            title="What's not covered with short-term car insurance?"
            description={[
              "The excess you agreed to pay",
              "Release from an impound (unless you buy a specific temporary impounded vehicle policy)",
              "Additional drivers – we can only cover the driver named on the policy",
              "A sole claim or separate cover for broken/damaged glass including the windscreen",
            ]}
          />
        </div>
      </div>
    </div>
  );
};
