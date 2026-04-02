import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Entered Email:", email);

    const user = await User.findOne({ email });

    console.log("User Found:", user);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.json({
      message: "Login successful!!!"
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;