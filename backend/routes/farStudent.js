import express from "express";
import multer from "multer";
import FarStudent from "../models/FarStudent.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// ADD student
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const student = new FarStudent({
      name: req.body.name,
      address: req.body.address,
      distance: req.body.distance,
      city: req.body.city,
      image: req.file ? req.file.filename : "",
    });

    await student.save();
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all students
router.get("/", async (req, res) => {
  try {
    const students = await FarStudent.find().sort({ createdAt: -1 });
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put("/:id", upload.single("image"), async (req, res) => {
  const updateData = {
    name: req.body.name,
    address: req.body.address,
    distance: req.body.distance,
    city: req.body.city,
    isTop: req.body.isTop,
  };

  if (req.file) {
    updateData.image = req.file.filename;
  }
try{
  const updated = await FarStudent.findByIdAndUpdate(
    req.params.id,
    updateData,
    {  returnDocument: "after"}
  );

  res.json(updated);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  await FarStudent.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;