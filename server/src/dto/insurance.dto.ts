import { z } from "zod";

export const createInsuranceDetailsSchema = z.object({
  reason: z.string(),
  durationType: z.string(),
  length: z.string(),
  date: z.string(),
  time: z.string(),
  endDate: z.string(),
  driverTitle: z.string(),
  driverFirstName: z.string(),
  driverLastName: z.string(),
  firstLineAddress: z.string(),
  secondLineAddress: z.string(),
  town: z.string(),
  postCode: z.string(),
  county: z.string(),
  dob: z.string(),
  job: z.string(),
  driverEmail: z.string(),
  driverPhone: z.string(),
  country: z.string(),
  licenseType: z.string(),
  drivingLicenseNumber: z.string(),
  extraDriver: z.string(),
  totalPayable: z.string(),
});

export type CreateInsuranceDetailsType = z.infer<typeof createInsuranceDetailsSchema>;