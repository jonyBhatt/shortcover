import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user: User;
    }
  }
}

export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  // console.log(req.cookies);

  let token = req.cookies["auth-token"];

  // console.log(token);

  if (!token)
    return res.status(401).send("Access Denied / Unauthorized request");

  try {
    if (token === null || !token)
      return res.status(401).send("Unauthorized request");
    // console.log("JWT Token: ", process.env.AUTH_SECRET);

    let verifyUser = jwt.verify(token, process.env.AUTH_SECRET!);
    if (!verifyUser) return res.status(401).send("Unauthorized request");
    req.user = verifyUser as User;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
};
