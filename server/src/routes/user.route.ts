import { verifyUser } from "./../middleware/auth.middleware";
import express from "express";
import { getCurrentUser } from "../controller/user.controller";

const route = express.Router();
route.get("/me", verifyUser, getCurrentUser);
export { route as UserRouter };
