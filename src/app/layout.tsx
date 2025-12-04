import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";
import "../styles/globals.css";
import { Providers } from "@/app/providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chattada – Lineage Meets Love",
  description:
    "Chattada is a private matrimony experience where lineage meets love. Verified profiles, heritage insights, and family-first matchmaking.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Chattada – Lineage Meets Love",
    description:
      "Discover a modern matrimony experience rooted in tradition. Verified profiles, Gothram, Nakshatram & heritage-first connections.",
    url: "https://example.com",
    siteName: "Chattada",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Chattada – Lineage Meets Love",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chattada – Lineage Meets Love",
    description:
      "A private community where Gothram, Nakshatram & heritage meet meaningful connections.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}


