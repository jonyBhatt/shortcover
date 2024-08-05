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
  let token = req.headers.authorization;
  if (!token)
    return res.status(401).send("Access Denied / Unauthorized request");

  try {
    token = token.split(" ")[1];
    if (token === null || !token)
      return res.status(401).send("Unauthorized request");
    let verifyUser = jwt.verify(token, process.env.AUTH_SECRET!);
    if (!verifyUser) return res.status(401).send("Unauthorized request");
    req.user = verifyUser as User;
    next();
  } catch (error) {}
};
