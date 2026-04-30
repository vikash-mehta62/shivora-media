import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Shivora Media",
  description: "Contact Shivora Media for expert digital marketing solutions in Bhopal.",
  keywords: ["contact digital marketing agency bhopal"],
  alternates: { canonical: "https://www.shivoramedia.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
