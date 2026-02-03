"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingIcons() {
  return (
    <>
      {/* Call Icon - Left Side */}
      <a
        href="tel:+917067235788"
        className="fixed left-4 bottom-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 animate-bounce"
        aria-label="Call us"
      >
        <Phone className="w-7 h-7 text-white" />
      </a>

      {/* WhatsApp Icon - Right Side */}
      <a
        href="https://wa.me/917067235788"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      {/* Optional: Chat with us text for WhatsApp */}
      <div className="fixed right-20 bottom-6 z-50 hidden md:block">
        <div className="bg-white px-3 py-2 rounded-lg shadow-md text-sm font-medium text-gray-700 whitespace-nowrap">
          Chat with us!
        </div>
      </div>
    </>
  );
}
