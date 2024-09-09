import { useEffect, useState } from "react";
import StarIcon from "../assets/star-icon.png";
import AboutVehicle from "../components/Cover/AboutVehicle";
import { DriverDetails } from "../components/Cover/DriverDetails";
import { DriverInsuredDetails } from "../components/Cover/DriverInsured";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { ConfrimCover } from "../components/Cover/ConfrimCover";
import { AcceptanceCriteria } from "../components/Cover/AcceptenceCriteria";
import { useLocation } from "react-router-dom";
import { TempModal } from "../components/modal/TempModal";
import { baseUrl } from "../lib/utils";
import { Loader2 } from "lucide-react";

interface FormData {
  step1: {
    reason: string;
    durationType: string;
    length: string;
    date: string;
    time: string;
    endDate: string;
  };
  step2: {
    driverTitle: string;
    driverFirstName: string;
    driverLastName: string;
    address: string;
    firstLineAddress: string;
    secondLineAddress: string;
    town: string;
    postCode: string;
    county: string;
    dob: string;
    job: string;
  };
  step3: {
    country: string;
    licenseType: string;
    drivingLicenseNumber: string;
    drivingLicenseNumber1: string;
    drivingLicenseNumber2: string;
    drivingLicenseNumber3: string;
    mobile: string;
    email: string;
    confirmEmail: string;
    extraDriver: string;
    totalPayable: string;
  };
}

