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
  title: "Shivora Media | Digital Marketing Agency",
  description: "We build brands that stand out. Digital marketing, branding, web development & more.",
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
