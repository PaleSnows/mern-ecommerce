import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth.router.js";
import userRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Mongodb connected successfully!!!"))
  .catch((error) => console.log(error));

app.use(express.json());
app.use(cors());
app.use(cookieParser())

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.use((err, req, res, next) => {
 const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log("Server running...");
});
