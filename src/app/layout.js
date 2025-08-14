import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import SocialMediaIcons from "@/components/Socials";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Kundan Kumar - Full Stack Developer Portfolio",
  description: "Full-stack developer skilled in MERN stack, Next.js, and AWS. View my projects, skills, and achievements.",
  keywords: "Full Stack Developer, MERN Stack, Next.js, React, Node.js, AWS, Portfolio",
  authors: [{ name: "Kundan Kumar" }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SocialMediaIcons />
        <Navbar />
        <div className="relative">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
