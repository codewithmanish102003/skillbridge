import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Skill Bridge - Bridge The Gap In Your Skills",
  description: "Empowering learners worldwide with cutting-edge courses and expert-led training. Bridge the gap between your current skills and your dream career with our comprehensive learning platform.",
  keywords: "online learning, skill development, courses, training, education, career growth, professional development",
  authors: [{ name: "Skill Bridge Team" }],
  creator: "Skill Bridge",
  publisher: "Skill Bridge",
  openGraph: {
    title: "Skill Bridge - Bridge The Gap In Your Skills",
    description: "Empowering learners worldwide with cutting-edge courses and expert-led training.",
    url: "https://skillbridge.com",
    siteName: "Skill Bridge",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Skill Bridge - Online Learning Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skill Bridge - Bridge The Gap In Your Skills",
    description: "Empowering learners worldwide with cutting-edge courses and expert-led training.",
    images: ["/twitter-image.jpg"],
    creator: "@skillbridge",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
