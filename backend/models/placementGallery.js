import mongoose from "mongoose";

const placementGallerySchema = new mongoose.Schema({
  name: String,
  qualification: String,
  company: String,
  salary: Number,

  workingAs: {
    type: String,
    enum: ["accountant", "businessman"],
    default: "accountant",
  },

  photo: String,
});

export default mongoose.model("PlacementGallery", placementGallerySchema);