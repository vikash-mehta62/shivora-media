import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Shivora Media",
  description: "View our portfolio showcasing successful digital marketing campaigns and client projects.",
  keywords: ["digital marketing portfolio bhopal", "case studies"],
  alternates: { canonical: "https://shivoramedia.com/portfolio" },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
