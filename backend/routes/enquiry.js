/* global process */
import express from "express";
import nodemailer from "nodemailer";
import fs from "fs";
import XLSX from "xlsx";
import Enquiry from "../models/enquiry.js";

const router = express.Router();

let filePath = "./enquiries.xlsx";


//  GET ALL
router.get("/", async (req, res) => {
  try {
    const data = await Enquiry.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ err });
  }
});

//  DELETE
router.delete("/:id", async (req, res) => {
  await Enquiry.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

//  UPDATE
router.put("/:id", async (req, res) => {
  const updated = await Enquiry.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

//  EXPORT EXCEL
router.get("/export", async (req, res) => {
  const data = await Enquiry.find();

  const formatted = data.map((item, index) => ({
    ID: index + 1,
    Name: item.name,
    Phone: item.phone,
    AlternatePhone: item.altPhone,
    Email: item.email,
    Qualification: item.qualification,
  }));

  const ws = XLSX.utils.json_to_sheet(formatted);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Enquiry");

  const filePath = "./export.xlsx";
  XLSX.writeFile(wb, filePath);

  res.download(filePath);
});

router.post("/send", async (req, res) => {
  console.log("BODY DATA:", req.body);

  const { name, phone, altPhone, email, qualification } = req.body;
  console.log("EMAIL:", email);
  try {
    

    //  1. Save to MongoDB
    const savedData = await Enquiry.create({
      name,
      phone,
      altPhone,
      email,
      qualification,
    });

    //  2. Read existing Excel
    let data = [];

    // If file exists → read it
    if (fs.existsSync(filePath)) {
      const workbook = XLSX.readFile(filePath);
      const sheet = workbook.Sheets["Sheet1"];
      data = XLSX.utils.sheet_to_json(sheet, {
        defval: "",
      });
    }

    //  3. Add new entry with ID
    const newEntry = {
      ID: data.length + 1,
      Name: name || "",
      Phone: phone || "",
      AlternatePhone: altPhone || "Not Provided",
      Email: email || "Not Provided",
      Qualification: qualification || "",
    };

    data.push(newEntry);

    // 4. Write back to Excel
    const newSheet = XLSX.utils.json_to_sheet(data);
    const newWorkbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(newWorkbook, newSheet, "Sheet1");

    XLSX.writeFile(newWorkbook, filePath);

    // 5. Send Email
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,       //  your gmail
        pass: process.env.EMAIL_PASS,         //  NOT normal password
      },
    });

    // Mail content
    await transporter.sendMail({
      from: `"Dhanvii Enquiry" <${process.env.EMAIL_USER}>`,
      to: "enquiry.dhanvii@gmail.com",
      replyTo: email !== "Not Provided" ? email : undefined,
      subject: "New Enquiry Received",
      text: `New Enquiry:
Name: ${name}
Phone: ${phone}
Alternate Phone: ${altPhone || "Not Provided"}
Email: ${email || "Not Provided"}
Qualification: ${qualification}`,

      attachments: [
        {
          filename: "enquiry.xlsx",
          path: filePath,
        },
      ],
    });

    res.json({
      message: "Saved in MongoDB + Excel + Email Sent",
      data: savedData,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Email failed" });
  }
});

export default router;