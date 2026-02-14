"use client";
import { useState, useEffect } from 'react';
import { Upload, Search, Trash2, Edit, X, Image as ImageIcon, Video, FileImage } from 'lucide-react';
import { useAppSelector } from '@/store/hooks';
import axios from 'axios';
import { API_ENDPOINTS } from '@/config/api';

interface MediaItem {
  _id: string;
  title: string;
  type: 'image' | 'video';
  url: string;
  category: string;
  format: string;
  size: number;
  createdAt: string;
}

export default function MediaManager() {
  const [searchTerm, setSearchTerm] = useState('');
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [filteredMedia, setFilteredMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadData, setUploadData] = useState({
    title: '',
    category: 'portfolio'
  });
  const [filterType, setFilterType] = useState<'all' | 'image' | 'video'>('all');
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    fetchMedia();
  }, [token]);

  useEffect(() => {
    filterMedia();
  }, [searchTerm, filterType, media]);

  const fetchMedia = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_ENDPOINTS.MEDIA.BASE, {
        headers: { Authorization: `Bearer ${token}` },
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

    // Filter by type
    if (filterType !== 'all') {
      filtered = filtered.filter(item => item.type === filterType);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredMedia(filtered);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('title', uploadData.title || selectedFile.name);
      formData.append('category', uploadData.category);

      await axios.post(API_ENDPOINTS.MEDIA.UPLOAD, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      setShowUploadModal(false);
      setSelectedFile(null);
      setUploadData({ title: '', category: 'portfolio' });
      fetchMedia();
    } catch (error: any) {
      console.error('Upload failed:', error);
      alert(error.response?.data?.error || 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this media?')) return;

    try {
      await axios.delete(API_ENDPOINTS.MEDIA.DELETE(id), {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchMedia();
    } catch (error) {
      console.error('Delete failed:', error);
      alert('Failed to delete media');
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search media..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value as any)}
            className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Types</option>
            <option value="image">Images</option>
            <option value="video">Videos</option>
          </select>
        </div>
        <button
          onClick={() => setShowUploadModal(true)}
          className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
        >
          <Upload size={20} />
          Upload Media
        </button>
      </div>

      {/* Stats */}
      <div className="flex gap-4 text-sm text-gray-400">
        <span>Total: {filteredMedia.length}</span>
        <span>Images: {filteredMedia.filter(m => m.type === 'image').length}</span>
        <span>Videos: {filteredMedia.filter(m => m.type === 'video').length}</span>
      </div>

      {/* Media Grid */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="text-white text-lg">Loading media...</div>
        </div>
      ) : filteredMedia.length === 0 ? (
        <div className="text-center py-16 bg-gray-800 rounded-xl border border-gray-700">
          <FileImage size={64} className="mx-auto text-gray-600 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No media found</h3>
          <p className="text-gray-400 mb-4">Upload your first image or video to get started</p>
          <button
            onClick={() => setShowUploadModal(true)}
            className="px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Upload Media
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMedia.map((item) => (
            <div key={item._id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all group">
              <div className="aspect-video bg-gray-900 relative overflow-hidden">
                {item.type === 'image' ? (
                  <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-purple-500/20 to-pink-600/20">
                    <Video size={48} className="text-white" />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                  <div className="flex gap-2">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
                    >
                      <Edit size={18} />
                    </a>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="p-2 bg-red-600 hover:bg-red-700 rounded-lg text-white"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
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
                <h3 className="text-white font-medium mb-1 truncate">{item.title}</h3>
                <div className="flex justify-between text-gray-400 text-xs">
                  <span>{formatFileSize(item.size)}</span>
                  <span>{item.format?.toUpperCase()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full border border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Upload Media</h3>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  File (Image or Video)
                </label>
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileSelect}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {selectedFile && (
                  <p className="text-sm text-gray-400 mt-2">
                    Selected: {selectedFile.name} ({formatFileSize(selectedFile.size)})
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Title (Optional)
                </label>
                <input
                  type="text"
                  value={uploadData.title}
                  onChange={(e) => setUploadData({ ...uploadData, title: e.target.value })}
                  placeholder="Enter title or leave blank"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Category
                </label>
                <select
                  value={uploadData.category}
                  onChange={(e) => setUploadData({ ...uploadData, category: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="portfolio">Portfolio</option>
                  <option value="seo">SEO Services</option>
                  <option value="social-media-marketing">Social Media Marketing</option>
                  <option value="ppc-advertising">PPC Advertising</option>
                  <option value="content-marketing">Content Marketing</option>
                  <option value="creative-designing">Creative Designing</option>
                  <option value="video-production">Video Production</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                onClick={handleUpload}
                disabled={!selectedFile || uploading}
                className="w-full px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {uploading ? 'Uploading...' : 'Upload'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
