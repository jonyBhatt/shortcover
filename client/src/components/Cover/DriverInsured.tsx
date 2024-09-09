import CheckInput from "../CheckInput";

interface DriverInsuredProps {
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  handleToggleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  country: string;
  licenseType: string;
  drivingLicenseNumber: string;
  mobile: string;
  email: string;
  confirmEmail: string;
  extraDriver: string;
  drivingLicenseNumber1: string;
  drivingLicenseNumber2: string;
  drivingLicenseNumber3: string;
}
export const DriverInsuredDetails = ({
  onChange,
  country,
  licenseType,
  extraDriver,
  drivingLicenseNumber1,
  drivingLicenseNumber2,
  drivingLicenseNumber3,

}: DriverInsuredProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-7">
      <h4 className="font-lato">Details of driver to be insured</h4>

      {/** Country */}
      <div className="flex flex-col w-full max-w-md gap-1">
        <div className="flex flex-col gap-1 mb-2">
          <h4 className="text-lg font-semibold">Issuing Country</h4>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <CheckInput
            name="country"
            value="Uk"
            isChecked={country === "Uk"}
            onChange={onChange}
          />
          <CheckInput
            name="country"
            value="Ni"
            isChecked={country === "Ni"}
            onChange={onChange}
          />

          <CheckInput
            name="country"
            value="Eu/EEA"
            isChecked={country === "Eu/EEA"}
            onChange={onChange}
          />
        </div>
      </div>
      
      {/** License Type */}
      <div className="flex flex-col w-full max-w-md gap-1">
        <div className="flex flex-col gap-1 mb-2">
          <h4 className="text-lg font-semibold">Issuing Country</h4>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <CheckInput
            name="licenseType"
            value="Full"
            isChecked={licenseType === "Full"}
            onChange={onChange}
          />
          <CheckInput
            name="licenseType"
            value="Provisional"
            isChecked={licenseType === "Provisional"}
            onChange={onChange}
          />

        </div>
      </div>

      {/** Driving license number */}
      <div className="flex flex-col w-full max-w-md gap-1">
        <div className="flex flex-col gap-1 mb-1">
          <h4 className="text-lg font-semibold">Driving license number</h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5">
          <div className="flex flex-col gap-1">
            <input
              type="text"
              id="drivingLicenseNumber"
              name="drivingLicenseNumber1"
              maxLength={5}
              pattern="[A-Za-z]{5}"
              // value={driverFirstName}
              placeholder=""
              onChange={onChange}
              className="w-full px-3 py-2 text-sm text-black border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-5"
            />
            <p className="text-sm text-muted-foreground">
              {drivingLicenseNumber1.length} / 5
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              id="drivingLicenseNumber"
              name="drivingLicenseNumber2"
              maxLength={6}
              pattern="[A-Za-z]{6}"
              // value={driverFirstName}
              placeholder=""
              onChange={onChange}
              className="w-full px-3 py-2 text-sm text-black border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-5"
            />
            <p className="text-sm text-muted-foreground">
              {drivingLicenseNumber2.length} / 6
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              id="drivingLicenseNumber"
              name="drivingLicenseNumber3"
              maxLength={5}
              pattern="[A-Za-z]{5}"
              // value={driverFirstName}
              placeholder=""
              onChange={onChange}
              className="w-full px-3 py-2 text-sm text-black border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-5"
            />
            <p className="text-sm text-muted-foreground">
              {drivingLicenseNumber3.length} / 5
            </p>
          </div>
        </div>
      </div>

      {/** Mobile Number */}
      <div className="flex flex-col w-full max-w-md gap-1">
        <div className="flex flex-col gap-1 mb-2">
          <h4 className="text-lg font-semibold">Mobile Number</h4>
        </div>
        <div className="flex flex-col gap-1.5">
          <input
            type="text"
            id="mobile"
            name="mobile"
            placeholder="07......"
            onChange={onChange}
            maxLength={11}
            className="w-full px-3 py-2 text-sm text-black border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-5"
          />
        </div>
      </div>

      {/** Email */}
      <div className="flex flex-col w-full max-w-md gap-1">
        <div className="flex flex-col gap-1 mb-2">
          <h4 className="text-lg font-semibold">What is your email address?</h4>
        </div>
        <div className="flex flex-col gap-1.5">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            onChange={onChange}
            required
            className="w-full px-3 py-2 text-sm text-black border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-5"
          />
        </div>
      </div>

      {/**Confirm  Email */}
      <div className="flex flex-col w-full max-w-md gap-1">
        <div className="flex flex-col gap-1 mb-2">
          <h4 className="text-lg font-semibold">Confirm your email address?</h4>
        </div>
        <div className="flex flex-col gap-1.5">
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            placeholder="Confirm your email address"
            onChange={onChange}
            required
            className="w-full px-3 py-2 text-sm text-black border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-5"
          />
        </div>
      </div>

      {/** Add extra driver */}
      <div className="flex flex-col w-full max-w-md gap-1">
        <div className="flex flex-col gap-1 mb-2">
          <h4 className="text-lg font-semibold">Add extra driver</h4>
        </div>
        <div className="grid w-full grid-cols-2 gap-2 md:gap-4">
          <CheckInput
            name="extraDriver"
            value="Yes"
            isChecked={extraDriver === "Yes"}
            onChange={onChange}
          />
          <CheckInput
            name="extraDriver"
            value="No"
            isChecked={extraDriver === "No"}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};
