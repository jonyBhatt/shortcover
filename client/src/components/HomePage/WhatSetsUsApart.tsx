import React from "react";
import { Button } from "../ui/button";

interface FeatureProps {
  title?: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ description }) => (
  <div className="bg-white px-10 py-16 rounded-lg shadow-lg  flex justify-center items-center">
    <p className="text-gray-700 text-center font-lato max-w-sm w-full">
      {description}
    </p>
  </div>
);
export const WhatSetsUsApart = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col items-center w-full">
        <div className="bg-primary mb-4  py-2 px-4 rounded-full text-white flex justify-center items-center">
          <p className="font-lato">Why Choose Us</p>
        </div>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What Sets Us Apart?
          </h2>
        </div>
        <div className="grid grid-cols-1 items-center  md:grid-cols-2 gap-6 w-full">
          <FeatureCard description="Get flexible cover that's right for you with policies from just 1 hour up to 28 days." />
          <FeatureCard description="Only pay for cover as and when you need it" />
          <FeatureCard description="No impact on your No Claims Discount plus fully comprehensive cover as standard." />
          <FeatureCard description="All policies are fully comprehensive" />
          <FeatureCard description="Easy to use online quote form, get short term cover in 60 seconds." />
          <div className="text-center">
            <Button size="lg">Get A Quote Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
