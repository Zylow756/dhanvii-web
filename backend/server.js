/* global process */
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import placementRoutes from "./routes/placement.js";
import enquiryRoutes from "./routes/enquiry.js";
import reviewRoutes from "./routes/review.js";
import placementGalleryRoutes from "./routes/placementGallery.js";
import galleryRoutes from "./routes/gallery.js";
import videoRoutes from "./routes/video.js";
import farStudentRoutes from "./routes/farStudent.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config();

app.use(cors({
  origin: [
    "https://dhanvii.in",
    "https://www.dhanvii.in",
    "http://dhanvii.in"
  ],
  credentials: true
}));
app.use(express.json());

//  ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/placement", placementRoutes);
app.use("/api/enquiry", enquiryRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/placementGallery", placementGalleryRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api", videoRoutes);  
app.use("/api/far-students", farStudentRoutes);      

// STATIC FILES
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// REACT BUILD PATH
const frontendPath = path.join(__dirname, "../dist");

app.use(express.static(frontendPath));

// REACT ROUTES
app.use((req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});


// DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
