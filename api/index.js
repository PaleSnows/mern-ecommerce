import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'
import userRouter from "./routes/auth.router.js";
dotenv.config()


const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", userRouter);

app.use((err, req, res, next) => {
  statusCode = err.statusCode || 500;
  message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log("Server running...");
});
