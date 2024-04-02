import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return resizeBy.status(statusCode).json({
    sucess: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log("Server running...");
});
