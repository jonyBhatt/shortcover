import express from "express";
import {
  loginController,
  logOutController,
  registerController,
} from "../controller/auth.controller";
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/logout", logOutController);

export { router as AuthRouter };
