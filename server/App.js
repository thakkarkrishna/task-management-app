import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

app.use(express.json());

connectDB(process.env.MONGO_URI);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Task Management API is running 🚀");
});

app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});