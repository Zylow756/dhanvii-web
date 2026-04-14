import express from "express";
import Video from "../models/Video.js";

const router = express.Router();

// Add or Update video
router.post("/video", async (req, res) => {
  const { youtubeUrl } = req.body;

  let video = await Video.findOne();

  if (video) {
    video.youtubeUrl = youtubeUrl;
    await video.save();
  } else {
    video = new Video({ youtubeUrl });
    await video.save();
  }

  res.json(video);
});

// Get video
router.get("/video", async (req, res) => {
  const video = await Video.findOne();
  res.json(video);
});

export default router;