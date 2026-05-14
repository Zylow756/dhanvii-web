import express from "express";
import Video from "../models/Video.js";

const router = express.Router();

// ADD NEW VIDEO
router.post("/video", async (req, res) => {
  try {
    const { youtubeUrl } = req.body;

    const newVideo = new Video({ youtubeUrl });
    await newVideo.save();

    res.json(newVideo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL VIDEOS
router.get("/video", async (req, res) => {
  try {
    console.log("VIDEO API CALLED");

    const videos = await Video.find().sort({ createdAt: -1 });

    console.log("VIDEOS:", videos);

    res.json(videos);

  } catch (err) {
    console.error("VIDEO ERROR:", err);

    res.status(500).json({
      error: err.message,
    });
  }
});

// DELETE VIDEO (optional but important)
router.delete("/video/:id", async (req, res) => {
  await Video.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;