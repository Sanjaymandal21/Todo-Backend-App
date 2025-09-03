import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import todoRoutes from "./routes/tasks.route.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/todos", todoRoutes);

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



