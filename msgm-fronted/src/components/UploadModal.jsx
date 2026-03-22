import React, { useState } from 'react';
import { X, Upload, Image, ChevronDown, Loader, Trash2, Folder, Tag } from 'lucide-react';
import axios from 'axios';

const UploadModal = ({ onClose, onUploadSuccess, categories, t }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [category, setCategory] = useState(categories[0]?.id || 'events');
  const [previewUrls, setPreviewUrls] = useState([]);
  const [uploadStatus, setUploadStatus] = useState('');

  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  // Handle file selection
  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(prev => [...prev, ...files]);

    // Create preview URLs for new files
    const newUrls = files.map(file => URL.createObjectURL(file));
    setPreviewUrls(prev => [...prev, ...newUrls]);
    
    setUploadStatus(`${selectedFiles.length + files.length} photos selected`);
  };

  // Remove a file from selection
  const removeFile = (index) => {
    const newFiles = [...selectedFiles];
    const newUrls = [...previewUrls];
    
    URL.revokeObjectURL(newUrls[index]);
    
    newFiles.splice(index, 1);
    newUrls.splice(index, 1);
    
    setSelectedFiles(newFiles);
    setPreviewUrls(newUrls);
    setUploadStatus(`${newFiles.length} photos selected`);
  };

  // Clear all files
  const clearAllFiles = () => {
    previewUrls.forEach(url => URL.revokeObjectURL(url));
    setSelectedFiles([]);
    setPreviewUrls([]);
    setUploadStatus('');
  };

  // Handle upload
  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      setUploadStatus('Please select photos first');
      return;
    }

    setUploading(true);
    setUploadProgress(0);
    setUploadStatus('Uploading photos...');

    const formData = new FormData();
    
    selectedFiles.forEach(file => {
      formData.append("images", file);
    });
    
    // ✅ Send category to backend
    formData.append("category", category);
    formData.append("title", `${category} gallery photos`);
    formData.append("description", `Uploaded to ${category} category`);

    try {
      const response = await axios.post(`${API_BASE}/upload`, formData, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentCompleted);
          setUploadStatus(`Uploading: ${percentCompleted}%`);
        }
      });

      if (response.data.success) {
        setUploadStatus(`Success! ${response.data.images.length} photos uploaded to ${category}`);
        
        // Format new photos
        const newPhotos = response.data.images.map((img) => ({
          id: img.id || img.public_id,
          publicId: img.public_id,
          url: img.url,
          thumbnail: img.thumbnail,
          title: img.title || `${category} photo`,
          category: category,
          date: img.date || new Date().toISOString(),
          width: img.width,
          height: img.height,
          likes: 0,
        }));

        onUploadSuccess(newPhotos);
        
        // Clean up preview URLs
        previewUrls.forEach(url => URL.revokeObjectURL(url));
        
        // Close modal after delay
        setTimeout(() => {
          onClose();
        }, 1500);
      }
    } catch (error) {
      console.error("Upload failed:", error);
      setUploadStatus('Upload failed: ' + (error.response?.data?.error || error.message));
      setTimeout(() => {
        setUploadStatus('');
      }, 3000);
    }

    setUploading(false);
  };

  const getCategoryIcon = (catId) => {
    const icons = {
      events: '🎉',
      sports: '⚽',
      classroom: '📚',
      cultural: '🎭',
      achievements: '🏆',
      campus: '🏫'
    };
    return icons[catId] || '📁';
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-4 sm:p-6 border-b">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center">
            <Upload className="mr-2 text-blue-600" size={20} />
            {t('gallery.uploadPhotos') || 'Upload Photos'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors p-1"
            disabled={uploading}
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {/* File Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('gallery.selectPhotos') || 'Select Photos'}
            </label>
            <div 
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 text-center hover:border-blue-500 transition-colors cursor-pointer bg-gray-50"
              onClick={() => !uploading && document.getElementById('file-input').click()}
            >
              <input
                id="file-input"
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                disabled={uploading}
              />
              <Image size={40} className="mx-auto text-gray-400 mb-3" />
              <p className="text-gray-600 mb-1 text-sm sm:text-base">
                {t('gallery.clickToSelect') || 'Click to select photos'}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                {t('gallery.multiplePhotos') || 'You can select multiple photos'}
              </p>
            </div>
          </div>

          {/* Preview Grid */}
          {previewUrls.length > 0 && (
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  {t('gallery.selectedPhotos') || 'Selected Photos'} ({previewUrls.length})
                </label>
                <button
                  onClick={clearAllFiles}
                  className="text-xs text-red-500 hover:text-red-700"
                  disabled={uploading}
                >
                  Clear all
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 max-h-60 overflow-y-auto p-1">
                {previewUrls.map((url, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={url}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-24 sm:h-28 object-cover rounded-lg border border-gray-200"
                    />
                    <button
                      onClick={() => removeFile(index)}
                      disabled={uploading}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 disabled:opacity-50"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Category Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Tag size={16} className="mr-1" />
              {t('gallery.selectCategory') || 'Select Category'} 
              <span className="ml-1 text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                disabled={uploading}
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>
                    {getCategoryIcon(cat.id)} {cat.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-3 text-gray-400" size={20} />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Photos will be stored in {category} category
            </p>
          </div>

          {/* Category Info */}
          {selectedFiles.length > 0 && (
            <div className="mb-6 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-2">
                <Folder size={16} className="text-blue-600" />
                <span className="text-sm text-blue-800">
                  {selectedFiles.length} photo(s) will be uploaded to:
                </span>
                <span className="font-semibold text-blue-900">
                  {categories.find(c => c.id === category)?.name || category}
                </span>
              </div>
            </div>
          )}

          {/* Upload Status */}
          {uploadStatus && (
            <div className={`mb-6 p-3 rounded-lg ${
              uploadStatus.includes('Success') 
                ? 'bg-green-50 border border-green-200 text-green-700'
                : uploadStatus.includes('failed')
                ? 'bg-red-50 border border-red-200 text-red-700'
                : 'bg-blue-50 border border-blue-200 text-blue-700'
            }`}>
              <div className="flex items-center space-x-2">
                {uploading && <Loader className="animate-spin" size={16} />}
                <span className="text-sm">{uploadStatus}</span>
              </div>
            </div>
          )}

          {/* Progress Bar */}
          {uploading && (
            <div className="mb-6">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 sm:px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              disabled={uploading}
            >
              {t('common.cancel') || 'Cancel'}
            </button>
            <button
              onClick={handleUpload}
              disabled={selectedFiles.length === 0 || uploading}
              className={`px-4 sm:px-6 py-2 rounded-lg text-white transition-all flex items-center justify-center space-x-2 ${
                selectedFiles.length === 0 || uploading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
              }`}
            >
              {uploading ? (
                <>
                  <Loader className="animate-spin" size={18} />
                  <span>{t('gallery.uploading') || 'Uploading...'}</span>
                </>
              ) : (
                <>
                  <Upload size={18} />
                  <span>
                    {t('gallery.upload') || 'Upload'} 
                    {selectedFiles.length > 0 && ` (${selectedFiles.length})`}
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;