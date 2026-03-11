import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Fit Out & Refurbishment Services in UAE | MZBC Technical Services",
  description:
    "MZBC Technical Services delivers turnkey fit out and refurbishment solutions across the UAE. We revamp commercial and residential spaces with precision, style, and efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
