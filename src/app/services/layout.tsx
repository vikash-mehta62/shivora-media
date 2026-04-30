import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Shivora Media",
  description: "Explore all digital marketing services offered by Shivora Media including SEO, PPC, SMM, content and design.",
  keywords: ["digital marketing services bhopal", "seo ppc smm services"],
  alternates: { canonical: "https://www.shivoramedia.com/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
