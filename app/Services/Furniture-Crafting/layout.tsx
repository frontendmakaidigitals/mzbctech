import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Custom Furniture Crafting in UAE | MZBC Technical Services",
  description:
    "MZBC Technical Services specializes in custom-made furniture solutions in the UAE. From concept to creation, we deliver handcrafted pieces that blend design, comfort, and quality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
