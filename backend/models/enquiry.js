import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
  name: String,
  phone: String,
  altPhone: String,
  email: String,
  qualification: String,
  referCode: String,
}, { timestamps: true });

export default mongoose.model("Enquiry", enquirySchema);