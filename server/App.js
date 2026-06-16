import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/db.js";

const app = express();

app.use(express.json());

connectDB(process.env.MONGO_URI);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});