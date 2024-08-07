import { NextFunction, Request, Response } from "express";
import { prisma } from "../utils/db";
import { AuthRequest } from "../middleware/auth.middleware";

export const getCurrentUser = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  console.log(req.user);
  // Find user and return it
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: req.user?.email,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json({
      firstName: user.fistName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      country: user.country,
      postCode: user.postCode,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
