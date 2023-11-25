require("dotenv").config();
import express, { NextFunction, Response, Request } from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";

//body parser
app.use(express.json({ limit: "50mb" }));

//cookie parser
app.use(cookieParser());

//cors
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

//Testing API
app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "API is working",
  });
});