export default function CoverPage() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const regNumber = searchParams.get("reg");
  const [formData, setFormData] = useState<FormData>({
    step1: {
      reason: "",
      date: "",
      durationType: "",
      length: "",
      time: "",
      endDate: "",
    },
    step2: {
      driverTitle: "",
      driverFirstName: "",
      driverLastName: "",
      address: "",
      firstLineAddress: "",
      secondLineAddress: "",
      town: "",
      postCode: "",
      county: "",
      dob: "",
      job: "",
    },
    step3: {
      country: "",
      licenseType: "",
      drivingLicenseNumber: "",
      drivingLicenseNumber1: "",
      drivingLicenseNumber2: "",
      drivingLicenseNumber3: "",
      email: "",
      confirmEmail: "",
      extraDriver: "",
      mobile: "",
      totalPayable: "",
    },
  });
  const [page, setPage] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  const Titles = [
    "About the vehicle you want to insurance",
    "Details of driver to be insured",
    "Details of driver to be insured?",
    "Your cover confirmation",
    "Acceptance Criteria and Eligibility",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    console.log(name, value);

    setFormData((prevData) => ({
      ...prevData,
      step1: {
        ...prevData.step1,
        [name]: value,
      },
      step2: {
        ...prevData.step2,
        [name]: value,
      },
      step3: {
        ...prevData.step3,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    // console.log("Submitting data:", formData);
    const drivingLicenseNumber =
      formData.step3.drivingLicenseNumber1 +
      formData.step3.drivingLicenseNumber2 +
      formData.step3.drivingLicenseNumber3;

    // console.log(drivingLicenseNumber);

    // Post to server
    try {
      setIsLoading(true);
      const response = await fetch(`${baseUrl}/api/insurance`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reason: formData.step1.reason,
          durationType: formData.step1.durationType,
          length: formData.step1.length,
          date: formData.step1.date,
          time: formData.step1.time,
          endDate: formData.step1.endDate,
          driverTitle: formData.step2.driverTitle,
          driverFirstName: formData.step2.driverFirstName,
          driverLastName: formData.step2.driverLastName,
          firstLineAddress: formData.step2.firstLineAddress,
          secondLineAddress: formData.step2.secondLineAddress,
          town: formData.step2.town,
          postCode: formData.step2.postCode,
          county: formData.step2.county,
          dob: formData.step2.dob,
          job: formData.step2.job,
          driverEmail: formData.step3.email,
          driverPhone: formData.step3.mobile,
          country: formData.step3.country,
          licenseType: formData.step3.licenseType,
          drivingLicenseNumber,
          extraDriver: formData.step3.extraDriver,
          totalPayable: formData.step3.totalPayable,
        }),
      });
      if (response.ok) {
        setIsLoading(false);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }

    // Reset form after submission
    // setFormData({
    //   step1: {
    //     reason: "",
    //     date: "",
    //     durationType: "",
    //     length: "",
    //     time: "",
    //   },
    //   step2: {
    //     driverTitle: "",
    //     driverFirstName: "",
    //     driverLastName: "",
    //     address: "",
    //     dob: "",
    //     job: "",
    //   },
    //   step3: {
    //     country: "",
    //     licenseType: "",
    //     drivingLicenseNumber: "",
    //     email: "",
    //     confirmEmail: "",
    //     extraDriver: "",
    //     mobile: "",
    //   },
    // });
  };

  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log("Toggle Name: ", name);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    const isChecked = formData.step3[name] === value;
    console.log(isChecked);

    handleInputChange({
      ...e,
      target: {
        ...e.target,
        value: isChecked ? "" : value,
      },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  useEffect(() => {
    if (page === 0) {
      setProgressBar(20);
    } else if (page === 1) {
      setProgressBar(40);
    } else if (page === 2) {
      setProgressBar(60);
    } else if (page === 3) {
      setProgressBar(80);
    } else if (page === 4) {
      setProgressBar(90);
    }
  }, [page]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-8">
      {regNumber ? (
        <>
          <div className="flex items-center justify-center w-full">
            <Progress value={progressBar} className="w-[70%] " />
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden text-xs text-muted-foreground md:block">
              Our customer say
            </span>
            <h2 className="text-lg font-semibold">Excellent</h2>
            <div className="flex items-center gap-1">
              <img src={StarIcon} alt="staricon" className="w-5 h-5" />
              <img src={StarIcon} alt="staricon" className="w-5 h-5" />
              <img src={StarIcon} alt="staricon" className="w-5 h-5" />
              <img src={StarIcon} alt="staricon" className="w-5 h-5" />
              <img src={StarIcon} alt="staricon" className="w-5 h-5" />
            </div>
            <span className="text-xs text-muted-foreground">
              10,137 reviews on
            </span>
            <div className="flex items-center ">
              <img src={StarIcon} alt="staricon" className="w-6 h-6" />
              <p className="text-sm font-medium">Trustpilot</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full gap-6 my-8">
            <h3 className="text-xl font-semibold leading-5 md:text-3xl">
              {" "}
              {Titles[page]}
            </h3>
            <form
              className="max-w-sm md:max-w-2xl w-full bg-[#353752] p-8 text-white rounded"
              onSubmit={handleSubmit}
            >
              {page === 0 && (
                <AboutVehicle
                  onChange={handleInputChange}
                  reason={formData.step1.reason}
                  date={formData.step1.date}
                  durationType={formData.step1.durationType}
                  length={formData.step1.length}
                  time={formData.step1.time}
                  regNumber={regNumber}
                  endDate={formData.step1.endDate}
                />
              )}
              {page === 1 && (
                <DriverDetails
                  onChange={handleInputChange}
                  dob={formData.step2.dob}
                  driverTitle={formData.step2.driverTitle}
                  driverFirstName={formData.step2.driverFirstName}
                  driverLastName={formData.step2.driverLastName}
                  firstLineAddress={formData.step2.firstLineAddress}
                  secondLineAddress={formData.step2.secondLineAddress}
                  town={formData.step2.town}
                  postCode={formData.step2.postCode}
                  county={formData.step2.county}
                  job={formData.step2.job}
                />
              )}
              {page === 2 && (
                <DriverInsuredDetails
                  onChange={handleInputChange}
                  country={formData.step3.country}
                  licenseType={formData.step3.licenseType}
                  drivingLicenseNumber={formData.step3.drivingLicenseNumber}
                  drivingLicenseNumber1={formData.step3.drivingLicenseNumber1}
                  drivingLicenseNumber2={formData.step3.drivingLicenseNumber2}
                  drivingLicenseNumber3={formData.step3.drivingLicenseNumber3}
                  email={formData.step3.email}
                  confirmEmail={formData.step3.confirmEmail}
                  extraDriver={formData.step3.extraDriver}
                  mobile={formData.step3.mobile}
                  handleToggleChange={handleToggleChange}
                />
              )}
              {page === 3 && (
                <ConfrimCover
                  step1={formData.step1}
                  step2={formData.step2}
                  step3={formData.step3}
                  regNumber={regNumber}
                />
              )}
              {page === 4 && <AcceptanceCriteria />}
              {page === 4 && (
                <Button
                  type="submit"
                  size={"lg"}
                  className="w-full mt-8 text-xl font-bold rounded-full"
                >
                  Purchase
                </Button>
              )}
            </form>
            <div className="flex flex-col items-center w-full gap-2 mt-4">
              <Button
                size={"lg"}
                className="w-1/2 text-xl font-bold rounded-full "
                disabled={page === Titles.length - 1}
                onClick={() => setPage((currPage) => currPage + 1)}
              >
                Continue
              </Button>
              <Button
                size={"lg"}
                variant={"link"}
                className={`rounded-full  text-lg  ${page === 0 && "hidden"}`}
                onClick={() => setPage((currPage) => currPage - 1)}
              >
                Go Back
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <TempModal triggerButton="Get a Quote" />
        </>
      )}
    </div>
  );
}
