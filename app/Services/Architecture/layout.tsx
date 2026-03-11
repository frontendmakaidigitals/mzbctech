import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Architectural Design Services in UAE | MZBC Technical Services",
  description:
    "MZBC Technical Services offers innovative architectural design solutions across the UAE. From concept development to detailed drawings, we design spaces that inspire and perform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
