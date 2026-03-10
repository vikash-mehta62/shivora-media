'use client';

import { useState, useEffect, useRef } from 'react';
import { BookOpen, Plus, Edit, Trash2, Eye, Search, X, Save, Image as ImageIcon, Tag, Hash, FileText, Globe, Upload, Loader } from 'lucide-react';
import { useAppSelector } from '@/store/hooks';
import { API_ENDPOINTS } from '@/config/api';
import axios from 'axios';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  author: { name: string; avatar?: string };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    focusKeyword: string;
    ogImage?: string;
    canonicalUrl?: string;
  };
  tags: string[];
  readTime: number;
  status: 'draft' | 'published' | 'archived';
  publishedAt?: string;
  views: number;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

const categories = ['SEO', 'Social Media', 'PPC', 'Content Marketing', 'Branding', 'Web Development', 'Other'];

export default function BlogManager() {
  const { token } = useAppSelector((state) => state.auth);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterStatus, setFilterStatus] = useState('all');
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingOgImage, setUploadingOgImage] = useState(false);
  const featuredImageRef = useRef<HTMLInputElement>(null);
  const ogImageRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featuredImage: '',
    category: 'SEO',
    author: { name: '', avatar: '' },
    seo: {
      metaTitle: '',
      metaDescription: '',
      keywords: [] as string[],
      focusKeyword: '',
      ogImage: '',
      canonicalUrl: ''
    },
    tags: [] as string[],
    status: 'draft' as 'draft' | 'published' | 'archived',
    featured: false
  });

  const [keywordInput, setKeywordInput] = useState('');
  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    if (token) {
      fetchBlogs();
    }
  }, [filterCategory, filterStatus, token]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      
      if (filterCategory !== 'All') params.append('category', filterCategory);
      if (filterStatus !== 'all') params.append('status', filterStatus);
      
      const response = await fetch(`${API_ENDPOINTS.BLOG.BASE}?${params}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      
      const data = await response.json();
      setBlogs(data.blogs || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (file: File, type: 'featured' | 'og') => {
    try {
      if (type === 'featured') setUploadingImage(true);
      else setUploadingOgImage(true);

      const formDataToUpload = new FormData();
      formDataToUpload.append('file', file);
      formDataToUpload.append('title', `Blog ${type} image`);
      formDataToUpload.append('category', 'blog');

      const response = await axios.post(API_ENDPOINTS.MEDIA.UPLOAD, formDataToUpload, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      const imageUrl = response.data.media.url;
      
      if (type === 'featured') {
        setFormData(prev => ({ ...prev, featuredImage: imageUrl }));
      } else {
        setFormData(prev => ({ 
          ...prev, 
          seo: { ...prev.seo, ogImage: imageUrl }
        }));
      }
    } catch (error: any) {
      console.error('Error uploading image:', error);
      alert(error.response?.data?.error || 'Failed to upload image');
    } finally {
      if (type === 'featured') setUploadingImage(false);
      else setUploadingOgImage(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'featured' | 'og') => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }
      uploadImage(file, type);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.featuredImage) {
      alert('Please upload a featured image');
      return;
    }

    try {
      const url = editingBlog 
        ? API_ENDPOINTS.BLOG.BY_ID(editingBlog._id)
        : API_ENDPOINTS.BLOG.BASE;
      
      const response = await fetch(url, {
        method: editingBlog ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert(editingBlog ? 'Blog updated successfully!' : 'Blog created successfully!');
        resetForm();
        fetchBlogs();
      } else {
        const error = await response.json();
        alert(error.message || 'Failed to save blog');
      }
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('Failed to save blog');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;
    
    try {
      const response = await fetch(API_ENDPOINTS.BLOG.DELETE(id), {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        alert('Blog deleted successfully!');
        fetchBlogs();
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Failed to delete blog');
    }
  };

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt,
      content: blog.content,
      featuredImage: blog.featuredImage,
      category: blog.category,
      author: { 
        name: blog.author.name, 
        avatar: blog.author.avatar || '' 
      },
      seo: {
        metaTitle: blog.seo.metaTitle,
        metaDescription: blog.seo.metaDescription,
        keywords: blog.seo.keywords,
        focusKeyword: blog.seo.focusKeyword,
        ogImage: blog.seo.ogImage || '',
        canonicalUrl: blog.seo.canonicalUrl || ''
      },
      tags: blog.tags,
      status: blog.status,
      featured: blog.featured
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      featuredImage: '',
      category: 'SEO',
      author: { name: '', avatar: '' },
      seo: {
        metaTitle: '',
        metaDescription: '',
        keywords: [],
        focusKeyword: '',
        ogImage: '',
        canonicalUrl: ''
      },
      tags: [],
      status: 'draft',
      featured: false
    });
    setEditingBlog(null);
    setShowForm(false);
    setKeywordInput('');
    setTagInput('');
  };

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  };

  const addKeyword = () => {
    if (keywordInput.trim() && !formData.seo.keywords.includes(keywordInput.trim())) {
      setFormData({
        ...formData,
        seo: { ...formData.seo, keywords: [...formData.seo.keywords, keywordInput.trim()] }
      });
      setKeywordInput('');
    }
  };

  const removeKeyword = (keyword: string) => {
    setFormData({
      ...formData,
      seo: { ...formData.seo, keywords: formData.seo.keywords.filter(k => k !== keyword) }
    });
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({ ...formData, tags: [...formData.tags, tagInput.trim()] });
      setTagInput('');
    }
  };

  const removeTag = (tag: string) => {
    setFormData({ ...formData, tags: formData.tags.filter(t => t !== tag) });
  };

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
            <BookOpen className="w-6 h-6" />
            Blog Manager
          </h2>
          <p className="text-gray-400 mt-1">Create and manage blog posts with SEO optimization</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <Plus className="w-4 h-4" />
          New Blog Post
        </button>
      </div>

      {!showForm ? (
        <>
          {/* Filters */}
          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search blogs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>

          {/* Blog List */}
          {loading ? (
            <div className="text-center py-12">
              <Loader className="w-12 h-12 text-blue-500 animate-spin mx-auto" />
              <p className="text-gray-400 mt-4">Loading blogs...</p>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="bg-gray-800 rounded-lg p-12 text-center">
              <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No blogs found. Create your first blog post!</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredBlogs.map((blog) => (
                <div key={blog._id} className="bg-gray-800 rounded-lg p-4 sm:p-6 hover:bg-gray-750 transition">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <img
                      src={blog.featuredImage}
                      alt={blog.title}
                      className="w-full sm:w-32 h-32 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-2">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">{blog.title}</h3>
                          <p className="text-sm text-gray-400 line-clamp-2">{blog.excerpt}</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(blog)}
                            className="p-2 hover:bg-blue-600 rounded-lg transition text-blue-400 hover:text-white"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(blog._id)}
                            className="p-2 hover:bg-red-600 rounded-lg transition text-red-400 hover:text-white"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          blog.status === 'published' ? 'bg-green-600 text-white' :
                          blog.status === 'draft' ? 'bg-yellow-600 text-white' :
                          'bg-gray-600 text-white'
                        }`}>
                          {blog.status}
                        </span>
                        <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium">
                          {blog.category}
                        </span>
                        <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-xs font-medium flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {blog.views}
                        </span>
                        {blog.featured && (
                          <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-xs font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        /* Blog Form Modal */
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-700 bg-gray-800">
              <h3 className="text-2xl font-bold text-white">
                {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h3>
              <button 
                onClick={resetForm} 
                type="button"
                className="p-2 hover:bg-gray-700 rounded-lg text-gray-400 hover:text-white transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="overflow-y-auto max-h-[calc(90vh-180px)] p-6">
              <form onSubmit={handleSubmit} className="space-y-6" id="blog-form">
            {/* Basic Info */}
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2 text-white text-lg border-b border-gray-700 pb-2">
                <FileText className="w-5 h-5" />
                Basic Information
              </h4>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => {
                    setFormData({ ...formData, title: e.target.value });
                    if (!editingBlog) {
                      setFormData(prev => ({ ...prev, slug: generateSlug(e.target.value) }));
                    }
                  }}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter blog title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Slug *</label>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="blog-post-url"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Excerpt * (Max 300 chars)</label>
                <textarea
                  required
                  maxLength={300}
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Brief description of the blog post"
                />
                <p className="text-xs text-gray-400 mt-1">{formData.excerpt.length}/300</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Content *</label>
                <textarea
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={12}
                  placeholder="Write your blog content here..."
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Category *</label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Status *</label>
                  <select
                    required
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>

              {/* Featured Image Upload */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Featured Image *</label>
                <input
                  type="file"
                  ref={featuredImageRef}
                  onChange={(e) => handleImageChange(e, 'featured')}
                  accept="image/*"
                  className="hidden"
                />
                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => featuredImageRef.current?.click()}
                    disabled={uploadingImage}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {uploadingImage ? (
                      <>
                        <Loader className="w-4 h-4 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4" />
                        Upload Featured Image
                      </>
                    )}
                  </button>
                  {formData.featuredImage && (
                    <div className="relative">
                      <img
                        src={formData.featuredImage}
                        alt="Featured"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, featuredImage: '' })}
                        className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Author Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.author.name}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      author: { ...formData.author, name: e.target.value }
                    })}
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Author Avatar URL</label>
                  <input
                    type="url"
                    value={formData.author.avatar}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      author: { ...formData.author, avatar: e.target.value }
                    })}
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://example.com/avatar.jpg"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="featured" className="text-sm font-medium text-gray-300">Mark as Featured</label>
              </div>
            </div>

            {/* SEO Section */}
            <div className="space-y-4 border-t border-gray-700 pt-6">
              <h4 className="font-semibold flex items-center gap-2 text-white text-lg border-b border-gray-700 pb-2">
                <Globe className="w-5 h-5" />
                SEO Optimization
              </h4>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Meta Title * (Max 60 chars)</label>
                <input
                  type="text"
                  required
                  maxLength={60}
                  value={formData.seo.metaTitle}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    seo: { ...formData.seo, metaTitle: e.target.value }
                  })}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="SEO optimized title"
                />
                <p className="text-xs text-gray-400 mt-1">{formData.seo.metaTitle.length}/60</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Meta Description * (Max 160 chars)</label>
                <textarea
                  required
                  maxLength={160}
                  value={formData.seo.metaDescription}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    seo: { ...formData.seo, metaDescription: e.target.value }
                  })}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="SEO meta description"
                />
                <p className="text-xs text-gray-400 mt-1">{formData.seo.metaDescription.length}/160</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Focus Keyword</label>
                <input
                  type="text"
                  value={formData.seo.focusKeyword}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    seo: { ...formData.seo, focusKeyword: e.target.value }
                  })}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Main SEO keyword"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">SEO Keywords</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={keywordInput}
                    onChange={(e) => setKeywordInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addKeyword())}
                    className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add keyword and press Enter"
                  />
                  <button
                    type="button"
                    onClick={addKeyword}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.seo.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm flex items-center gap-2"
                    >
                      {keyword}
                      <button
                        type="button"
                        onClick={() => removeKeyword(keyword)}
                        className="hover:text-blue-200"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* OG Image Upload */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">OG Image (Social Sharing)</label>
                <input
                  type="file"
                  ref={ogImageRef}
                  onChange={(e) => handleImageChange(e, 'og')}
                  accept="image/*"
                  className="hidden"
                />
                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => ogImageRef.current?.click()}
                    disabled={uploadingOgImage}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {uploadingOgImage ? (
                      <>
                        <Loader className="w-4 h-4 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4" />
                        Upload OG Image
                      </>
                    )}
                  </button>
                  {formData.seo.ogImage && (
                    <div className="relative">
                      <img
                        src={formData.seo.ogImage}
                        alt="OG"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => setFormData({ 
                          ...formData, 
                          seo: { ...formData.seo, ogImage: '' }
                        })}
                        className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Canonical URL</label>
                <input
                  type="url"
                  value={formData.seo.canonicalUrl}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    seo: { ...formData.seo, canonicalUrl: e.target.value }
                  })}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com/canonical-url"
                />
              </div>
            </div>

            {/* Tags Section */}
            <div className="space-y-4 border-t border-gray-700 pt-6">
              <h4 className="font-semibold flex items-center gap-2 text-white text-lg border-b border-gray-700 pb-2">
                <Tag className="w-5 h-5" />
                Tags
              </h4>

              <div>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add tag and press Enter"
                  />
                  <button
                    type="button"
                    onClick={addTag}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm flex items-center gap-2"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="hover:text-purple-200"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

              </form>
            </div>

            {/* Modal Footer - Sticky */}
            <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-gray-700 bg-gray-800">
              <button
                type="submit"
                form="blog-form"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition shadow-lg"
              >
                <Save className="w-5 h-5" />
                {editingBlog ? 'Update Blog' : 'Create Blog'}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-3 border-2 border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
