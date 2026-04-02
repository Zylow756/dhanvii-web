import express from "express";
import Placement from "../models/Placement.js";

const router = express.Router();

// Save placement form
router.post("/add", async (req, res) => {
  console.log("Incoming Data:", req.body);
  try {
    const newPlacement = new Placement(req.body);
    await newPlacement.save();

console.log("Saved Successfully ");
    res.json({ message: "Placement data saved" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
    /*res.status(500).json({
  message: err.message || "Error saving data",
});*/
  }
});

export default router;