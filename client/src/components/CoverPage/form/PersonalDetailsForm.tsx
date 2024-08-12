import React, { useState } from "react";
import { useFormData } from "../../../hooks/useFormData";
import { NextPreviousProps } from "../../../lib/types";
import { Button } from "../../ui/button";

interface PersonalFormProps extends NextPreviousProps {}

const PersonalFormDetails: React.FC<PersonalFormProps> = ({
  nextStep,
  prevStep,
}: NextPreviousProps) => {
  const { formData, updateFormData } = useFormData("personalDetails");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // console.log(value);

    updateFormData({ [name]: value });
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleTitleSelect = (title: string) => {
    updateFormData({ title });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm() && nextStep) {
      nextStep();
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.postcode) newErrors.postcode = "Postcode is required";
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Date of birth is required";
    if (!formData.occupation) newErrors.occupation = "Occupation is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="bg-[#2f3349] text-white p-8 rounded-lg max-w-2xl mx-auto my-10 ">
      <h1 className="text-2xl font-bold mb-4">
        Details of driver to be insured
      </h1>
      <p className="mb-6 text-sm">
        Make sure the driver's details match their driving licence.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2">What is the driver's title?</label>
          <p className="text-sm mb-2">
            Make sure this matches the driver's licence exactly
          </p>
          <div className="flex gap-4 space-x-2">
            {["Mr", "Mrs", "Miss", "Ms"].map((title) => (
              <Button
                key={title}
                type="button"
                onClick={() => handleTitleSelect(title)}
                className={`py-2 px-8 rounded ${
                  formData.title === title
                    ? "bg-primary text-white"
                    : "bg-white text-black"
                }`}
              >
                {title}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2">What is the driver's full name?</label>
          <p className="text-sm mb-2">
            Make sure this matches the driver's licence exactly
          </p>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName || ""}
            onChange={handleChange}
            className="w-full p-2 mb-2 rounded text-black"
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={formData.surname || ""}
            onChange={handleChange}
            className="w-full p-2 rounded text-black"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">
            What is the driver's home postcode?
          </label>
          <div className="flex">
            <input
              type="text"
              name="postcode"
              placeholder="Postcode"
              value={formData.postcode || ""}
              onChange={handleChange}
              className="flex-grow p-2 rounded-l text-black"
            />
            <button
              type="button"
              className="bg-primary text-black py-2 px-4 rounded-r"
            >
              Find address
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2">
            What is the driver's date of birth?
          </label>
          <p className="text-sm mb-2">
            Make sure this matches the driver's licence exactly
          </p>
          <input
            type="text"
            name="dateOfBirth"
            placeholder="DD/MM/YYYY"
            value={formData.dateOfBirth || ""}
            onChange={handleChange}
            className="w-full p-2 rounded text-black"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">
            What does the driver do for a living?
          </label>
          <input
            type="text"
            name="occupation"
            placeholder="Type your occupation..."
            value={formData.occupation || ""}
            onChange={handleChange}
            className="w-full p-2 rounded text-black"
          />
        </div>

        <Button type="submit" className="w-full  py-3 rounded font-bold mb-4">
          Continue
        </Button>

        <button
          type="button"
          onClick={prevStep}
          className="w-full text-center text-sm underline"
        >
          Go Back
        </button>
      </form>
    </div>
  );
};

export default PersonalFormDetails;
