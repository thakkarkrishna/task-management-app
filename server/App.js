import express from "express";
import taskRoutes from "./routes/taskRoutes.js";
import "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.listen(5000, () => {
  console.log("Server Running");
});