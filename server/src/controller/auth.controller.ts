import { NextFunction, Request, Response } from "express";
import {
  createUserSchema,
  CreateUserType,
  loginSchema,
  LoginUserType,
} from "../dto/auth.dto";
import { catchErrors } from "../utils/cathAsyncError";
import bcrypt from "bcrypt";
import { prisma } from "../utils/db";
import jwt from "jsonwebtoken";
import {
  COOKIE_AUTHENTICATION_TOKEN_EXPIRATION,
  COOKIE_AUTHENTICATION_TOKEN_NAME,
} from "../constant/v1AuthenticationCookiesSettings";
export const registerController = catchErrors(
  async (
    req: Request<{}, {}, CreateUserType>,
    res: Response,
    next: NextFunction
  ) => {
    const body = createUserSchema.parse({
      ...req.body,
    });

    // check if user exist
    const user = await prisma.user.findUnique({ where: { email: body.email } });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);
    await prisma.user.create({
      data: {
        fistName: body.firstName,
        lastName: body.lastName,
        dob: body.dob,
        phone: body.phone || "",
        country: body.country,
        postCode: body.postCode,
        password: hashedPassword,
        email: body.email,
      },
    });

    res.status(201).json("User created successfully");
  }
);

// Login Controller
export const loginController = catchErrors(
  async (
    req: Request<{}, {}, LoginUserType>,
    res: Response,
    next: NextFunction
  ) => {
    const body = loginSchema.parse({
      ...req.body,
    });

    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      return res.status(401).json("Cannot find user!");
    }

    const validPass = bcrypt.compare(body.password, user.password!);
    if (!validPass) {
      return res.status(401).json("Password Invalid");
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.Role },
      process.env.AUTH_SECRET!,
      { expiresIn: "2h" }
    );

    res.status(200).json({ token, user });
  }
);

//Log out controller
export const logOutController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.clearCookie("token");
  res.status(200).send("Logged out successfully");
};
