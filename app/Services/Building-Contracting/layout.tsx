import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Building Contracting Services in UAE | MZBC Technical Services",
  description:
    "MZBC Technical Services offers professional building contracting services across the UAE. From groundwork to handover, we deliver high-quality construction with precision and integrity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
