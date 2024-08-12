import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CoverDetailsForm from "../components/CoverPage/form/CoverForm";

import { Button } from "../components/ui/button";
import PersonalFormDetails from "../components/CoverPage/form/PersonalDetailsForm";
import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../lib/utils";

// import { baseUrl } from "../lib/utils";

const FormSteps = [
  "CoverDetailsForm",
  "PersonalDetailsForm",
  "AddressForm",
  "PaymentForm",
  "ConfirmationForm",
];

const CoverPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [regNumberDriver, setRegNumberDriver] = useState("");
  // const [plateDetails, setPlateDetails] = useState("")

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const regNumber = searchParams.get("reg");

  const { data, isLoading } = useQuery({
    queryKey: ["fetchPlateById"],
    queryFn: () => fetchPlateDetails(),
  });

  const fetchPlateDetails = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/plate/${regNumber}`);
      const data = await res.json();
      return data;
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    const hash = location.hash.slice(1);
    const stepIndex = FormSteps.indexOf(hash);
    if (stepIndex !== -1) {
      setCurrentStep(stepIndex);
    }

    // const fetchPlateDetails = async () => {
    //   try {
    //     const res = await fetch(`http://localhost:3000/api/plate/${regNumber}`);
    //     const data = await res.json();
    //     console.log(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // fetchPlateDetails();
  }, [location]);

  // console.log(data);
  if (isLoading) return <p>Loading...</p>;

  const handleGetQuote = () => {
    if (regNumberDriver) {
      // Encode the registration number to handle special characters
      const encodedRegNumber = encodeURIComponent(regNumberDriver);
      // Navigate to the cover page with the registration number as a URL parameter
      navigate(`/cover?reg=${encodedRegNumber}#CoverDetailsForm`);
      // console.log(encodedRegNumber);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegNumberDriver(e.target.value.toUpperCase());
  };

  const nextStep = () => {
    if (currentStep < FormSteps.length - 1) {
      const nextStep = currentStep + 1;
      navigate(`/cover?reg=${regNumber}#${FormSteps[nextStep]}`);
      setCurrentStep(nextStep);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      const prevStep = currentStep - 1;
      navigate(`/cover?reg=${regNumber}#${FormSteps[prevStep]}`);
      setCurrentStep(prevStep);
    }
  };

  const renderForm = () => {
    switch (FormSteps[currentStep]) {
      case "CoverDetailsForm":
        if (regNumber) {
          return (
            <CoverDetailsForm
              nextStep={nextStep}
              regNumber={regNumber}
              desc={data.desc}
            />
          );
        }
        break;
      case "PersonalDetailsForm":
        return <PersonalFormDetails nextStep={nextStep} prevStep={prevStep} />;
      // case 'AddressForm':
      //   return <AddressForm nextStep={nextStep} prevStep={prevStep} />;
      // case 'PaymentForm':
      //   return <PaymentForm nextStep={nextStep} prevStep={prevStep} />;
      // case 'ConfirmationForm':
      //   return <ConfirmationForm prevStep={prevStep} />;
      default:
        return <div>Form not found</div>;
    }
  };

  return (
    <div>
      {regNumber ? (
        <>{renderForm()}</>
      ) : (
        <>
          <div className="flex items-center gap-4 bg-gray-200 p-4 rounded-lg">
            <div className="py-2 w-[230px] px-4  flex items-start gap-4">
              <span className="font-lato ">GB</span>
              <input
                type="text"
                placeholder="Enter Reg"
                className="font-lato font-light uppercase text-center outline-0 bg-transparent"
                value={regNumberDriver}
                onChange={handleInputChange}
              />
            </div>
            <Button
              className="py-2 w-[230px] px-4 bg-white flex items-center justify-center gap-10 group"
              onClick={handleGetQuote}
            >
              <span
                className="font-lato font-light 
                 capitalize text-center text-black group-hover:text-white"
              >
                Get a quote
              </span>
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CoverPage;
