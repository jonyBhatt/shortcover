import express from "express";
import { createInsuranceDetails } from "../controller/insurance_details.controlller";

const router = express.Router();

router.post("/", createInsuranceDetails);
// router.post("/send-email", sendInsuranceDetailsEmail);

export { router as InsuranceRouter };