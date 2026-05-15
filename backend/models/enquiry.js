import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
  name: String,
  phone: String,
  altPhone: String,
  qualification: String,
}, { timestamps: true });

export default mongoose.model("Enquiry", enquirySchema);