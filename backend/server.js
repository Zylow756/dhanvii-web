import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

import authRoutes from "./routes/auth.js";
app.use("/api/auth", authRoutes);

// Middleware
app.use(cors());
app.use(express.json());

// Routes test
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/dhanvii", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});