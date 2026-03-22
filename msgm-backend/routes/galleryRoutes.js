import express from "express";
import upload from "../middleware/upload.js";
import {
  uploadPhotos,
  getGallery,
  getPhotoById,
  likePhoto,
  getCategoryStats,
  deletePhoto,
  debugPhotos,
} from "../controllers/galleryController.js";

const router = express.Router();

// Upload routes
router.post("/upload", upload.array("images", 10), uploadPhotos);

// Gallery routes
router.get("/gallery", getGallery);
router.get("/gallery/debug", debugPhotos);
router.get("/gallery/stats", getCategoryStats);
router.get("/gallery/:id", getPhotoById);

// Like route
router.post("/gallery/:id/like", likePhoto);

// Delete route
router.delete("/gallery/:id", deletePhoto);

export default router;