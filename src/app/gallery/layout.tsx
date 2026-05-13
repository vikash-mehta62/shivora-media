import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Shivora Media",
  description: "Explore Shivora Media's creative work — images and videos across SEO, social media, PPC, content marketing, and more.",
  keywords: ["shivora media gallery", "digital marketing portfolio bhopal", "creative work"],
  alternates: { canonical: "https://shivoramedia.com/gallery" },
  robots: { index: true, follow: true },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
