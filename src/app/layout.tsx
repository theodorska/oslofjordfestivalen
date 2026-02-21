import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Oslofjord Festival 2026 | 17. Juli - Vippetangen, Oslo",
  description:
    "Oslofjordfestivalen - Oslos nye musikkfestival for up-and-coming artister. 17. juli 2026 på Vippetangen. Opplev fremtidens musikk ved fjorden.",
  keywords: ["festival", "oslo", "musikk", "vippetangen", "konsert", "2026"],
  openGraph: {
    title: "Oslofjord Festival 2026",
    description: "Oslos nye musikkfestival. 17. juli på Vippetangen.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}
