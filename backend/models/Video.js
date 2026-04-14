import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  youtubeUrl: String,
});

export default mongoose.model("Video", videoSchema);