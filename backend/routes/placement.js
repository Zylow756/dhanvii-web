import express from "express";
import Placement from "../models/placement.js";

const router = express.Router();

// Save placement form
router.post("/add", async (req, res) => {
  console.log("Incoming Data:", req.body);
  try {
    const newPlacement = new Placement(req.body);
    await newPlacement.save();

console.log("Saved Successfully ");
    res.json({ message: "Placement data saved" });
    res.status(201).json({
  success: true,
  message: "Placement data saved successfully"
});
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

// Get all placement data
router.get("/", async (req, res) => {
  try {
    const data = await Placement.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;