"use client";
import { useEffect, useState } from 'react';
import { Image as ImageIcon, Video, Play, X } from 'lucide-react';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { API_ENDPOINTS } from '@/config/api';

interface MediaItem {
  _id: string;
  title: string;
  type: 'image' | 'video';
  url: string;
  category: string;
  format: string;
  createdAt: string;
}

export default function GalleryPage() {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [filteredMedia, setFilteredMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState<'all' | 'image' | 'video'>('all');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'portfolio', label: 'Portfolio' },
    { value: 'seo', label: 'SEO Services' },
    { value: 'social-media-marketing', label: 'Social Media Marketing' },
    { value: 'ppc-advertising', label: 'PPC Advertising' },
    { value: 'content-marketing', label: 'Content Marketing' },
    { value: 'creative-designing', label: 'Creative Designing' },
    { value: 'video-production', label: 'Video Production' },
    { value: 'web-development', label: 'Web Development' },
  ];

  useEffect(() => {
    fetchMedia();
  }, []);

  useEffect(() => {
    filterMedia();
  }, [selectedCategory, selectedType, media]);

  const fetchMedia = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_ENDPOINTS.MEDIA.BASE, {
        params: { limit: 100 }
      });
      setMedia(response.data.media || []);
    } catch (error) {
      console.error('Failed to fetch media:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterMedia = () => {
    let filtered = media;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(item => item.type === selectedType);
    }

    setFilteredMedia(filtered);
  };

  const getCategoryLabel = (value: string) => {
    const category = categories.find(cat => cat.value === value);
    return category ? category.label : value;
  };

  const groupedMedia = filteredMedia.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MediaItem[]>);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Gallery
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our creative work across different services
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            {/* Type Filter */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setSelectedType('all')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedType === 'all'
                    ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                All Media
              </button>
              <button
                onClick={() => setSelectedType('image')}
                className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  selectedType === 'image'
                    ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                <ImageIcon size={20} />
                Images
              </button>
              <button
                onClick={() => setSelectedType('video')}
                className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  selectedType === 'video'
                    ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                <Video size={20} />
                Videos
              </button>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category.value
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="text-center mb-8 text-gray-400">
            Showing {filteredMedia.length} items
            {selectedType !== 'all' && ` (${selectedType}s)`}
            {selectedCategory !== 'all' && ` in ${getCategoryLabel(selectedCategory)}`}
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-white text-lg">Loading gallery...</div>
            </div>
          ) : filteredMedia.length === 0 ? (
            <div className="text-center py-16 bg-gray-800 rounded-xl border border-gray-700">
              <ImageIcon size={64} className="mx-auto text-gray-600 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No media found</h3>
              <p className="text-gray-400">Try selecting different filters</p>
            </div>
          ) : (
            /* Gallery by Category */
            <div className="space-y-12">
              {Object.entries(groupedMedia).map(([category, items]) => (
                <div key={category}>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-12 h-1 bg-linear-to-r from-blue-600 to-purple-600 rounded"></span>
                    {getCategoryLabel(category)}
                    <span className="text-gray-500 text-lg">({items.length})</span>
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {items.map((item) => (
                      <div
                        key={item._id}
                        onClick={() => setSelectedMedia(item)}
                        className="group relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all cursor-pointer"
                      >
                        <div className="aspect-video bg-gray-900 relative overflow-hidden">
                          {item.type === 'image' ? (
                            <img
                              src={item.url}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-purple-500/20 to-pink-600/20">
                              <div className="relative">
                                <Video size={48} className="text-white" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <Play size={24} className="text-white" />
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="text-white text-center">
                              <p className="font-medium mb-1">View {item.type}</p>
                              <p className="text-sm text-gray-300">{item.format?.toUpperCase()}</p>
                            </div>
                          </div>

                          {/* Type Badge */}
                          <div className="absolute top-2 right-2">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              item.type === 'image'
                                ? 'bg-blue-500/80 text-white'
                                : 'bg-purple-500/80 text-white'
                            }`}>
                              {item.type}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <h3 className="text-white font-medium truncate">{item.title}</h3>
                          <p className="text-gray-400 text-sm">
                            {new Date(item.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Media Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={() => setSelectedMedia(null)}>
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
              {selectedMedia.type === 'image' ? (
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              ) : (
                <video
                  src={selectedMedia.url}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[80vh]"
                />
              )}
              
              <div className="p-6 bg-gray-800">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedMedia.title}</h3>
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <span className="capitalize">{selectedMedia.type}</span>
                  <span>•</span>
                  <span>{getCategoryLabel(selectedMedia.category)}</span>
                  <span>•</span>
                  <span>{selectedMedia.format?.toUpperCase()}</span>
                  <span>•</span>
                  <span>{new Date(selectedMedia.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
