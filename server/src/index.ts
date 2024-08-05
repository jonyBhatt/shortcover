import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/errorHandler";
import { catchErrors } from "./utils/cathAsyncError";
import { AuthRouter } from "./routes/auth.route";
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["https://shortcover-client.vercel.app"],
    credentials: true,
  })
);
app.use(cookieParser());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from nodejs");
});
app.use("/api/auth", AuthRouter);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
