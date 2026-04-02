import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import placementRoutes from "./routes/placement.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/placement", placementRoutes);

 mongoose.connect("mongodb://dhanvii_db:dhanvii12345@ac-ycrnqfx-shard-00-00.vkdpko5.mongodb.net:27017,ac-ycrnqfx-shard-00-01.vkdpko5.mongodb.net:27017,ac-ycrnqfx-shard-00-02.vkdpko5.mongodb.net:27017/dhanviDB?ssl=true&replicaSet=atlas-2eskuw-shard-0&authSource=admin&retryWrites=true&w=majority")
 .then(() => console.log("MongoDB Atlas Connected ✅"))
  .catch(err => console.log("Error:", err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

/*const FormSchema = new mongoose.Schema({}, { strict: false });
const Form = mongoose.model("Form", FormSchema);

//  API
app.post("/api/form", async (req, res) => {
  console.log("Incoming Data:", req.body);
  try {
    const newForm = new Form(req.body);
    await newForm.save();

console.log("Saved Successfully ");
    res.json({ message: "Saved to DB" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
  message: err.message || "Error saving data",
});
  }
});*/

//  Test route
app.get("/", (req, res) => {
  res.send("Server running...");
});

