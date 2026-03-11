import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Retail Turnkey Solutions in UAE | MZBC Technical Services",
  description:
    "MZBC Technical Services provides end-to-end retail turnkey solutions across the UAE. From concept, design, fit out, to final handover – we create retail spaces that perform and impress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
