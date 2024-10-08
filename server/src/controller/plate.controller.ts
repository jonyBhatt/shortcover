import { Request, Response } from "express";
import { prisma } from "../utils/db";

export const getPlateDetailsById = async (req: Request, res: Response) => {
  const plate = req.params.plate.replace(/\s+/g, "");
  // console.log(plate);

  try {
    // Query the database using the plate number
    const vehicleDetails = await prisma.vehiclePlateDetails.findFirst({
      where: { plateNumber: plate },
    });

    // If no vehicle found, send a 404 response
    if (!vehicleDetails) {
      return res.status(404).json("Vehicle not found");
    }

    // Send the vehicle details as the response
    res.status(200).json(vehicleDetails);
  } catch (error) {
    console.log(error);
    res.status(500).json("Error retrieving vehicle details");
  }
};
