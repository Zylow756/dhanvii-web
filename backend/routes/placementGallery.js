import express from "express";
import PlacementGallery from "../models/placementGallery.js";
import multer from "multer";

const router = express.Router();

//  STORAGE CONFIG
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

//  GET DATA
router.get("/", async (req, res) => {
  try {
    const data = await PlacementGallery.find()
      .sort({ salary: -1 }); // highest first

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  ADD DATA (ADMIN)
router.post("/", upload.fields([
  { name: "photo", maxCount: 1 },
  { name: "background", maxCount: 1 }
]), async (req, res) => {
  try {
    const newStudent = new PlacementGallery({
      name: req.body.name,
      qualification: req.body.qualification,
      company: req.body.company,
  salary: Number(req.body.salary),
      background: req.files["background"]?.[0]?.path.replace(/\\/g, "/")
    });

    await newStudent.save();
    res.json(newStudent);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  UPDATE student
router.put("/:id", upload.fields([
  { name: "background", maxCount: 1 }
]), async (req, res) => {
  try {
    const updateData = {
      name: req.body.name,
      qualification: req.body.qualification,
      company: req.body.company,
      salary: Number(req.body.salary),
    };

    // optional update for images
    if (req.files["background"]) {
      updateData.background = req.files["background"][0].path.replace(/\\/g, "/");
    }

    const updated = await PlacementGallery.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json(updated);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  DELETE student
router.delete("/:id", async (req, res) => {
  try {
    await PlacementGallery.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;