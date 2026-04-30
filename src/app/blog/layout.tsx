import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Shivora Media",
  description: "Read the latest digital marketing insights, tips and strategies from Shivora Media experts.",
  keywords: ["digital marketing blog bhopal", "seo tips", "marketing strategies"],
  alternates: { canonical: "https://www.shivoramedia.com/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
