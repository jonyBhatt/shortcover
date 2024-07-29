import ExpertImage from "../../assets/user.jpg";
interface ExpertProps {
  image: string;
  quote: string;
  name: string;
  designation: string;
}

const ExpertSection: React.FC<ExpertProps> = ({
  image,
  quote,
  name,
  designation,
}) => {
  return (
    <div className="p-16">
      <div className="container mx-auto  text-center">
        <h2 className="text-3xl font-bold mb-6">What our expert says</h2>
        <div className="flex flex-col items-center">
          <img src={image} alt={name} className="w-24 h-24 rounded-full mb-4" />
          <p className="italic mb-4">{quote}</p>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-500">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export const ExpertSay = () => {
  return (
    <div>
      <ExpertSection
        image={ExpertImage}
        quote="Tempcover offers a seamless and efficient insurance service. Their temporary coverage is both comprehensive and flexible, making it perfect for any short-term needs."
        name="Dr. Jane Doe"
        designation="Chief Insurance Analyst"
      />
    </div>
  );
};
