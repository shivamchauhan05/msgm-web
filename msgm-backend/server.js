import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import galleryRoutes from "./routes/galleryRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://msgm-web-1.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.use("/api", galleryRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Gallery API is running",
    endpoints: {
      upload: "POST /api/upload",
      gallery: "GET /api/gallery",
      stats: "GET /api/gallery/stats",
      like: "POST /api/gallery/:id/like",
      debug: "GET /api/gallery/debug",
    },
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: err.message || "Something went wrong!",
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📁 API URL: http://localhost:${PORT}/api`);
  console.log(`📊 MongoDB: ${process.env.MONGODB_URI}`);
});
