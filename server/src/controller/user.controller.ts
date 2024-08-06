import { NextFunction, Request, Response } from "express";
import { prisma } from "../utils/db";

interface User {
  id: string;
  email: string;
  fistName: string;
  lastName: string;
  dob: string;
  phone: string;
  country: string;
  postCode: string;
  password: string;
  Role: string;
}

interface AuthUser {
  user: User;
  iat: number;
}

export const getCurrentUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authUser = req.user as unknown as AuthUser;
  // console.log(authUser.user.email);
  if (!authUser || !authUser.user || !authUser.user.email) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: authUser.user.email,
      },
    });

    if (!user)
      return res.status(404).json({
        message: "Not found!",
      });

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
