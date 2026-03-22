import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Upload, X, ChevronLeft, ChevronRight, Download, Share2, Heart, Grid3x3, LayoutGrid, List, Filter, Loader } from 'lucide-react';
import axios from 'axios';
import UploadModal from '../components/UploadModal';

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [viewMode, setViewMode] = useState('masonry');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [categoryCounts, setCategoryCounts] = useState({});

  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  // Categories
  const categories = [
    { id: 'all', name: t('gallery.categories.all'), icon: <Grid3x3 size={16} /> },
    { id: 'events', name: t('gallery.categories.events'), icon: '🎉' },
    { id: 'sports', name: t('gallery.categories.sports'), icon: '⚽' },
    { id: 'classroom', name: t('gallery.categories.classroom'), icon: '📚' },
    { id: 'cultural', name: t('gallery.categories.cultural'), icon: '🎭' },
    { id: 'achievements', name: t('gallery.categories.achievements'), icon: '🏆' },
    { id: 'campus', name: t('gallery.categories.campus'), icon: '🏫' },
  ];

  // Fetch photos when category changes
  useEffect(() => {
    fetchPhotos();
  }, [selectedCategory]);

  // Fetch category counts on load
  useEffect(() => {
    fetchCategoryCounts();
  }, []);

  const fetchPhotos = async () => {
    setLoading(true);
    try {
      let url = `${API_BASE}/gallery`;
      if (selectedCategory !== 'all') {
        url = `${API_BASE}/gallery?category=${selectedCategory}`;
      }
      
      const response = await axios.get(url);
      console.log("Fetched photos:", response.data);
      
      if (response.data.success) {
        const formattedPhotos = response.data.photos.map((photo) => ({
          id: photo.id || photo.public_id,
          publicId: photo.public_id,
          url: photo.secure_url,
          thumbnail: photo.thumbnail || photo.secure_url?.replace('/upload/', '/upload/c_thumb,w_400/'),
          title: photo.title || `${photo.category} photo`,
          category: photo.category,
          date: photo.date || photo.created_at,
          width: photo.width,
          height: photo.height,
          likes: photo.likes || 0,
        }));
        setPhotos(formattedPhotos);
      }
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
    setLoading(false);
  };

  const fetchCategoryCounts = async () => {
    try {
      const response = await axios.get(`${API_BASE}/gallery/stats`);
      if (response.data.success) {
        setCategoryCounts(response.data.stats);
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const handleUploadSuccess = (newPhotos) => {
    setPhotos(prev => [...newPhotos, ...prev]);
    fetchCategoryCounts();
  };

  // Search filter
  const filteredPhotos = photos.filter(photo => {
    const matchesSearch = photo.title?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const openLightbox = (photo) => setSelectedPhoto(photo);
  const closeLightbox = () => setSelectedPhoto(null);

  const navigateLightbox = (direction) => {
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
    const newIndex = (currentIndex + direction + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  const handleLike = async (photoId) => {
    try {
      setPhotos(prev => prev.map(photo => 
        photo.id === photoId ? { ...photo, likes: (photo.likes || 0) + 1 } : photo
      ));
      
      await axios.post(`${API_BASE}/gallery/${photoId}/like`);
    } catch (error) {
      console.error("Error liking photo:", error);
      fetchPhotos();
    }
  };

  const handleDownload = async (url, title) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `${title}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const handleShare = async (photo) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: photo.title,
          text: `Check out this photo from our gallery`,
          url: photo.url,
        });
      } catch (error) {
        console.error("Share failed:", error);
      }
    } else {
      navigator.clipboard.writeText(photo.url);
      alert(t('gallery.linkCopied') || 'Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-48 md:h-64 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4">
              {t('gallery.title')}
            </h1>
            <p className="text-sm md:text-xl text-blue-200 max-w-2xl mx-auto">
              {t('gallery.subtitle')}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 py-4 md:py-8">
        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 overflow-x-auto pb-3 scrollbar-hide">
            <Filter size={18} className="text-gray-500 flex-shrink-0" />
            {categories.map(category => {
              const count = category.id === 'all' 
                ? photos.length 
                : categoryCounts[category.id] || 0;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex items-center space-x-1 flex-shrink-0 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                  }`}
                >
                  <span className="text-sm sm:text-base">{category.icon}</span>
                  <span>{category.name}</span>
                  {count > 0 && (
                    <span className={`ml-1 px-1.5 py-0.5 rounded-full text-xs ${
                      selectedCategory === category.id
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Controls Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 mb-6">
          <div className="relative flex-1 max-w-full sm:max-w-xs">
            <input
              type="text"
              placeholder={t('gallery.search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex bg-white rounded-lg shadow-sm">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded-l-lg ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}>
                <Grid3x3 size={18} />
              </button>
              <button onClick={() => setViewMode('masonry')} className={`p-2 ${viewMode === 'masonry' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}>
                <LayoutGrid size={18} />
              </button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded-r-lg ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}>
                <List size={18} />
              </button>
            </div>

            <button onClick={() => setShowUploadModal(true)} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-3 sm:px-4 py-2 rounded-lg flex items-center space-x-2">
              <Upload size={16} />
              <span>{t('gallery.upload')}</span>
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center h-64">
            <Loader className="animate-spin text-blue-600" size={40} />
          </div>
        )}

        {/* Gallery Grid */}
        {!loading && (
          <>
            {viewMode === 'grid' && (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                {filteredPhotos.map(photo => (
                  <GalleryCard
                    key={photo.id}
                    photo={photo}
                    onClick={() => openLightbox(photo)}
                    onLike={() => handleLike(photo.id)}
                  />
                ))}
              </div>
            )}

            {viewMode === 'masonry' && (
              <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3 sm:gap-4">
                {filteredPhotos.map(photo => (
                  <MasonryCard
                    key={photo.id}
                    photo={photo}
                    onClick={() => openLightbox(photo)}
                    onLike={() => handleLike(photo.id)}
                  />
                ))}
              </div>
            )}

            {viewMode === 'list' && (
              <div className="space-y-3">
                {filteredPhotos.map(photo => (
                  <ListCard
                    key={photo.id}
                    photo={photo}
                    onClick={() => openLightbox(photo)}
                    onLike={() => handleLike(photo.id)}
                  />
                ))}
              </div>
            )}

            {filteredPhotos.length === 0 && !loading && (
              <div className="text-center py-16 md:py-20">
                <Image size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
                  {searchTerm ? 'No matching photos found' : t('gallery.noPhotos')}
                </h3>
                <p className="text-sm md:text-base text-gray-500">
                  {searchTerm ? 'Try a different search term' : t('gallery.noPhotosMessage')}
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <LightboxModal
          photo={selectedPhoto}
          onClose={closeLightbox}
          onPrev={() => navigateLightbox(-1)}
          onNext={() => navigateLightbox(1)}
          onLike={() => handleLike(selectedPhoto.id)}
          onDownload={() => handleDownload(selectedPhoto.url, selectedPhoto.title)}
          onShare={() => handleShare(selectedPhoto)}
          t={t}
        />
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <UploadModal
          onClose={() => setShowUploadModal(false)}
          onUploadSuccess={handleUploadSuccess}
          categories={categories.filter(cat => cat.id !== 'all')}
          t={t}
        />
      )}
    </div>
  );
};

// Gallery Card Component
const GalleryCard = ({ photo, onClick, onLike }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getCategoryColor = (category) => {
    const colors = {
      events: 'bg-purple-600',
      sports: 'bg-green-600',
      classroom: 'bg-blue-600',
      cultural: 'bg-pink-600',
      achievements: 'bg-yellow-600',
      campus: 'bg-indigo-600',
    };
    return colors[category] || 'bg-gray-600';
  };

  return (
    <div
      className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader className="animate-spin text-gray-400" size={24} />
        </div>
      )}
      <img
        src={photo.thumbnail || photo.url}
        alt={photo.title}
        className={`w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-700 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
          setImageLoaded(true);
        }}
      />
      
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 md:opacity-0'}`}>
        <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
          <h3 className="font-semibold text-xs sm:text-sm mb-1 truncate">{photo.title}</h3>
          <div className="flex items-center justify-between text-xs">
            <span className={`${getCategoryColor(photo.category)} px-2 py-0.5 rounded-full text-xs`}>
              {photo.category}
            </span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onLike();
              }}
              className="flex items-center space-x-1 hover:text-red-400 transition-colors"
            >
              <Heart size={14} className="fill-current" />
              <span>{photo.likes}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Masonry Card Component
const MasonryCard = ({ photo, onClick, onLike }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const heights = ['280px', '320px', '360px', '300px', '340px'];
  const randomHeight = heights[Math.floor(Math.random() * heights.length)];

  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer mb-4 break-inside-avoid bg-gray-100">
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center" style={{ height: randomHeight }}>
          <Loader className="animate-spin text-gray-400" size={24} />
        </div>
      )}
      <img
        src={photo.url}
        alt={photo.title}
        className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
        style={{ height: randomHeight }}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
          setImageLoaded(true);
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
          <h3 className="font-semibold text-sm mb-1 truncate">{photo.title}</h3>
          <div className="flex items-center justify-between text-xs">
            <span className="bg-blue-600 px-2 py-0.5 rounded-full">{photo.category}</span>
            <button onClick={(e) => { e.stopPropagation(); onLike(); }} className="flex items-center space-x-1 hover:text-red-400">
              <Heart size={14} />
              <span>{photo.likes}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// List Card Component
const ListCard = ({ photo, onClick, onLike }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center p-3 sm:p-4 gap-3">
        <div className="relative w-full sm:w-20 h-32 sm:h-20 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader className="animate-spin text-gray-400" size={20} />
            </div>
          )}
          <img 
            src={photo.thumbnail || photo.url} 
            alt={photo.title} 
            className="w-full h-full object-cover"
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/200x200?text=No+Image';
              setImageLoaded(true);
            }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-800 text-sm sm:text-base truncate">{photo.title}</h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            {new Date(photo.date).toLocaleDateString()} • {photo.category}
          </p>
        </div>
        <button 
          onClick={(e) => { e.stopPropagation(); onLike(); }} 
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors"
        >
          <Heart size={18} />
          <span className="text-sm">{photo.likes}</span>
        </button>
      </div>
    </div>
  );
};

