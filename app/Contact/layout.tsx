import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Contact MZBC Technical Services | Fit Out & Contracting Services in UAE",
  description:
    "Contact MZBC Technical Services for expert fit-out, design, and contracting services across the UAE. We’re here to discuss your project needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
