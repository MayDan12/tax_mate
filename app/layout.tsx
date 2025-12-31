import type { Metadata } from "next";
import { Geist, Geist_Mono, Fira_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const _firaSans = Fira_Sans({
  weight: ["400", "600", "700"],
  variable: "--fira-sans",
});
export const metadata: Metadata = {
  title: "TaxMateNG",
  description:
    "Empowering Nigerians with clarity and tools to navigate the national tax landscape with confidence.",
  keywords: ["tax", "nigeria", "tax calculator", "tax hub"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "TaxMateNG",
    description:
      "Empowering Nigerians with clarity and tools to navigate the national tax landscape with confidence.",
    url: "https://taxmateng.vercel.app/",
    siteName: "TaxMateNG",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "TaxMateNG",
    description:
      "Empowering Nigerians with clarity and tools to navigate the national tax landscape with confidence.",
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={_firaSans.variable}>
      <body className={_firaSans.variable}>
        <Navbar />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
