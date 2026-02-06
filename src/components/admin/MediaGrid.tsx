"use client";
import { useState } from "react";
import { Trash2, Copy, ExternalLink, Video, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

interface MediaGridProps {
  media: any[];
  onDelete: (id: string) => void;
}

export default function MediaGrid({ media, onDelete }: MediaGridProps) {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    alert('URL copied to clipboard!');
  };

  if (media.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-12 text-center">
        <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No Media Found</h3>
        <p className="text-gray-500">Upload your first image or video to get started</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {media.map((item) => (
          <div key={item._id} className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-lg transition">
            {/* Media Preview */}
            <div className="relative aspect-video bg-gray-100">
              {item.type === 'image' ? (
                <Image
                  src={item.url}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <Video className="w-12 h-12 text-white" />
                  <video
                    src={item.url}
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    muted
                  />
                </div>
              )}
              
              {/* Overlay Actions */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                <button
                  onClick={() => setSelectedMedia(item)}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                  title="View Details"
                >
                  <ExternalLink className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={() => copyUrl(item.url)}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                  title="Copy URL"
                >
                  <Copy className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={() => onDelete(item._id)}
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition"
                  title="Delete"
                >
                  <Trash2 className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 truncate mb-1">{item.title}</h3>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="capitalize">{item.category}</span>
                <span className="text-xs">{item.type}</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                {new Date(item.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Media Detail Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedMedia(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">{selectedMedia.title}</h2>
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              {/* Media Display */}
              <div className="mb-6 rounded-lg overflow-hidden bg-gray-100">
                {selectedMedia.type === 'image' ? (
                  <img src={selectedMedia.url} alt={selectedMedia.title} className="w-full" />
                ) : (
                  <video src={selectedMedia.url} controls className="w-full" />
                )}
              </div>

              {/* Details */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">URL</label>
                  <div className="flex gap-2 mt-1">
                    <input
                      type="text"
                      value={selectedMedia.url}
                      readOnly
                      className="flex-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm"
                    />
                    <button
                      onClick={() => copyUrl(selectedMedia.url)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Type</label>
                    <p className="mt-1 capitalize">{selectedMedia.type}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Category</label>
                    <p className="mt-1 capitalize">{selectedMedia.category}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Format</label>
                    <p className="mt-1 uppercase">{selectedMedia.format}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Size</label>
                    <p className="mt-1">{(selectedMedia.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">Public ID</label>
                  <p className="mt-1 text-sm text-gray-700 font-mono bg-gray-50 p-2 rounded">{selectedMedia.publicId}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">Uploaded</label>
                  <p className="mt-1">{new Date(selectedMedia.createdAt).toLocaleString()}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => window.open(selectedMedia.url, '_blank')}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Open in New Tab
                </button>
                <button
                  onClick={() => {
                    onDelete(selectedMedia._id);
                    setSelectedMedia(null);
                  }}
                  className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
