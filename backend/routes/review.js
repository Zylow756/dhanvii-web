import express from "express";
import Review from "../models/Review.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// GET
router.get("/", async (req, res) => {
  try {
    console.log("REVIEWS API CALLED");

    const reviews = await Review.find();

    console.log("REVIEWS:", reviews);

    res.json(reviews);

  } catch (err) {
    console.error("REVIEWS ERROR:", err);

    res.status(500).json({
      error: err.message,
    });
  }
});

// POST
router.post("/", upload.single("image"), async (req, res) => {
  try {
    console.log("BODY:", req.body);  
    console.log("FILE:", req.file);

    const review = new Review({
      name: req.body.name,
      message: req.body.message,
      path:req.body.path,
      qualification:req.body.qualification,
      image: req.file ? req.file.filename : "",
    });

    await review.save();
    res.json(review);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// EDIT
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const updated = await Review.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        message: req.body.message,
        path:req.body.path,
        qualification:req.body.qualification,
        ...(req.file && { image: req.file.filename })
      },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;