import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
  // Cloudinary details
  public_id: {
    type: String,
    required: true,
    unique: true
  },
  secure_url: {
    type: String,
    required: true
  },
  thumbnail_url: {
    type: String
  },
  
  // Photo metadata
  title: {
    type: String,
    default: "Photo"
  },
  description: {
    type: String,
    default: ""
  },
  
  // ✅ CATEGORY - This is what you want
  category: {
    type: String,
    enum: ['events', 'sports', 'classroom', 'cultural', 'achievements', 'campus', 'general'],
    default: 'general',
    required: true,
    index: true // For faster queries
  },
  
  // Photo dimensions
  width: {
    type: Number
  },
  height: {
    type: Number
  },
  
  // Engagement
  likes: {
    type: Number,
    default: 0
  },
  
  // Timestamps
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

// Index for category queries
photoSchema.index({ category: 1, created_at: -1 });

// Method to increment likes
photoSchema.methods.incrementLikes = async function() {
  this.likes += 1;
  await this.save();
  return this.likes;
};

// Static method to get photos by category
photoSchema.statics.getByCategory = async function(category, limit = 100) {
  const query = category === 'all' ? {} : { category };
  return await this.find(query)
    .sort({ created_at: -1 })
    .limit(limit);
};

// Static method to get category stats
photoSchema.statics.getCategoryStats = async function() {
  return await this.aggregate([
    {
      $group: {
        _id: "$category",
        count: { $sum: 1 }
      }
    },
    {
      $sort: { count: -1 }
    }
  ]);
};

const Photo = mongoose.model("Photo", photoSchema);
export default Photo;