// Lightbox Modal Component
const LightboxModal = ({ photo, onClose, onPrev, onNext, onLike, onDownload, onShare, t }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
      <button onClick={onClose} className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white hover:text-gray-300 z-10 p-2">
        <X size={24} />
      </button>
      <button onClick={onPrev} className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 p-2">
        <ChevronLeft size={32} />
      </button>
      <button onClick={onNext} className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 p-2">
        <ChevronRight size={32} />
      </button>

      <div className="w-full h-full flex items-center justify-center p-2 sm:p-4">
        <img src={photo.url} alt={photo.title} className="max-h-[70vh] sm:max-h-[80vh] max-w-full object-contain rounded-lg" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="bg-black/50 backdrop-blur-sm mx-auto max-w-2xl rounded-lg p-3 sm:p-4 text-white">
          <h2 className="text-base sm:text-xl font-bold mb-1 sm:mb-2">{photo.title}</h2>
          <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">
            {new Date(photo.date).toLocaleDateString()} • {photo.category}
          </p>
          <div className="flex items-center justify-center space-x-4 sm:space-x-6">
            <button onClick={() => { setLiked(!liked); onLike(); }} className="flex items-center space-x-1 sm:space-x-2 hover:text-red-500">
              <Heart size={18} className={liked ? 'fill-red-500 text-red-500' : ''} />
              <span>{(photo.likes || 0) + (liked ? 1 : 0)}</span>
            </button>
            <button onClick={onDownload} className="flex items-center space-x-1 sm:space-x-2 hover:text-blue-400">
              <Download size={18} />
              <span>{t('gallery.download')}</span>
            </button>
            <button onClick={onShare} className="flex items-center space-x-1 sm:space-x-2 hover:text-green-400">
              <Share2 size={18} />
              <span>{t('gallery.share')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;