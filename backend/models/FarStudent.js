import mongoose from "mongoose";

const farStudentSchema = new mongoose.Schema({
  name: String,
  address: String,
  distance: String,
  city: String,
  image: String,
}, { timestamps: true });

export default mongoose.model("FarStudent", farStudentSchema);