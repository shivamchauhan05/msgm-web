import express from "express";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

const app = express();
// Configure CORS to allow only msgm-web-1.vercel.app
const corsOptions = {
  origin: 'https://msgm-web-1.vercel.app', // Only allow this domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
};

app.use(cors(corsOptions)); // Apply CORS configuration
app.use(express.json()); // To parse JSON bodies


// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// multer setup
const storage = multer.diskStorage({});
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }
});

// Multiple image upload
app.post("/upload", upload.array("images", 10), async (req, res) => {
  try {
        console.log("Received files:", req.files);
    const files = req.files;

    const uploadedImages = [];

    for (const file of files) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: "school-gallery",
      });
     console.log("Upload result:", result);
      uploadedImages.push({
        public_id: result.public_id,
        url: result.secure_url,
        width: result.width,
        height: result.height,
        created_at: result.created_at,
      });
    }

    res.json({
      message: "Images uploaded successfully",
      images: uploadedImages,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Upload failed" });
  }
});

// Fetch gallery images
app.get("/gallery", async (req, res) => {
  try {
    const result = await cloudinary.search
      .expression('asset_folder="school_gallery"')
      .sort_by("created_at", "desc")
      .max_results(100)
      .execute();

    console.log("Gallery fetch result:", result);
    res.json(result.resources);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});
app.get("/cloudinary-test", async (req, res) => {
  try {
    const result = await cloudinary.api.ping();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});
const PORT = process.env.PORT || 5000;
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
