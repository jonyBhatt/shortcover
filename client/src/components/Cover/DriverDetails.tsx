import CheckInput from "../CheckInput";

interface DriverDetailsProps {
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  driverTitle: string;
  driverFirstName: string;
  driverLastName: string;
  dob: string;
  job: string;
  firstLineAddress: string;
  secondLineAddress: string;
  town: string;
  postCode: string;
  county: string;
}
export const DriverDetails = ({
  onChange,
  driverTitle,
}: DriverDetailsProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-7">
      <h4 className="font-lato">Details of driver to be insured</h4>

      {/** Mr Mrs Miss Ms */}
      <div className="flex flex-col w-full max-w-md gap-1">
        <div className="flex flex-col gap-1 mb-4">
          <h4 className="text-lg font-semibold">What is the driver's title?</h4>
          <span className="text-base">
            Make sure this matches the driver's license exactly
          </span>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <CheckInput
            name="driverTitle"
            value="Mr"
            isChecked={driverTitle === "Mr"}
            onChange={onChange}
          />
          <CheckInput
            name="driverTitle"
            value="Mrs"
            isChecked={driverTitle === "Mrs"}
            onChange={onChange}
          />
          <CheckInput
            name="driverTitle"
            value="Miss"
            isChecked={driverTitle === "Miss"}
            onChange={onChange}
          />
          <CheckInput
            name="driverTitle"
            value="Ms"
            isChecked={driverTitle === "Ms"}
            onChange={onChange}
          />
        </div>
      </div>
      {/** Driver Full Name */}
      <div className="flex flex-col w-full max-w-md gap-1">
        <div className="flex flex-col gap-1 mb-4">
          <h4 className="text-lg font-semibold">
            What is the driver's full name?
          </h4>
          <span className="text-base">
            Make sure this matches the driver's license exactly
          </span>
        </div>
        <div className="flex flex-col gap-1.5">
          <input
            type="text"
            id="driverFirstName"
            name="driverFirstName"
            // value={driverFirstName}
            placeholder="First Name"
            onChange={onChange}
            className="w-full px-3 py-2 text-sm text-black border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-5"
          />
          <input
            type="text"
            id="driverLastName"
            name="driverLastName"
            // value={driverFirstName}
            placeholder="Last Name"
            onChange={onChange}
            className="text-black  w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-5 mt-2.5"
          />
        </div>
      </div>
      {/** Driver Home Post code */}
      <div className="flex flex-col w-full max-w-md gap-1">
        <div className="flex flex-col gap-1 mb-4">
          <h4 className="text-lg font-semibold">
            What is the driver's address?
          </h4>
          <span className="text-base">
            Make sure this matches the driver's license exactly
          </span>
        </div>
        <div className="flex flex-col gap-1.5">
          <input
            type="text"
            id="firstLineAddress"
            name="firstLineAddress"
            // value={driverFirstName}
            placeholder="First Line Address"
            onChange={onChange}
            className="w-full px-3 py-2 text-sm text-black border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-5"
          />
          <input
            type="text"
            id="secondLineAddress"
            name="secondLineAddress"
            // value={driverFirstName}
            placeholder="Second Line Address"
            onChange={onChange}
            className="w-full px-3 py-2 text-sm text-black border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-5"
          />
          <input
            type="text"
            id="town"
            name="town"
            // value={driverFirstName}
            placeholder="Town"
            onChange={onChange}
            className="w-full px-3 py-2 text-sm text-black border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-5"
          />
          <input
            type="text"
            id="postCode"
            name="postCode"
            // value={driverFirstName}
            placeholder="Post Code"
            onChange={onChange}
            className="w-full px-3 py-2 text-sm text-black border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-5"
          />
          <input
            type="text"
            id="county"
            name="county"
            // value={driverFirstName}
            placeholder="County"
            onChange={onChange}
            className="w-full px-3 py-2 text-sm text-black border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-5"
          />
        </div>
      </div>
      {/** Driver Date of birth */}
      <div className="flex flex-col w-full max-w-md gap-1">
        <div className="flex flex-col gap-1 mb-4">
          <h4 className="text-lg font-semibold">
            What is the driver's date of birth?
          </h4>
          <span className="text-base">
            Make sure this matches the driver's license exactly
          </span>
        </div>
        <div className="flex flex-col gap-1.5">
          <input
            type="date"
            id="dob"
            name="dob"
            placeholder=""
            onChange={onChange}
            className="w-full px-3 py-2 text-sm text-black border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-5"
          />
        </div>
      </div>
      {/** Driver Income */}
      <div className="flex flex-col w-full max-w-md gap-1">
        <div className="flex flex-col gap-1 mb-1">
          <h4 className="text-lg font-semibold">
            What does the driver do for a living?
          </h4>
        </div>
        <div className="flex flex-col gap-1.5">
          <input
            type="text"
            id="job"
            name="job"
            // value={driverFirstName}
            placeholder="Driver profession"
            onChange={onChange}
            className="w-full px-3 py-2 text-sm text-black border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-5"
          />
        </div>
      </div>
    </div>
  );
};
