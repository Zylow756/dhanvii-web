import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,   // ✅ ADD THIS
      required: true,
      enum: ["function", "institute", "certification"], // optional but recommended
    },
  },
  { timestamps: true }
);

export default mongoose.model("Gallery", gallerySchema);