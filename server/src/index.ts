import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/errorHandler";
import { catchErrors } from "./utils/cathAsyncError";
import { AuthRouter } from "./routes/auth.route";
import { UserRouter } from "./routes/user.route";
import { PlateRouter } from "./routes/plate.route";
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      "https://shortcover.onrender.com",
      "http://localhost:5173",
      "https://shortcover.co/",
    ],
    credentials: true,
  })
);
app.use(cookieParser());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from nodejs");
});
app.use("/api/auth", AuthRouter);
app.use("/api/user", UserRouter);
app.use("/api/plate", PlateRouter);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
