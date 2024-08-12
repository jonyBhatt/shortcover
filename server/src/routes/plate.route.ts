import express from "express";
import { getPlateDetailsById } from "../controller/plate.controller";

const router = express.Router();

router.get("/:plate", getPlateDetailsById);

export { router as PlateRouter };
