import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ReduxProvider from "@/context/ReduxProvider";
import CustomCursor from "@/components/CustomCursor";
import ContactPopup from "@/components/ContactPopup";
import FloatingIcons from "@/components/FloatingIcons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Shivora Media | Digital Marketing Agency in Bhopal",
    template: "%s | Shivora Media"
  },
  description: "Shivora Media is a leading digital marketing agency in Bhopal offering SEO, PPC, social media marketing, content marketing and website services.",
  keywords: ["digital marketing agency in bhopal", "seo services bhopal", "social media marketing bhopal"],
  metadataBase: new URL("https://shivoramedia.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shivoramedia.com/",
    siteName: "Shivora Media",
    title: "Shivora Media | Digital Marketing Agency in Bhopal",
    description: "Shivora Media is a leading digital marketing agency in Bhopal offering SEO, PPC, social media marketing, content marketing and website services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivora Media | Digital Marketing Agency in Bhopal",
    description: "Shivora Media is a leading digital marketing agency in Bhopal offering SEO, PPC, social media marketing, content marketing and website services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ReduxProvider>
          <CustomCursor />
          <ContactPopup />
          <FloatingIcons />
          <ThemeProvider>{children}</ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
