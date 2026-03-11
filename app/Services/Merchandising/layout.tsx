import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Visual Merchandising & Shop Display Solutions in UAE | MZBC Technical Services",
  description:
    "MZBC Technical Services creates impactful visual merchandising and shop display solutions that enhance retail experiences. Tailored designs that drive engagement and boost sales across the UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
