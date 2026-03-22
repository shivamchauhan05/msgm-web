import cloudinary from "../config/cloudinary.js";
import Photo from "../models/Photo.js";

// Upload photos with category (Memory Storage Version)
export const uploadPhotos = async (req, res) => {
  try {
    const files = req.files;
    const { category, title, description } = req.body;

    if (!files || files.length === 0) {
      return res.status(400).json({ 
        success: false, 
        error: "No files uploaded" 
      });
    }

    console.log(`Uploading ${files.length} files to category: ${category}`);
    console.log("Files:", files.map(f => ({ name: f.originalname, type: f.mimetype, size: f.size })));

    const uploadedImages = [];

    for (const file of files) {
      try {
        // Upload buffer directly to Cloudinary (no disk storage)
        const result = await new Promise((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            {
              public_id: `${category}_${Date.now()}_${Math.random().toString(36).substring(7)}`,
              resource_type: "image",
              tags: [category],
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          );
          
          // Convert buffer to stream
          uploadStream.end(file.buffer);
        });

        // Create thumbnail URL
        const thumbnail_url = result.secure_url.replace('/upload/', '/upload/c_thumb,w_400/');

        // Save to MongoDB with category
        const photo = new Photo({
          public_id: result.public_id,
          secure_url: result.secure_url,
          thumbnail_url: thumbnail_url,
          title: title || `${category} photo`,
          description: description || '',
          category: category,
          width: result.width,
          height: result.height,
          likes: 0,
          created_at: result.created_at
        });

        await photo.save();

        uploadedImages.push({
          id: photo._id,
          public_id: photo.public_id,
          url: photo.secure_url,
          thumbnail: photo.thumbnail_url,
          title: photo.title,
          category: photo.category,
          date: photo.created_at,
          width: photo.width,
          height: photo.height,
          likes: photo.likes,
        });

      } catch (uploadError) {
        console.error(`Error uploading file ${file.originalname}:`, uploadError);
        // Continue with other files
      }
    }

    if (uploadedImages.length === 0) {
      return res.status(500).json({
        success: false,
        error: "No images were uploaded successfully"
      });
    }

    res.status(200).json({
      success: true,
      message: `${uploadedImages.length} photos uploaded to ${category} category`,
      images: uploadedImages,
    });

  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({
      success: false,
      error: "Upload failed",
      details: error.message
    });
  }
};

// Keep other functions same...
export const getGallery = async (req, res) => {
  try {
    const { category } = req.query;
    
    let query = {};
    
    if (category && category !== 'all') {
      query.category = category;
    }
    
    const photos = await Photo.find(query)
      .sort({ created_at: -1 })
      .limit(100);
    
    res.status(200).json({
      success: true,
      count: photos.length,
      photos: photos.map(photo => ({
        id: photo._id,
        public_id: photo.public_id,
        secure_url: photo.secure_url,
        thumbnail: photo.thumbnail_url,
        title: photo.title,
        description: photo.description,
        category: photo.category,
        date: photo.created_at,
        width: photo.width,
        height: photo.height,
        likes: photo.likes,
      }))
    });
  } catch (error) {
    console.error("Gallery fetch error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch gallery",
    });
  }
};

export const likePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    
    const photo = await Photo.findById(id);
    
    if (!photo) {
      return res.status(404).json({
        success: false,
        error: "Photo not found"
      });
    }
    
    photo.likes += 1;
    await photo.save();
    
    res.status(200).json({
      success: true,
      message: "Photo liked successfully",
      likes: photo.likes,
    });
  } catch (error) {
    console.error("Like error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to like photo",
    });
  }
};

export const getCategoryStats = async (req, res) => {
  try {
    const stats = await Photo.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 }
        }
      }
    ]);
    
    const formattedStats = {};
    stats.forEach(stat => {
      formattedStats[stat._id] = stat.count;
    });
    
    const allCategories = ['events', 'sports', 'classroom', 'cultural', 'achievements', 'campus'];
    allCategories.forEach(cat => {
      if (!formattedStats[cat]) {
        formattedStats[cat] = 0;
      }
    });
    
    res.status(200).json({
      success: true,
      stats: formattedStats,
    });
  } catch (error) {
    console.error("Stats error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch stats",
    });
  }
};

export const deletePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    
    const photo = await Photo.findById(id);
    
    if (!photo) {
      return res.status(404).json({
        success: false,
        error: "Photo not found"
      });
    }
    
    await cloudinary.uploader.destroy(photo.public_id);
    await photo.deleteOne();
    
    res.status(200).json({
      success: true,
      message: "Photo deleted successfully",
    });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to delete photo",
    });
  }
};

export const debugPhotos = async (req, res) => {
  try {
    const photos = await Photo.find().sort({ created_at: -1 }).limit(50);
    
    res.status(200).json({
      success: true,
      total: photos.length,
      photos: photos.map(photo => ({
        id: photo._id,
        public_id: photo.public_id,
        category: photo.category,
        title: photo.title,
        url: photo.secure_url,
        created_at: photo.created_at,
        likes: photo.likes,
      }))
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const getPhotoById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const photo = await Photo.findById(id);
    
    if (!photo) {
      return res.status(404).json({
        success: false,
        error: "Photo not found"
      });
    }
    
    res.status(200).json({
      success: true,
      photo: {
        id: photo._id,
        public_id: photo.public_id,
        secure_url: photo.secure_url,
        thumbnail: photo.thumbnail_url,
        title: photo.title,
        description: photo.description,
        category: photo.category,
        date: photo.created_at,
        width: photo.width,
        height: photo.height,
        likes: photo.likes,
      }
    });
  } catch (error) {
    console.error("Error fetching photo:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch photo",
    });
  }
};
