"use client";
import { useEffect, useState } from 'react';
import { Image, Users, FileText, TrendingUp } from 'lucide-react';
import { useAppSelector } from '@/store/hooks';
import axios from 'axios';
import { API_ENDPOINTS } from '@/config/api';

interface DashboardStats {
  totalMedia: number;
  totalImages: number;
  totalVideos: number;
  recentUploads: number;
}

interface RecentActivity {
  _id: string;
  title: string;
  type: string;
  createdAt: string;
  uploadedBy?: {
    username: string;
  };
}

export default function DashboardHome() {
  const [stats, setStats] = useState<DashboardStats>({
    totalMedia: 0,
    totalImages: 0,
    totalVideos: 0,
    recentUploads: 0
  });
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    fetchDashboardData();
  }, [token]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch all media
      const response = await axios.get(API_ENDPOINTS.MEDIA.BASE, {
        headers: { Authorization: `Bearer ${token}` },
        params: { limit: 100 }
      });

      const mediaData = response.data.media || [];
      
      // Calculate stats
      const images = mediaData.filter((m: any) => m.type === 'image').length;
      const videos = mediaData.filter((m: any) => m.type === 'video').length;
      
      // Get recent uploads (last 7 days)
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      const recent = mediaData.filter((m: any) => 
        new Date(m.createdAt) > sevenDaysAgo
      ).length;

      setStats({
        totalMedia: mediaData.length,
        totalImages: images,
        totalVideos: videos,
        recentUploads: recent
      });

      // Set recent activity (last 5 items)
      setRecentActivity(mediaData.slice(0, 5));
      
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const statsCards = [
    { 
      label: 'Total Media', 
      value: stats.totalMedia, 
      icon: Image, 
      color: 'from-blue-500 to-blue-600' 
    },
    { 
      label: 'Images', 
      value: stats.totalImages, 
      icon: FileText, 
      color: 'from-purple-500 to-purple-600' 
    },
    { 
      label: 'Videos', 
      value: stats.totalVideos, 
      icon: Users, 
      color: 'from-green-500 to-green-600' 
    },
    { 
      label: 'Recent Uploads', 
      value: stats.recentUploads, 
      icon: TrendingUp, 
      color: 'from-orange-500 to-orange-600' 
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins} minutes ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-white text-lg">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-linear-to-br ${stat.color}`}>
                  <Icon className="text-white" size={24} />
                </div>
              </div>
              <h3 className="text-gray-400 text-sm mb-1">{stat.label}</h3>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
        {recentActivity.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            No recent activity. Upload some media to get started!
          </div>
        ) : (
          <div className="space-y-4">
            {recentActivity.map((item) => (
              <div key={item._id} className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-lg">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  item.type === 'image' 
                    ? 'bg-linear-to-br from-blue-500 to-purple-600' 
                    : 'bg-linear-to-br from-green-500 to-teal-600'
                }`}>
                  <Image size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">{item.title}</p>
                  <p className="text-gray-400 text-sm">
                    {item.type === 'image' ? 'Image' : 'Video'} uploaded {formatDate(item.createdAt)}
                    {item.uploadedBy && ` by ${item.uploadedBy.username}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
