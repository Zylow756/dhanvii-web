import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
  name: String,
  address: String,
  mobile: String,
  dob: String,
  gender: String,
  language: String,
  jobTitle: String,
  expectedSalary: String,
  jobLocation: String,

  family: [
    {
      relation: String,
      name: String,
      education: String,
      working: String,
    },
  ],

  academic: [
    {
      qualification: String,
      stream: String,
      board: String,
      year: String,
      percentage: String,
    },
  ],

  experience: [
    {
      company: String,
      post: String,
      type: String,
      from: String,
      to: String,
      salary: String,
    },
  ],
});

export default mongoose.model("Form", FormSchema);