import { useRouteContext } from "../../context/NavLinkProvider";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

interface BenefitCardProps {
  title: string;
  content: string;
  className?: string;
}
export const Benefits = () => {
  //    Benefits of our temporary car insurance
  const { currentRoute } = useRouteContext();
  return (
    <div className="py-32 container mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-work font-bold mb-4">
          {currentRoute === "/cars"
            ? "Benefits of hourly car insurance"
            : "Benefits of our temporary car insurance"}
        </h2>
        {currentRoute !== "/cars" && (
          <p className="text-lg text-gray-700">
            For more information on how we can help you get temporary car
            insurance.
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5">
        {currentRoute === "/cars" ? (
          <>
            <BenefitsCard
              title="It’s Cheaper"
              content="You only pay for what you need. With one hour car insurance you can get cover for 1h to 12h "
            />
            <BenefitsCard
              title="It’s Simple"
              content="Set your start time and pay fot the services. You than receive your documents and you are good to go"
            />
            <BenefitsCard
              title="It’s Quick"
              content="All we need from you is few details. It could take under 60 sec to get quote"
            />
            <BenefitsCard
              title="Your No Claims Discount is protected"
              content="Because the hourly car insurance policy is totally separate, there is no impact on the annual No clams discount !"
              className="text-center"
            />
          </>
        ) : (
          <>
            <BenefitsCard
              title="It’s flaxible"
              content="We all have different driving needs, so you can find a solution to suit your needs with no long-term contracts."
            />
            <BenefitsCard
              title="It's cost effective"
              content="When all you need is a few days or weeks of insurance, save money by only paying for what you need with short-term car insurance."
            />
            <BenefitsCard
              title="It's fast"
              content="Getting a temporary car insurance quote is super-quick. It takes just 90 seconds online or with just a few taps in the Tempcover App."
            />
            <BenefitsCard
              title="No impact on NCD"
              content="A big No Claims Discount can take years to build. With short term car insurance, you can save in the long and short term!"
              className="text-center"
            />
          </>
        )}
      </div>
    </div>
  );
};

function BenefitsCard({ title, content, className }: BenefitCardProps) {
  const { currentRoute } = useRouteContext();

  return (
    <div className="bg-white p-8 flex flex-col items-center rounded-md shadow-xl">
      <h3 className={cn(className, "text-xl font-semibold mb-2")}>{title}</h3>
      <p
        className={cn(
          className,
          "text-muted-foreground text-sm font-lato text-center"
        )}
      >
        {content}
      </p>
      {currentRoute !== "/cars" && (
        <Button size={"lg"} className="mt-5">
          Learn More
        </Button>
      )}
    </div>
  );
}
