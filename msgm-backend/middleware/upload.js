import multer from "multer";
import path from "path";

// Use memory storage instead of disk storage
const storage = multer.memoryStorage();

// File filter - Allow all image formats
const fileFilter = (req, file, cb) => {
  // Accept all images by mimetype
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    // Check extension as fallback
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.tiff', '.jfif', '.ico'];
    const ext = path.extname(file.originalname).toLowerCase();
    
    if (allowedExtensions.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error(`Only image files are allowed. File: ${file.originalname}`));
    }
  }
};

const upload = multer({
  storage: storage,
  limits: { 
    fileSize: 10 * 1024 * 1024 // 10MB limit
  },
  fileFilter: fileFilter
});

export default upload;